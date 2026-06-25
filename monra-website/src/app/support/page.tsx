import Link from 'next/link'
import { SubsiteNav } from '@/components/SubsiteNav'
import { MonraChat } from '@/components/MonraChat'
import { SUPPORT_NAV, getFamilieFromSupport } from '@/lib/subsite-nav'
import { BRAND_LOGOS, BRAND_LOGO_ALT, BRAND_ICONS } from '@/lib/brand-logos'

export default function SupportPage() {
  return (
    <main style={{
      fontFamily: 'Inter, sans-serif',
      background: '#e9ffe0',
      color: '#0c0c0c',
      minHeight: '100vh',
    }}>
      <style>{`
        .support-card {
          background: #fff;
          border: 1px solid #e9ffe0;
          border-radius: 14px;
          padding: 28px 24px;
          border-top: 4px solid transparent;
          box-shadow: 0 8px 22px rgba(0,0,0,.06);
          transition: border-top-color .2s, box-shadow .2s, transform .2s;
        }
        .support-card:hover {
          border-top-color: #3CB138;
          box-shadow: 0 15px 35px rgba(0,0,0,.10);
          transform: translateY(-3px);
        }
      `}</style>

      <SubsiteNav
        theme="support"
        siteName="Monra Support BV"
        wordmarkSrc={BRAND_LOGOS.supportWordmark}
        wordmarkFallbackSrc={BRAND_LOGOS.supportWordmarkFallback}
        iconSrc={BRAND_ICONS.support}
        logoAlt={BRAND_LOGO_ALT.supportWordmark}
        logoPreserveColors
        navTagline="Hospitality · Toezicht · Zorg"
        navLinks={SUPPORT_NAV}
        ctaLabel="Personeel aanvragen"
        ctaHref="mailto:info@monra-support.nl"
        familieLinks={getFamilieFromSupport()}
      />

      {/* Hero — origineel monra-support.nl palet */}
      <div id="home" style={{
        background: '#0c0c0c',
        padding: '88px 48px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(135deg, rgba(42,138,42,.42) 0%, transparent 42%, rgba(12,12,12,.9) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 80% 60% at 75% 40%, rgba(185,255,130,.18) 0%, transparent 55%)',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 10, fontWeight: 800, color: '#b9ff82', textTransform: 'uppercase', letterSpacing: 3.5, marginBottom: 20 }}>
            <span style={{ width: 36, height: 2, background: '#b9ff82', flexShrink: 0 }} />
            Hospitality · Toezicht · Zorg
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 900, color: '#fff', lineHeight: 1.08, marginBottom: 20, letterSpacing: '-0.02em' }}>
            Monra <span style={{ color: '#b9ff82' }}>Support</span> BV
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(247,255,242,.78)', maxWidth: 560, margin: '0 auto 36px', lineHeight: 1.85 }}>
            Ondersteuningsprofessionals voor hospitality, veiligheid en zorg — flexibel inzetbaar, altijd gastvrij.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" style={{
              background: '#3CB138', color: '#f7fff2', fontWeight: 800,
              fontSize: 14, padding: '13px 28px', borderRadius: 999, display: 'inline-block', textDecoration: 'none',
              boxShadow: '0 10px 25px rgba(60, 177, 56, 0.3)',
            }}>
              Personeel aanvragen →
            </a>
            <a href="tel:0645398678" style={{
              border: '1px solid rgba(185,255,130,.45)', color: '#b9ff82', fontWeight: 700,
              fontSize: 14, padding: '12px 24px', borderRadius: 999, display: 'inline-block', textDecoration: 'none',
            }}>
              06 45398678
            </a>
          </div>
        </div>
      </div>

      {/* 9 Diensten */}
      <div id="diensten" style={{ padding: '72px 48px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#3CB138', textTransform: 'uppercase', letterSpacing: 4, marginBottom: 8 }}>
          Onze 9 diensten
        </div>
        <div style={{ width: 44, height: 4, background: 'linear-gradient(90deg, #3CB138, #2a8a2a)', borderRadius: 2, marginBottom: 20 }} />
        <h2 style={{ fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 900, color: '#2a8a2a', marginBottom: 40 }}>
          Voor elk evenement de juiste professional
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {[
            { icon: '🤝', name: 'Servicemedewerkers', desc: 'Vriendelijke frontoffice-ondersteuning voor kaartcontrole, informatieverstrekking en publieksbegeleiding.' },
            { icon: '👁️', name: 'Toezichthouders', desc: 'Gastvrije veiligheid met focus op preventie en naleving van huisregels — zichtbaar en benaderbaar.' },
            { icon: '🎩', name: 'Gastheren & -vrouwen', desc: 'Professioneel ontvangst, crowd management en VIP-begeleiding. Het visitekaartje van uw evenement.' },
            { icon: '🌙', name: 'Nachtbewaking', desc: 'Discrete object- en terreinbewaking buiten openingstijden. Zichtbare aanwezigheid die afschrikt en geruststelt.' },
            { icon: '🍽️', name: 'Serveersters & serveerders', desc: 'Representatief horecapersoneel voor bediening, banqueting en events. Ervaren, gastgericht en professioneel.' },
            { icon: '🍺', name: 'Barpersoneel', desc: 'Ervaren barcrew met kennis van mise-en-place, cocktailbasis en hygiëneregels (HACCP).' },
            { icon: '🦺', name: "BHV'ers", desc: 'Bedrijfshulpverlening met kennis van ontruiming, noodscenario\'s en communicatieprotocollen.' },
            { icon: '❤️', name: "EHBO'ers", desc: 'Gecertificeerde eerstehulpverleners met AED-gebruik, wondzorg en nazorg.' },
            { icon: '🔥', name: 'Brandwachten', desc: 'Gecertificeerde brandwacht voor toezicht, preventie en directe inzet bij heetwerkzaamheden. 24/7 landelijk.' },
          ].map(d => (
            <div key={d.name} className="support-card">
              <div style={{ fontSize: 28, marginBottom: 12 }}>{d.icon}</div>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: '#2a8a2a', marginBottom: 8 }}>{d.name}</h3>
              <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.75 }}>{d.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* USPs */}
      <div id="over-ons" style={{ background: '#f7fff2', padding: '64px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, color: '#2a8a2a', marginBottom: 32, textAlign: 'center' }}>
            Waarom Monra Support?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
            {[
              { icon: '🔍', title: 'VOG screening', desc: 'Alle medewerkers beschikken over een geldig Verklaring Omtrent Gedrag.' },
              { icon: '⚡', title: 'Back-uppool', desc: 'Dankzij onze back-uppool kunnen wij snel opschalen — ook op korte termijn.' },
              { icon: '🎯', title: 'Cultuur- & merkfit', desc: 'Briefing en inwerkprogramma zodat onze mensen naadloos aansluiten bij uw merk.' },
              { icon: '📞', title: '24/7 beschikbaar', desc: 'Vaste aanspreekpunten voor planning, operatie en nazorg — altijd bereikbaar.' },
            ].map(u => (
              <div key={u.title} style={{ background: '#fff', border: '1px solid #e9ffe0', borderRadius: 14, padding: '20px 18px', boxShadow: '0 4px 16px rgba(0,0,0,.06)' }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{u.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#2a8a2a', marginBottom: 5 }}>{u.title}</div>
                <div style={{ fontSize: 12, color: '#64748b', lineHeight: 1.65 }}>{u.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" style={{ padding: '64px 48px', maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 48, flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, color: '#2a8a2a', marginBottom: 8 }}>Direct contact</h2>
          <div style={{ width: 40, height: 3, background: '#3CB138', borderRadius: 2, marginBottom: 24 }} />
          {[
            { icon: '📞', label: 'Telefoon', val: '06 45398678', href: 'tel:0645398678' },
            { icon: '✉️', label: 'E-mail', val: 'info@monra-support.nl', href: 'mailto:info@monra-support.nl' },
            { icon: '📍', label: 'Adres', val: 'Schuttersstraat 7, 6067 GE Linne', href: '#' },
            { icon: '🕐', label: 'Bereikbaar', val: '24/7 voor spoed & planning', href: '#' },
          ].map(c => (
            <a key={c.label} href={c.href} style={{
              display: 'flex', gap: 14, alignItems: 'flex-start',
              padding: '14px 0', borderBottom: '1px solid #e2e8f0', textDecoration: 'none',
            }}>
              <div style={{ width: 38, height: 38, borderRadius: 8, background: '#f7fff2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>{c.icon}</div>
              <div>
                <div style={{ fontSize: 10, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 3 }}>{c.label}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#2a8a2a' }}>{c.val}</div>
              </div>
            </a>
          ))}
          <div style={{ marginTop: 24, padding: '18px 20px', background: '#f7fff2', borderRadius: 14, border: '1px solid #b9ff82' }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#3CB138', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>KVK-informatie</div>
            <p style={{ fontSize: 12, color: '#334155' }}>KVK: 98875825 · Ondernemingsnummer: 000064008908</p>
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 280, background: '#fff', border: '1px solid #e9ffe0', borderRadius: 14, padding: 32, boxShadow: '0 8px 22px rgba(0,0,0,.06)' }}>
          <h3 style={{ fontSize: 18, fontWeight: 800, color: '#2a8a2a', marginBottom: 20 }}>Personeel aanvragen</h3>
          <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.75, marginBottom: 20 }}>
            Stuur ons een e-mail met uw wensen — wij reageren binnen 24 uur.
          </p>
          <a href="mailto:info@monra-support.nl?subject=Personeelsaanvraag%20Monra%20Support" style={{
            display: 'inline-block', background: '#3CB138', color: '#f7fff2', fontWeight: 800,
            fontSize: 14, padding: '13px 24px', borderRadius: 999, textDecoration: 'none',
          }}>
            ✉ Aanvraag per e-mail
          </a>
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: '#0c0c0c', padding: '32px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <div style={{ fontSize: 13, color: 'rgba(247,255,242,.55)' }}>
          © 2024 monra-support BV · KVK: 98875825 · Linne
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <Link href="/" style={{ fontSize: 12, color: 'rgba(247,255,242,.55)', textDecoration: 'none' }}>Monra Security</Link>
          <Link href="/events-security" style={{ fontSize: 12, color: 'rgba(247,255,242,.55)', textDecoration: 'none' }}>Events Security</Link>
          <Link href="/groep" style={{ fontSize: 12, color: 'rgba(247,255,242,.55)', textDecoration: 'none' }}>Monra Groep</Link>
        </div>
      </div>

      <MonraChat site="support" />
    </main>
  )
}
