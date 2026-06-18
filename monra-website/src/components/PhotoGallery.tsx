import Image from 'next/image'
import { GALLERY_PHOTOS } from '@/lib/images'

export function PhotoGallery() {
  return (
    <section id="fotos" className="py-16 md:py-20 bg-[#111]">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="gold-line mb-6" />
        <h2 className="text-3xl md:text-4xl font-black text-white">
          MONRA SECURITY <span className="text-[#C9A84C]">IN HET VELD</span>
        </h2>
        <p className="text-[#888] mt-3 max-w-xl">
          Onze gecertificeerde teams in actie — van festivals tot congressen.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-1.5 md:gap-1.5 auto-rows-[160px] md:auto-rows-[280px]">
          {GALLERY_PHOTOS.map(photo => (
            <div
              key={photo.alt}
              className={`relative overflow-hidden rounded-lg group ${
                photo.wide ? 'col-span-2' : 'col-span-1'
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-90 group-hover:brightness-100"
                sizes={photo.wide ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 50vw, 25vw'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-[#C9A84C] transition-all duration-300 group-hover:w-8 group-hover:h-8" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
