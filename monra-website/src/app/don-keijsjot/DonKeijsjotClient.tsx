'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Phone, MapPin, Clock, Mail, ExternalLink } from 'lucide-react'
import { MonraChat } from '@/components/MonraChat'
import { FamilieTopBanner, FAMILIE_BANNER_OFFSET } from '@/components/FamilieTopBanner'
import { getFamilieTopKeijsjot } from '@/lib/subsite-nav'

const KEIJSJOT = {
  naam: 'Don Keijsjot',
  tagline: 'Feestcafé in het hart van Maasbracht',
  adres: 'Molenweg 1',
  postcode: '6051 HG Maasbracht',
  telefoon: '0475 461 801',
  telefoonLink: 'tel:+31475461801',
  website: 'http://www.donkiesjot.nl/',
  openingstijden: [
    { dag: 'Maandag', tijd: '14:00 – 23:00' },
    { dag: 'Dinsdag', tijd: 'Gesloten (wordt aangevuld)' },
    { dag: 'Woensdag', tijd: 'Wordt aangevuld' },
    { dag: 'Donderdag', tijd: '19:00 – 02:00' },
    { dag: 'Vrijdag', tijd: '19:00 – 02:00' },
    { dag: 'Zaterdag', tijd: '16:00 – 02:00' },
    { dag: 'Zondag', tijd: '19:00 – 02:00' },
  ],
  omschrijving:
    'Op zoek naar gezelligheid onder het genot van een drankje en lekkere muziek? Café Don Keijsjot is al jarenlang een vertrouwde plek in Maasbracht — een leuke kroeg met feestjes en altijd gezelligheid.',
}

export default function DonKeijsjotClient() {
  const [scrolled, setScrolled] = useState(false)
  const familieLinks = getFamilieTopKeijsjot()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="min-h-screen bg-[#faf6f0] text-[#3d2914]">
      <FamilieTopBanner
        links={familieLinks}
        icon="🍺"
        siteName={KEIJSJOT.naam}
        tagline="Maasbracht"
      />

      <nav
        className={`fixed ${FAMILIE_BANNER_OFFSET} left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#faf6f0]/95 backdrop-blur-md border-b-2 border-[#8B4513]/30 shadow-md'
            : 'bg-[#faf6f0] border-b border-[#8B4513]/15'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <span className="font-black text-[#8B4513] text-lg">{KEIJSJOT.naam}</span>
          <div className="hidden md:flex gap-6 text-sm font-semibold text-[#5c4033]">
            <a href="#over" className="hover:text-[#c45c26]">Over ons</a>
            <a href="#openingstijden" className="hover:text-[#c45c26]">Openingstijden</a>
            <a href="#contact" className="hover:text-[#c45c26]">Contact</a>
            <Link href="/groep" className="hover:text-[#c45c26]">Monra Groep</Link>
          </div>
          <a
            href={KEIJSJOT.telefoonLink}
            className="md:hidden bg-[#c45c26] text-white text-sm font-bold px-3 py-1.5 rounded-md"
          >
            Bel
          </a>
        </div>
      </nav>

      <section
        id="home"
        className="pt-[140px] pb-16 px-6 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #4a2c17 0%, #8B4513 45%, #c45c26 100%)' }}
      >
        <div className="max-w-3xl mx-auto text-center relative">
          <p className="text-[#f5d5b8] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Midden-Limburg · Maasbracht
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
            {KEIJSJOT.naam}
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">{KEIJSJOT.tagline}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={KEIJSJOT.telefoonLink}
              className="inline-flex items-center gap-2 bg-white text-[#8B4513] font-bold px-5 py-3 rounded-lg hover:bg-[#faf6f0] transition-colors"
            >
              <Phone size={18} /> {KEIJSJOT.telefoon}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-bold px-5 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              <MapPin size={18} /> Route
            </a>
          </div>
        </div>
      </section>

      <section id="over" className="max-w-3xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-black text-[#8B4513] mb-4">Welkom in de kroeg</h2>
        <p className="text-[#5c4033] leading-relaxed mb-4">{KEIJSJOT.omschrijving}</p>
        <p className="text-sm text-[#8B7355] italic border-l-4 border-[#c45c26]/40 pl-4">
          Onderdeel van de Monra-familie. Publieke gegevens op deze pagina zijn verzameld uit open bronnen;
          openingstijden, e-mail en bedrijfsgegevens worden waar nodig aangevuld door de exploitant.
        </p>
      </section>

      <section id="openingstijden" className="bg-[#f0e6d8] px-6 py-14">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Clock className="text-[#c45c26]" size={22} />
            <h2 className="text-xl font-black text-[#8B4513]">Openingstijden</h2>
          </div>
          <ul className="space-y-2">
            {KEIJSJOT.openingstijden.map(row => (
              <li key={row.dag} className="flex justify-between text-sm border-b border-[#8B4513]/10 pb-2">
                <span className="font-semibold text-[#5c4033]">{row.dag}</span>
                <span className="text-[#8B7355] italic">{row.tijd}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-[#8B7355] mt-4">
            * Tijden kunnen afwijken per seizoen of feestdag. Bel voor de actuele status.
          </p>
        </div>
      </section>

      <section id="contact" className="max-w-3xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-black text-[#8B4513] mb-6">Contact &amp; route</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-[#8B4513]/15 p-6 shadow-sm">
            <MapPin className="text-[#c45c26] mb-3" size={24} />
            <p className="font-bold text-[#3d2914]">{KEIJSJOT.adres}</p>
            <p className="text-[#5c4033]">{KEIJSJOT.postcode}</p>
            <p className="text-sm text-[#8B7355] mt-2">Stadscentrum Maasbracht</p>
          </div>
          <div className="bg-white rounded-xl border border-[#8B4513]/15 p-6 shadow-sm space-y-4">
            <a href={KEIJSJOT.telefoonLink} className="flex items-center gap-3 text-[#3d2914] font-bold hover:text-[#c45c26]">
              <Phone size={20} className="text-[#c45c26]" />
              {KEIJSJOT.telefoon}
            </a>
            <div className="flex items-center gap-3 text-[#8B7355]">
              <Mail size={20} />
              <span className="italic">E-mail: wordt aangevuld</span>
            </div>
            <a
              href={KEIJSJOT.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#c45c26] font-semibold hover:underline"
            >
              <ExternalLink size={16} />
              donkiesjot.nl (extern)
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#3d2914] text-[#f5d5b8]/60 px-6 py-8 text-center text-xs">
        <p>© Don Keijsjot · Maasbracht · onderdeel van Monra Groep</p>
        <div className="flex justify-center gap-4 mt-3">
          <Link href="/groep" className="hover:text-white">Monra Groep</Link>
          <Link href="/privacy" className="hover:text-white">Privacy</Link>
        </div>
      </footer>
      <MonraChat site="keijsjot" />
    </main>
  )
}
