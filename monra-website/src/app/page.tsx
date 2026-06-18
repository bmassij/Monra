'use client'

import { useState, useEffect, useRef } from 'react'
import {
  Shield, Phone, Mail, MapPin, ChevronDown, Menu, X,
  Award, Users, Clock, Star, ArrowRight, CheckCircle,
  MessageCircle, Send, Zap, Eye, Lock
} from 'lucide-react'

// ─── TYPES ───────────────────────────────────────────────
type ChatMessage = { role: 'user' | 'bot'; text: string }

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

const FAQ_BOT: Record<string, string> = {
  offerte: 'Voor een offerte op maat kunt u bellen naar +31 (0)6 45398678 of mailen naar info@monra-security.nl. Wij reageren altijd binnen 24 uur.',
  prijs: 'Onze tarieven zijn afhankelijk van het type evenement, aantal beveiligers en duur. Neem contact op voor een vrijblijvende offerte.',
  opleiding: 'Monra Security is een erkend leerbedrijf (SBB). De ESO-opleiding combineert theorie met praktijk op echte evenementen. Interesse? Mail naar info@monra-security.nl.',
  certificaat: 'Wij beschikken over het SVPB-keurmerk en een geldige Wpbr-vergunning. Al onze beveiligers zijn gecertificeerd en gediplomeerd.',
  contact: 'U kunt ons bereiken via:\n📞 Directie: +31 (0)6 45398678\n📞 Planning: +31 (0)6 23624789\n✉️ info@monra-security.nl',
  ervaring: 'Monra Security heeft meer dan 25 jaar ervaring in evenementenbeveiliging. Wij werken met vaste medewerkers voor optimale cohesie en kwaliteit.',
}

function getBotResponse(msg: string): string {
  const m = msg.toLowerCase()
  if (m.includes('offerte') || m.includes('aanvraag') || m.includes('kosten') || m.includes('boek')) return FAQ_BOT.offerte
  if (m.includes('prijs') || m.includes('tarief') || m.includes('betalen')) return FAQ_BOT.prijs
  if (m.includes('opleid') || m.includes('eso') || m.includes('cursus') || m.includes('leer')) return FAQ_BOT.opleiding
  if (m.includes('certifi') || m.includes('svpb') || m.includes('keurmerk') || m.includes('vergunning')) return FAQ_BOT.certificaat
  if (m.includes('contact') || m.includes('bellen') || m.includes('mail') || m.includes('bereik')) return FAQ_BOT.contact
  if (m.includes('ervaring') || m.includes('jaar') || m.includes('lang')) return FAQ_BOT.ervaring
  return 'Goeie vraag! Voor een persoonlijk antwoord kunt u ons bereiken via info@monra-security.nl of +31 (0)6 45398678. Wij helpen u graag verder.'
}

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
    { label: 'Over ons', href: '#over-ons' },
    { label: 'Opleiding', href: '#opleiding' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#2A2A2A]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#A07A2A] flex items-center justify-center">
            <Shield size={20} className="text-black" />
          </div>
          <div>
            <span className="text-white font-bold text-lg tracking-wide">MONRA</span>
            <span className="text-[#C9A84C] font-bold text-lg tracking-wide ml-1">SECURITY</span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm text-[#888] hover:text-[#C9A84C] transition-colors tracking-wide uppercase">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+31645398678"
            className="flex items-center gap-2 text-sm text-[#C9A84C] hover:text-[#E8C96A] transition-colors">
            <Phone size={16} />
            <span>+31 6 45398678</span>
          </a>
          <a href="#contact"
            className="bg-gradient-to-r from-[#C9A84C] to-[#A07A2A] text-black font-semibold text-sm px-5 py-2.5 rounded-full hover:from-[#E8C96A] hover:to-[#C9A84C] transition-all">
            Offerte aanvragen
          </a>
        </div>

        {/* Mobile burger */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#111] border-t border-[#2A2A2A] px-6 py-6 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-sm text-[#888] hover:text-[#C9A84C] transition-colors uppercase tracking-wide">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="mt-2 bg-gradient-to-r from-[#C9A84C] to-[#A07A2A] text-black font-semibold text-sm px-5 py-3 rounded-full text-center">
            Offerte aanvragen
          </a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div className="absolute inset-0 bg-gradient-radial from-[#1A1A1A] via-[#0A0A0A] to-[#0A0A0A]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C9A84C]/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#C9A84C]/30 rounded-full px-4 py-2 mb-8">
          <Award size={14} className="text-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs font-medium tracking-widest uppercase">SVPB Gecertificeerd · 25+ Jaar Ervaring</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-6 tracking-tight">
          VEILIGHEID IS{' '}
          <span className="bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] bg-clip-text text-transparent">
            GEEN TOEVAL
          </span>
        </h1>

        <p className="text-lg md:text-xl text-[#888] max-w-2xl mx-auto mb-10 leading-relaxed">
          Monra Security levert professionele evenementenbeveiliging met vaste, gecertificeerde medewerkers.
          24/7 bereikbaar. Klantgericht. Flexibel inzetbaar.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#contact"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A84C] to-[#A07A2A] text-black font-bold px-8 py-4 rounded-full hover:from-[#E8C96A] hover:to-[#C9A84C] transition-all shadow-lg shadow-[#C9A84C]/20">
            Vrijblijvende offerte
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#diensten"
            className="inline-flex items-center gap-2 border border-[#2A2A2A] text-white font-medium px-8 py-4 rounded-full hover:border-[#C9A84C]/50 hover:text-[#C9A84C] transition-all">
            Bekijk diensten
            <ChevronDown size={18} />
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#2A2A2A] rounded-2xl overflow-hidden max-w-3xl mx-auto">
          {STATS.map((s) => (
            <div key={s.label} className="bg-[#111] px-6 py-6 text-center">
              <div className="text-3xl font-black bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] bg-clip-text text-transparent mb-1">
                {s.value}
              </div>
              <div className="text-xs text-[#888] uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-[#888] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#C9A84C] to-transparent" />
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="diensten" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            ONZE <span className="text-[#C9A84C]">DIENSTEN</span>
          </h2>
          <p className="text-[#888] max-w-xl mx-auto">
            Van evenementenbeveiliging tot opleiding — wij ontzorgen u volledig op het gebied van veiligheid.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.title}
                className="glass-card rounded-2xl p-8 hover:border-[#C9A84C]/40 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C9A84C]/20 to-[#C9A84C]/5 flex items-center justify-center mb-6 group-hover:from-[#C9A84C]/30 transition-all">
                  <Icon size={24} className="text-[#C9A84C]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-[#888] text-sm mb-6 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#aaa]">
                      <CheckCircle size={14} className="text-[#C9A84C] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* References ticker */}
        <div className="border-t border-b border-[#2A2A2A] py-6 overflow-hidden">
          <div className="flex gap-8 items-center flex-wrap justify-center">
            <span className="text-xs text-[#888] uppercase tracking-widest whitespace-nowrap">Wij beveiligen o.a.:</span>
            {REFERENCES.map(r => (
              <span key={r} className="text-sm font-medium text-[#C9A84C] whitespace-nowrap">
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
    <section id="over-ons" className="py-24 bg-[#111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="gold-line mb-6" />
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              WAAROM <span className="text-[#C9A84C]">MONRA</span>?
            </h2>
            <p className="text-[#888] leading-relaxed mb-8">
              Monra Security werkt met veel vaste medewerkers in eigen dienstverband — zo min mogelijk oproepkrachten
              of ZZP-ers. Dit verbetert de communicatie, vergroot de onderlinge cohesie en stelt ons in staat
              hetzelfde werk te leveren als andere beveiligingsbedrijven, maar met tot wel <strong className="text-white">30 à 40% minder personeel</strong>.
            </p>
            <blockquote className="border-l-2 border-[#C9A84C] pl-6 italic text-[#aaa] mb-8">
              "Een goede Event Security Officer zorgt voor veiligheid, overzicht en een gastvrije uitstraling tegelijk."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 flex items-center justify-center">
                <span className="text-[#C9A84C] font-bold text-lg">R</span>
              </div>
              <div>
                <div className="text-white font-semibold">Raf Monsieur</div>
                <div className="text-[#888] text-sm">CEO, Monra Security B.V.</div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-4">
            {reasons.map(r => {
              const Icon = r.icon
              return (
                <div key={r.title} className="glass-card rounded-xl p-5 hover:border-[#C9A84C]/30 transition-all">
                  <Icon size={20} className="text-[#C9A84C] mb-3" />
                  <div className="text-white font-semibold text-sm mb-1">{r.title}</div>
                  <div className="text-[#888] text-xs leading-relaxed">{r.desc}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="opleiding" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-[#C9A84C]/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-4 py-1.5 mb-6">
                <Award size={14} className="text-[#C9A84C]" />
                <span className="text-[#C9A84C] text-xs font-medium uppercase tracking-widest">SBB Erkend Leerbedrijf</span>
              </div>
              <h2 className="text-4xl font-black text-white mb-4">
                ESO <span className="text-[#C9A84C]">OPLEIDING</span>
              </h2>
              <p className="text-[#888] leading-relaxed mb-6">
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
                  <div key={item} className="flex items-start gap-3 text-sm text-[#aaa]">
                    <CheckCircle size={16} className="text-[#C9A84C] flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
              <a href="mailto:info@monra-security.nl?subject=Interesse ESO Opleiding"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A84C] to-[#A07A2A] text-black font-bold px-6 py-3 rounded-full hover:from-[#E8C96A] hover:to-[#C9A84C] transition-all">
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
                <div key={item.step} className="flex gap-4 items-start bg-[#1A1A1A] rounded-xl p-5">
                  <span className="text-3xl font-black text-[#C9A84C]/30">{item.step}</span>
                  <div>
                    <div className="text-white font-semibold mb-1">{item.title}</div>
                    <div className="text-[#888] text-sm">{item.desc}</div>
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
    // In productie: POST naar /api/contact
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 bg-[#111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            NEEM <span className="text-[#C9A84C]">CONTACT OP</span>
          </h2>
          <p className="text-[#888]">Vrijblijvend kennismaken? Wij reageren binnen 24 uur.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="glass-card rounded-2xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12">
                <CheckCircle size={48} className="text-[#C9A84C]" />
                <h3 className="text-xl font-bold text-white">Bericht verzonden!</h3>
                <p className="text-[#888] text-center">Wij nemen zo snel mogelijk contact met u op.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#888] uppercase tracking-wide mb-1.5 block">Naam *</label>
                    <input required type="text"
                      className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                      value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Uw naam" />
                  </div>
                  <div>
                    <label className="text-xs text-[#888] uppercase tracking-wide mb-1.5 block">Telefoon</label>
                    <input type="tel"
                      className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                      value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+31 6..." />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-[#888] uppercase tracking-wide mb-1.5 block">E-mail *</label>
                  <input required type="email"
                    className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                    value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="uw@email.nl" />
                </div>
                <div>
                  <label className="text-xs text-[#888] uppercase tracking-wide mb-1.5 block">Bericht *</label>
                  <textarea required rows={5}
                    className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C9A84C]/50 transition-colors resize-none"
                    value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Vertel ons over uw evenement of vraag..." />
                </div>
                <button type="submit"
                  className="w-full bg-gradient-to-r from-[#C9A84C] to-[#A07A2A] text-black font-bold py-3.5 rounded-xl hover:from-[#E8C96A] hover:to-[#C9A84C] transition-all flex items-center justify-center gap-2">
                  <Send size={16} />
                  Bericht versturen
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-6">
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
                  className="flex items-center gap-4 glass-card rounded-xl p-5 hover:border-[#C9A84C]/30 transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#888] uppercase tracking-wide">{item.label}</div>
                    <div className="text-white text-sm group-hover:text-[#C9A84C] transition-colors">{item.value}</div>
                  </div>
                </a>
              )
            })}

            {/* Certifications */}
            <div className="glass-card rounded-xl p-5">
              <div className="text-xs text-[#888] uppercase tracking-wide mb-3">Certificeringen</div>
              <div className="flex flex-wrap gap-2">
                {['SVPB Keurmerk', 'Wpbr Vergunning', 'SBB Leerbedrijf', 'KVK 89581806'].map(c => (
                  <span key={c} className="text-xs bg-[#C9A84C]/10 text-[#C9A84C] px-3 py-1 rounded-full border border-[#C9A84C]/20">
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

function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'bot', text: 'Hallo! Ik ben de Monra Security assistent. Waarmee kan ik u helpen? U kunt vragen stellen over onze diensten, offerte, of de ESO-opleiding.' },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const send = () => {
    if (!input.trim()) return
    const userMsg = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: userMsg }])
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, { role: 'bot', text: getBotResponse(userMsg) }])
    }, 900)
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-[#C9A84C] to-[#A07A2A] rounded-full flex items-center justify-center shadow-xl shadow-[#C9A84C]/30 hover:from-[#E8C96A] hover:to-[#C9A84C] transition-all animate-pulse-gold"
        aria-label="Open chat">
        {open ? <X size={22} className="text-black" /> : <MessageCircle size={22} className="text-black" />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-[#111] border border-[#2A2A2A] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          style={{ height: '460px' }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-[#C9A84C] to-[#A07A2A] px-5 py-4 flex items-center gap-3">
            <Shield size={18} className="text-black" />
            <div>
              <div className="text-black font-bold text-sm">Monra Security</div>
              <div className="text-black/70 text-xs">Assistent • Online</div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                  m.role === 'user'
                    ? 'bg-gradient-to-br from-[#C9A84C] to-[#A07A2A] text-black font-medium'
                    : 'bg-[#1A1A1A] text-[#ddd] border border-[#2A2A2A]'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl px-4 py-3 flex gap-1.5 items-center">
                  <span className="typing-dot w-1.5 h-1.5 bg-[#C9A84C] rounded-full" />
                  <span className="typing-dot w-1.5 h-1.5 bg-[#C9A84C] rounded-full" />
                  <span className="typing-dot w-1.5 h-1.5 bg-[#C9A84C] rounded-full" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick replies */}
          <div className="px-4 pb-2 flex gap-2 flex-wrap">
            {['Offerte aanvragen', 'ESO Opleiding', 'Contact info'].map(q => (
              <button key={q} onClick={() => { setInput(q); }}
                className="text-xs text-[#C9A84C] border border-[#C9A84C]/30 rounded-full px-3 py-1 hover:bg-[#C9A84C]/10 transition-colors">
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[#2A2A2A] flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Stel een vraag..."
              className="flex-1 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#C9A84C]/40 transition-colors"
            />
            <button onClick={send}
              className="w-10 h-10 bg-gradient-to-br from-[#C9A84C] to-[#A07A2A] rounded-xl flex items-center justify-center hover:from-[#E8C96A] hover:to-[#C9A84C] transition-all flex-shrink-0">
              <Send size={15} className="text-black" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#A07A2A] flex items-center justify-center">
                <Shield size={14} className="text-black" />
              </div>
              <span className="text-white font-bold">MONRA <span className="text-[#C9A84C]">SECURITY</span></span>
            </div>
            <p className="text-[#888] text-sm leading-relaxed">
              Professionele evenementenbeveiliging. SVPB gecertificeerd. 25+ jaar ervaring.
            </p>
          </div>
          <div>
            <div className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Navigatie</div>
            <div className="flex flex-col gap-2">
              {['Home', 'Diensten', 'Over ons', 'Opleiding', 'Contact'].map(l => (
                <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`}
                  className="text-[#888] text-sm hover:text-[#C9A84C] transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Contact</div>
            <div className="flex flex-col gap-2 text-sm text-[#888]">
              <span>Schuttersstraat 7, 6067 GE Linne</span>
              <a href="tel:+31645398678" className="hover:text-[#C9A84C] transition-colors">+31 (0)6 45398678</a>
              <a href="mailto:info@monra-security.nl" className="hover:text-[#C9A84C] transition-colors">info@monra-security.nl</a>
              <span className="text-xs mt-2">KVK: 89581806 · BTW: NL865029283B01</span>
            </div>
          </div>
        </div>
        <div className="border-t border-[#2A2A2A] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[#555] text-xs">© 2024 Monra Security B.V. · Alle rechten voorbehouden</span>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/MonraBeveiliging" target="_blank" rel="noopener noreferrer"
              className="text-[#555] hover:text-[#C9A84C] transition-colors text-xs">Facebook</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
              className="text-[#555] hover:text-[#C9A84C] transition-colors text-xs">Instagram</a>
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
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Education />
      <Contact />
      <Footer />
      <Chatbot />
    </main>
  )
}
