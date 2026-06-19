import Link from 'next/link'
import Image from 'next/image'
import { EventsHeroSlider } from '@/components/EventsHeroSlider'
import { EventsPhotoGallery } from '@/components/EventsPhotoGallery'
import { SubsiteNav } from '@/components/SubsiteNav'
import { MonraChat } from '@/components/MonraChat'
import { EVENTS_NAV, FAMILIE_FROM_EVENTS } from '@/lib/subsite-nav'
import { EVENTS_IMAGES } from '@/lib/events-images'

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
        .es-accent { color: #EF4444; }
        .es-btn-primary {
          background: linear-gradient(135deg, #DC2626, #EF4444);
          color: #fff;
          font-weight: 800;
          font-size: 14px;
          padding: 13px 28px;
          border-radius: 4px;
          display: inline-block;
          text-decoration: none;
          letter-spacing: .3px;
        }
        .es-btn-outline {
          border: 1px solid rgba(239,68,68,.4);
          color: #EF4444;
          font-weight: 700;
          font-size: 14px;
          padding: 12px 24px;
          border-radius: 4px;
          display: inline-block;
          text-decoration: none;
        }
        .es-card {
          background: #111;
          border: 1px solid rgba(220,38,38,.15);
          border-radius: 8px;
          padding: 28px 24px;
          transition: border-color .2s;
        }
        .es-card:hover { border-color: rgba(239,68,68,.4); }
      `}</style>

      <SubsiteNav
        theme="events"
        siteName="Monra Events Security"
        logoSrc={EVENTS_IMAGES.logo}
        logoAlt="Monra Events Security"
        navLinks={EVENTS_NAV}
        ctaLabel="Offerte aanvragen"
        ctaHref="mailto:info@monra-events-security.nl"
        familieLinks={FAMILIE_FROM_EVENTS}
      />

      {/* Hero slider */}
      <EventsHeroSlider />

      {/* Stats */}
      <div style={{
        background: '#0a0a0a',
        borderBottom: '1px solid rgba(220,38,38,.1)',
        display: 'flex', gap: 0, justifyContent: 'center', flexWrap: 'wrap',
        padding: '24px 16px',
      }}>
        {[
          { val: '25+', label: 'jaar Monra-ervaring' },
          { val: '30-40%', label: 'efficiënter door vaste teams' },
          { val: 'SVPB', label: 'gecertificeerd keurmerk' },
          { val: '24/7', label: 'bereikbaar' },
        ].map((s, i) => (
          <div key={s.label} style={{
            padding: '12px 28px',
            borderLeft: i === 0 ? 'none' : '1px solid rgba(220,38,38,.12)',
            textAlign: 'center',
          }}>
            <div className="es-heading" style={{ fontSize: 24, fontWeight: 900, color: '#EF4444', marginBottom: 4 }}>{s.val}</div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,.35)', textTransform: 'uppercase', letterSpacing: 1 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Diensten */}
      <div id="diensten" style={{ padding: '72px 48px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#EF4444', textTransform: 'uppercase', letterSpacing: 4, marginBottom: 8 }}>
          Wat wij doen
        </div>
        <div style={{ width: 40, height: 3, background: 'linear-gradient(90deg, #DC2626, transparent)', marginBottom: 20 }} />
        <h2 className="es-heading" style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, color: '#fff', marginBottom: 40 }}>
          Diensten & <span className="es-accent">specialisaties</span>
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

      {/* Foto gallery */}
      <EventsPhotoGallery />

      {/* Over Senna */}
      <div id="senna" style={{ background: '#0d0d0d', borderTop: '1px solid rgba(220,38,38,.08)', borderBottom: '1px solid rgba(220,38,38,.08)', padding: '72px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 56, flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: '1 1 300px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: -10, left: -10, width: 50, height: 50, borderTop: '2px solid #DC2626', borderLeft: '2px solid #DC2626', borderRadius: '4px 0 0 0' }} />
            <div style={{ position: 'absolute', bottom: -10, right: -10, width: 50, height: 50, borderBottom: '2px solid #DC2626', borderRight: '2px solid #DC2626', borderRadius: '0 0 4px 0' }} />
            <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(220,38,38,.2)', position: 'relative', aspectRatio: '3/4', maxWidth: 360 }}>
              <Image
                src={EVENTS_IMAGES.teamBamboo}
                alt="Senna Monsigneur en Monra Events Security team"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 360px"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,.7) 0%, transparent 45%)' }} />
              <div style={{ position: 'absolute', bottom: 20, left: 20, background: 'rgba(8,8,8,.85)', border: '1px solid rgba(220,38,38,.3)', borderRadius: 6, padding: '12px 18px' }}>
                <div className="es-heading" style={{ fontSize: 20, fontWeight: 900, color: '#EF4444' }}>Senna</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,.5)', textTransform: 'uppercase', letterSpacing: 1.5 }}>Oprichter & Directeur</div>
              </div>
            </div>
          </div>
          <div style={{ flex: '1 1 340px' }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#EF4444', textTransform: 'uppercase', letterSpacing: 5, marginBottom: 16 }}>
              Oprichtster
            </div>
            <h2 className="es-heading" style={{ fontSize: 'clamp(24px, 3vw, 42px)', color: '#fff', marginBottom: 20 }}>
              Senna Monsigneur
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,.5)', lineHeight: 1.9, marginBottom: 16 }}>
              Opgegroeid in het Monra-bedrijf heeft Senna de kneepjes van evenementenbeveiliging van binnenuit geleerd.
              Met haar eigen frisse visie — hospitality-first, no-nonsense aanpak — richt zij Monra Events Security op als
              zelfstandige tak binnen de Monra-familie.
            </p>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,.5)', lineHeight: 1.9, marginBottom: 24, fontStyle: 'italic' }}>
              &ldquo;Beveiliging hoeft niet koud of afstandelijk te zijn. Mijn team is gastvrij én alert — dat maakt het verschil.&rdquo;
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {['SVPB Gecertificeerd', 'SBB Erkend Leerbedrijf', 'ESO Opleider', 'Wpbr Vergund'].map(b => (
                <span key={b} style={{ fontSize: 11, color: '#EF4444', border: '1px solid rgba(239,68,68,.3)', borderRadius: 20, padding: '5px 14px' }}>
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ESO Opleiding */}
      <div id="opleiding" style={{ padding: '72px 48px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#EF4444', textTransform: 'uppercase', letterSpacing: 4, marginBottom: 8 }}>
          ESO Opleiding
        </div>
        <div style={{ width: 40, height: 3, background: 'linear-gradient(90deg, #DC2626, transparent)', marginBottom: 20 }} />
        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <h2 className="es-heading" style={{ fontSize: 'clamp(22px, 3vw, 38px)', color: '#fff', marginBottom: 16 }}>
              Word <span className="es-accent">Event Security Officer</span>
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,.45)', lineHeight: 1.85, marginBottom: 24 }}>
              De ESO-opleiding bij Monra Events Security combineert theorie met echte praktijkervaring op evenementen.
              Na afronding ben je officieel gecertificeerd en direct inzetbaar in de evenementenbeveiliging.
            </p>
            <a href="mailto:info@monra-events-security.nl" className="es-btn-primary">
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
              <div key={s.n} style={{ display: 'flex', gap: 16, paddingBottom: i < 4 ? 20 : 0, marginBottom: i < 4 ? 20 : 0, borderBottom: i < 4 ? '1px solid rgba(220,38,38,.08)' : 'none', alignItems: 'flex-start' }}>
                <div className="es-heading" style={{ fontSize: 28, fontWeight: 900, color: 'rgba(239,68,68,.2)', flexShrink: 0, lineHeight: 1, paddingTop: 2 }}>{s.n}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#EF4444', marginBottom: 4 }}>{s.t}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', lineHeight: 1.7 }}>{s.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" style={{ background: '#0d0d0d', borderTop: '1px solid rgba(220,38,38,.08)', padding: '64px 48px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <Image
            src={EVENTS_IMAGES.logo}
            alt="Monra Events Security"
            width={180}
            height={72}
            style={{ height: 56, width: 'auto', objectFit: 'contain', margin: '0 auto 28px' }}
          />
          <h2 className="es-heading" style={{ fontSize: 'clamp(24px, 3vw, 42px)', color: '#fff', marginBottom: 14 }}>
            Klaar om samen te werken?
          </h2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,.4)', marginBottom: 36 }}>
            Neem contact op voor een vrijblijvend gesprek over uw evenement of opleiding.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
            <a href="mailto:info@monra-events-security.nl" className="es-btn-primary">
              ✉ info@monra-events-security.nl
            </a>
            <a href="tel:0645398678" className="es-btn-outline">
              📞 06 45398678
            </a>
          </div>
          <div style={{ borderTop: '1px solid rgba(220,38,38,.08)', paddingTop: 32 }}>
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
      <div style={{ background: '#050505', borderTop: '1px solid rgba(220,38,38,.06)', padding: '24px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,.2)' }}>
          © 2024 Monra Events Security · Senna Monsigneur · Linne
        </div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,.2)' }}>
          Onderdeel van de Monra-groep
        </div>
      </div>

      <MonraChat site="events" />
    </main>
  )
}
