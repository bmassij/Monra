export type ReferenceCard = 'light' | 'dark'

export interface ClientReference {
  slug: string
  name: string
  image: string
  alt?: string
  card?: ReferenceCard
}

/** Klanten en locaties waarvoor Monra Security beveiliging levert. */
export const CLIENT_REFERENCES: ClientReference[] = [
  {
    slug: 'cest-lamour',
    name: "C'est l'amour 2.0",
    image: '/images/references/cest-lamour.jpg',
    alt: "Evenement C'est l'amour 2.0",
    card: 'light',
  },
  {
    slug: 'eci-nachtfabriek',
    name: 'ECI Nachtfabriek',
    image: '/images/references/eci-nachtfabriek.jpg',
    alt: 'Logo ECI Nachtfabriek Roermond',
    card: 'dark',
  },
  {
    slug: 'barcode',
    name: 'Barcode',
    image: '/images/references/barcode.png',
    alt: 'Logo Barcode',
    card: 'dark',
  },
  {
    slug: 'de-hollande',
    name: 'De Hollande',
    image: '/images/references/de-hollande.png',
    alt: 'Logo De Hollande',
    card: 'light',
  },
  {
    slug: 'mr-sammi-bistro-bar',
    name: 'Mr. Sammi Bistro Bar',
    image: '/images/references/mr-sammi-bistro-bar.jpg',
    alt: 'Logo Mr. Sammi Bistro Bar',
    card: 'light',
  },
  {
    slug: 'sjaen-toedem',
    name: 'Café Disco Bar Sjaen Toedem',
    image: '/images/references/sjaen-toedem.gif',
    alt: 'Logo Café Disco Bar Sjaen Toedem',
    card: 'dark',
  },
  {
    slug: 'pand-16',
    name: 'Pand 16',
    image: '/images/references/pand-16.jpg',
    alt: 'Feestcafé Pand 16 Valkenswaard',
    card: 'light',
  },
  {
    slug: 'bloem',
    name: 'Bloem',
    image: '/images/references/bloem.png',
    alt: 'Bloem — eten, borrelen, feesten',
    card: 'dark',
  },
  {
    slug: 'hefee-de-baek-venlo',
    name: 'Hefee De Baek',
    image: '/images/references/hefee-de-baek-venlo.jpeg',
    alt: 'Hefee De Baek Venlo',
    card: 'light',
  },
  {
    slug: 'de-ijzeren-man',
    name: 'De IJzeren Man',
    image: '/images/references/de-ijzeren-man.png',
    alt: 'De IJzeren Man — zwembad, waterskibaan, beachclub',
    card: 'dark',
  },
  {
    slug: 'uncle-buck',
    name: 'Uncle Buck',
    image: '/images/references/uncle-buck.jpg',
    alt: 'Uncle Buck — Bottles & Bites',
    card: 'dark',
  },
  {
    slug: 'eci-cultuurfabriek',
    name: 'ECI Cultuurfabriek',
    image: '/images/references/eci-cultuurfabriek.png',
    alt: 'Logo ECI Cultuurfabriek',
    card: 'light',
  },
  {
    slug: 'kornuit',
    name: 'Kornuit',
    image: '/images/references/kornuit.png',
    alt: 'Logo Kornuit',
    card: 'dark',
  },
  {
    slug: 'poppodium-volt',
    name: 'Poppodium Volt',
    image: '/images/references/poppodium-volt.jpg',
    alt: 'Logo Poppodium Volt',
    card: 'dark',
  },
  {
    slug: 'gastrobar-sittard',
    name: 'Gastrobar Sittard',
    image: '/images/references/gastrobar-sittard.jpg',
    alt: 'Gastrobar Sittard met terras',
    card: 'light',
  },
  {
    slug: 'hotel-grand-cafe-de-pauw',
    name: 'Hotel en Grand Café De Pauw',
    image: '/images/references/hotel-grand-cafe-de-pauw.png',
    alt: 'Hotel en Grand Café De Pauw',
    card: 'dark',
  },
  {
    slug: 'hotel-centraal-someren',
    name: 'Hotel Centraal Someren',
    image: '/images/references/hotel-centraal-someren.jpg',
    alt: 'Hotel Centraal in Someren',
    card: 'light',
  },
  {
    slug: 'de-verleiding',
    name: 'De Verleiding',
    image: '/images/references/de-verleiding.jpg',
    alt: 'Café-restaurant De Verleiding',
    card: 'light',
  },
  {
    slug: 'kl-ik',
    name: 'KL-IK',
    image: '/images/references/kl-ik.png',
    alt: 'Logo KL-IK',
    card: 'light',
  },
  {
    slug: 'cafe-du-pont',
    name: 'Café Du Pont',
    image: '/images/references/cafe-du-pont.jpg',
    alt: 'Café Du Pont',
    card: 'light',
  },
  {
    slug: 'sbb-erkend-leerbedrijf',
    name: 'SBB Erkend Leerbedrijf',
    image: '/images/references/sbb-erkend-leerbedrijf.png',
    alt: 'SBB Erkend leerbedrijf — wij leiden vakmensen op',
    card: 'light',
  },
]
