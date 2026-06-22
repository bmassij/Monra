import Image from 'next/image'
import Link from 'next/link'
import { BRAND_LOGOS } from '@/lib/brand-logos'

export const metadata = {
  title: 'Logo preview — Monra brand',
  robots: { index: false, follow: false },
}

const LOGOS = [
  { id: 'security', label: 'Monra Security', png: BRAND_LOGOS.security, original: '/brand/originals/WhatsApp Image 2026-06-19 at 11.02.29.jpeg', live: 'Homepage, België' },
  { id: 'support', label: 'Monra Support', png: BRAND_LOGOS.support, original: '/brand/originals/WhatsApp Image 2026-06-19 at 11.02.28.jpeg', live: '/support' },
  { id: 'events-security', label: 'Monra Events Security', png: BRAND_LOGOS.eventsSecurity, original: '/brand/originals/WhatsApp Image 2026-06-19 at 11.02.19.jpeg', live: '/events-security' },
  { id: 'groep', label: 'Monra Groep', png: BRAND_LOGOS.groep, original: '/brand/originals/WhatsApp Image 2026-06-19 at 11.02.28 (3).jpeg', live: '/groep' },
  { id: 'don-keijsjot', label: 'Café Donkiesjot 2.0', png: BRAND_LOGOS.donKeijsjot, original: null, live: '/don-keijsjot' },
] as const

function LogoCard({
  label,
  png,
  live,
  bgClass,
  bgLabel,
}: {
  label: string
  png: string
  live: string
  bgClass: string
  bgLabel: string
}) {
  return (
    <div className="rounded-xl overflow-hidden border border-black/10 shadow-sm">
      <div className={`${bgClass} p-8 flex items-center justify-center min-h-[220px]`}>
        <Image
          src={png}
          alt={`${label} logo op ${bgLabel} achtergrond`}
          width={400}
          height={400}
          className="max-h-48 w-auto object-contain"
          unoptimized
        />
      </div>
      <div className="px-4 py-3 bg-white border-t border-black/5">
        <p className="font-bold text-sm text-[#1A2B6D]">{label}</p>
        <p className="text-xs text-[#1A2B6D]/60">{bgLabel} achtergrond · live op {live}</p>
      </div>
    </div>
  )
}

function OriginalCompare({ label, png, original, live }: { label: string; png: string; original: string | null; live: string }) {
  if (!original) {
    return (
      <div className="rounded-xl overflow-hidden border border-black/10 shadow-sm bg-white p-4">
        <p className="font-bold text-sm text-[#1A2B6D]">{label}</p>
        <p className="text-xs text-[#1A2B6D]/60 mb-4">Neon-export · live op {live}</p>
        <div className="bg-[#1a0a08] rounded-lg p-6 flex items-center justify-center min-h-[180px]">
          <Image src={png} alt={label} width={400} height={280} className="max-h-40 w-auto object-contain" unoptimized />
        </div>
      </div>
    )
  }
  return (
    <div className="rounded-xl overflow-hidden border border-black/10 shadow-sm bg-white">
      <div className="px-4 py-3 border-b border-black/5">
        <p className="font-bold text-sm text-[#1A2B6D]">{label} — vergelijking</p>
        <p className="text-xs text-[#1A2B6D]/60">Origineel (WhatsApp) vs. export · live op {live}</p>
      </div>
      <div className="grid grid-cols-2 divide-x divide-black/5">
        <div className="p-4">
          <p className="text-xs font-semibold text-[#1A2B6D]/50 mb-3 uppercase tracking-wide">Origineel</p>
          <div className="bg-neutral-100 rounded-lg p-4 flex items-center justify-center min-h-[160px]">
            <Image
              src={original}
              alt={`${label} origineel`}
              width={300}
              height={300}
              className="max-h-36 w-auto object-contain"
              unoptimized
            />
          </div>
        </div>
        <div className="p-4">
          <p className="text-xs font-semibold text-[#1A2B6D]/50 mb-3 uppercase tracking-wide">Export PNG</p>
          <div className="bg-neutral-800 rounded-lg p-4 flex items-center justify-center min-h-[160px]">
            <Image
              src={png}
              alt={`${label} export`}
              width={300}
              height={300}
              className="max-h-36 w-auto object-contain"
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LogoPreviewPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="bg-[#0a1540] text-white px-6 py-4 flex justify-between items-center sticky top-0 z-10">
        <span className="text-sm font-bold tracking-wide">🎨 Logo preview</span>
        <Link href="/" className="text-sm text-[#11CFE7] hover:underline font-semibold">
          ← Terug naar homepage
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-black text-[#1A2B6D] mb-3">
          Brand logo&apos;s <span className="text-[#11CFE7]">preview</span>
        </h1>
        <p className="text-[#1A2B6D]/70 mb-10 max-w-2xl">
          Alle geëxporteerde logo&apos;s op lichte en donkere achtergronden — inclusief neon Don Keijsjot. Live ingezet op de subsites.
        </p>

        <section className="mb-14">
          <h2 className="text-xl font-black text-[#1A2B6D] mb-2">Op lichte achtergrond</h2>
          <p className="text-sm text-[#1A2B6D]/60 mb-6">Witte / lichtgrijze achtergrond — typisch voor headers en print.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LOGOS.map((logo) => (
              <LogoCard
                key={`light-${logo.id}`}
                label={logo.label}
                png={logo.png}
                live={logo.live}
                bgClass="bg-white"
                bgLabel="Licht"
              />
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-xl font-black text-white mb-2">Op donkere achtergrond</h2>
          <p className="text-sm text-white/60 mb-6">Donkerblauw / zwart — typisch voor hero-secties en footers.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 p-6 rounded-2xl bg-[#0a1540]">
            {LOGOS.map((logo) => (
              <LogoCard
                key={`dark-${logo.id}`}
                label={logo.label}
                png={logo.png}
                live={logo.live}
                bgClass="bg-[#1a2548]"
                bgLabel="Donker"
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-black text-[#1A2B6D] mb-2">Origineel vs. export</h2>
          <p className="text-sm text-[#1A2B6D]/60 mb-6">WhatsApp-bronbestanden naast de geëxporteerde transparante PNG&apos;s.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {LOGOS.map((logo) => (
              <OriginalCompare
                key={`compare-${logo.id}`}
                label={logo.label}
                png={logo.png}
                original={logo.original}
                live={logo.live}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
