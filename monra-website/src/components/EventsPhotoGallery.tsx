import { ImageWithWatermark } from '@/components/ImageWithWatermark'
import { BRAND_ICONS } from '@/lib/brand-logos'
import { EVENTS_GALLERY } from '@/lib/events-images'

export function EventsPhotoGallery() {
  return (
    <section id="fotos" style={{ padding: '72px 48px', background: '#0a0a0a', borderTop: '1px solid rgba(220,38,38,.1)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#EF4444', textTransform: 'uppercase', letterSpacing: 4, marginBottom: 8 }}>
          In actie
        </div>
        <div style={{ width: 40, height: 3, background: 'linear-gradient(90deg, #DC2626, transparent)', marginBottom: 20 }} />
        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 900, color: '#fff', marginBottom: 36 }}>
          Ons team <span style={{ color: '#EF4444' }}>in beeld</span>
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 16,
        }}>
          {EVENTS_GALLERY.map(photo => (
            <div
              key={photo.src}
              style={{
                gridColumn: photo.wide ? 'span 2' : 'span 1',
                position: 'relative',
                borderRadius: 8,
                overflow: 'hidden',
                border: '1px solid rgba(220,38,38,.15)',
                aspectRatio: photo.wide ? '21/9' : '4/3',
                minHeight: 200,
              }}
            >
              <ImageWithWatermark
                src={photo.src}
                alt={photo.alt}
                fill
                watermarkSrc={BRAND_ICONS.eventsSecurity}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(8,8,8,.7) 0%, transparent 50%)',
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
