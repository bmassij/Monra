'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { FamilieNavLink } from '@/lib/subsite-nav'

export type FamilieTopLink = FamilieNavLink & {
  hoverClass: string
}

type FamilieTopBannerProps = {
  links: FamilieTopLink[] | FamilieNavLink[]
  /** Logo in plaats van icoon + tekst links */
  logoSrc?: string
  logoAlt?: string
  logoHref?: string
  /** Neon/kleurlogo — geen wit-filter in familie-balk */
  logoPreserveColors?: boolean
  icon?: string
  siteName?: string
  tagline?: string
}

/** Navbar-offset wanneer logo in familie-balk staat */
export const FAMILIE_BANNER_OFFSET = 'top-[72px]'

export function FamilieTopBanner({
  links,
  logoSrc,
  logoAlt = 'Monra',
  logoHref = '#home',
  logoPreserveColors = false,
  icon,
  siteName,
  tagline,
}: FamilieTopBannerProps) {
  const left = logoSrc ? (
    <Link href={logoHref} className="flex-shrink-0">
      <Image
        src={logoSrc}
        alt={logoAlt}
        width={180}
        height={70}
        className={`h-11 md:h-14 w-auto object-contain${logoPreserveColors ? '' : ' brightness-0 invert'}`}
        priority
      />
    </Link>
  ) : (
    <span className="text-sm md:text-base text-white/60 tracking-wide">
      {icon}{' '}
      <strong className="text-white font-bold">{siteName}</strong>
      {tagline && (
        <span className="hidden sm:inline text-white/45"> — {tagline}</span>
      )}
    </span>
  )

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#0a1540] border-b-2 border-[#11CFE7]/30 px-4 md:px-8 py-3 md:py-3.5 flex justify-between items-center flex-wrap gap-3 shadow-lg shadow-black/20">
      {left}
      <div className="flex gap-2 md:gap-3 flex-wrap justify-end">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`inline-flex items-center gap-2 text-sm font-semibold text-white/70 border-2 border-white/20 rounded-full px-3 py-1.5 md:px-4 md:py-2 hover:bg-white/5 transition-all ${'hoverClass' in link && link.hoverClass ? link.hoverClass : ''}`}
          >
            <Image
              src={link.icon}
              alt=""
              width={20}
              height={20}
              className="w-4 h-4 md:w-5 md:h-5 object-contain flex-shrink-0"
              aria-hidden
            />
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
