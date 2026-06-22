export const EVENTS_IMAGES = {
  teamBamboo: '/images/636926960_891171093660733_518372891806277317_n.jpg',
  carnival: '/images/713184142_2516335452141885_952085673499634832_n.jpg',
  festivalGate: '/images/480634082_610611148383397_2751379836703466158_n.jpg',
  teamIndustrial: '/images/481298644_614105314700647_4856404687501348272_n.jpg',
} as const

export type EventsSlide = {
  tag: string
  title: string
  titleAccent: string
  description: string
  image: string
  imageAlt: string
}

export const EVENTS_HERO_SLIDES: EventsSlide[] = [
  {
    tag: 'Monra Events Security',
    title: 'Premium beveiliging met',
    titleAccent: 'gastvrijheid',
    description:
      'Vaste, gecertificeerde teams — professioneel, alert en representatief op elk evenement.',
    image: EVENTS_IMAGES.teamBamboo,
    imageAlt: 'Monra Events Security team op locatie',
  },
  {
    tag: 'Festivals & Kermissen',
    title: 'Crowd management op',
    titleAccent: 'grote schaal',
    description:
      'Van kermisattracties tot festivals — ervaring met drukke publiekslocaties en toegangscontrole.',
    image: EVENTS_IMAGES.carnival,
    imageAlt: 'Beveiligingsteam bij festivalattractie',
  },
  {
    tag: 'Toegangscontrole',
    title: 'Overzicht en veiligheid',
    titleAccent: 'bij elke ingang',
    description:
      'Supervisors en beveiligers die samenwerken met organisatie, hulpdiensten en publiek.',
    image: EVENTS_IMAGES.festivalGate,
    imageAlt: 'Supervisors bij evenementen-ingang',
  },
  {
    tag: 'Ons team',
    title: 'Altijd representatief,',
    titleAccent: 'altijd paraat',
    description:
      'Monra Events Security — opgericht door Senna Monsieur, gebouwd op 25+ jaar Monra-expertise.',
    image: EVENTS_IMAGES.teamIndustrial,
    imageAlt: 'Monra Events Security team',
  },
]

export const EVENTS_GALLERY = [
  { src: EVENTS_IMAGES.teamBamboo, alt: 'Team op evenementlocatie', wide: true },
  { src: EVENTS_IMAGES.carnival, alt: 'Festivalbeveiliging', wide: false },
  { src: EVENTS_IMAGES.festivalGate, alt: 'Toegangscontrole en supervisie', wide: false },
  { src: EVENTS_IMAGES.teamIndustrial, alt: 'Professioneel beveiligingsteam', wide: true },
]
