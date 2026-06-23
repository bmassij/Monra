/** Lokale brand-logo's — geëxporteerde PNG's in /public/brand/ */
export const BRAND_LOGOS = {
  security: '/brand/security-logo.png',
  support: '/brand/support-logo.png',
  supportWordmark: '/brand/support-wordmark.webp',
  /** PNG fallback als WebP niet laadt */
  supportWordmarkFallback: '/brand/support-wordmark.png',
  eventsSecurity: '/brand/events-security-logo.png',
  eventsSecurityWordmark: '/brand/events-security-wordmark.png',
  groep: '/brand/groep-logo.png',
  donKeijsjot: '/brand/don-keijsjot-logo.png',
} as const

/** Schild-only iconen (gecropt) in /public/brand/icons/ */
export const BRAND_ICONS = {
  security: '/brand/icons/security-icon.png',
  support: '/brand/icons/support-icon.png',
  eventsSecurity: '/brand/icons/events-security-icon.png',
  groep: '/brand/icons/groep-icon.png',
  donKeijsjot: '/brand/icons/don-keijsjot-icon.png',
  belgium: '/brand/icons/belgium-icon.png',
} as const

export type BrandLogoKey = keyof typeof BRAND_LOGOS
export type BrandIconKey = keyof typeof BRAND_ICONS

export const BRAND_LOGO_ALT: Record<BrandLogoKey, string> = {
  security: 'Monra Security',
  support: 'Monra Support',
  supportWordmark: 'Monra Support',
  supportWordmarkFallback: 'Monra Support',
  eventsSecurity: 'Monra Events Security',
  eventsSecurityWordmark: 'Monra Events Security',
  groep: 'Monra Groep',
  donKeijsjot: 'Café Donkiesjot 2.0',
}
