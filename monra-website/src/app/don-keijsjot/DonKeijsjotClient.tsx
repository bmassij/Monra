'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ImageWithWatermark } from '@/components/ImageWithWatermark'
import { useState, useEffect } from 'react'
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  ExternalLink,
  Facebook,
  Music,
  Beer,
  Users,
  Target,
  Sparkles,
} from 'lucide-react'
import { MonraChat } from '@/components/MonraChat'
import { FamilieTopBanner, FAMILIE_BANNER_OFFSET } from '@/components/FamilieTopBanner'
import { getFamilieTopKeijsjot } from '@/lib/subsite-nav'
import { BRAND_LOGOS, BRAND_LOGO_ALT, BRAND_ICONS } from '@/lib/brand-logos'

const NEON = {
  pink: '#ff4da6',
  cyan: '#00d4ff',
  blue: '#4da6ff',
  dark: '#0a0a12',
  darkCard: '#12121f',
} as const

const KEIJSJOT = {
  naam: 'Don Keijsjot',
  tagline: 'Feestcafé · gezelligheid · muziek',
  slogan: 'Tot Donkie!',
  adres: 'Molenweg 1',
  postcode: '6051 HG Maasbracht',
  telefoon: '0475 461 801',
  telefoonLink: 'tel:+31475461801',
  facebook: 'https://www.facebook.com/CafeDonkiesjot/',
  website: 'https://www.donkiesjot.nl/',
  mapsQuery: 'Molenweg+1+6051+HG+Maasbracht',
  openingstijden: [
    { dag: 'Maandag', tijd: '14:00 – 23:00' },
    { dag: 'Dinsdag', tijd: 'Gesloten (wordt aangevuld)' },
    { dag: 'Woensdag', tijd: 'Wordt aangevuld' },
    { dag: 'Donderdag', tijd: '19:00 – 02:00' },
    { dag: 'Vrijdag', tijd: '19:00 – 02:00' },
    { dag: 'Zaterdag', tijd: '16:00 – 02:00' },
    { dag: 'Zondag', tijd: '19:00 – 02:00' },
  ],
}

const GALLERY = [
  { src: '/images/don-keijsjot/sfeer-bar.svg', alt: 'Neon bar sfeer', caption: 'Aan de bar' },
  { src: '/images/don-keijsjot/sfeer-feest.svg', alt: 'Feestcafé met neon', caption: 'Feestavonden' },
  { src: '/images/don-keijsjot/sfeer-kroeg.svg', alt: 'Kroeginterieur', caption: 'Kroegsfeer' },
  { src: '/images/don-keijsjot/sfeer-muziek.svg', alt: 'Muziek en DJ avonden', caption: 'Muziek & DJ' },
]

const SFEER_ITEMS = [
  {
    icon: Users,
    title: 'Gezellige kroeg',
    text: 'Intiem feestcafé in het stadscentrum — leuke kroeg, leuke feestjes en altijd gezelligheid. De huiskamer van Maasbracht.',
  },
  {
    icon: Music,
    title: 'Muziek & themafeesten',
    text: "Van R&B en reggaeton tot après-ski en oude & nieuw: swingende avonden met DJ's en thema's waar iedereen op afkomt.",
  },
  {
    icon: Beer,
    title: 'Drank & proost',
    text: 'Bier, shots en cocktails — onder het genot van een heerlijk drankje en lekkere muziek. Proost met vaste gasten en nieuwe gezichten.',
  },
  {
    icon: Target,
    title: 'Dart & sport',
    text: 'Dartteam, kermisavonden en de derde helft: Don Keijsjot is verweven met het dorpsleven en de feesttradities van Maasgouw.',
  },
]

const MENU_ITEMS = [
  { icon: '🍺', name: 'Bier', desc: 'Tap en fles — de klassieker in de kroeg' },
  { icon: '🥃', name: 'Shots & mix', desc: 'Feestdrankjes voor een avond vol gezelligheid' },
  { icon: '🍹', name: 'Cocktails', desc: 'Zoete mixers en verfrissende combinaties' },
  { icon: '🥤', name: 'Fris & warm', desc: 'Frisdrank, koffie en meer — vraag aan de bar' },
]

const NAV = [
  { href: '#over', label: 'Over ons' },
  { href: '#sfeer', label: 'Sfeer' },
  { href: '#menu', label: 'Menu' },
  { href: '#openingstijden', label: 'Openingstijden' },
  { href: '#locatie', label: 'Locatie' },
  { href: '#contact', label: 'Contact' },
]

export default function DonKeijsjotClient() {
  const [scrolled, setScrolled] = useState(false)
  const familieLinks = getFamilieTopKeijsjot()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="min-h-screen text-white/90" style={{ background: NEON.dark }}>
      <style>{`
        @keyframes neonPulse {
          0%, 100% {
            filter: drop-shadow(0 0 20px rgba(255,77,166,.5)) drop-shadow(0 0 40px rgba(0,212,255,.3));
          }
          50% {
            filter: drop-shadow(0 0 32px rgba(255,77,166,.75)) drop-shadow(0 0 56px rgba(77,166,255,.45));
          }
        }
        @keyframes heroGlow {
          0%, 100% { opacity: .55; transform: scale(1); }
          50% { opacity: .85; transform: scale(1.05); }
        }
        .dk-neon-logo { animation: neonPulse 3s ease-in-out infinite; }
        .dk-hero-orb { animation: heroGlow 6s ease-in-out infinite; }
        .dk-hero-orb-delay { animation-delay: 3s; }
      `}</style>

      <FamilieTopBanner
        links={familieLinks}
        logoSrc={BRAND_LOGOS.donKeijsjot}
        logoAlt={BRAND_LOGO_ALT.donKeijsjot}
        logoHref="#home"
        logoPreserveColors
      />

      <nav
        className={`fixed ${FAMILIE_BANNER_OFFSET} left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-md shadow-lg shadow-[#ff4da6]/10'
            : ''
        }`}
        style={{
          background: scrolled ? 'rgba(10,10,18,.92)' : NEON.dark,
          borderBottom: `2px solid ${scrolled ? 'rgba(255,77,166,.35)' : 'rgba(0,212,255,.2)'}`,
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center gap-4">
          <a href="#home" className="shrink-0">
            <Image
              src={BRAND_ICONS.donKeijsjot}
              alt={BRAND_LOGO_ALT.donKeijsjot}
              width={48}
              height={48}
              className="h-10 md:h-11 w-auto object-contain"
              style={{ filter: 'drop-shadow(0 0 8px rgba(0,212,255,.4))' }}
              priority
            />
          </a>
          <div className="hidden lg:flex gap-5 text-sm font-bold uppercase tracking-wide text-white/70">
            {NAV.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-[#00d4ff] transition-colors"
                style={{ letterSpacing: '0.06em' }}
              >
                {item.label}
              </a>
            ))}
            <Link href="/groep" className="hover:text-[#ff4da6] transition-colors">
              Monra Groep
            </Link>
          </div>
          <a
            href={KEIJSJOT.telefoonLink}
            className="lg:hidden text-sm font-bold px-3 py-1.5 rounded-md shrink-0 text-white"
            style={{ background: `linear-gradient(135deg, ${NEON.pink}, ${NEON.blue})` }}
          >
            Bel
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="pt-[140px] pb-24 px-6 relative overflow-hidden"
        style={{ background: NEON.dark }}
      >
        <div
          className="dk-hero-orb absolute -top-24 -left-24 w-80 h-80 rounded-full pointer-events-none blur-3xl"
          style={{ background: `radial-gradient(circle, ${NEON.pink}55 0%, transparent 70%)` }}
        />
        <div
          className="dk-hero-orb dk-hero-orb-delay absolute -bottom-16 -right-16 w-96 h-96 rounded-full pointer-events-none blur-3xl"
          style={{ background: `radial-gradient(circle, ${NEON.cyan}44 0%, transparent 70%)` }}
        />
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none blur-3xl opacity-40"
          style={{ background: `radial-gradient(ellipse, ${NEON.blue}33 0%, transparent 70%)` }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Image
            src={BRAND_LOGOS.donKeijsjot}
            alt={BRAND_LOGO_ALT.donKeijsjot}
            width={560}
            height={320}
            className="dk-neon-logo mx-auto mb-8 w-full max-w-md md:max-w-lg h-auto object-contain"
            priority
          />
          <p
            className="text-xs font-black uppercase tracking-[0.4em] mb-4"
            style={{ color: NEON.cyan }}
          >
            Feestcafé · Midden-Limburg · Maasbracht
          </p>
          <h1
            className="text-4xl md:text-6xl font-black mb-3 leading-tight"
            style={{
              background: `linear-gradient(90deg, ${NEON.cyan}, #fff, ${NEON.pink})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {KEIJSJOT.naam}
          </h1>
          <p
            className="text-2xl md:text-3xl font-black mb-2 tracking-wide"
            style={{ color: NEON.pink, textShadow: `0 0 24px ${NEON.pink}88` }}
          >
            {KEIJSJOT.slogan}
          </p>
          <p className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed">
            Op zoek naar een flinke portie feest onder het genot van een heerlijk drankje
            en lekkere muziek? Welkom in het neon hart van Maasbracht.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={KEIJSJOT.telefoonLink}
              className="inline-flex items-center gap-2 font-bold px-5 py-3 rounded-lg transition-all hover:scale-105 text-white"
              style={{
                background: `linear-gradient(135deg, ${NEON.pink}, ${NEON.blue})`,
                boxShadow: `0 4px 24px ${NEON.pink}55`,
              }}
            >
              <Phone size={18} /> {KEIJSJOT.telefoon}
            </a>
            <a
              href="#locatie"
              className="inline-flex items-center gap-2 border-2 font-bold px-5 py-3 rounded-lg hover:bg-white/5 transition-colors"
              style={{ borderColor: `${NEON.cyan}88`, color: NEON.cyan }}
            >
              <MapPin size={18} /> Route
            </a>
            <a
              href={KEIJSJOT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1877F2] text-white font-bold px-5 py-3 rounded-lg hover:bg-[#166fe0] transition-colors"
            >
              <Facebook size={18} /> Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Over ons */}
      <section id="over" className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-[1fr_1.1fr] gap-10 items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] mb-3" style={{ color: NEON.cyan }}>
              Over ons · Feestcafé
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight text-white">
              Welkom in de kroeg
            </h2>
            <div className="w-12 h-1 rounded mb-6" style={{ background: `linear-gradient(90deg, ${NEON.pink}, ${NEON.cyan})` }} />
          </div>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              <strong className="text-white">Café Don Keijsjot</strong> — bij velen nog bekend
              als <em>de Platte</em> — is al decennialang een vertrouwde plek in Maasbracht. Wat
              begon als buurtkroeg groeide uit tot een feestcafé en huiskamer van Maasgouw.
            </p>
            <p>
              Gasten omschrijven Don Keijsjot als een leuke kroeg met leuke feestjes en altijd
              gezelligheid. Onderdeel van de Monra-familie — dezelfde warmte en gastvrijheid die
              je van ons kent, nu in het hart van Maasbracht.
            </p>
            <p
              className="text-sm italic pl-4 border-l-4 text-white/50"
              style={{ borderColor: `${NEON.pink}66` }}
            >
              Publieke gegevens op deze pagina zijn verzameld uit open bronnen. Openingstijden en
              aanbod kunnen wijzigen — bel of volg ons op Facebook voor actuele feestjes.
            </p>
          </div>
        </div>
      </section>

      {/* Sfeer */}
      <section
        id="sfeer"
        className="px-6 py-16 md:py-20 relative overflow-hidden"
        style={{ background: NEON.darkCard }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{ background: `radial-gradient(ellipse at 20% 50%, ${NEON.pink}22 0%, transparent 50%)` }}
        />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-12">
            <p className="text-xs font-black uppercase tracking-[0.3em] mb-3" style={{ color: NEON.pink }}>
              Sfeer · Party
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">
              Neon, muziek &amp; gezelligheid
            </h2>
            <p className="text-white/65 max-w-2xl mx-auto leading-relaxed">
              Feestcafé met neon gloed, live muziek en een podium voor DJ-avonden. Geen groot terras —
              wél een hechte groep vaste gasten en feestavonden waar Maasbracht samenkomt.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-14">
            {SFEER_ITEMS.map(item => (
              <div
                key={item.title}
                className="rounded-xl p-6 transition-colors"
                style={{
                  background: 'rgba(255,255,255,.03)',
                  border: '1px solid rgba(255,255,255,.08)',
                }}
              >
                <item.icon className="mb-3" size={26} style={{ color: NEON.cyan }} />
                <h3 className="font-black text-lg mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles style={{ color: NEON.pink }} size={20} />
              <h3 className="font-black text-xl text-white">Impressie</h3>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {GALLERY.map(item => (
                <figure
                  key={item.src}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden"
                  style={{ border: `1px solid ${NEON.cyan}33` }}
                >
                  <ImageWithWatermark
                    src={item.src}
                    alt={item.alt}
                    fill
                    watermarkSrc={BRAND_ICONS.donKeijsjot}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <figcaption
                    className="absolute bottom-0 inset-x-0 px-3 py-2 text-xs font-bold text-white"
                    style={{ background: `linear-gradient(to top, ${NEON.dark}ee, transparent)` }}
                  >
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="text-xs text-white/40 mt-4 text-center italic">
              Placeholder-sfeerbeelden — volg{' '}
              <a
                href={KEIJSJOT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline"
                style={{ color: NEON.cyan }}
              >
                Facebook
              </a>{' '}
              voor actuele foto&apos;s van feesten en het interieur.
            </p>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-10">
          <p className="text-xs font-black uppercase tracking-[0.3em] mb-3" style={{ color: NEON.blue }}>
            Menu &amp; drank
          </p>
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">Aan de bar</h2>
          <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
            Typisch feestcafé-aanbod — vraag ter plaatse naar het actuele assortiment.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MENU_ITEMS.map(item => (
            <div
              key={item.name}
              className="rounded-xl p-5 text-center transition-colors hover:scale-[1.02]"
              style={{
                background: NEON.darkCard,
                border: `1px solid ${NEON.pink}22`,
              }}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-black mb-1 text-white">{item.name}</h3>
              <p className="text-xs text-white/55 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Openingstijden */}
      <section
        id="openingstijden"
        className="px-6 py-16 md:py-20 relative overflow-hidden"
        style={{ background: `linear-gradient(180deg, ${NEON.darkCard} 0%, ${NEON.dark} 100%)` }}
      >
        <div
          className="absolute top-0 right-0 w-64 h-64 blur-3xl pointer-events-none opacity-40"
          style={{ background: `radial-gradient(circle, ${NEON.pink}44 0%, transparent 70%)` }}
        />
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center relative">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock style={{ color: NEON.cyan }} size={24} />
              <h2 className="text-2xl md:text-3xl font-black text-white">Openingstijden</h2>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              Onderstaande tijden zijn indicatief. Feestdagen, carnaval en speciale avonden kunnen
              afwijken — bel voor de actuele status.
            </p>
            <a
              href={KEIJSJOT.telefoonLink}
              className="inline-flex items-center gap-2 font-bold hover:text-white transition-colors"
              style={{ color: NEON.pink }}
            >
              <Phone size={18} /> Bel {KEIJSJOT.telefoon}
            </a>
          </div>
          <ul
            className="rounded-xl p-6 space-y-2"
            style={{ background: 'rgba(255,255,255,.04)', border: `1px solid ${NEON.cyan}33` }}
          >
            {KEIJSJOT.openingstijden.map(row => (
              <li
                key={row.dag}
                className="flex justify-between text-sm border-b pb-2 last:border-0"
                style={{ borderColor: 'rgba(255,255,255,.08)' }}
              >
                <span className="font-semibold text-white/90">{row.dag}</span>
                <span className="text-white/50 italic text-right max-w-[55%]">{row.tijd}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Locatie */}
      <section id="locatie" className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] mb-3" style={{ color: NEON.cyan }}>
              Locatie
            </p>
            <h2 className="text-2xl md:text-3xl font-black mb-4 text-white">Midden in Maasbracht</h2>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="shrink-0 mt-1" size={22} style={{ color: NEON.pink }} />
              <div>
                <p className="font-bold text-lg text-white">{KEIJSJOT.adres}</p>
                <p className="text-white/60">{KEIJSJOT.postcode}</p>
                <p className="text-sm text-white/40 mt-1">Stadscentrum · Midden-Limburg</p>
              </div>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${KEIJSJOT.mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
              style={{ color: NEON.cyan }}
            >
              <ExternalLink size={16} />
              Open in Google Maps
            </a>
          </div>
          <div
            className="rounded-xl overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[280px]"
            style={{ border: `1px solid ${NEON.cyan}33`, boxShadow: `0 0 32px ${NEON.cyan}22` }}
          >
            <iframe
              title="Don Keijsjot locatie Maasbracht"
              src={`https://maps.google.com/maps?q=${KEIJSJOT.mapsQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full min-h-[280px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-6 py-16 md:py-20"
        style={{ background: NEON.darkCard }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-black uppercase tracking-[0.3em] mb-3" style={{ color: NEON.pink }}>
              Contact · Kom langs
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-white">Tot Donkie!</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <a
              href={KEIJSJOT.telefoonLink}
              className="rounded-xl p-6 transition-all hover:scale-[1.02] group"
              style={{ background: 'rgba(255,255,255,.04)', border: `1px solid ${NEON.pink}33` }}
            >
              <Phone className="mb-3 group-hover:scale-110 transition-transform" size={24} style={{ color: NEON.pink }} />
              <p className="font-bold text-white mb-1">Telefoon</p>
              <p className="text-white/60">{KEIJSJOT.telefoon}</p>
            </a>
            <a
              href={KEIJSJOT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl p-6 transition-all hover:scale-[1.02] group"
              style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(24,119,242,.3)' }}
            >
              <Facebook className="text-[#1877F2] mb-3 group-hover:scale-110 transition-transform" size={24} />
              <p className="font-bold text-white mb-1">Facebook</p>
              <p className="text-sm text-white/60">Feestjes, foto&apos;s &amp; nieuws</p>
            </a>
            <div
              className="rounded-xl p-6 space-y-4 sm:col-span-2 lg:col-span-1"
              style={{ background: 'rgba(255,255,255,.04)', border: `1px solid ${NEON.cyan}22` }}
            >
              <div className="flex items-start gap-3 text-white/50">
                <Mail size={20} className="shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white mb-1">E-mail</p>
                  <p className="text-sm italic">Wordt aangevuld</p>
                </div>
              </div>
              <a
                href={KEIJSJOT.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold hover:underline"
                style={{ color: NEON.cyan }}
              >
                <ExternalLink size={16} />
                donkiesjot.nl
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer
        className="px-6 py-10 text-center text-xs"
        style={{ background: NEON.dark, borderTop: `1px solid ${NEON.pink}22` }}
      >
        <p className="font-semibold text-white/70 mb-1">
          © {KEIJSJOT.naam} · Maasbracht ·{' '}
          <span style={{ color: NEON.pink }}>{KEIJSJOT.slogan}</span>
        </p>
        <p className="mb-4 text-white/40">Onderdeel van Monra Groep</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/groep" className="text-white/40 hover:text-[#00d4ff] transition-colors">
            Monra Groep
          </Link>
          <a
            href={KEIJSJOT.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-[#00d4ff] transition-colors"
          >
            Facebook
          </a>
          <Link href="/privacy" className="text-white/40 hover:text-[#00d4ff] transition-colors">
            Privacy
          </Link>
        </div>
      </footer>

      <MonraChat site="keijsjot" />
    </main>
  )
}
