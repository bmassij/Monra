'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Menu, X } from 'lucide-react'
import { BRAND_LOGOS } from '@/lib/brand-logos'
import { FAMILIE_TOP_SECURITY } from '@/lib/subsite-nav'

export type HeaderLayoutVariant = 'huidig' | 'logo-boven' | 'alles-blauw'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Diensten', href: '#diensten' },
  { label: "Foto's", href: '#fotos' },
  { label: 'Over ons', href: '#over-ons' },
  { label: 'Opleiding', href: '#opleiding' },
  { label: 'Contact', href: '#contact' },
  { label: 'Monra Groep', href: '/groep' },
]

const VARIANTS: { id: HeaderLayoutVariant; label: string; desc: string }[] = [
  {
    id: 'huidig',
    label: 'Origineel',
    desc: 'Tekst + schild in blauwe balk, logo in witte navbar',
  },
  {
    id: 'logo-boven',
    label: 'Logo boven (live)',
    desc: 'Wit logo in blauwe balk, navbar zonder logo — huidige productie',
  },
  {
    id: 'alles-blauw',
    label: 'Alles in blauw',
    desc: 'Logo + navigatie + familie-pills allemaal in één blauwe balk',
  },
]

function FamiliePills({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex flex-wrap ${compact ? 'gap-1.5' : 'gap-2 md:gap-3'}`}>
      {FAMILIE_TOP_SECURITY.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className={`font-semibold text-white/70 border-2 border-white/20 rounded-full hover:bg-white/5 transition-all ${link.hoverClass} ${
            compact ? 'text-xs px-2.5 py-1' : 'text-sm px-4 py-2'
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}

function NavLinks({
  variant,
  onNavigate,
}: {
  variant: 'white' | 'blue'
  onNavigate?: () => void
}) {
  const base =
    variant === 'white'
      ? 'text-xs font-bold text-[#1A2B6D] hover:text-[#11CFE7] tracking-widest uppercase border-b-2 border-transparent hover:border-[#11CFE7] pb-0.5'
      : 'text-xs font-bold text-white/75 hover:text-[#11CFE7] tracking-widest uppercase'

  return (
    <>
      {NAV_LINKS.map(l => (
        <a key={l.href} href={l.href} onClick={onNavigate} className={base}>
          {l.label}
        </a>
      ))}
    </>
  )
}

function HeaderPreview({ variant }: { variant: HeaderLayoutVariant }) {
  const [open, setOpen] = useState(false)

  if (variant === 'huidig') {
    return (
      <div className="border border-[#1A2B6D]/20 rounded-xl overflow-hidden shadow-xl">
        <div className="bg-[#0a1540] border-b-2 border-[#11CFE7]/30 px-4 md:px-6 py-3 flex justify-between items-center flex-wrap gap-2">
          <span className="text-sm text-white/60">
            🛡️ <strong className="text-white font-bold">Monra Security</strong>
            <span className="hidden sm:inline text-white/45"> — professionele evenementenbeveiliging</span>
          </span>
          <FamiliePills compact />
        </div>
        <nav className="bg-white border-b border-[#1A2B6D]/20">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
            <a href="#home">
              <Image src={BRAND_LOGOS.security} alt="Monra Security" width={120} height={46} className="h-10 w-auto" />
            </a>
            <div className="hidden lg:flex items-center gap-6">
              <NavLinks variant="white" />
            </div>
            <div className="hidden md:flex items-center gap-3">
              <a href="tel:+31645398678" className="flex items-center gap-1.5 text-sm text-[#1A2B6D] font-semibold">
                <Phone size={14} /> +31 6 45398678
              </a>
              <a href="#contact" className="bg-[#1A2B6D] text-white text-sm font-bold px-4 py-2 rounded hover:bg-[#11CFE7] hover:text-[#1A2B6D] transition-all">
                Offerte aanvragen
              </a>
            </div>
            <button className="lg:hidden text-[#1A2B6D]" onClick={() => setOpen(!open)}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>
    )
  }

  if (variant === 'logo-boven') {
    return (
      <div className="border border-[#1A2B6D]/20 rounded-xl overflow-hidden shadow-xl">
        <div className="bg-[#0a1540] border-b-2 border-[#11CFE7]/30 px-4 md:px-6 py-3 flex justify-between items-center flex-wrap gap-3">
          <Image
            src={BRAND_LOGOS.security}
            alt="Monra Security"
            width={180}
            height={70}
            className="h-11 md:h-14 w-auto brightness-0 invert"
          />
          <FamiliePills />
        </div>
        <nav className="bg-white border-b border-[#1A2B6D]/20">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
            <div className="hidden lg:flex items-center gap-6">
              <NavLinks variant="white" />
            </div>
            <div className="hidden md:flex items-center gap-3 ml-auto">
              <a href="tel:+31645398678" className="flex items-center gap-1.5 text-sm text-[#1A2B6D] font-semibold">
                <Phone size={14} /> +31 6 45398678
              </a>
              <a href="#contact" className="bg-[#1A2B6D] text-white text-sm font-bold px-4 py-2 rounded hover:bg-[#11CFE7] hover:text-[#1A2B6D] transition-all">
                Offerte aanvragen
              </a>
            </div>
            <button className="lg:hidden text-[#1A2B6D]" onClick={() => setOpen(!open)}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>
    )
  }

  // alles-blauw
  return (
    <div className="border border-[#11CFE7]/30 rounded-xl overflow-hidden shadow-xl">
      <div className="bg-[#0a1540]">
        <div className="px-4 md:px-6 py-2.5 flex justify-between items-center flex-wrap gap-2 border-b border-white/10">
          <FamiliePills compact />
        </div>
        <div className="px-4 md:px-6 py-3 flex items-center justify-between gap-4 flex-wrap">
          <Image
            src={BRAND_LOGOS.security}
            alt="Monra Security"
            width={180}
            height={70}
            className="h-11 md:h-14 w-auto brightness-0 invert flex-shrink-0"
          />
          <div className="hidden xl:flex items-center gap-5 flex-1 justify-center">
            <NavLinks variant="blue" />
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+31645398678" className="hidden sm:flex items-center gap-1.5 text-sm text-white/80 font-semibold hover:text-[#11CFE7]">
              <Phone size={14} /> +31 6 45398678
            </a>
            <a href="#contact" className="bg-[#11CFE7] text-[#0a1540] text-sm font-bold px-4 py-2 rounded hover:bg-white transition-all whitespace-nowrap">
              Offerte aanvragen
            </a>
            <button className="xl:hidden text-white" onClick={() => setOpen(!open)}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeaderLayoutPreview() {
  const [variant, setVariant] = useState<HeaderLayoutVariant>('logo-boven')

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {VARIANTS.map(v => (
          <button
            key={v.id}
            onClick={() => setVariant(v.id)}
            className={`text-left rounded-xl px-5 py-4 border-2 transition-all max-w-xs ${
              variant === v.id
                ? 'border-[#11CFE7] bg-[#1A2B6D] text-white shadow-lg'
                : 'border-[#1A2B6D]/20 bg-white text-[#1A2B6D] hover:border-[#11CFE7]/50'
            }`}
          >
            <div className="font-black text-sm uppercase tracking-wide mb-1">{v.label}</div>
            <div className={`text-xs leading-relaxed ${variant === v.id ? 'text-white/70' : 'text-[#1A2B6D]/60'}`}>
              {v.desc}
            </div>
          </button>
        ))}
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-[#1A2B6D]/50 mb-3">
          Preview — {VARIANTS.find(v => v.id === variant)?.label}
        </p>
        <HeaderPreview variant={variant} />
      </div>

      {/* Mini hero om scroll-gevoel te simuleren */}
      <div className="relative rounded-xl overflow-hidden h-64 bg-[#1A2B6D] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center px-6">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
            VEILIGHEID IS <span className="text-[#11CFE7]">GEEN</span> TOEVAL
          </h2>
          <p className="text-white/70 text-sm max-w-md mx-auto">
            Zo ziet de header eruit boven de hero-sectie — scroll niet nodig op deze testpagina.
          </p>
        </div>
      </div>

      <div className="bg-[#11CFE7]/10 border border-[#11CFE7]/30 rounded-xl p-5 text-sm text-[#1A2B6D]">
        <strong>Tip:</strong> variant <em>Logo boven</em> staat live op de homepage.
        Variant <em>Alles in blauw</em> is alleen hier te bekijken — laat weten of we die willen doorvoeren.
      </div>
    </div>
  )
}
