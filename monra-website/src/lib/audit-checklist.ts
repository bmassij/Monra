export type AuditItem = {
  id: string
  label: string
  hint?: string
}

export type AuditTak = {
  id: string
  naam: string
  icon: string
  kleur: string
  items: AuditItem[]
}

export const AUDIT_TAKKEN: AuditTak[] = [
  {
    id: 'security',
    naam: 'Monra Security NL',
    icon: '🛡️',
    kleur: '#1A2B6D',
    items: [
      { id: 'tel', label: 'Telefoonnummer (algemeen & spoed)', hint: 'Bijv. 06-45398678' },
      { id: 'mail', label: 'E-mailadres', hint: 'info@monra-security.nl' },
      { id: 'adres', label: 'Bezoekadres / vestiging' },
      { id: 'kvk', label: 'KVK-nummer' },
      { id: 'btw', label: 'BTW-nummer' },
      { id: 'logo', label: 'Logo (PNG/SVG, liefst wit + kleur)' },
      { id: 'social', label: 'Social media (Facebook, Instagram, LinkedIn)' },
      { id: 'hours', label: 'Openingstijden / bereikbaarheid (24/7?)' },
      { id: 'foto', label: "Foto's team, events, locatie" },
      { id: 'domein', label: 'Gewenste domeinnaam (monra-security.nl)' },
      { id: 'cert', label: 'Certificeringen (SVPB, Wpbr, SBB)' },
      { id: 'tekst', label: 'Korte bedrijfsomschrijving (2–3 zinnen)' },
    ],
  },
  {
    id: 'support',
    naam: 'Monra Support',
    icon: '🤝',
    kleur: '#0E5C4B',
    items: [
      { id: 'tel', label: 'Telefoonnummer' },
      { id: 'mail', label: 'E-mailadres', hint: 'info@monra-support.nl' },
      { id: 'adres', label: 'Adres (zelfde als groep of apart?)' },
      { id: 'kvk', label: 'KVK-nummer', hint: '98875825' },
      { id: 'btw', label: 'BTW-nummer' },
      { id: 'logo', label: 'Logo Monra Support' },
      { id: 'social', label: 'Social media' },
      { id: 'hours', label: 'Bereikbaarheid planning' },
      { id: 'foto', label: "Foto's personeel / diensten" },
      { id: 'domein', label: 'Domein (monra-support.nl)' },
      { id: 'diensten', label: 'Lijst van alle diensten (BHV, bar, etc.)' },
    ],
  },
  {
    id: 'events',
    naam: 'Monra Events Security',
    icon: '✨',
    kleur: '#8B6914',
    items: [
      { id: 'tel', label: 'Telefoonnummer' },
      { id: 'mail', label: 'E-mailadres', hint: 'info@monra-events-security.nl' },
      { id: 'adres', label: 'Adres / regio' },
      { id: 'kvk', label: 'KVK-nummer' },
      { id: 'btw', label: 'BTW-nummer' },
      { id: 'logo', label: 'Logo Events Security' },
      { id: 'social', label: 'Social media + Senna profiel' },
      { id: 'foto', label: "Foto's events / Senna" },
      { id: 'domein', label: 'Domein (monra-events-security.nl)' },
      { id: 'senna', label: 'Tekst over Senna Monsigneur' },
    ],
  },
  {
    id: 'belgium',
    naam: 'Monra Belgium',
    icon: '🇧🇪',
    kleur: '#1A2B6D',
    items: [
      { id: 'tel', label: 'Telefoonnummer BE' },
      { id: 'mail', label: 'E-mailadres', hint: 'info@monra-belgium.be' },
      { id: 'adres', label: 'Belgisch vestigingsadres (indien van toepassing)' },
      { id: 'kbo', label: 'KBO-nummer' },
      { id: 'btw', label: 'BTW-nummer BE' },
      { id: 'logo', label: 'Logo Monra Belgium' },
      { id: 'social', label: 'Social media BE' },
      { id: 'foto', label: "Foto's BE-events" },
      { id: 'domein', label: 'Domein (monra-belgium.be)' },
      { id: 'fod', label: 'FOD-vergunning details' },
      { id: 'regio', label: 'Werkgebied (Vlaanderen, Wallonië, Brussel)' },
    ],
  },
  {
    id: 'groep',
    naam: 'Monra Groep',
    icon: '🏢',
    kleur: '#0a1540',
    items: [
      { id: 'tel', label: 'Centraal telefoonnummer groep' },
      { id: 'mail', label: 'Algemeen e-mailadres groep' },
      { id: 'adres', label: 'Hoofdkantoor adres' },
      { id: 'logo', label: 'Groepslogo / familie-banner' },
      { id: 'ceo', label: 'Naam directie (Raf Monsieur?)' },
      { id: 'missie', label: 'Missie-tekst voor groep-pagina' },
    ],
  },
  {
    id: 'keijsjot',
    naam: 'Don Keijsjot (Maasbracht)',
    icon: '🍺',
    kleur: '#8B4513',
    items: [
      { id: 'tel', label: 'Telefoonnummer café', hint: '0475 461 801 (publiek)' },
      { id: 'mail', label: 'E-mailadres', hint: 'Wordt aangevuld' },
      { id: 'adres', label: 'Adres', hint: 'Molenweg 1, 6051 HG Maasbracht' },
      { id: 'kvk', label: 'KVK-nummer', hint: 'Wordt aangevuld' },
      { id: 'btw', label: 'BTW-nummer', hint: 'Wordt aangevuld' },
      { id: 'logo', label: 'Logo / huisstijl Don Keijsjot' },
      { id: 'social', label: 'Social media' },
      { id: 'hours', label: 'Openingstijden (per dag)', hint: 'Controleren — bronnen verschillen' },
      { id: 'foto', label: "Foto's interieur, terras, sfeer" },
      { id: 'domein', label: 'Domein (don-keijsjot.nl / donkiesjot.nl)' },
      { id: 'menu', label: 'Menu / drankenkaart' },
      { id: 'omschrijving', label: 'Korte sfeerbeschrijving café' },
    ],
  },
]

export type PreviewCard = {
  id: string
  title: string
  description: string
}

export const PREVIEW_CARDS: PreviewCard[] = [
  {
    id: 'phone',
    title: 'Zo ziet telefoonnummer eruit op de site',
    description: 'Grote knop in header of contactblok — klikbaar op mobiel (bel direct).',
  },
  {
    id: 'email',
    title: 'Zo ziet e-mail eruit',
    description: 'Mail-link in footer en contactsectie, vaak met onderwerpregel voor offertes.',
  },
  {
    id: 'logo',
    title: 'Zo ziet logo in blauwe balk eruit',
    description: 'Bovenaan in de familie-banner (donkerblauw) — wit logo, ca. 180px breed.',
  },
  {
    id: 'address',
    title: 'Zo ziet adres eruit',
    description: 'Contactkaart met pin-icoon: straat, postcode, plaats.',
  },
  {
    id: 'hours',
    title: 'Zo zien openingstijden eruit',
    description: 'Tabel of regels per weekdag — belangrijk voor cafés en bereikbaarheid.',
  },
  {
    id: 'social',
    title: 'Zo zien social media eruit',
    description: 'Iconen onderaan pagina — link naar Facebook, Instagram, etc.',
  },
]
