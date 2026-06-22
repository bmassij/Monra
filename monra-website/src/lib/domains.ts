/**
 * Multi-domain routing voor Monra-takken.
 * Zie docs/MULTI_DOMAIN.md voor setup en DNS.
 */

export const TAK_ROUTES = {
  security: '/',
  support: '/support',
  events: '/events-security',
  belgium: '/belgie',
  groep: '/groep',
  keijsjot: '/don-keijsjot',
} as const

export type TakKey = keyof typeof TAK_ROUTES

/** Hostname (zonder poort) → interne basispad */
export const DOMAIN_TO_TAK: Record<string, TakKey> = {
  'monra-security.nl': 'security',
  'www.monra-security.nl': 'security',
  'monra-support.nl': 'support',
  'www.monra-support.nl': 'support',
  'monra-events-security.nl': 'events',
  'www.monra-events-security.nl': 'events',
  'monra-belgium.be': 'belgium',
  'www.monra-belgium.be': 'belgium',
  'don-keijsjot.nl': 'keijsjot',
  'www.don-keijsjot.nl': 'keijsjot',
  'donkiesjot.nl': 'keijsjot',
  'www.donkiesjot.nl': 'keijsjot',
}

/** Publieke domein-URL per tak (productie) */
export const TAK_EXTERNAL_DOMAINS: Record<TakKey, string> = {
  security: 'https://monra-security.nl',
  support: 'https://monra-support.nl',
  events: 'https://monra-events-security.nl',
  belgium: 'https://monra-belgium.be',
  groep: 'https://monra-security.nl',
  keijsjot: 'https://don-keijsjot.nl',
}

const PATH_TO_TAK: Record<string, TakKey> = {
  '/': 'security',
  '/support': 'support',
  '/events-security': 'events',
  '/belgie': 'belgium',
  '/groep': 'groep',
  '/don-keijsjot': 'keijsjot',
}

export function externalDomainsEnabled(): boolean {
  return process.env.NEXT_PUBLIC_USE_EXTERNAL_DOMAINS === 'true'
}

export function getTakForHost(host: string): TakKey | null {
  const normalized = host.toLowerCase().split(':')[0]
  return DOMAIN_TO_TAK[normalized] ?? null
}

export function getBasePathForHost(host: string): string | null {
  const tak = getTakForHost(host)
  if (!tak) return null
  return TAK_ROUTES[tak]
}

/** Intern pad → externe URL wanneer NEXT_PUBLIC_USE_EXTERNAL_DOMAINS=true */
export function resolveTakHref(internalPath: string): string {
  if (!externalDomainsEnabled()) return internalPath

  const tak = PATH_TO_TAK[internalPath]
  if (!tak) return internalPath

  if (tak === 'groep') {
    return `${TAK_EXTERNAL_DOMAINS.security}/groep`
  }

  const base = TAK_EXTERNAL_DOMAINS[tak]
  if (tak === 'security' && internalPath !== '/') {
    return `${base}${internalPath}`
  }
  return base
}

export function resolveFamilieHrefs<T extends { href: string }>(links: readonly T[]): T[] {
  return links.map(link => ({ ...link, href: resolveTakHref(link.href) }))
}
