import Link from 'next/link'
import { HeaderLayoutPreview } from '@/components/HeaderLayoutPreview'

export const metadata = {
  title: 'Header test — Monra Security',
  robots: { index: false, follow: false },
}

export default function HeaderTestPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="bg-[#0a1540] text-white px-6 py-4 flex justify-between items-center">
        <span className="text-sm font-bold tracking-wide">🧪 Header testlab</span>
        <Link href="/" className="text-sm text-[#11CFE7] hover:underline font-semibold">
          ← Terug naar homepage
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-black text-[#1A2B6D] mb-3">
          Header &amp; navigatie <span className="text-[#11CFE7]">testen</span>
        </h1>
        <p className="text-[#1A2B6D]/70 mb-10 max-w-2xl">
          Vergelijk visueel drie layout-varianten voor de blauwe familie-balk en witte navbar.
          Wijzigingen op de live site gebeuren pas na goedkeuring — behalve &quot;Logo boven&quot; die al actief is.
        </p>

        <HeaderLayoutPreview />
      </div>
    </main>
  )
}
