'use client'

import type { ReactNode } from 'react'
import type { MonraSite } from '@/lib/monra-chat'
import { getSiteTheme } from '@/lib/monra-chat'

type ChatMessageBodyProps = {
  text: string
  site: MonraSite
  role: 'user' | 'bot'
}

const BRAND_NAMES = [
  'Monra Events Security',
  'Monra Security',
  'Monra Support',
  'Monra Belgium',
  'Monra Groep',
  'Monra-groep',
  'Monra',
] as const

const BRAND_COLORS: Record<string, string> = {
  'Monra Security': '#1A2B6D',
  'Monra Support': '#2a8a2a',
  'Monra Events Security': '#DC2626',
  'Monra Belgium': '#1A2B6D',
  'Monra Groep': '#1A2B6D',
  'Monra-groep': '#1A2B6D',
  Monra: '#1A2B6D',
}

function isBulletLine(line: string): boolean {
  return /^(\s*)([•\-\*]|🛡️|🤝|✨|📞|✉️|📍|→)\s*/.test(line)
}

function stripBullet(line: string): string {
  return line.replace(/^(\s*)([•\-\*]|🛡️|🤝|✨|📞|✉️|📍|→)\s*/, '')
}

function formatInline(text: string, accent: string, primary: string): ReactNode[] {
  const nodes: ReactNode[] = []
  let remaining = text
  let key = 0

  while (remaining.length > 0) {
    let matched = false

    for (const brand of BRAND_NAMES) {
      const idx = remaining.indexOf(brand)
      if (idx === 0) {
        nodes.push(
          <span
            key={key++}
            className="font-bold tracking-wide"
            style={{ color: BRAND_COLORS[brand] ?? primary }}
          >
            {brand}
          </span>,
        )
        remaining = remaining.slice(brand.length)
        matched = true
        break
      }
    }
    if (matched) continue

    const boldMatch = remaining.match(/^\*\*(.+?)\*\*/)
    if (boldMatch) {
      nodes.push(
        <span key={key++} className="font-bold uppercase tracking-wide" style={{ color: accent }}>
          {boldMatch[1]}
        </span>,
      )
      remaining = remaining.slice(boldMatch[0].length)
      continue
    }

    const emailMatch = remaining.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)
    if (emailMatch) {
      const email = emailMatch[0]
      nodes.push(
        <a
          key={key++}
          href={`mailto:${email}`}
          className="font-semibold underline underline-offset-2"
          style={{ color: accent }}
        >
          {email}
        </a>,
      )
      remaining = remaining.slice(email.length)
      continue
    }

    const phoneMatch = remaining.match(/^\+?\d[\d\s().\-/]{8,}\d/)
    if (phoneMatch) {
      const phone = phoneMatch[0].trim()
      nodes.push(
        <a
          key={key++}
          href={`tel:${phone.replace(/\s/g, '')}`}
          className="font-semibold"
          style={{ color: accent }}
        >
          {phone}
        </a>,
      )
      remaining = remaining.slice(phoneMatch[0].length)
      continue
    }

    const capsMatch = remaining.match(/^[A-ZÀ-ÖØ-Þ][A-ZÀ-ÖØ-Þ0-9+\-/]{1,}(?:\s+[A-ZÀ-ÖØ-Þ0-9+\-/]+)*/)
    if (capsMatch && capsMatch[0].length >= 2 && /[A-ZÀ-ÖØ-Þ]{2,}/.test(capsMatch[0])) {
      nodes.push(
        <span key={key++} className="font-bold uppercase tracking-wide" style={{ color: accent }}>
          {capsMatch[0]}
        </span>,
      )
      remaining = remaining.slice(capsMatch[0].length)
      continue
    }

    const nextSpecial = remaining.slice(1).search(
      /(\*\*|Monra Events Security|Monra Security|Monra Support|Monra Groep|Monra-groep|Monra|[A-ZÀ-ÖØ-Þ]{2,}|[a-zA-Z0-9._%+-]+@)/,
    )
    const end = nextSpecial === -1 ? remaining.length : nextSpecial + 1
    nodes.push(<span key={key++}>{remaining.slice(0, end)}</span>)
    remaining = remaining.slice(end)
  }

  return nodes
}

export function ChatMessageBody({ text, site, role }: ChatMessageBodyProps) {
  const theme = getSiteTheme(site)
  const accent = theme.accent
  const primary = theme.primary

  if (role === 'user') {
    return <span className="text-white">{text}</span>
  }

  const lines = text.split('\n')
  const blocks: ReactNode[] = []
  let listItems: string[] = []
  let key = 0

  const flushList = () => {
    if (listItems.length === 0) return
    blocks.push(
      <ul key={key++} className="space-y-1.5 my-2">
        {listItems.map((item, i) => (
          <li key={i} className="flex gap-2 items-start text-[13px] leading-snug">
            <span
              className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: accent }}
            />
            <span className="text-slate-600">{formatInline(item, accent, primary)}</span>
          </li>
        ))}
      </ul>,
    )
    listItems = []
  }

  for (const rawLine of lines) {
    const line = rawLine.trimEnd()
    if (!line.trim()) {
      flushList()
      continue
    }

    if (isBulletLine(line)) {
      listItems.push(stripBullet(line))
      continue
    }

    flushList()

    const trimmed = line.trim()
    const isHeading =
      trimmed.length >= 3 &&
      trimmed.length <= 60 &&
      trimmed === trimmed.toUpperCase() &&
      /[A-ZÀ-ÖØ-Þ]/.test(trimmed) &&
      !trimmed.includes('@')

    if (isHeading) {
      blocks.push(
        <p
          key={key++}
          className="text-[11px] font-black uppercase tracking-[0.12em] mb-1 mt-2 first:mt-0"
          style={{ color: primary }}
        >
          {trimmed}
        </p>,
      )
      continue
    }

    blocks.push(
      <p key={key++} className="text-[13px] leading-relaxed text-slate-600 mb-1.5 last:mb-0">
        {formatInline(line, accent, primary)}
      </p>,
    )
  }
  flushList()

  return <div className="space-y-0.5">{blocks}</div>
}
