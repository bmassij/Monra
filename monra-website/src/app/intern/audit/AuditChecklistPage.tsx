'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { AUDIT_TAKKEN, PREVIEW_CARDS } from '@/lib/audit-checklist'

export default function AuditChecklistPage() {
  const pathname = usePathname()
  const shareable = pathname?.includes('/delen') ?? false

  return (
    <main className={`audit-page min-h-screen bg-[#f8fafc] text-[#1e293b] ${shareable ? 'shareable' : ''}`}>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .audit-page { background: #fff !important; }
          .audit-section { break-inside: avoid; page-break-inside: avoid; }
          input[type="checkbox"] { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
        .shareable .preview-mock { border: 1px dashed #cbd5e1; }
      `}</style>

      <header className="bg-gradient-to-br from-[#0a1540] to-[#1A2B6D] text-white px-6 py-10 print:py-6">
        <div className="max-w-4xl mx-auto">
          {!shareable && (
            <p className="text-xs text-[#11CFE7] mb-3 no-print uppercase tracking-widest font-bold">
              Intern · niet indexeren
            </p>
          )}
          <h1 className="text-2xl md:text-3xl font-black mb-2">
            {shareable ? 'Invullijst website-gegevens Monra' : 'Website-audit — gegevens verzamelen'}
          </h1>
          <p className="text-sm text-white/65 max-w-2xl leading-relaxed">
            {shareable
              ? 'Vink af wat u al heeft of vul ontbrekende gegevens in. Stuur deze pagina geprint of als PDF terug naar Monra.'
              : 'Vriendelijke checklist voor contactpersonen zonder digitale ervaring. Per tak: wat ontbreekt er nog voor de website?'}
          </p>
          {!shareable && (
            <div className="flex flex-wrap gap-3 mt-5 no-print">
              <button
                type="button"
                onClick={() => window.print()}
                className="rounded-md bg-[#11CFE7] px-4 py-2 text-sm font-bold text-[#1A2B6D]"
              >
                🖨 Afdrukken
              </button>
              <Link
                href="/intern/audit/delen"
                className="rounded-md border border-white/30 px-4 py-2 text-sm font-semibold text-white hover:bg-white/5"
              >
                📤 Deelbare versie
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Preview cards */}
      {!shareable && (
        <section className="max-w-4xl mx-auto px-6 py-8 no-print">
          <h2 className="text-lg font-bold text-[#1A2B6D] mb-4">Zo ziet het eruit op de website</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PREVIEW_CARDS.map(card => (
              <PreviewMock key={card.id} card={card} />
            ))}
          </div>
        </section>
      )}

      {/* Checklist per tak */}
      <div className="max-w-4xl mx-auto px-6 pb-16 space-y-10">
        {AUDIT_TAKKEN.map(tak => (
          <section key={tak.id} className="audit-section bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div
              className="px-5 py-4 flex items-center gap-3"
              style={{ background: `linear-gradient(135deg, ${tak.kleur}, ${tak.kleur}dd)` }}
            >
              <span className="text-2xl" aria-hidden>{tak.icon}</span>
              <h2 className="text-lg font-bold text-white">{tak.naam}</h2>
            </div>
            <ul className="divide-y divide-slate-100">
              {tak.items.map(item => (
                <li key={item.id} className="px-5 py-3 flex gap-3 items-start hover:bg-slate-50/80">
                  <input
                    type="checkbox"
                    id={`${tak.id}-${item.id}`}
                    className="mt-1 h-5 w-5 accent-[#11CFE7] shrink-0"
                  />
                  <label htmlFor={`${tak.id}-${item.id}`} className="flex-1 cursor-pointer">
                    <span className="block text-sm font-semibold text-[#0a1540]">{item.label}</span>
                    {item.hint && (
                      <span className="block text-xs text-slate-500 mt-0.5">Voorbeeld: {item.hint}</span>
                    )}
                    <span className="block mt-2 print:block hidden print:visible">
                      <span className="inline-block w-full max-w-md border-b border-slate-300 h-6" />
                    </span>
                    <input
                      type="text"
                      placeholder="Invullen indien nog niet compleet…"
                      className="mt-2 w-full max-w-md text-sm border border-slate-200 rounded px-3 py-1.5 print:hidden"
                    />
                  </label>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-xs text-slate-500">
        <p>Monra Security B.V. · Schuttersstraat 7, 6067 GE Linne · info@monra-security.nl</p>
        {!shareable && (
          <Link href="/" className="text-[#1A2B6D] underline mt-2 inline-block no-print">
            ← Terug naar website
          </Link>
        )}
      </footer>
    </main>
  )
}

function PreviewMock({ card }: { card: { id: string; title: string; description: string } }) {
  return (
    <div className="preview-mock rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-bold text-[#11CFE7] uppercase tracking-wide mb-2">Voorbeeld</p>
      <p className="text-sm font-bold text-[#1A2B6D] mb-2">{card.title}</p>
      <p className="text-xs text-slate-500 mb-3">{card.description}</p>
      <div className="rounded-md overflow-hidden border border-slate-100 text-xs">
        {card.id === 'phone' && (
          <div className="bg-[#1A2B6D] p-3 text-white font-bold flex items-center gap-2">
            <span>📞</span> 06 45398678
          </div>
        )}
        {card.id === 'email' && (
          <div className="p-3 text-[#1A2B6D] underline">info@monra-security.nl</div>
        )}
        {card.id === 'logo' && (
          <div className="bg-[#0a1540] p-4 flex items-center gap-2 border-b-2 border-[#11CFE7]/30">
            <div className="h-8 w-24 bg-white/90 rounded text-[8px] flex items-center justify-center text-[#1A2B6D] font-bold">
              LOGO
            </div>
            <div className="flex gap-1 ml-auto">
              <span className="text-[9px] text-white/50 border border-white/20 rounded-full px-2 py-0.5">Support</span>
            </div>
          </div>
        )}
        {card.id === 'address' && (
          <div className="p-3 flex gap-2 text-slate-600">
            <span>📍</span>
            <span>Schuttersstraat 7<br />6067 GE Linne</span>
          </div>
        )}
        {card.id === 'hours' && (
          <div className="p-3 text-slate-600 space-y-0.5">
            <div>Ma–Vr: 09:00 – 17:00</div>
            <div>Za: op afspraak</div>
          </div>
        )}
        {card.id === 'social' && (
          <div className="p-3 flex gap-2 text-lg">
            <span title="Facebook">📘</span>
            <span title="Instagram">📷</span>
            <span title="LinkedIn">💼</span>
          </div>
        )}
      </div>
    </div>
  )
}
