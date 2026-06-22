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
  {
    src: '/images/don-keijsjot/sfeer-bar.svg',
    alt: 'Warme bar met amber verlichting',
    caption: 'Aan de bar',
  },
  {
    src: '/images/don-keijsjot/sfeer-feest.svg',
    alt: 'Feestcafé met sfeerverlichting',
    caption: 'Feestavonden',
  },
  {
    src: '/images/don-keijsjot/sfeer-kroeg.svg',
    alt: 'Gezellig kroeginterieur met hout',
    caption: 'Kroegsfeer',
  },
  {
    src: '/images/don-keijsjot/sfeer-muziek.svg',
    alt: 'Muziek en DJ avonden',
    caption: 'Muziek & DJ',
  },
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
    text: 'Van R&B en reggaeton tot après-ski en oude & nieuw: swingende avonden met DJ\'s en thema\'s waar iedereen op afkomt.',
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
    <main className="min-h-screen bg-[#faf6f0] text-[#3d2914]">
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
            ? 'bg-[#faf6f0]/95 backdrop-blur-md border-b-2 border-[#8B4513]/30 shadow-md'
            : 'bg-[#faf6f0] border-b border-[#8B4513]/15'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center gap-4">
          <a href="#home" className="shrink-0">
            <Image
              src={BRAND_LOGOS.donKeijsjot}
              alt={BRAND_LOGO_ALT.donKeijsjot}
              width={160}
              height={80}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </a>
          <div className="hidden lg:flex gap-5 text-sm font-semibold text-[#5c4033]">
            {NAV.map(item => (
              <a key={item.href} href={item.href} className="hover:text-[#c45c26] transition-colors">
                {item.label}
              </a>
            ))}
            <Link href="/groep" className="hover:text-[#c45c26] transition-colors">
              Monra Groep
            </Link>
          </div>
          <a
            href={KEIJSJOT.telefoonLink}
            className="lg:hidden bg-[#c45c26] text-white text-sm font-bold px-3 py-1.5 rounded-md shrink-0"
          >
            Bel
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="pt-[140px] pb-20 px-6 relative overflow-hidden"
        style={{
          background:
            'linear-gradient(165deg, #2a1810 0%, #4a2c17 30%, #8B4513 65%, #c45c26 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 28px,
              #f5d5b8 28px,
              #f5d5b8 29px
            )`,
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative">
          <Image
            src={BRAND_LOGOS.donKeijsjot}
            alt={BRAND_LOGO_ALT.donKeijsjot}
            width={560}
            height={320}
            className="mx-auto mb-8 w-full max-w-md md:max-w-lg h-auto object-contain drop-shadow-[0_0_40px_rgba(255,100,180,0.35)]"
            priority
          />
          <p className="text-[#f5d5b8] text-xs font-bold uppercase tracking-[0.35em] mb-4">
            Midden-Limburg · Stadscentrum Maasbracht
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-3 leading-tight">
            {KEIJSJOT.naam}
          </h1>
          <p className="text-[#ffd166] text-lg md:text-xl font-bold mb-2">{KEIJSJOT.slogan}</p>
          <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
            Op zoek naar een flinke portie gezelligheid onder het genot van een heerlijk drankje
            en lekkere muziek? Dan ben je hier aan het juiste adres.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={KEIJSJOT.telefoonLink}
              className="inline-flex items-center gap-2 bg-white text-[#8B4513] font-bold px-5 py-3 rounded-lg hover:bg-[#faf6f0] transition-colors shadow-lg"
            >
              <Phone size={18} /> {KEIJSJOT.telefoon}
            </a>
            <a
              href="#locatie"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-bold px-5 py-3 rounded-lg hover:bg-white/10 transition-colors"
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
            <p className="text-[#c45c26] text-xs font-bold uppercase tracking-[0.25em] mb-3">
              Over ons
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#8B4513] mb-5 leading-tight">
              Welkom in de kroeg
            </h2>
            <div className="w-12 h-1 bg-[#c45c26] rounded mb-6" />
          </div>
          <div className="space-y-4 text-[#5c4033] leading-relaxed">
            <p>
              <strong className="text-[#3d2914]">Café Don Keijsjot</strong> — bij velen nog bekend
              als <em>de Platte</em> — is al decennialang een vertrouwde plek in Maasbracht. Wat
              begon als buurtkroeg groeide uit tot een feestcafé en huiskamer van Maasgouw: vier
              generaties vierden er carnaval, kermisavonden, dartwedstrijden en legendarische
              woensdagnachten.
            </p>
            <p>
              Gasten omschrijven Don Keijsjot als een leuke kroeg met leuke feestjes en altijd
              gezelligheid. Onderdeel van de Monra-familie — dezelfde warmte en gastvrijheid die
              je van ons kent, nu in het hart van Maasbracht.
            </p>
            <p className="text-sm text-[#8B7355] italic border-l-4 border-[#c45c26]/40 pl-4">
              Publieke gegevens op deze pagina zijn verzameld uit open bronnen (Facebook, Uitagenda,
              reviews). Openingstijden en aanbod kunnen wijzigen — bel of volg ons op Facebook voor
              actuele feestjes en nieuws.
            </p>
          </div>
        </div>
      </section>

      {/* Sfeer */}
      <section id="sfeer" className="bg-[#f0e6d8] px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c45c26] text-xs font-bold uppercase tracking-[0.25em] mb-3">
              Sfeer
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#8B4513] mb-4">
              Warm, bruin &amp; gezellig
            </h2>
            <p className="text-[#5c4033] max-w-2xl mx-auto leading-relaxed">
              Intiem feestcafé met houten kroegsfeer, amber verlichting en een podium voor muziek.
              Geen groot terras — wél een hechte groep vaste gasten en feestavonden waar Maasbracht
              samenkomt.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-14">
            {SFEER_ITEMS.map(item => (
              <div
                key={item.title}
                className="bg-white rounded-xl border border-[#8B4513]/12 p-6 shadow-sm hover:border-[#c45c26]/30 transition-colors"
              >
                <item.icon className="text-[#c45c26] mb-3" size={26} />
                <h3 className="font-black text-[#8B4513] text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-[#5c4033] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="text-[#c45c26]" size={20} />
              <h3 className="font-black text-[#8B4513] text-xl">Impressie</h3>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {GALLERY.map(item => (
                <figure
                  key={item.src}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-[#8B4513]/15 shadow-sm"
                >
                  <ImageWithWatermark
                    src={item.src}
                    alt={item.alt}
                    fill
                    watermarkSrc={BRAND_ICONS.donKeijsjot}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#2a1810]/90 to-transparent px-3 py-2 text-xs font-semibold text-[#f5d5b8]">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="text-xs text-[#8B7355] mt-4 text-center italic">
              Placeholder-sfeerbeelden — volg{' '}
              <a
                href={KEIJSJOT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c45c26] font-semibold hover:underline"
              >
                Facebook
              </a>{' '}
              voor actuele foto&apos;s van feesten en het interieur.
            </p>
          </div>
        </div>
      </section>

      {/* Menu / drank */}
      <section id="menu" className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-10">
          <p className="text-[#c45c26] text-xs font-bold uppercase tracking-[0.25em] mb-3">
            Menu &amp; drank
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#8B4513] mb-4">
            Aan de bar
          </h2>
          <p className="text-[#5c4033] max-w-xl mx-auto text-sm leading-relaxed">
            Typisch feestcafé-aanbod — geen volledige menukaart online gevonden. Vraag ter plaatse
            naar het actuele assortiment.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MENU_ITEMS.map(item => (
            <div
              key={item.name}
              className="bg-[#f0e6d8] rounded-xl p-5 text-center border border-[#8B4513]/10 hover:border-[#c45c26]/25 transition-colors"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-black text-[#8B4513] mb-1">{item.name}</h3>
              <p className="text-xs text-[#5c4033] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Openingstijden */}
      <section id="openingstijden" className="bg-[#3d2914] px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="text-[#f5a623]" size={24} />
              <h2 className="text-2xl md:text-3xl font-black text-[#f5d5b8]">Openingstijden</h2>
            </div>
            <p className="text-[#f5d5b8]/70 text-sm leading-relaxed mb-6">
              Onderstaande tijden zijn indicatief (publieke bron). Feestdagen, carnaval en
              speciale avonden kunnen afwijken — bel voor de actuele status.
            </p>
            <a
              href={KEIJSJOT.telefoonLink}
              className="inline-flex items-center gap-2 text-[#ffd166] font-bold hover:text-white transition-colors"
            >
              <Phone size={18} /> Bel {KEIJSJOT.telefoon}
            </a>
          </div>
          <ul className="bg-[#2a1810]/60 rounded-xl border border-[#8B4513]/30 p-6 space-y-2">
            {KEIJSJOT.openingstijden.map(row => (
              <li
                key={row.dag}
                className="flex justify-between text-sm border-b border-[#8B4513]/20 pb-2 last:border-0"
              >
                <span className="font-semibold text-[#f5d5b8]">{row.dag}</span>
                <span className="text-[#f5d5b8]/65 italic text-right max-w-[55%]">{row.tijd}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Locatie */}
      <section id="locatie" className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-[#c45c26] text-xs font-bold uppercase tracking-[0.25em] mb-3">
              Locatie
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-[#8B4513] mb-4">
              Midden in Maasbracht
            </h2>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="text-[#c45c26] shrink-0 mt-1" size={22} />
              <div>
                <p className="font-bold text-[#3d2914] text-lg">{KEIJSJOT.adres}</p>
                <p className="text-[#5c4033]">{KEIJSJOT.postcode}</p>
                <p className="text-sm text-[#8B7355] mt-1">Stadscentrum · Midden-Limburg</p>
              </div>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${KEIJSJOT.mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#c45c26] font-semibold hover:underline"
            >
              <ExternalLink size={16} />
              Open in Google Maps
            </a>
          </div>
          <div className="rounded-xl overflow-hidden border border-[#8B4513]/15 shadow-md aspect-[4/3] md:aspect-auto md:min-h-[280px]">
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
      <section id="contact" className="bg-[#f0e6d8] px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#c45c26] text-xs font-bold uppercase tracking-[0.25em] mb-3">
              Contact
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-[#8B4513]">Kom langs of bel</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <a
              href={KEIJSJOT.telefoonLink}
              className="bg-white rounded-xl border border-[#8B4513]/15 p-6 shadow-sm hover:border-[#c45c26]/40 transition-colors group"
            >
              <Phone className="text-[#c45c26] mb-3 group-hover:scale-110 transition-transform" size={24} />
              <p className="font-bold text-[#3d2914] mb-1">Telefoon</p>
              <p className="text-[#5c4033]">{KEIJSJOT.telefoon}</p>
            </a>
            <a
              href={KEIJSJOT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl border border-[#8B4513]/15 p-6 shadow-sm hover:border-[#1877F2]/40 transition-colors group"
            >
              <Facebook className="text-[#1877F2] mb-3 group-hover:scale-110 transition-transform" size={24} />
              <p className="font-bold text-[#3d2914] mb-1">Facebook</p>
              <p className="text-sm text-[#5c4033]">Feestjes, foto&apos;s &amp; nieuws</p>
            </a>
            <div className="bg-white rounded-xl border border-[#8B4513]/15 p-6 shadow-sm space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-start gap-3 text-[#8B7355]">
                <Mail size={20} className="shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#3d2914] mb-1">E-mail</p>
                  <p className="text-sm italic">Wordt aangevuld</p>
                </div>
              </div>
              <a
                href={KEIJSJOT.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#c45c26] font-semibold hover:underline"
              >
                <ExternalLink size={16} />
                donkiesjot.nl
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#2a1810] text-[#f5d5b8]/60 px-6 py-10 text-center text-xs">
        <p className="font-semibold text-[#f5d5b8]/80 mb-1">
          © {KEIJSJOT.naam} · Maasbracht · {KEIJSJOT.slogan}
        </p>
        <p className="mb-4">Onderdeel van Monra Groep</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/groep" className="hover:text-white transition-colors">
            Monra Groep
          </Link>
          <a
            href={KEIJSJOT.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Facebook
          </a>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
        </div>
      </footer>

      <MonraChat site="keijsjot" />
    </main>
  )
}
