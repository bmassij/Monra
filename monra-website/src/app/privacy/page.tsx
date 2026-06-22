import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacybeleid — Monra Security B.V.',
  description: 'Privacybeleid (AVG) van Monra Security B.V.',
}

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacybeleid">
      <p className="text-sm text-slate-600 mb-6">
        Laatst bijgewerkt: juni 2024 · Versie 1.0
      </p>

      <Section title="1. Wie zijn wij?">
        <p>
          Monra Security B.V. (&quot;Monra&quot;, &quot;wij&quot;) is verantwoordelijk voor de verwerking van
          persoonsgegevens via deze website en onze contactkanalen.
        </p>
        <ul className="list-none mt-3 space-y-1 text-sm">
          <li><strong>Bedrijfsnaam:</strong> Monra Security B.V.</li>
          <li><strong>Adres:</strong> Schuttersstraat 7, 6067 GE Linne, Nederland</li>
          <li><strong>KVK:</strong> 89581806</li>
          <li><strong>E-mail:</strong>{' '}
            <a href="mailto:info@monra-security.nl" className="text-[#1A2B6D] underline">
              info@monra-security.nl
            </a>
          </li>
        </ul>
      </Section>

      <Section title="2. Welke gegevens verwerken wij?">
        <p>Wij kunnen de volgende categorieën verwerken:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Contactgegevens (naam, e-mail, telefoon) via formulieren of e-mail</li>
          <li>Inhoud van berichten die u ons stuurt</li>
          <li>Technische gegevens (IP-adres, browsertype) in serverlogs</li>
          <li>Cookie-voorkeuren (lokaal opgeslagen)</li>
        </ul>
      </Section>

      <Section title="3. Doeleinden en grondslagen (AVG)">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Uitvoering overeenkomst / offerte:</strong> beantwoorden van aanvragen en leveren van diensten.</li>
          <li><strong>Gerechtvaardigd belang:</strong> beveiliging van de website, fraudepreventie, verbetering van onze dienstverlening.</li>
          <li><strong>Toestemming:</strong> niet-noodzakelijke cookies (analytics, marketing) — alleen na uw keuze via de cookiebanner.</li>
          <li><strong>Wettelijke verplichting:</strong> administratie en fiscale bewaarplicht.</li>
        </ul>
      </Section>

      <Section title="4. Bewaartermijnen">
        <p>
          Contactaanvragen bewaren wij zolang nodig voor afhandeling en relatiebeheer, doorgaans maximaal
          2 jaar na laatste contact. Fiscale administratie: 7 jaar. Cookie-voorkeuren: 12 maanden (lokaal).
        </p>
      </Section>

      <Section title="5. Delen met derden">
        <p>
          Wij verkopen uw gegevens niet. Verwerkers (hosting, e-mail) kunnen gegevens verwerken onder
          verwerkersovereenkomst. Gegevens worden niet buiten de EER geplaatst tenzij met passende waarborgen.
        </p>
      </Section>

      <Section title="6. Uw rechten">
        <p>U heeft recht op inzage, rectificatie, verwijdering, beperking, dataportabiliteit en bezwaar.
          Klachten kunt u indienen bij de Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl).</p>
        <p className="mt-2">
          Verzoeken:{' '}
          <a href="mailto:info@monra-security.nl" className="text-[#1A2B6D] underline">
            info@monra-security.nl
          </a>
        </p>
      </Section>

      <Section title="7. Beveiliging">
        <p>
          Wij nemen passende technische en organisatorische maatregelen om persoonsgegevens te beschermen
          tegen verlies of ongeautoriseerde toegang.
        </p>
      </Section>

      <Section title="8. Cookies">
        <p>
          Zie ons{' '}
          <Link href="/cookies" className="text-[#1A2B6D] font-semibold underline">
            cookiebeleid
          </Link>{' '}
          voor details over cookiecategorieën en beheer van uw voorkeuren.
        </p>
      </Section>
    </LegalLayout>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold text-[#1A2B6D] mb-3">{title}</h2>
      <div className="text-sm text-slate-700 leading-relaxed space-y-2">{children}</div>
    </section>
  )
}

function LegalLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-gradient-to-br from-[#0a1540] to-[#1A2B6D] px-6 py-12 text-white">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-sm text-[#11CFE7] hover:underline mb-4 inline-block">
            ← Terug naar Monra Security
          </Link>
          <h1 className="text-3xl md:text-4xl font-black">{title}</h1>
          <p className="text-white/60 text-sm mt-2">Monra Security B.V. · AVG/GDPR</p>
        </div>
      </header>
      <article className="max-w-3xl mx-auto px-6 py-10 bg-white border-x border-b border-slate-200 shadow-sm">
        {children}
      </article>
      <footer className="max-w-3xl mx-auto px-6 py-8 text-xs text-slate-400 flex flex-wrap gap-4">
        <Link href="/privacy" className="hover:text-[#1A2B6D]">Privacy</Link>
        <Link href="/cookies" className="hover:text-[#1A2B6D]">Cookies</Link>
        <Link href="/" className="hover:text-[#1A2B6D]">Home</Link>
      </footer>
    </main>
  )
}
