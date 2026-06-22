export type SubsiteNavLink = { label: string; href: string }

export type FamilieNavLink = { label: string; href: string }

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

export const FAMILIE_FROM_SUPPORT: FamilieNavLink[] = [
  { label: '🛡️ Monra Security', href: '/' },
  { label: '✨ Events Security', href: '/events-security' },
  { label: '🇧🇪 Belgium', href: '/belgie' },
  { label: '🏢 Monra Groep', href: '/groep' },
]

export const FAMILIE_FROM_EVENTS: FamilieNavLink[] = [
  { label: '🛡️ Monra Security', href: '/' },
  { label: '🤝 Monra Support', href: '/support' },
  { label: '🇧🇪 Belgium', href: '/belgie' },
  { label: '🏢 Monra Groep', href: '/groep' },
]

export const FAMILIE_TOP_SECURITY = [
  { label: '🤝 Monra Support', href: '/support', hoverClass: 'hover:border-[#1ABFA1]/60 hover:text-[#1ABFA1]' },
  { label: '✨ Events Security', href: '/events-security', hoverClass: 'hover:border-[#C9A84C]/60 hover:text-[#C9A84C]' },
  { label: '🇧🇪 Belgium', href: '/belgie', hoverClass: 'hover:border-[#11CFE7]/60 hover:text-[#11CFE7]' },
  { label: '🏢 Monra Groep', href: '/groep', hoverClass: 'hover:border-[#11CFE7]/60 hover:text-[#11CFE7]' },
] as const

export const FAMILIE_TOP_BELGIUM = [
  { label: '🛡️ Monra Security NL', href: '/', hoverClass: 'hover:border-[#11CFE7]/60 hover:text-[#11CFE7]' },
  { label: '🤝 Monra Support', href: '/support', hoverClass: 'hover:border-[#1ABFA1]/60 hover:text-[#1ABFA1]' },
  { label: '✨ Events Security', href: '/events-security', hoverClass: 'hover:border-[#C9A84C]/60 hover:text-[#C9A84C]' },
  { label: '🏢 Monra Groep', href: '/groep', hoverClass: 'hover:border-[#11CFE7]/60 hover:text-[#11CFE7]' },
] as const
