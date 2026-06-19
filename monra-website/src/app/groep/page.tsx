'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import { useState } from 'react'

// Quiz stap type
type QuizStep = {
  vraag: string
  opties: { label: string; icon: string; waarde: string }[]
}

const QUIZ_STAPPEN: QuizStep[] = [
  {
    vraag: 'Wat heeft u nodig?',
    opties: [
      { label: 'Beveiliging & veiligheid', icon: '🛡️', waarde: 'security' },
      { label: 'Personeel & hospitality', icon: '🤝', waarde: 'support' },
      { label: 'Evenementenbeveiliging', icon: '✨', waarde: 'events' },
      { label: 'Ik weet het nog niet', icon: '🤔', waarde: 'onzeker' },
    ],
  },
  {
    vraag: 'Wat voor type activiteit?',
    opties: [
      { label: 'Festival of concert', icon: '🎪', waarde: 'festival' },
      { label: 'Zakelijk evenement', icon: '💼', waarde: 'zakelijk' },
      { label: 'Sport of voetbal', icon: '⚽', waarde: 'sport' },
      { label: 'Object of locatie', icon: '🏢', waarde: 'object' },
    ],
  },
]

const UITKOMST: Record<string, { href: string; naam: string; kleur: string; uitleg: string }> = {
  security: { href: '/', naam: 'Monra Security', kleur: '#1A2B6D', uitleg: 'Gecertificeerde beveiliging voor elk evenement of locatie.' },
  support: { href: '/support', naam: 'Monra Support', kleur: '#0E5C4B', uitleg: 'Hospitality, BHV, EHBO en servicepersoneel op maat.' },
  events: { href: '/events-security', naam: 'Monra Events Security', kleur: '#8B6914', uitleg: 'Premium evenementenbeveiliging door Senna Monsigneur.' },
  onzeker: { href: '/', naam: 'Monra Security', kleur: '#1A2B6D', uitleg: 'Begin bij onze hoofdsite — wij helpen u verder.' },
  festival: { href: '/events-security', naam: 'Monra Events Security', kleur: '#8B6914', uitleg: 'Specialist in festivals, concerten en crowd management.' },
  zakelijk: { href: '/', naam: 'Monra Security', kleur: '#1A2B6D', uitleg: 'Professionele beveiliging voor zakelijke evenementen.' },
  sport: { href: '/events-security', naam: 'Monra Events Security', kleur: '#8B6914', uitleg: 'Stadionbeveiliging en supporter-management.' },
  object: { href: '/', naam: 'Monra Security', kleur: '#1A2B6D', uitleg: 'Objectbeveiliging, surveillance en toegangscontrole.' },
}

function BeveiligingsWijzer() {
  const [stap, setStap] = useState(0)
  const [antwoorden, setAntwoorden] = useState<string[]>([])
  const [klaar, setKlaar] = useState(false)

  const kiesOptie = (waarde: string) => {
    const nieuw = [...antwoorden, waarde]
    setAntwoorden(nieuw)
    if (stap < QUIZ_STAPPEN.length - 1 && waarde !== 'onzeker') {
      setStap(stap + 1)
    } else {
      setKlaar(true)
    }
  }

  const uitkomst = klaar ? (UITKOMST[antwoorden[0]] ?? UITKOMST.onzeker) : null

  const reset = () => { setStap(0); setAntwoorden([]); setKlaar(false) }

  return (
    <div style={{
      background: '#fff',
      border: '1px solid #e2e8f0',
      borderRadius: 16,
      padding: '40px 36px',
      maxWidth: 560,
      margin: '0 auto',
      boxShadow: '0 4px 40px rgba(26,43,109,.08)',
    }}>
      {!klaar ? (
        <>
          {/* Progress */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 28 }}>
            {QUIZ_STAPPEN.map((_, i) => (
              <div key={i} style={{
                flex: 1, height: 4, borderRadius: 2,
                background: i <= stap ? '#1A2B6D' : '#e2e8f0',
                transition: 'background .3s',
              }} />
            ))}
          </div>
          <div style={{ fontSize: 11, color: '#94a3b8', marginBottom: 10 }}>
            Vraag {stap + 1} van {QUIZ_STAPPEN.length}
          </div>
          <h3 style={{ fontSize: 20, fontWeight: 800, color: '#1A2B6D', marginBottom: 24 }}>
            {QUIZ_STAPPEN[stap].vraag}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {QUIZ_STAPPEN[stap].opties.map(opt => (
              <button
                key={opt.waarde}
                onClick={() => kiesOptie(opt.waarde)}
                style={{
                  background: '#f8fafc', border: '1.5px solid #e2e8f0',
                  borderRadius: 10, padding: '18px 14px', cursor: 'pointer',
                  textAlign: 'left', transition: 'all .15s',
                  display: 'flex', flexDirection: 'column', gap: 8,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#1A2B6D'
                  e.currentTarget.style.background = '#f0f4ff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e2e8f0'
                  e.currentTarget.style.background = '#f8fafc'
                }}
              >
                <span style={{ fontSize: 24 }}>{opt.icon}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#1e293b' }}>{opt.label}</span>
              </button>
            ))}
          </div>
        </>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
          <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 2 }}>
            Wij adviseren
          </div>
          <h3 style={{ fontSize: 24, fontWeight: 900, color: uitkomst!.kleur, marginBottom: 12 }}>
            {uitkomst!.naam}
          </h3>
          <p style={{ fontSize: 14, color: '#64748b', marginBottom: 28, lineHeight: 1.7 }}>
            {uitkomst!.uitleg}
          </p>
          <Link href={uitkomst!.href} style={{
            display: 'inline-block',
            background: uitkomst!.kleur,
            color: '#fff', fontWeight: 800, fontSize: 14,
            padding: '13px 28px', borderRadius: 8, textDecoration: 'none',
            marginBottom: 14,
          }}>
            Bezoek {uitkomst!.naam} →
          </Link>
          <br />
          <button onClick={reset} style={{
            fontSize: 12, color: '#94a3b8', background: 'none', border: 'none',
            cursor: 'pointer', textDecoration: 'underline', marginTop: 8,
          }}>
            Opnieuw beginnen
          </button>
        </div>
      )}
    </div>
  )
}

export default function GroepPage() {
  return (
    <main style={{ fontFamily: 'Inter, sans-serif', background: '#f8fafc', color: '#1e293b', minHeight: '100vh' }}>

      {/* Hero / header */}
      <div style={{
        background: 'linear-gradient(135deg, #0a1540 0%, #1A2B6D 60%, #0f1f5c 100%)',
        padding: '80px 48px 64px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decoratieve cirkels */}
        <div style={{ position: 'absolute', top: -80, right: -80, width: 320, height: 320, borderRadius: '50%', background: 'rgba(17,207,231,.04)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 240, height: 240, borderRadius: '50%', background: 'rgba(17,207,231,.03)', pointerEvents: 'none' }} />

        <div style={{ fontSize: 10, fontWeight: 700, color: '#11CFE7', textTransform: 'uppercase', letterSpacing: 5, marginBottom: 18 }}>
          De Monra Groep
        </div>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 68px)', fontWeight: 900, color: '#fff', lineHeight: 1.06, marginBottom: 18 }}>
          Eén groep.<br />
          <span style={{ color: '#11CFE7' }}>Drie specialismen.</span>
        </h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,.55)', maxWidth: 540, margin: '0 auto', lineHeight: 1.9 }}>
          Monra staat voor veiligheid, gastvrijheid en professionaliteit. Onze drie takken bedienen elk een eigen doelgroep — met één gedeelde cultuur.
        </p>

        {/* Stats */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 0, marginTop: 48, flexWrap: 'wrap' }}>
          {[
            { val: '25+', label: 'jaar ervaring' },
            { val: '3', label: 'gespecialiseerde takken' },
            { val: 'SVPB', label: 'gecertificeerd keurmerk' },
            { val: '24/7', label: 'bereikbaar' },
          ].map((s, i) => (
            <div key={s.label} style={{
              padding: '14px 28px',
              borderLeft: i === 0 ? 'none' : '1px solid rgba(17,207,231,.12)',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 26, fontWeight: 900, color: '#11CFE7', marginBottom: 4 }}>{s.val}</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,.3)', textTransform: 'uppercase', letterSpacing: 1 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Drie takken */}
      <div style={{ padding: '72px 48px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#11CFE7', textTransform: 'uppercase', letterSpacing: 4, marginBottom: 10 }}>
            Onze organisatie
          </div>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, color: '#0a1540' }}>
            Kies uw specialisme
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>

          {/* Monra Security */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{
              background: '#fff', borderRadius: 16, overflow: 'hidden',
              border: '1px solid #e2e8f0', transition: 'transform .2s, box-shadow .2s',
              cursor: 'pointer', height: '100%',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(26,43,109,.15)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{ background: 'linear-gradient(135deg, #0a1540, #1A2B6D)', padding: '36px 32px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, borderRadius: '50%', background: 'rgba(17,207,231,.08)' }} />
                <div style={{ fontSize: 10, fontWeight: 700, color: '#11CFE7', textTransform: 'uppercase', letterSpacing: 3, marginBottom: 14 }}>
                  Hoofdtak · Opgericht 1999
                </div>
                <div style={{ fontSize: 44, marginBottom: 12 }}>🛡️</div>
                <h3 style={{ fontSize: 24, fontWeight: 900, color: '#fff', marginBottom: 8 }}>Monra Security</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,.55)', lineHeight: 1.7 }}>
                  Gecertificeerde evenementenbeveiliging — SVPB keurmerk, vaste teams, 30-40% efficiënter.
                </p>
              </div>
              <div style={{ padding: '24px 32px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                  {['Evenementen', 'Festivals', 'Surveillance', 'ESO Opleiding'].map(t => (
                    <span key={t} style={{ fontSize: 11, color: '#1A2B6D', background: '#f0f4ff', borderRadius: 20, padding: '4px 12px' }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#1A2B6D', fontSize: 13, fontWeight: 800 }}>
                  Bezoek Monra Security <span>→</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Monra Support */}
          <Link href="/support" style={{ textDecoration: 'none' }}>
            <div style={{
              background: '#fff', borderRadius: 16, overflow: 'hidden',
              border: '1px solid #e2e8f0', transition: 'transform .2s, box-shadow .2s',
              cursor: 'pointer', height: '100%',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(14,92,75,.15)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{ background: 'linear-gradient(135deg, #062E26, #0E5C4B)', padding: '36px 32px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, borderRadius: '50%', background: 'rgba(26,191,161,.08)' }} />
                <div style={{ fontSize: 10, fontWeight: 700, color: '#1ABFA1', textTransform: 'uppercase', letterSpacing: 3, marginBottom: 14 }}>
                  Hospitality & Zorg · KVK 98875825
                </div>
                <div style={{ fontSize: 44, marginBottom: 12 }}>🤝</div>
                <h3 style={{ fontSize: 24, fontWeight: 900, color: '#fff', marginBottom: 8 }}>Monra Support BV</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,.55)', lineHeight: 1.7 }}>
                  9 specialismen: van BHV en EHBO tot barpersoneel, brandwachten en gastheren.
                </p>
              </div>
              <div style={{ padding: '24px 32px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                  {['BHV & EHBO', 'Brandwachten', 'Barpersoneel', 'Toezichthouders'].map(t => (
                    <span key={t} style={{ fontSize: 11, color: '#0E5C4B', background: '#f0faf7', borderRadius: 20, padding: '4px 12px' }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#0E5C4B', fontSize: 13, fontWeight: 800 }}>
                  Bezoek Monra Support <span>→</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Monra Events Security */}
          <Link href="/events-security" style={{ textDecoration: 'none' }}>
            <div style={{
              background: '#fff', borderRadius: 16, overflow: 'hidden',
              border: '1px solid #e2e8f0', transition: 'transform .2s, box-shadow .2s',
              cursor: 'pointer', height: '100%',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(201,168,76,.15)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{ background: 'linear-gradient(135deg, #080808, #1a1400)', padding: '36px 32px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, borderRadius: '50%', background: 'rgba(201,168,76,.06)' }} />
                <div style={{ fontSize: 10, fontWeight: 700, color: '#C9A84C', textTransform: 'uppercase', letterSpacing: 3, marginBottom: 14 }}>
                  Nieuw · Senna Monsigneur
                </div>
                <div style={{ fontSize: 44, marginBottom: 12 }}>✨</div>
                <h3 style={{ fontSize: 24, fontWeight: 900, color: '#fff', marginBottom: 8 }}>Monra Events Security</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,.45)', lineHeight: 1.7 }}>
                  Premium evenementenbeveiliging met een eigen identiteit. Festivals, VIP, congressen en ESO-opleiding.
                </p>
              </div>
              <div style={{ padding: '24px 32px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                  {['Festivals', 'VIP Security', 'Congressen', 'ESO Opleiding'].map(t => (
                    <span key={t} style={{ fontSize: 11, color: '#8B6914', background: '#fdf8ec', borderRadius: 20, padding: '4px 12px' }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#8B6914', fontSize: 13, fontWeight: 800 }}>
                  Bezoek Events Security <span>→</span>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>

      {/* Beveiligingswijzer */}
      <div style={{ background: '#fff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '72px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#11CFE7', textTransform: 'uppercase', letterSpacing: 4, marginBottom: 10 }}>
              Hulp nodig?
            </div>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 900, color: '#0a1540', marginBottom: 12 }}>
              Beveiligingswijzer
            </h2>
            <p style={{ fontSize: 14, color: '#64748b', maxWidth: 420, margin: '0 auto' }}>
              Beantwoord 2 korte vragen — wij wijzen u naar de juiste Monra-tak.
            </p>
          </div>
          <BeveiligingsWijzer />
        </div>
      </div>

      {/* Over de Monra Groep */}
      <div style={{ padding: '72px 48px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#1A2B6D', textTransform: 'uppercase', letterSpacing: 4, marginBottom: 10 }}>
              Onze missie
            </div>
            <div style={{ width: 40, height: 4, background: '#11CFE7', borderRadius: 2, marginBottom: 20 }} />
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 900, color: '#0a1540', marginBottom: 16 }}>
              Vaste mensen, niet wisselend personeel
            </h2>
            <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.9, marginBottom: 16 }}>
              De kracht van Monra zit in vaste, goed getrainde teams. Geen naamloze uitzendkrachten — maar mensen die uw evenement kennen, uw merk begrijpen en terugkomen.
            </p>
            <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.9 }}>
              Dat maakt ons 30-40% efficiënter dan vergelijkbare bedrijven, en het maakt het verschil voor uw bezoekers.
            </p>
          </div>
          <div style={{ flex: 1, minWidth: 280, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { icon: '🔍', t: 'VOG gescreend', d: 'Elke medewerker heeft een geldig Verklaring Omtrent Gedrag' },
              { icon: '🎯', t: 'Merkfit', d: 'Briefing op maat zodat onze mensen bij uw organisatie passen' },
              { icon: '📋', t: 'SVPB keurmerk', d: 'Gecertificeerd — voldoet aan alle wettelijke eisen voor beveiliging' },
              { icon: '🔄', t: 'Back-uppool', d: 'Altijd extra capaciteit beschikbaar, ook op korte termijn' },
            ].map(u => (
              <div key={u.t} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 10, padding: '18px 16px' }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>{u.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0a1540', marginBottom: 5 }}>{u.t}</div>
                <div style={{ fontSize: 11, color: '#94a3b8', lineHeight: 1.65 }}>{u.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div style={{
        background: 'linear-gradient(135deg, #0a1540, #1A2B6D)',
        padding: '64px 48px',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 900, color: '#fff', marginBottom: 14 }}>
          Niet zeker welke tak bij u past?
        </h2>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,.5)', marginBottom: 32 }}>
          Bel of mail ons — wij kijken samen wat het beste bij uw situatie past.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:0645398678" style={{
            background: '#11CFE7', color: '#1A2B6D', fontWeight: 800, fontSize: 14,
            padding: '13px 28px', borderRadius: 6, display: 'inline-block', textDecoration: 'none',
          }}>
            📞 06 45398678
          </a>
          <a href="mailto:info@monra-security.nl" style={{
            border: '1px solid rgba(17,207,231,.4)', color: '#11CFE7', fontWeight: 700, fontSize: 14,
            padding: '12px 24px', borderRadius: 6, display: 'inline-block', textDecoration: 'none',
          }}>
            ✉ info@monra-security.nl
          </a>
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: '#050a1a', padding: '28px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,.25)' }}>
          © 2024 De Monra Groep · Schuttersstraat 7, 6067 GE Linne
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <Link href="/" style={{ fontSize: 11, color: 'rgba(255,255,255,.25)', textDecoration: 'none' }}>Security</Link>
          <Link href="/support" style={{ fontSize: 11, color: 'rgba(255,255,255,.25)', textDecoration: 'none' }}>Support</Link>
          <Link href="/events-security" style={{ fontSize: 11, color: 'rgba(255,255,255,.25)', textDecoration: 'none' }}>Events Security</Link>
        </div>
      </div>

    </main>
  )
}
