import Image, { ImageProps } from 'next/image'
import { BRAND_ICONS } from '@/lib/brand-logos'

type ImageWithWatermarkProps = ImageProps & {
  watermarkSrc?: string
  watermarkOpacity?: number
}

/** Foto met subtiele Monra-schild watermerken (linksboven + rechtsonder). */
export function ImageWithWatermark({
  watermarkSrc = BRAND_ICONS.groep,
  watermarkOpacity = 0.17,
  className,
  alt,
  fill,
  ...imageProps
}: ImageWithWatermarkProps) {
  return (
    <div className={fill ? 'absolute inset-0' : 'relative w-full h-full'}>
      <Image alt={alt} className={className} fill={fill} {...imageProps} />
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        <Image
          src={watermarkSrc}
          alt=""
          width={48}
          height={48}
          className="absolute top-3 left-3 w-9 h-9 md:w-11 md:h-11 object-contain"
          style={{ opacity: watermarkOpacity }}
        />
        <Image
          src={watermarkSrc}
          alt=""
          width={48}
          height={48}
          className="absolute bottom-3 right-3 w-9 h-9 md:w-11 md:h-11 object-contain"
          style={{ opacity: watermarkOpacity }}
        />
      </div>
    </div>
  )
}
