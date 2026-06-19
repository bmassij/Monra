export type SubsiteNavLink = { label: string; href: string }

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

export const FAMILIE_FROM_SUPPORT = [
  { label: 'Monra Security', href: '/' },
  { label: 'Events Security', href: '/events-security' },
  { label: 'Monra Groep', href: '/groep' },
]

export const FAMILIE_FROM_EVENTS = [
  { label: 'Monra Security', href: '/' },
  { label: 'Monra Support', href: '/support' },
  { label: 'Monra Groep', href: '/groep' },
]
