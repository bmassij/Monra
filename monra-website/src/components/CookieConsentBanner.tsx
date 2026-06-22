'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  readCookieConsent,
  saveCookieConsent,
} from '@/lib/cookie-consent'

type View = 'banner' | 'settings'

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false)
  const [view, setView] = useState<View>('banner')
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    const sync = () => {
      const existing = readCookieConsent()
      if (existing) {
        setAnalytics(existing.analytics)
        setMarketing(existing.marketing)
        setVisible(false)
      } else {
        setVisible(true)
      }
    }
    sync()
    const onReopen = () => {
      const existing = readCookieConsent()
      setAnalytics(existing?.analytics ?? false)
      setMarketing(existing?.marketing ?? false)
      setView('settings')
      setVisible(true)
    }
    window.addEventListener('monra-cookie-reopen', onReopen)
    return () => window.removeEventListener('monra-cookie-reopen', onReopen)
  }, [])

  const applyConsent = (a: boolean, m: boolean) => {
    saveCookieConsent(a, m)
    setVisible(false)
    setView('banner')
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] p-4 md:p-6 print:hidden"
      role="dialog"
      aria-labelledby="cookie-banner-title"
    >
      <div className="mx-auto max-w-3xl rounded-xl border-2 border-[#11CFE7]/30 bg-[#0a1540] p-5 md:p-6 shadow-2xl shadow-black/40">
        {view === 'banner' ? (
          <>
            <h2 id="cookie-banner-title" className="text-lg font-bold text-white mb-2">
              Cookies &amp; privacy
            </h2>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Wij gebruiken noodzakelijke cookies om de website te laten werken. Optioneel kunt u
              analytics- en marketingcookies toestaan. Lees meer in ons{' '}
              <Link href="/privacy" className="text-[#11CFE7] underline hover:text-[#4DDFF3]">
                privacybeleid
              </Link>{' '}
              en ons{' '}
              <Link href="/cookies" className="text-[#11CFE7] underline hover:text-[#4DDFF3]">
                cookiebeleid
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => applyConsent(true, true)}
                className="rounded-md bg-[#11CFE7] px-4 py-2 text-sm font-bold text-[#1A2B6D] hover:bg-[#4DDFF3] transition-colors"
              >
                Alles accepteren
              </button>
              <button
                type="button"
                onClick={() => applyConsent(false, false)}
                className="rounded-md border border-white/25 px-4 py-2 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
              >
                Alleen noodzakelijk
              </button>
              <button
                type="button"
                onClick={() => setView('settings')}
                className="rounded-md border border-[#11CFE7]/40 px-4 py-2 text-sm font-semibold text-[#11CFE7] hover:bg-[#11CFE7]/10 transition-colors"
              >
                Instellingen
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-lg font-bold text-white mb-4">Cookie-instellingen</h2>
            <div className="space-y-4 mb-5">
              <CategoryRow
                title="Noodzakelijk"
                description="Essentieel voor werking, beveiliging en voorkeuren (o.a. cookiekeuze)."
                checked
                disabled
              />
              <CategoryRow
                title="Analytics"
                description="Helpt ons anoniem te meten hoe de site wordt gebruikt. (Nog niet actief — voorbereid voor later.)"
                checked={analytics}
                onChange={setAnalytics}
              />
              <CategoryRow
                title="Marketing"
                description="Voor gepersonaliseerde content of advertenties. (Nog niet actief — voorbereid voor later.)"
                checked={marketing}
                onChange={setMarketing}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => applyConsent(analytics, marketing)}
                className="rounded-md bg-[#11CFE7] px-4 py-2 text-sm font-bold text-[#1A2B6D] hover:bg-[#4DDFF3] transition-colors"
              >
                Voorkeuren opslaan
              </button>
              <button
                type="button"
                onClick={() => setView('banner')}
                className="rounded-md border border-white/25 px-4 py-2 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
              >
                Terug
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function CategoryRow({
  title,
  description,
  checked,
  disabled,
  onChange,
}: {
  title: string
  description: string
  checked: boolean
  disabled?: boolean
  onChange?: (v: boolean) => void
}) {
  return (
    <label className="flex gap-3 items-start cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={e => onChange?.(e.target.checked)}
        className="mt-1 h-4 w-4 accent-[#11CFE7] disabled:opacity-60"
      />
      <span>
        <span className="block text-sm font-bold text-white">{title}</span>
        <span className="block text-xs text-white/55 leading-relaxed mt-0.5">{description}</span>
      </span>
    </label>
  )
}
