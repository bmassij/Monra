import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookiebeleid — Monra Security B.V.',
  description: 'Cookiebeleid van Monra Security B.V.',
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-gradient-to-br from-[#0a1540] to-[#1A2B6D] px-6 py-12 text-white">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-sm text-[#11CFE7] hover:underline mb-4 inline-block">
            ← Terug naar Monra Security
          </Link>
          <h1 className="text-3xl md:text-4xl font-black">Cookiebeleid</h1>
          <p className="text-white/60 text-sm mt-2">Monra Security B.V.</p>
        </div>
      </header>
      <article className="max-w-3xl mx-auto px-6 py-10 bg-white border-x border-b border-slate-200 shadow-sm text-sm text-slate-700 leading-relaxed">
        <p className="mb-6 text-slate-600">Laatst bijgewerkt: juni 2024</p>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-[#1A2B6D] mb-3">Wat zijn cookies?</h2>
          <p>
            Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen. Wij gebruiken cookies
            en vergelijkbare technieken (localStorage voor cookievoorkeuren) om de website te laten werken
            en — met uw toestemming — statistieken of marketing mogelijk te maken.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-[#1A2B6D] mb-3">Cookiecategorieën</h2>
          <div className="space-y-4">
            <CookieCategory
              name="Noodzakelijk"
              required
              description="Essentieel voor navigatie, beveiliging en het onthouden van uw cookiekeuze. Deze kunt u niet uitschakelen."
            />
            <CookieCategory
              name="Analytics"
              description="Helpt ons te begrijpen hoe bezoekers de site gebruiken (anoniem/geaggregeerd). Momenteel niet actief; structuur is voorbereid."
            />
            <CookieCategory
              name="Marketing"
              description="Voor relevante content of advertenties op andere platforms. Momenteel niet actief; structuur is voorbereid."
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-[#1A2B6D] mb-3">Uw keuze beheren</h2>
          <p>
            Bij uw eerste bezoek verschijnt een cookiebanner. Uw keuze wordt 12 maanden in localStorage
            opgeslagen onder de sleutel <code className="bg-slate-100 px-1 rounded">monra_cookie_consent</code>.
            U kunt cookies in uw browser wissen om de banner opnieuw te zien.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-[#1A2B6D] mb-3">Contact</h2>
          <p>
            Monra Security B.V. · Schuttersstraat 7, 6067 GE Linne · KVK 89581806 ·{' '}
            <a href="mailto:info@monra-security.nl" className="text-[#1A2B6D] underline">
              info@monra-security.nl
            </a>
          </p>
          <p className="mt-3">
            Meer over gegevensverwerking:{' '}
            <Link href="/privacy" className="text-[#1A2B6D] font-semibold underline">
              privacybeleid
            </Link>
          </p>
        </section>
      </article>
      <footer className="max-w-3xl mx-auto px-6 py-8 text-xs text-slate-400 flex flex-wrap gap-4">
        <Link href="/privacy" className="hover:text-[#1A2B6D]">Privacy</Link>
        <Link href="/cookies" className="hover:text-[#1A2B6D]">Cookies</Link>
        <Link href="/" className="hover:text-[#1A2B6D]">Home</Link>
      </footer>
    </main>
  )
}

function CookieCategory({
  name,
  description,
  required,
}: {
  name: string
  description: string
  required?: boolean
}) {
  return (
    <div className="border border-slate-200 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-1">
        <h3 className="font-bold text-[#1A2B6D]">{name}</h3>
        {required && (
          <span className="text-[10px] uppercase tracking-wide bg-[#11CFE7]/20 text-[#1A2B6D] px-2 py-0.5 rounded font-bold">
            Altijd aan
          </span>
        )}
      </div>
      <p>{description}</p>
    </div>
  )
}
