import { resolveFamilieHrefs } from './domains'
import { BRAND_ICONS } from './brand-logos'

export type SubsiteNavLink = { label: string; href: string }

export type FamilieNavLink = {
  label: string
  href: string
  icon: string
  hoverClass?: string
}

export const SUPPORT_NAV: SubsiteNavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Diensten', href: '#diensten' },
  { label: 'Over ons', href: '#over-ons' },
  { label: 'Contact', href: '#contact' },
  { label: 'Monra Groep', href: '/groep' },
]

export const EVENTS_NAV: SubsiteNavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Diensten', href: '#diensten' },
  { label: "Foto's", href: '#fotos' },
  { label: 'Over Senna', href: '#senna' },
  { label: 'Opleiding', href: '#opleiding' },
  { label: 'Contact', href: '#contact' },
  { label: 'Monra Groep', href: '/groep' },
]

const FAMILIE_FROM_SUPPORT_RAW: FamilieNavLink[] = [
  { label: 'Monra Security', href: '/', icon: BRAND_ICONS.security },
  { label: 'Events Security', href: '/events-security', icon: BRAND_ICONS.eventsSecurity },
  { label: 'Belgium', href: '/belgie', icon: BRAND_ICONS.belgium },
  { label: 'Don Keijsjot', href: '/don-keijsjot', icon: BRAND_ICONS.donKeijsjot },
  { label: 'Monra Groep', href: '/groep', icon: BRAND_ICONS.groep },
]

const FAMILIE_FROM_EVENTS_RAW: FamilieNavLink[] = [
  { label: 'Monra Security', href: '/', icon: BRAND_ICONS.security },
  { label: 'Monra Support', href: '/support', icon: BRAND_ICONS.support },
  { label: 'Belgium', href: '/belgie', icon: BRAND_ICONS.belgium },
  { label: 'Don Keijsjot', href: '/don-keijsjot', icon: BRAND_ICONS.donKeijsjot },
  { label: 'Monra Groep', href: '/groep', icon: BRAND_ICONS.groep },
]

const FAMILIE_TOP_SECURITY_RAW: FamilieNavLink[] = [
  { label: 'Monra Support', href: '/support', icon: BRAND_ICONS.support, hoverClass: 'hover:border-[#1ABFA1]/60 hover:text-[#1ABFA1]' },
  { label: 'Events Security', href: '/events-security', icon: BRAND_ICONS.eventsSecurity, hoverClass: 'hover:border-[#C9A84C]/60 hover:text-[#C9A84C]' },
  { label: 'Belgium', href: '/belgie', icon: BRAND_ICONS.belgium, hoverClass: 'hover:border-[#11CFE7]/60 hover:text-[#11CFE7]' },
  { label: 'Don Keijsjot', href: '/don-keijsjot', icon: BRAND_ICONS.donKeijsjot, hoverClass: 'hover:border-[#c45c26]/60 hover:text-[#c45c26]' },
  { label: 'Monra Groep', href: '/groep', icon: BRAND_ICONS.groep, hoverClass: 'hover:border-[#11CFE7]/60 hover:text-[#11CFE7]' },
]

const FAMILIE_TOP_BELGIUM_RAW: FamilieNavLink[] = [
  { label: 'Monra Security NL', href: '/', icon: BRAND_ICONS.security, hoverClass: 'hover:border-[#11CFE7]/60 hover:text-[#11CFE7]' },
  { label: 'Monra Support', href: '/support', icon: BRAND_ICONS.support, hoverClass: 'hover:border-[#1ABFA1]/60 hover:text-[#1ABFA1]' },
  { label: 'Events Security', href: '/events-security', icon: BRAND_ICONS.eventsSecurity, hoverClass: 'hover:border-[#C9A84C]/60 hover:text-[#C9A84C]' },
  { label: 'Don Keijsjot', href: '/don-keijsjot', icon: BRAND_ICONS.donKeijsjot, hoverClass: 'hover:border-[#c45c26]/60 hover:text-[#c45c26]' },
  { label: 'Monra Groep', href: '/groep', icon: BRAND_ICONS.groep, hoverClass: 'hover:border-[#11CFE7]/60 hover:text-[#11CFE7]' },
]

const FAMILIE_TOP_KEIJSJOT_RAW: FamilieNavLink[] = [
  { label: 'Monra Security NL', href: '/', icon: BRAND_ICONS.security, hoverClass: 'hover:border-[#11CFE7]/60 hover:text-[#11CFE7]' },
  { label: 'Monra Support', href: '/support', icon: BRAND_ICONS.support, hoverClass: 'hover:border-[#1ABFA1]/60 hover:text-[#1ABFA1]' },
  { label: 'Events Security', href: '/events-security', icon: BRAND_ICONS.eventsSecurity, hoverClass: 'hover:border-[#C9A84C]/60 hover:text-[#C9A84C]' },
  { label: 'Belgium', href: '/belgie', icon: BRAND_ICONS.belgium, hoverClass: 'hover:border-[#11CFE7]/60 hover:text-[#11CFE7]' },
  { label: 'Monra Groep', href: '/groep', icon: BRAND_ICONS.groep, hoverClass: 'hover:border-[#11CFE7]/60 hover:text-[#11CFE7]' },
]

/** Ruwe interne paden (dev) */
export const FAMILIE_FROM_SUPPORT = FAMILIE_FROM_SUPPORT_RAW
export const FAMILIE_FROM_EVENTS = FAMILIE_FROM_EVENTS_RAW
export const FAMILIE_TOP_SECURITY = FAMILIE_TOP_SECURITY_RAW
export const FAMILIE_TOP_BELGIUM = FAMILIE_TOP_BELGIUM_RAW

/** Met externe domeinen wanneer NEXT_PUBLIC_USE_EXTERNAL_DOMAINS=true */
export function getFamilieFromSupport(): FamilieNavLink[] {
  return resolveFamilieHrefs(FAMILIE_FROM_SUPPORT_RAW)
}

export function getFamilieFromEvents(): FamilieNavLink[] {
  return resolveFamilieHrefs(FAMILIE_FROM_EVENTS_RAW)
}

export function getFamilieTopSecurity(): FamilieNavLink[] {
  return resolveFamilieHrefs(FAMILIE_TOP_SECURITY_RAW)
}

export function getFamilieTopBelgium(): FamilieNavLink[] {
  return resolveFamilieHrefs(FAMILIE_TOP_BELGIUM_RAW)
}

export function getFamilieTopKeijsjot(): FamilieNavLink[] {
  return resolveFamilieHrefs(FAMILIE_TOP_KEIJSJOT_RAW)
}

export function resolveSubsiteNavLinks(links: SubsiteNavLink[]): SubsiteNavLink[] {
  return links.map(link => {
    if (link.href.startsWith('#') || link.href.startsWith('mailto:')) return link
    return { ...link, href: resolveFamilieHrefs([link])[0].href }
  })
}
