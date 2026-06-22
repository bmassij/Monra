import { ImageWithWatermark } from '@/components/ImageWithWatermark'
import { BRAND_ICONS } from '@/lib/brand-logos'
import { GALLERY_PHOTOS } from '@/lib/images'

export function PhotoGallery() {
  return (
    <section id="fotos" className="py-16 md:py-20 bg-[#0a1540]">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="text-xs font-bold text-[#11CFE7] tracking-[4px] uppercase mb-3">Monra in het veld</div>
        <div className="w-10 h-1 bg-[#11CFE7] mb-5 rounded" />
        <h2 className="text-3xl md:text-4xl font-black text-white">
          MONRA SECURITY <span className="text-[#11CFE7]">IN HET VELD</span>
        </h2>
        <p className="text-white/50 mt-3 max-w-xl">
          Onze gecertificeerde teams in actie — van festivals tot congressen.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-1.5 auto-rows-[160px] md:auto-rows-[280px]">
          {GALLERY_PHOTOS.map(photo => (
            <div
              key={photo.alt}
              className={`relative overflow-hidden rounded-lg group ${
                photo.wide ? 'col-span-2' : 'col-span-1'
              }`}
            >
              <ImageWithWatermark
                src={photo.src}
                alt={photo.alt}
                fill
                watermarkSrc={BRAND_ICONS.security}
                className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-75 group-hover:brightness-90"
                sizes={photo.wide ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 50vw, 25vw'}
              />
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1540]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Cyan corner accent */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-[#11CFE7] transition-all duration-300 group-hover:w-8 group-hover:h-8" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
