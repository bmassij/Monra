'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Shield, Phone, Mail, MapPin, ChevronDown, Menu, X,
  Award, Users, Clock, Star, ArrowRight, CheckCircle,
  Send, Zap, Eye, Lock
} from 'lucide-react'
import { MonraChat } from '@/components/MonraChat'
import { FamilieTopBanner, FAMILIE_BANNER_OFFSET } from '@/components/FamilieTopBanner'
import { getFamilieTopBelgium } from '@/lib/subsite-nav'
import { BRAND_LOGOS, BRAND_LOGO_ALT } from '@/lib/brand-logos'
import { IMAGES } from '@/lib/images'

const SERVICES = [
  {
    icon: Star,
    title: 'Evenementenbeveiliging',
    desc: 'Festivals, concerten, beurzen, congressen en sportevenementen in heel België. Wij zorgen voor een veilig en gastvrij verloop.',
    items: ['Festivals & Concerten', 'Voetbalwedstrijden', 'Congressen & Beurzen', 'Bedrijfsfeesten'],
  },
  {
    icon: Eye,
    title: 'Mobiele Surveillance',
    desc: 'Flexibele surveillancediensten op maat voor uw locatie of evenement in Vlaanderen en Wallonië.',
    items: ['Rondes op maat', '24/7 beschikbaar', 'Snel inzetbaar', 'Rapportage achteraf'],
  },
  {
    icon: Lock,
    title: 'Toegangscontrole',
    desc: 'Professionele toegangscontrole conform de Belgische wet op de private beveiliging.',
    items: ['Ticketcontrole', 'VIP-toegang', 'Persbeheer', 'Anti-smokkelen'],
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
    { label: 'Contact', href: '#contact' },
    { label: 'Monra Groep', href: '/groep' },
  ]
  return (
    <nav className={`fixed ${FAMILIE_BANNER_OFFSET} left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b-2 border-[#1A2B6D] shadow-md' : 'bg-white border-b border-[#1A2B6D]/20'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src={BRAND_LOGOS.security}
            alt={BRAND_LOGO_ALT.security}
            width={120}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
          <div>
            <div className="text-sm font-black text-[#1A2B6D] leading-tight">MONRA <span className="text-[#11CFE7]">BELGIUM</span></div>
            <div className="text-[9px] text-slate-400 uppercase tracking-widest">Evenementenbeveiliging</div>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-xs font-bold text-[#1A2B6D] hover:text-[#11CFE7] transition-colors tracking-widest uppercase border-b-2 border-transparent hover:border-[#11CFE7] pb-0.5">{l.label}</a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="#contact" className="bg-[#1A2B6D] text-white font-bold text-sm px-5 py-2.5 rounded hover:bg-[#11CFE7] hover:text-[#1A2B6D] transition-all">Offerte aanvragen</a>
        </div>
        <button className="md:hidden text-[#1A2B6D]" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-[#1A2B6D]/20 px-6 py-6 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-[#1A2B6D] hover:text-[#11CFE7] transition-colors uppercase tracking-wide font-bold">{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 bg-[#1A2B6D] text-white font-bold text-sm px-5 py-3 rounded text-center">Offerte aanvragen</a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A2B6D]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1540] via-[#1A2B6D] to-[#0f1f5c]" />
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-black via-[#FDDA24] to-[#EF3340] opacity-20" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#11CFE7]/10 blur-[120px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-[#11CFE7]/40 rounded-full px-4 py-2 mb-8">
          <Award size={14} className="text-[#11CFE7]" />
          <span className="text-[#11CFE7] text-xs font-bold tracking-widest uppercase">🇧🇪 FOD Vergund · 25+ Jaar Ervaring</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-6 tracking-tight">
          VEILIGHEID IS{' '}<span className="text-[#11CFE7]">GEEN TOEVAL</span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
          Monra Belgium levert professionele evenementenbeveiliging in heel België met vaste, gecertificeerde medewerkers. Vergund door de FOD Binnenlandse Zaken. 24/7 bereikbaar.
        </p>
        <div className="flex gap-3 justify-center mb-8 flex-wrap">
          <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs text-white/70 font-semibold">🇧🇪 Nederlands</span>
          <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs text-white/70 font-semibold">🇧🇪 Français</span>
          <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs text-white/70 font-semibold">Vlaanderen · Wallonië · Brussel</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#contact" className="group inline-flex items-center gap-2 bg-[#11CFE7] text-[#1A2B6D] font-black px-8 py-4 rounded hover:bg-white transition-all shadow-lg shadow-[#11CFE7]/20">
            Vrijblijvende offerte <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#diensten" className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-bold px-8 py-4 rounded hover:border-[#11CFE7] hover:text-[#11CFE7] transition-all">
            Bekijk diensten <ChevronDown size={18} />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden max-w-3xl mx-auto">
          {STATS.map((s) => (
            <div key={s.label} className="bg-white/5 backdrop-blur px-6 py-6 text-center border border-white/5">
              <div className="text-3xl font-black text-[#11CFE7] mb-1">{s.value}</div>
              <div className="text-xs text-white/50 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
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
        <div className="text-center mb-16">
          <div className="text-xs font-bold text-[#11CFE7] tracking-[4px] uppercase mb-3">Wat wij bieden</div>
          <div className="w-10 h-1 bg-[#11CFE7] mx-auto mb-5 rounded" />
          <h2 className="text-4xl md:text-5xl font-black text-[#1A2B6D] mb-4">ONZE <span className="text-[#11CFE7]">DIENSTEN</span></h2>
          <p className="text-slate-500 max-w-xl mx-auto">Van evenementenbeveiliging tot toegangscontrole — wij ontzorgen u volledig in België.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.title} className="border border-slate-200 rounded-xl p-8 hover:border-[#11CFE7] hover:shadow-lg transition-all group bg-white">
                <div className="w-12 h-12 rounded-xl bg-[#1A2B6D]/5 flex items-center justify-center mb-6 group-hover:bg-[#11CFE7]/10 transition-all">
                  <Icon size={24} className="text-[#1A2B6D] group-hover:text-[#11CFE7] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#1A2B6D] mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-[#11CFE7] flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
        <div className="border-t border-b border-slate-200 py-6 bg-slate-50 -mx-6 px-6">
          <div className="flex gap-8 items-center flex-wrap justify-center">
            <span className="text-xs text-slate-400 uppercase tracking-widest whitespace-nowrap">Wij beveiligen o.a.:</span>
            {REFERENCES.map(r => (<span key={r} className="text-sm font-bold text-[#1A2B6D] whitespace-nowrap">◆ {r}</span>))}
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  const reasons = [
    { icon: Clock, title: '25+ jaar ervaring', desc: 'Ruime ervaring in evenementenbeveiliging in Nederland én België.' },
    { icon: Users, title: 'Vaste medewerkers', desc: '30-40% efficiënter dankzij vaste teams die elkaar door en door kennen.' },
    { icon: Award, title: 'FOD Vergund', desc: 'Vergund conform de Belgische wet op de private en bijzondere veiligheid (2017).' },
    { icon: Shield, title: 'Volledig ontzorgd', desc: 'Van veiligheidsplan tot lokale overheid — wij regelen alles voor u.' },
    { icon: Star, title: 'Hospitality inslag', desc: 'Proactieve beveiligers die veiligheid combineren met een gastvrije uitstraling.' },
    { icon: Zap, title: '24/7 bereikbaar', desc: 'Altijd een aanspreekpunt, dag en nacht.' },
  ]
  return (
    <section id="over-ons" className="py-24 bg-[#f0f6ff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-12">
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] border-2 border-[#1A2B6D]/20 shadow-xl bg-[#1A2B6D] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-8xl mb-4">🇧🇪</div>
                <div className="text-white font-black text-xl">MONRA BELGIUM</div>
                <div className="text-[#11CFE7] text-sm mt-2">Evenementenbeveiliging in België</div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-[#1A2B6D] border-2 border-[#11CFE7] rounded-xl px-6 py-4 text-center shadow-xl">
              <div className="text-3xl font-black text-[#11CFE7]">25+</div>
              <div className="text-[10px] text-white/70 uppercase tracking-widest mt-1">Jaar ervaring</div>
            </div>
          </div>
          <div>
            <div className="text-xs font-bold text-[#11CFE7] tracking-[4px] uppercase mb-3">Over ons</div>
            <div className="w-10 h-1 bg-[#11CFE7] mb-5 rounded" />
            <h2 className="text-4xl md:text-5xl font-black text-[#1A2B6D] mb-6">WAAROM <span className="text-[#11CFE7]">MONRA BELGIUM</span>?</h2>
            <p className="text-slate-500 leading-relaxed mb-6">Monra Belgium is de Belgische tak van de Monra Groep — opgericht vanuit 25 jaar Nederlandse expertise in evenementenbeveiliging. Wij opereren conform de <strong className="text-[#1A2B6D]">Wet van 2 oktober 2017 tot regeling van de private en bijzondere veiligheid</strong>.</p>
            <p className="text-slate-500 leading-relaxed mb-8">Onze aanpak: vaste medewerkers, minimale oproepkrachten, maximale cohesie. Dat maakt ons tot wel <strong className="text-[#1A2B6D]">30 à 40% efficiënter</strong> dan vergelijkbare beveiligingsbedrijven.</p>
            <blockquote className="border-l-4 border-[#11CFE7] pl-6 italic text-slate-600 mb-8 bg-white py-3 pr-4 rounded-r-lg">
              &ldquo;Een goede Event Security Officer zorgt voor veiligheid, overzicht en een gastvrije uitstraling tegelijk.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1A2B6D] border-2 border-[#11CFE7] flex items-center justify-center">
                <Shield size={18} className="text-[#11CFE7]" />
              </div>
              <div>
                <div className="text-[#1A2B6D] font-bold">Raf Monsieur</div>
                <div className="text-slate-500 text-sm">CEO, Monra Groep</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {reasons.map(r => { const Icon = r.icon; return (
            <div key={r.title} className="bg-white border border-slate-200 rounded-xl p-5 hover:border-[#11CFE7] hover:shadow-md transition-all">
              <Icon size={20} className="text-[#11CFE7] mb-3" />
              <div className="text-[#1A2B6D] font-bold text-sm mb-1">{r.title}</div>
              <div className="text-slate-500 text-xs leading-relaxed">{r.desc}</div>
            </div>
          )})}
        </div>
      </div>
    </section>
  )
}

function Werkgebied() {
  const regio = [
    { naam: 'Vlaanderen', steden: 'Antwerpen, Gent, Brugge, Leuven, Hasselt, Mechelen' },
    { naam: 'Brussel', steden: 'Brussel, Etterbeek, Molenbeek, Schaarbeek, Elsene' },
    { naam: 'Wallonië', steden: 'Luik, Namen, Charleroi, Bergen, Aarlen, Dinant' },
  ]
  return (
    <section className="py-20 bg-[#1A2B6D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-xs font-bold text-[#11CFE7] tracking-[4px] uppercase mb-3">Werkgebied</div>
          <div className="w-10 h-1 bg-[#11CFE7] mx-auto mb-5 rounded" />
          <h2 className="text-4xl font-black text-white mb-4">ACTIEF IN HEEL <span className="text-[#11CFE7]">BELGIË</span></h2>
          <p className="text-white/60 max-w-xl mx-auto">Monra Belgium is inzetbaar in alle drie de gewesten — van de kust tot de Ardennen.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {regio.map(r => (
            <div key={r.naam} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#11CFE7]/40 transition-all">
              <div className="text-[#11CFE7] font-black text-lg mb-2">{r.naam}</div>
              <div className="text-white/50 text-sm leading-relaxed">{r.steden}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3">
            <span className="text-[#11CFE7] font-bold text-sm">Nederlandstalig · Franstalig · Tweetalig</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true) }
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs font-bold text-[#11CFE7] tracking-[4px] uppercase mb-3">Vrijblijvend en snel</div>
          <div className="w-10 h-1 bg-[#11CFE7] mx-auto mb-5 rounded" />
          <h2 className="text-4xl md:text-5xl font-black text-[#1A2B6D] mb-4">NEEM <span className="text-[#11CFE7]">CONTACT OP</span></h2>
          <p className="text-slate-500">Vrijblijvend kennismaken? Wij reageren binnen 24 uur.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
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
                    <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-[#1A2B6D] text-sm focus:outline-none focus:border-[#11CFE7] transition-colors" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="Uw naam" />
                  </div>
                  <div>
                    <label className="text-xs text-[#1A2B6D] font-bold uppercase tracking-wide mb-1.5 block">Telefoon</label>
                    <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-[#1A2B6D] text-sm focus:outline-none focus:border-[#11CFE7] transition-colors" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder="+32 ..." />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-[#1A2B6D] font-bold uppercase tracking-wide mb-1.5 block">E-mail *</label>
                  <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-[#1A2B6D] text-sm focus:outline-none focus:border-[#11CFE7] transition-colors" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="uw@email.be" />
                </div>
                <div>
                  <label className="text-xs text-[#1A2B6D] font-bold uppercase tracking-wide mb-1.5 block">Bericht *</label>
                  <textarea required rows={5} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-[#1A2B6D] text-sm focus:outline-none focus:border-[#11CFE7] transition-colors resize-none" value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} placeholder="Vertel ons over uw evenement..." />
                </div>
                <button type="submit" className="w-full bg-[#1A2B6D] text-white font-black py-3.5 rounded-lg hover:bg-[#11CFE7] hover:text-[#1A2B6D] transition-all flex items-center justify-center gap-2">
                  <Send size={16} /> Bericht versturen
                </button>
              </form>
            )}
          </div>
          <div className="flex flex-col gap-4">
            {[
              { icon: Phone, label: 'Telefoon', value: '+32 ... (wordt aangevuld)', href: '#' },
              { icon: Mail, label: 'E-mail', value: 'info@monra-belgium.be', href: 'mailto:info@monra-belgium.be' },
              { icon: MapPin, label: 'Adres', value: 'België (wordt aangevuld)', href: '#' },
            ].map(item => { const Icon = item.icon; return (
              <a key={item.label} href={item.href} className="flex items-center gap-4 border border-slate-200 rounded-xl p-4 hover:border-[#11CFE7] hover:shadow-md transition-all group bg-white">
                <div className="w-10 h-10 rounded-lg bg-[#1A2B6D]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#11CFE7]/10 transition-colors">
                  <Icon size={18} className="text-[#1A2B6D] group-hover:text-[#11CFE7] transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide">{item.label}</div>
                  <div className="text-[#1A2B6D] font-bold text-sm group-hover:text-[#11CFE7] transition-colors">{item.value}</div>
                </div>
              </a>
            )})}
            <div className="border border-slate-200 rounded-xl p-5 bg-[#f0f6ff]">
              <div className="text-xs text-[#1A2B6D] font-bold uppercase tracking-wide mb-3">Certificeringen</div>
              <div className="flex flex-wrap gap-2">
                {['FOD Vergund', 'Wet Private Beveiliging 2017', 'KBO: wordt aangevuld', 'BTW BE: wordt aangevuld'].map(c => (
                  <span key={c} className="text-xs bg-[#1A2B6D] text-white px-3 py-1 rounded-full font-semibold">{c}</span>
                ))}
              </div>
            </div>
            <a href="/" className="flex items-center gap-4 border border-[#1A2B6D]/20 rounded-xl p-4 bg-[#f0f6ff] hover:border-[#11CFE7] transition-all group">
              <Shield size={20} className="text-[#1A2B6D] group-hover:text-[#11CFE7] transition-colors flex-shrink-0" />
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Moederbedrijf</div>
                <div className="text-[#1A2B6D] font-bold text-sm">Monra Security BV — Nederland</div>
                <div className="text-slate-400 text-xs">Schuttersstraat 7, 6067 GE Linne · KVK 89581806</div>
              </div>
            </a>
          </div>
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
              <span className="text-white font-black">MONRA <span className="text-[#11CFE7]">BELGIUM</span></span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">Professionele evenementenbeveiliging in België. FOD vergund. Onderdeel van de Monra Groep.</p>
          </div>
          <div>
            <div className="text-white font-bold mb-4 text-xs uppercase tracking-widest">Navigatie</div>
            <div className="flex flex-col gap-2">
              {[['Home','#home'],['Diensten','#diensten'],['Over ons','#over-ons'],['Contact','#contact'],['Monra Groep','/groep']].map(([l,h]) => (
                <a key={h} href={h} className="text-white/40 text-sm hover:text-[#11CFE7] transition-colors">{l}</a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-white font-bold mb-4 text-xs uppercase tracking-widest">Contact</div>
            <div className="flex flex-col gap-2 text-sm text-white/40">
              <span>België</span>
              <a href="mailto:info@monra-belgium.be" className="hover:text-[#11CFE7] transition-colors">info@monra-belgium.be</a>
              <span className="text-xs mt-2">KBO: wordt aangevuld · BTW BE: wordt aangevuld</span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-white/25 text-xs">© 2024 Monra Belgium · Onderdeel van de Monra Groep</span>
          <div className="flex gap-4">
            <a href="/groep" className="text-white/25 hover:text-[#11CFE7] transition-colors text-xs">Monra Groep</a>
            <a href="/" className="text-white/25 hover:text-[#11CFE7] transition-colors text-xs">Monra Security NL</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function BelgiePage() {
  return (
    <main>
      <FamilieTopBanner
        logoSrc={IMAGES.logo}
        logoAlt="Monra Belgium"
        logoHref="#home"
        links={getFamilieTopBelgium()}
      />
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Werkgebied />
      <Contact />
      <Footer />
      <MonraChat site="belgium" />
    </main>
  )
}
