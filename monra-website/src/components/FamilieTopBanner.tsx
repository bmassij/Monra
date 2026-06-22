'use client'

import Link from 'next/link'

export type FamilieTopLink = {
  label: string
  href: string
  hoverClass: string
}

type FamilieTopBannerProps = {
  icon: string
  siteName: string
  tagline: string
  links: FamilieTopLink[]
}

/** Hoogte familie-balk — navbar gebruikt top-[var] via class */
export const FAMILIE_BANNER_OFFSET = 'top-[54px]'

export function FamilieTopBanner({ icon, siteName, tagline, links }: FamilieTopBannerProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#0a1540] border-b-2 border-[#11CFE7]/30 px-4 md:px-8 py-3.5 md:py-4 flex justify-between items-center flex-wrap gap-3 shadow-lg shadow-black/20">
      <span className="text-sm md:text-base text-white/60 tracking-wide">
        {icon}{' '}
        <strong className="text-white font-bold">{siteName}</strong>
        <span className="hidden sm:inline text-white/45"> — {tagline}</span>
      </span>
      <div className="flex gap-2 md:gap-3 flex-wrap">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-semibold text-white/70 border-2 border-white/20 rounded-full px-4 py-2 hover:bg-white/5 transition-all ${link.hoverClass}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
