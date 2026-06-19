import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Monra Events Security — Senna Monsigneur | Evenementenbeveiliging',
  description: 'Monra Events Security door Senna Monsigneur — premium evenementenbeveiliging met 25+ jaar expertise. Festivals, VIP, congressen en ESO-opleiding.',
}

export default function EventsSecurityPage() {
  return (
    <main style={{
      fontFamily: "'Inter', sans-serif",
      background: '#080808',
      color: '#e2e8f0',
      minHeight: '100vh',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;600;700;800;900&display=swap');
        .es-heading { font-family: 'Playfair Display', Georgia, serif; }
        .es-gold { color: #C9A84C; }
        .es-btn-gold {
          background: linear-gradient(135deg, #C9A84C, #E8C76A);
          color: #080808;
          font-weight: 800;
          font-size: 14px;
          padding: 13px 28px;
          border-radius: 4px;
          display: inline-block;
          text-decoration: none;
          letter-spacing: .3px;
        }
        .es-btn-outline {
          border: 1px solid rgba(201,168,76,.4);
          color: #C9A84C;
          font-weight: 700;
          font-size: 14px;
          padding: 12px 24px;
          border-radius: 4px;
          display: inline-block;
          text-decoration: none;
        }
        .es-card {
          background: #111;
          border: 1px solid rgba(201,168,76,.15);
          border-radius: 8px;
          padding: 28px 24px;
          transition: border-color .2s;
        }
        .es-card:hover { border-color: rgba(201,168,76,.4); }
      `}</style>

      {/* Top banner */}
      <div style={{
        background: '#0a0a0a',
        borderBottom: '1px solid rgba(201,168,76,.15)',
        padding: '13px 32px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10,
      }}>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', letterSpacing: .5 }}>
          ✨ <strong style={{ color: '#C9A84C' }}>Monra Events Security</strong> — door Senna Monsigneur
        </span>
        <div style={{ display: 'flex', gap: 10 }}>
          <Link href="/" style={{ fontSize: 11, color: 'rgba(255,255,255,.35)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 20, padding: '4px 12px', textDecoration: 'none' }}>
            🛡️ Monra Security
          </Link>
          <Link href="/support" style={{ fontSize: 11, color: 'rgba(255,255,255,.35)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 20, padding: '4px 12px', textDecoration: 'none' }}>
            🤝 Monra Support
          </Link>
          <Link href="/groep" style={{ fontSize: 11, color: 'rgba(255,255,255,.35)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 20, padding: '4px 12px', textDecoration: 'none' }}>
            🏢 Monra Groep
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #080808 0%, #0f0f0f 50%, #080808 100%)',
        padding: '90px 48px 80px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(201,168,76,.1)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Gold accent lines */}
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 1, height: 60, background: 'linear-gradient(to bottom, transparent, #C9A84C)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 1, height: 60, background: 'linear-gradient(to top, transparent, #C9A84C)' }} />

        <div style={{ fontSize: 10, fontWeight: 700, color: '#C9A84C', textTransform: 'uppercase', letterSpacing: 5, marginBottom: 20 }}>
          Evenementenbeveiliging · VIP · ESO Opleiding
        </div>
        <h1 className="es-heading" style={{ fontSize: 'clamp(36px, 5.5vw, 76px)', fontWeight: 900, color: '#fff', lineHeight: 1.05, marginBottom: 10 }}>
          Monra Events
        </h1>
        <h1 className="es-heading" style={{ fontSize: 'clamp(36px, 5.5vw, 76px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 24 }}>
          <span style={{ color: '#C9A84C' }}>Security</span>
        </h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,.5)', maxWidth: 520, margin: '0 auto 14px', lineHeight: 1.9 }}>
          Premium evenementenbeveiliging door <em style={{ color: '#C9A84C', fontStyle: 'normal' }}>Senna Monsigneur</em> —
          gebouwd op 25+ jaar Monra-expertise, met een eigen frisse aanpak.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
          <a href="mailto:info@monra-events-security.nl" className="es-btn-gold">
            Offerte aanvragen →
          </a>
          <a href="#diensten" className="es-btn-outline">
            Onze diensten
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: 0, justifyContent: 'center', marginTop: 56, flexWrap: 'wrap' }}>
          {[
            { val: '25+', label: 'jaar Monra-ervaring' },
            { val: '30-40%', label: 'efficiënter door vaste teams' },
            { val: 'SVPB', label: 'gecertificeerd keurmerk' },
            { val: '24/7', label: 'bereikbaar' },
          ].map((s, i) => (
            <div key={s.label} style={{
              padding: '16px 32px',
              borderLeft: i === 0 ? 'none' : '1px solid rgba(201,168,76,.12)',
              textAlign: 'center',
            }}>
              <div className="es-heading" style={{ fontSize: 28, fontWeight: 900, color: '#C9A84C', marginBottom: 4 }}>{s.val}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,.35)', textTransform: 'uppercase', letterSpacing: 1 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Diensten */}
      <div id="diensten" style={{ padding: '72px 48px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#C9A84C', textTransform: 'uppercase', letterSpacing: 4, marginBottom: 8 }}>
          Wat wij doen
        </div>
        <div style={{ width: 40, height: 3, background: 'linear-gradient(90deg, #C9A84C, transparent)', marginBottom: 20 }} />
        <h2 className="es-heading" style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, color: '#fff', marginBottom: 40 }}>
          Diensten & <span style={{ color: '#C9A84C' }}>specialisaties</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
          {[
            { icon: '🎪', name: 'Festival & Concert Security', desc: 'Crowd management, toegangscontrole en backstage-beveiliging voor grote publieksevenementen. Van intieme shows tot 50.000+ bezoekers.' },
            { icon: '⚽', name: 'Sport & Voetbal', desc: 'Stadionbeveiliging, vak-stewards en supporter-management. Ervaring met eredivisie en amateurvoetbal op alle niveaus.' },
            { icon: '🎤', name: 'Congressen & Beurzen', desc: 'Professionele beveiliging voor zakelijke evenementen, conferenties en beurzen. Discreet, representatief en betrouwbaar.' },
            { icon: '💎', name: 'VIP Beveiliging', desc: 'Persoonlijke beveiliging voor artiesten, sporters en zakelijke VIP\'s. Close protection met internationale ervaring.' },
            { icon: '📋', name: 'Veiligheidsplannen', desc: 'Advisering en opstellen van veiligheidsplannen, risico-analyses en crowd management protocollen voor vergunningsaanvragen.' },
            { icon: '🎓', name: 'ESO Opleiding', desc: 'Event Security Officer opleiding — van theorie tot praktijk op echte evenementen. SBB erkend leerbedrijf.' },
          ].map(d => (
            <div key={d.name} className="es-card">
              <div style={{ fontSize: 30, marginBottom: 14 }}>{d.icon}</div>
              <h3 className="es-heading" style={{ fontSize: 17, color: '#fff', marginBottom: 10 }}>{d.name}</h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,.45)', lineHeight: 1.8 }}>{d.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Over Senna */}
      <div style={{ background: '#0d0d0d', borderTop: '1px solid rgba(201,168,76,.08)', borderBottom: '1px solid rgba(201,168,76,.08)', padding: '72px 48px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          {/* Corner decorations */}
          <div style={{ position: 'relative', display: 'inline-block', padding: '48px 64px' }}>
            {['top-0 left-0 border-t border-l', 'top-0 right-0 border-t border-r', 'bottom-0 left-0 border-b border-l', 'bottom-0 right-0 border-b border-r'].map((cls, i) => (
              <div key={i} style={{
                position: 'absolute',
                width: 28, height: 28,
                borderColor: 'rgba(201,168,76,.4)',
                borderStyle: 'solid',
                borderWidth: 0,
                ...(i === 0 ? { top: 0, left: 0, borderTopWidth: 1.5, borderLeftWidth: 1.5 } :
                  i === 1 ? { top: 0, right: 0, borderTopWidth: 1.5, borderRightWidth: 1.5 } :
                  i === 2 ? { bottom: 0, left: 0, borderBottomWidth: 1.5, borderLeftWidth: 1.5 } :
                  { bottom: 0, right: 0, borderBottomWidth: 1.5, borderRightWidth: 1.5 }),
              }} />
            ))}
            <div style={{ fontSize: 10, fontWeight: 700, color: '#C9A84C', textTransform: 'uppercase', letterSpacing: 5, marginBottom: 20 }}>
              Oprichtster
            </div>
            <h2 className="es-heading" style={{ fontSize: 'clamp(24px, 3vw, 42px)', color: '#fff', marginBottom: 20 }}>
              Senna Monsigneur
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,.5)', lineHeight: 1.9, maxWidth: 620, margin: '0 auto 16px' }}>
              Opgegroeid in het Monra-bedrijf heeft Senna de kneepjes van evenementenbeveiliging van binnenuit geleerd.
              Met haar eigen frisse visie — hospitality-first, no-nonsense aanpak — richt zij Monra Events Security op als
              zelfstandige tak binnen de Monra-familie.
            </p>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,.5)', lineHeight: 1.9, maxWidth: 620, margin: '0 auto' }}>
              &ldquo;Beveiliging hoeft niet koud of afstandelijk te zijn. Mijn team is gastvrij én alert — dat maakt het verschil.&rdquo;
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['SVPB Gecertificeerd', 'SBB Erkend Leerbedrijf', 'ESO Opleider', 'Wpbr Vergund'].map(b => (
                <span key={b} style={{ fontSize: 11, color: '#C9A84C', border: '1px solid rgba(201,168,76,.3)', borderRadius: 20, padding: '5px 14px' }}>
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ESO Opleiding */}
      <div style={{ padding: '72px 48px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#C9A84C', textTransform: 'uppercase', letterSpacing: 4, marginBottom: 8 }}>
          ESO Opleiding
        </div>
        <div style={{ width: 40, height: 3, background: 'linear-gradient(90deg, #C9A84C, transparent)', marginBottom: 20 }} />
        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <h2 className="es-heading" style={{ fontSize: 'clamp(22px, 3vw, 38px)', color: '#fff', marginBottom: 16 }}>
              Word <span style={{ color: '#C9A84C' }}>Event Security Officer</span>
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,.45)', lineHeight: 1.85, marginBottom: 24 }}>
              De ESO-opleiding bij Monra Events Security combineert theorie met echte praktijkervaring op evenementen.
              Na afronding ben je officieel gecertificeerd en direct inzetbaar in de evenementenbeveiliging.
            </p>
            <a href="mailto:info@monra-events-security.nl" className="es-btn-gold">
              Aanmelden voor opleiding →
            </a>
          </div>
          <div style={{ flex: 1, minWidth: 280 }}>
            {[
              { n: '01', t: 'Intake & oriëntatie', d: 'Kennismaking, nulmeting en persoonlijk leerplan op basis van jouw achtergrond.' },
              { n: '02', t: 'Theorie', d: 'Wetgeving, crowd management, communicatieprotocollen en veiligheidsplannen.' },
              { n: '03', t: 'Praktijktraining', d: 'Gesimuleerde scenario\'s: noodsituaties, conflicthantering en crowd control.' },
              { n: '04', t: 'Stage op evenementen', d: 'Werkervaring op echte evenementen onder begeleiding van gecertificeerde beveiligers.' },
              { n: '05', t: 'ESO Certificering', d: 'Examen en uitreiking van het officiële ESO-certificaat (SBB erkend).' },
            ].map((s, i) => (
              <div key={s.n} style={{ display: 'flex', gap: 16, paddingBottom: i < 4 ? 20 : 0, marginBottom: i < 4 ? 20 : 0, borderBottom: i < 4 ? '1px solid rgba(201,168,76,.08)' : 'none', alignItems: 'flex-start' }}>
                <div className="es-heading" style={{ fontSize: 28, fontWeight: 900, color: 'rgba(201,168,76,.2)', flexShrink: 0, lineHeight: 1, paddingTop: 2 }}>{s.n}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#C9A84C', marginBottom: 4 }}>{s.t}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', lineHeight: 1.7 }}>{s.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div style={{ background: '#0d0d0d', borderTop: '1px solid rgba(201,168,76,.08)', padding: '64px 48px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="es-heading" style={{ fontSize: 'clamp(24px, 3vw, 42px)', color: '#fff', marginBottom: 14 }}>
            Klaar om samen te werken?
          </h2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,.4)', marginBottom: 36 }}>
            Neem contact op voor een vrijblijvend gesprek over uw evenement of opleiding.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
            <a href="mailto:info@monra-events-security.nl" className="es-btn-gold">
              ✉ info@monra-events-security.nl
            </a>
            <a href="tel:0645398678" className="es-btn-outline">
              📞 06 45398678
            </a>
          </div>
          {/* Sibling sites */}
          <div style={{ borderTop: '1px solid rgba(201,168,76,.08)', paddingTop: 32 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,.2)', textTransform: 'uppercase', letterSpacing: 3, marginBottom: 16 }}>
              Onderdeel van de Monra-familie
            </div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/" style={{
                padding: '12px 20px', borderRadius: 6, border: '1px solid rgba(26,43,109,.5)',
                background: 'rgba(17,29,93,.2)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <span style={{ fontSize: 18 }}>🛡️</span>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#a0b4ff' }}>Monra Security</div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,.3)' }}>Evenementenbeveiliging</div>
                </div>
              </Link>
              <Link href="/support" style={{
                padding: '12px 20px', borderRadius: 6, border: '1px solid rgba(14,92,75,.5)',
                background: 'rgba(14,60,40,.2)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <span style={{ fontSize: 18 }}>🤝</span>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#1ABFA1' }}>Monra Support</div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,.3)' }}>Hospitality & zorg</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: '#050505', borderTop: '1px solid rgba(201,168,76,.06)', padding: '24px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,.2)' }}>
          © 2024 Monra Events Security · Senna Monsigneur · Linne
        </div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,.2)' }}>
          Onderdeel van de Monra-groep
        </div>
      </div>
    </main>
  )
}
