'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Shield, Phone, Mail, MapPin, ChevronDown, Menu, X,
  Award, Users, Clock, Star, ArrowRight, CheckCircle,
  Send, Zap, Eye, Lock
} from 'lucide-react'
import { HeroSlider } from '@/components/HeroSlider'
import { PhotoGallery } from '@/components/PhotoGallery'
import { MonraChat } from '@/components/MonraChat'
import { FamilieTopBanner, FAMILIE_BANNER_OFFSET } from '@/components/FamilieTopBanner'
import { FAMILIE_TOP_SECURITY } from '@/lib/subsite-nav'
import { IMAGES } from '@/lib/images'

// ─── DATA ────────────────────────────────────────────────
const SERVICES = [
  {
    icon: Star,
    title: 'Evenementen Beveiliging',
    desc: 'Festivals, concerten, beurzen, congressen en sportevenementen. Wij zorgen voor een veilig en gastvrij verloop.',
    items: ['Festivals & Concerten', 'Voetbalwedstrijden', 'Congressen & Beurzen', 'Bedrijfsfeesten'],
  },
  {
    icon: Eye,
    title: 'Mobiele Surveillance',
    desc: 'Flexibele surveillancediensten op maat voor uw locatie of evenement.',
    items: ['Rondes op maat', '24/7 beschikbaar', 'Snel inzetbaar', 'Rapportage achteraf'],
  },
  {
    icon: Lock,
    title: 'ESO Opleiding',
    desc: 'Leer het vak bij een erkend leerbedrijf. Combinatie van theorie en praktijk op echte evenementen.',
    items: ['Theorie & wetgeving', 'Praktijk op locatie', 'Officieel certificaat', 'SBB erkend leerbedrijf'],
  },
]

const STATS = [
  { value: '25+', label: 'Jaar ervaring' },
  { value: '500+', label: 'Evenementen' },
  { value: '30-40%', label: 'Efficiënter dan gemiddeld' },
  { value: '24/7', label: 'Bereikbaar' },
]

const REFERENCES = [
  'Festivals', 'Concerten', 'Voetbal', 'Congressen',
  'Beurzen', 'Sportevenementen', 'Bedrijfsfeesten', 'VIP Events',
]

// ─── COMPONENTS ──────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Diensten', href: '#diensten' },
    { label: "Foto's", href: '#fotos' },
    { label: 'Over ons', href: '#over-ons' },
    { label: 'Opleiding', href: '#opleiding' },
    { label: 'Contact', href: '#contact' },
    { label: 'Monra Groep', href: '/groep' },
  ]

  return (
    <nav className={`fixed ${FAMILIE_BANNER_OFFSET} left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md border-b-2 border-[#1A2B6D] shadow-md'
        : 'bg-white border-b border-[#1A2B6D]/20'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Desktop links — logo staat in familie-balk */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-xs font-bold text-[#1A2B6D] hover:text-[#11CFE7] transition-colors tracking-widest uppercase border-b-2 border-transparent hover:border-[#11CFE7] pb-0.5">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+31645398678"
            className="flex items-center gap-2 text-sm text-[#1A2B6D] hover:text-[#11CFE7] transition-colors font-semibold">
            <Phone size={15} />
            <span>+31 6 45398678</span>
          </a>
          <a href="#contact"
            className="bg-[#1A2B6D] text-white font-bold text-sm px-5 py-2.5 rounded hover:bg-[#11CFE7] hover:text-[#1A2B6D] transition-all">
            Offerte aanvragen
          </a>
        </div>

        {/* Mobile burger */}
        <button className="md:hidden text-[#1A2B6D]" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#1A2B6D]/20 px-6 py-6 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-sm text-[#1A2B6D] hover:text-[#11CFE7] transition-colors uppercase tracking-wide font-bold">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="mt-2 bg-[#1A2B6D] text-white font-bold text-sm px-5 py-3 rounded text-center hover:bg-[#11CFE7] hover:text-[#1A2B6D] transition-all">
            Offerte aanvragen
          </a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A2B6D]">
      {/* Background photo */}
      <Image
        src={IMAGES.team}
        alt=""
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
        aria-hidden
      />
      {/* Links: foto zichtbaar, rechts/onder: navy overlay — zelfde effect als HTML preview */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A2B6D]/40 via-[#1A2B6D]/60 to-[#0a1540]/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1A2B6D]/30 to-[#0a1540]/80" />

      {/* Cyan glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#11CFE7]/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-[#11CFE7]/40 rounded-full px-4 py-2 mb-8">
          <Award size={14} className="text-[#11CFE7]" />
          <span className="text-[#11CFE7] text-xs font-bold tracking-widest uppercase">SVPB Gecertificeerd · 25+ Jaar Ervaring</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-6 tracking-tight">
          VEILIGHEID IS{' '}
          <span className="text-[#11CFE7]">
            GEEN TOEVAL
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Monra Security levert professionele evenementenbeveiliging met vaste, gecertificeerde medewerkers.
          24/7 bereikbaar. Klantgericht. Flexibel inzetbaar.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#contact"
            className="group inline-flex items-center gap-2 bg-[#11CFE7] text-[#1A2B6D] font-black px-8 py-4 rounded hover:bg-white transition-all shadow-lg shadow-[#11CFE7]/20">
            Vrijblijvende offerte
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#diensten"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-bold px-8 py-4 rounded hover:border-[#11CFE7] hover:text-[#11CFE7] transition-all">
            Bekijk diensten
            <ChevronDown size={18} />
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden max-w-3xl mx-auto">
          {STATS.map((s) => (
            <div key={s.label} className="bg-white/5 backdrop-blur px-6 py-6 text-center border border-white/5">
              <div className="text-3xl font-black text-[#11CFE7] mb-1">
                {s.value}
              </div>
              <div className="text-xs text-white/50 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-white/60 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#11CFE7] to-transparent" />
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="diensten" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-xs font-bold text-[#11CFE7] tracking-[4px] uppercase mb-3">Wat wij bieden</div>
          <div className="w-10 h-1 bg-[#11CFE7] mx-auto mb-5 rounded" />
          <h2 className="text-4xl md:text-5xl font-black text-[#1A2B6D] mb-4">
            ONZE <span className="text-[#11CFE7]">DIENSTEN</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Van evenementenbeveiliging tot opleiding — wij ontzorgen u volledig op het gebied van veiligheid.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.title}
                className="border border-slate-200 rounded-xl p-8 hover:border-[#11CFE7] hover:shadow-lg transition-all group bg-white">
                <div className="w-12 h-12 rounded-xl bg-[#1A2B6D]/5 flex items-center justify-center mb-6 group-hover:bg-[#11CFE7]/10 transition-all">
                  <Icon size={24} className="text-[#1A2B6D] group-hover:text-[#11CFE7] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#1A2B6D] mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-[#11CFE7] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* References ticker */}
        <div className="border-t border-b border-slate-200 py-6 overflow-hidden bg-slate-50 -mx-6 px-6">
          <div className="flex gap-8 items-center flex-wrap justify-center">
            <span className="text-xs text-slate-400 uppercase tracking-widest whitespace-nowrap">Wij beveiligen o.a.:</span>
            {REFERENCES.map(r => (
              <span key={r} className="text-sm font-bold text-[#1A2B6D] whitespace-nowrap">
                ◆ {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  const reasons = [
    { icon: Clock, title: '25+ jaar ervaring', desc: 'Ruime ervaring in evenementenbeveiliging op diverse locaties en evenementen.' },
    { icon: Users, title: 'Vaste medewerkers', desc: '30-40% efficiënter dankzij vaste teams die elkaar door en door kennen.' },
    { icon: Award, title: 'SVPB Keurmerk', desc: 'Wij beschikken over het keurmerk Evenementenbeveiliging van de Nederlandse Veiligheidsbranche.' },
    { icon: Shield, title: 'Volledig ontzorgd', desc: 'Van veiligheidsplan tot lokale overheid — wij regelen alles voor u.' },
    { icon: Star, title: 'Hospitality inslag', desc: 'Proactieve beveiligers die veiligheid combineren met een gastvrije uitstraling.' },
    { icon: Zap, title: '24/7 bereikbaar', desc: 'Altijd een aanspreekpunt, dag en nacht.' },
  ]

  return (
    <section id="over-ons" className="py-24 bg-[#f0f6ff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-12">
          {/* Left — team photo + certificeringen */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] border-2 border-[#1A2B6D]/20 shadow-xl">
              <Image
                src={IMAGES.team}
                alt="Monra Security team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-[#1A2B6D] border-2 border-[#11CFE7] rounded-xl px-6 py-4 text-center shadow-xl">
              <div className="text-3xl font-black text-[#11CFE7]">25+</div>
              <div className="text-[10px] text-white/70 uppercase tracking-widest mt-1">Jaar ervaring</div>
            </div>
            <div className="flex gap-4 mt-10 flex-wrap">
              <Image src={IMAGES.svpb} alt="SVPB Keurmerk" width={80} height={72} className="h-14 w-auto object-contain opacity-90" />
              <Image src={IMAGES.keurmerk} alt="Keurmerk Beveiliging" width={80} height={72} className="h-14 w-auto object-contain opacity-90" />
            </div>
          </div>

          {/* Right — copy */}
          <div>
            <div className="text-xs font-bold text-[#11CFE7] tracking-[4px] uppercase mb-3">Over ons</div>
            <div className="w-10 h-1 bg-[#11CFE7] mb-5 rounded" />
            <h2 className="text-4xl md:text-5xl font-black text-[#1A2B6D] mb-6">
              WAAROM <span className="text-[#11CFE7]">MONRA</span>?
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Monra Security werkt met veel vaste medewerkers in eigen dienstverband — zo min mogelijk oproepkrachten
              of ZZP-ers. Dit verbetert de communicatie, vergroot de onderlinge cohesie en stelt ons in staat
              hetzelfde werk te leveren als andere beveiligingsbedrijven, maar met tot wel <strong className="text-[#1A2B6D]">30 à 40% minder personeel</strong>.
            </p>
            <blockquote className="border-l-4 border-[#11CFE7] pl-6 italic text-slate-600 mb-8 bg-white py-3 pr-4 rounded-r-lg">
              &ldquo;Een goede Event Security Officer zorgt voor veiligheid, overzicht en een gastvrije uitstraling tegelijk.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <Image
                src={IMAGES.ceo}
                alt="Raf Monsieur"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#11CFE7]"
              />
              <div>
                <div className="text-[#1A2B6D] font-bold">Raf Monsieur</div>
                <div className="text-slate-500 text-sm">CEO, Monra Security B.V.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {reasons.map(r => {
            const Icon = r.icon
            return (
              <div key={r.title} className="bg-white border border-slate-200 rounded-xl p-5 hover:border-[#11CFE7] hover:shadow-md transition-all">
                <Icon size={20} className="text-[#11CFE7] mb-3" />
                <div className="text-[#1A2B6D] font-bold text-sm mb-1">{r.title}</div>
                <div className="text-slate-500 text-xs leading-relaxed">{r.desc}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="opleiding" className="py-24 bg-[#1A2B6D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#11CFE7]/10 border border-[#11CFE7]/40 rounded-full px-4 py-1.5 mb-6">
                <Award size={14} className="text-[#11CFE7]" />
                <span className="text-[#11CFE7] text-xs font-bold uppercase tracking-widest">SBB Erkend Leerbedrijf</span>
              </div>
              <h2 className="text-4xl font-black text-white mb-4">
                ESO <span className="text-[#11CFE7]">OPLEIDING</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                De opleiding tot <strong className="text-white">Event Security Officer</strong> is de ideale route voor mensen
                die willen werken in de dynamische wereld van evenementenbeveiliging. Leren in de praktijk
                bij een professioneel en erkend leerbedrijf.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Theorie en wetgeving: crowd control, communicatie, wettelijke kaders',
                  'Praktijk op echte locaties met ervaren begeleiders',
                  'Officieel ESO-certificaat na afronding',
                  'Sterke basis voor een loopbaan in beveiliging',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3 text-sm text-white/70">
                    <CheckCircle size={16} className="text-[#11CFE7] flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
              <a href="mailto:info@monra-security.nl?subject=Interesse ESO Opleiding"
                className="inline-flex items-center gap-2 bg-[#11CFE7] text-[#1A2B6D] font-black px-6 py-3 rounded hover:bg-white transition-all">
                Start nu met aanmelden
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { step: '01', title: 'Theorieonderwijs', desc: 'Kennis opbouwen over security, wetgeving en communicatie.' },
                { step: '02', title: 'Praktijkervaring', desc: 'Meelopen op echte evenementen onder begeleiding van professionals.' },
                { step: '03', title: 'Certificering', desc: 'Behaal het officiële ESO-certificaat en start uw carrière.' },
              ].map(item => (
                <div key={item.step} className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-xl p-5">
                  <span className="text-3xl font-black text-[#11CFE7]/40">{item.step}</span>
                  <div>
                    <div className="text-white font-bold mb-1">{item.title}</div>
                    <div className="text-white/50 text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs font-bold text-[#11CFE7] tracking-[4px] uppercase mb-3">Vrijblijvend en snel</div>
          <div className="w-10 h-1 bg-[#11CFE7] mx-auto mb-5 rounded" />
          <h2 className="text-4xl md:text-5xl font-black text-[#1A2B6D] mb-4">
            NEEM <span className="text-[#11CFE7]">CONTACT OP</span>
          </h2>
          <p className="text-slate-500">Vrijblijvend kennismaken? Wij reageren binnen 24 uur.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="border border-slate-200 rounded-2xl p-8 shadow-sm">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12">
                <CheckCircle size={48} className="text-[#11CFE7]" />
                <h3 className="text-xl font-bold text-[#1A2B6D]">Bericht verzonden!</h3>
                <p className="text-slate-500 text-center">Wij nemen zo snel mogelijk contact met u op.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#1A2B6D] font-bold uppercase tracking-wide mb-1.5 block">Naam *</label>
                    <input required type="text"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-[#1A2B6D] text-sm focus:outline-none focus:border-[#11CFE7] transition-colors"
                      value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Uw naam" />
                  </div>
                  <div>
                    <label className="text-xs text-[#1A2B6D] font-bold uppercase tracking-wide mb-1.5 block">Telefoon</label>
                    <input type="tel"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-[#1A2B6D] text-sm focus:outline-none focus:border-[#11CFE7] transition-colors"
                      value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+31 6..." />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-[#1A2B6D] font-bold uppercase tracking-wide mb-1.5 block">E-mail *</label>
                  <input required type="email"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-[#1A2B6D] text-sm focus:outline-none focus:border-[#11CFE7] transition-colors"
                    value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="uw@email.nl" />
                </div>
                <div>
                  <label className="text-xs text-[#1A2B6D] font-bold uppercase tracking-wide mb-1.5 block">Bericht *</label>
                  <textarea required rows={5}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-[#1A2B6D] text-sm focus:outline-none focus:border-[#11CFE7] transition-colors resize-none"
                    value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Vertel ons over uw evenement of vraag..." />
                </div>
                <button type="submit"
                  className="w-full bg-[#1A2B6D] text-white font-black py-3.5 rounded-lg hover:bg-[#11CFE7] hover:text-[#1A2B6D] transition-all flex items-center justify-center gap-2">
                  <Send size={16} />
                  Bericht versturen
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-4">
            {[
              { icon: Phone, label: 'Directie', value: '+31 (0)6 45398678', href: 'tel:+31645398678' },
              { icon: Phone, label: 'Planning', value: '+31 (0)6 23624789', href: 'tel:+31623624789' },
              { icon: Mail, label: 'Algemeen', value: 'info@monra-security.nl', href: 'mailto:info@monra-security.nl' },
              { icon: Mail, label: 'Planning', value: 'planning@monra-security.nl', href: 'mailto:planning@monra-security.nl' },
              { icon: MapPin, label: 'Adres', value: 'Schuttersstraat 7, 6067 GE Linne', href: 'https://maps.google.com/?q=Schuttersstraat+7+Linne' },
            ].map(item => {
              const Icon = item.icon
              return (
                <a key={item.value} href={item.href}
                  className="flex items-center gap-4 border border-slate-200 rounded-xl p-4 hover:border-[#11CFE7] hover:shadow-md transition-all group bg-white">
                  <div className="w-10 h-10 rounded-lg bg-[#1A2B6D]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#11CFE7]/10 transition-colors">
                    <Icon size={18} className="text-[#1A2B6D] group-hover:text-[#11CFE7] transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide">{item.label}</div>
                    <div className="text-[#1A2B6D] font-bold text-sm group-hover:text-[#11CFE7] transition-colors">{item.value}</div>
                  </div>
                </a>
              )
            })}

            {/* Certifications */}
            <div className="border border-slate-200 rounded-xl p-5 bg-[#f0f6ff]">
              <div className="text-xs text-[#1A2B6D] font-bold uppercase tracking-wide mb-3">Certificeringen</div>
              <div className="flex flex-wrap gap-2">
                {['SVPB Keurmerk', 'Wpbr Vergunning', 'SBB Leerbedrijf', 'KVK 89581806'].map(c => (
                  <span key={c} className="text-xs bg-[#1A2B6D] text-white px-3 py-1 rounded-full font-semibold">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── MONRA FAMILIE BANNER ────────────────────────────────
function MonraFamilie() {
  return (
    <section className="py-20 bg-white border-t border-slate-100" aria-label="Monra familie">
      <div className="max-w-7xl mx-auto px-6">
        {/* SEO-vriendelijke intro met interne links */}
        <div className="text-center mb-14">
          <div className="text-xs font-bold text-[#11CFE7] tracking-[4px] uppercase mb-3">De Monra Groep</div>
          <div className="w-10 h-1 bg-[#11CFE7] mx-auto mb-5 rounded" />
          <h2 className="text-3xl md:text-4xl font-black text-[#1A2B6D] mb-4">
            Meer dan beveiliging — <span className="text-[#11CFE7]">één familie</span>
          </h2>
          {/* SEO tekst met interne links naar zusterbedrijven */}
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-sm">
            Naast professionele <strong className="text-[#1A2B6D]">evenementenbeveiliging</strong> biedt de Monra-groep ook{' '}
            <a href="/support" className="text-[#0E5C4B] font-bold underline underline-offset-2 hover:text-[#1ABFA1] transition-colors">
              hospitality- en zorgondersteuning via Monra Support
            </a>{' '}
            en{' '}
            <a href="/events-security" className="text-[#8B6914] font-bold underline underline-offset-2 hover:text-[#C9A84C] transition-colors">
              gespecialiseerde evenementenbeveiliging via Monra Events Security
            </a>.
            Samen bieden wij een compleet pakket voor elk evenement — één aanspreekpunt, drie expertises.
          </p>
        </div>

        {/* Zuster-kaarten */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Monra Support */}
          <a href="/support"
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-[#1ABFA1] hover:shadow-xl transition-all p-8">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0E5C4B] to-[#1ABFA1] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-[#0E5C4B]/8 border border-[#0E5C4B]/15 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-[#1ABFA1]/15 transition-colors">
                🤝
              </div>
              <div>
                <div className="text-[9px] font-bold text-[#1ABFA1] uppercase tracking-[3px] mb-1">Zusterorganisatie</div>
                <h3 className="text-xl font-black text-[#0E5C4B] mb-2">Monra Support BV</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Ondersteuningsprofessionals voor <strong className="text-slate-700">hospitality, toezicht en zorg</strong> — servicemedewerkers, gastheren, EHBO&apos;ers, BHV&apos;ers en brandwachten. Flexibel inzetbaar, altijd gastvrij.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {['Servicemedewerkers', 'BHV & EHBO', 'Brandwachten', 'Barpersoneel'].map(t => (
                    <span key={t} className="text-[10px] font-semibold text-[#0E5C4B] bg-[#0E5C4B]/6 border border-[#0E5C4B]/15 px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0E5C4B] group-hover:text-[#1ABFA1] transition-colors">
                  Bezoek monra-support.nl →
                </span>
              </div>
            </div>
          </a>

          {/* Monra Events Security */}
          <a href="/events-security"
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[#080808] hover:border-[#C9A84C] hover:shadow-xl transition-all p-8">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A84C] to-[#E8C76A] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center text-2xl flex-shrink-0">
                ✨
              </div>
              <div>
                <div className="text-[9px] font-bold text-[#C9A84C] uppercase tracking-[3px] mb-1">Nieuw bedrijf</div>
                <h3 className="text-xl font-black text-white mb-2">Monra Events Security</h3>
                <p className="text-[#888] text-sm leading-relaxed mb-4">
                  Opgericht door <strong className="text-white">Senna Monsigneur</strong> — gespecialiseerde <strong className="text-white">evenementenbeveiliging</strong> met een eigen stijl. SVPB gecertificeerd, vaste teams, 24/7 inzetbaar.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {['Festival', 'Concert', 'VIP Beveiliging', 'ESO Opleiding'].map(t => (
                    <span key={t} className="text-[10px] font-semibold text-[#C9A84C] bg-[#C9A84C]/8 border border-[#C9A84C]/20 px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#C9A84C] group-hover:text-[#E8C76A] transition-colors">
                  Bezoek monra-events-security.nl →
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* SEO-tekst onderaan — voor Google */}
        <div className="mt-12 p-6 bg-[#f0f6ff] rounded-xl border border-[#1A2B6D]/10">
          <p className="text-xs text-slate-400 leading-relaxed text-center">
            <strong className="text-[#1A2B6D]">Monra Security BV</strong> is gespecialiseerd in evenementenbeveiliging in heel Nederland —
            festivals, concerten, voetbal, congressen en VIP-events. Werkzaam in Limburg, Noord-Brabant, Gelderland en verder.
            KVK: 89581806 · SVPB-keurmerk · Wpbr-vergund · SBB erkend leerbedrijf ·{' '}
            <a href="mailto:info@monra-security.nl" className="text-[#11CFE7] hover:underline">info@monra-security.nl</a>
          </p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#0a1540] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#11CFE7] flex items-center justify-center">
                <Shield size={14} className="text-[#1A2B6D]" />
              </div>
              <span className="text-white font-black">MONRA <span className="text-[#11CFE7]">SECURITY</span></span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Professionele evenementenbeveiliging. SVPB gecertificeerd. 25+ jaar ervaring.
            </p>
          </div>
          <div>
            <div className="text-white font-bold mb-4 text-xs uppercase tracking-widest">Navigatie</div>
            <div className="flex flex-col gap-2">
              {['Home', 'Diensten', "Foto's", 'Over ons', 'Opleiding', 'Contact'].map(l => (
                <a key={l} href={`#${l.toLowerCase().replace(' ', '-').replace("'", '')}`}
                  className="text-white/40 text-sm hover:text-[#11CFE7] transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-white font-bold mb-4 text-xs uppercase tracking-widest">Contact</div>
            <div className="flex flex-col gap-2 text-sm text-white/40">
              <span>Schuttersstraat 7, 6067 GE Linne</span>
              <a href="tel:+31645398678" className="hover:text-[#11CFE7] transition-colors">+31 (0)6 45398678</a>
              <a href="mailto:info@monra-security.nl" className="hover:text-[#11CFE7] transition-colors">info@monra-security.nl</a>
              <span className="text-xs mt-2">KVK: 89581806 · BTW: NL865029283B01</span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-white/25 text-xs">© 2024 Monra Security B.V. · Alle rechten voorbehouden</span>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/MonraBeveiliging" target="_blank" rel="noopener noreferrer"
              className="text-white/25 hover:text-[#11CFE7] transition-colors text-xs">Facebook</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
              className="text-white/25 hover:text-[#11CFE7] transition-colors text-xs">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── PAGE ────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main>
      <FamilieTopBanner
        logoSrc={IMAGES.logo}
        logoAlt="Monra Security"
        logoHref="#home"
        links={[...FAMILIE_TOP_SECURITY]}
      />
      <Navbar />
      <Hero />
      <Services />
      <HeroSlider />
      <PhotoGallery />
      <WhyUs />
      <Education />
      <Contact />
      <MonraFamilie />
      <Footer />
      <MonraChat site="security" />
    </main>
  )
}
