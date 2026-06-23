/** Externe afbeeldingen (Wix CDN — zelfde bron als monra-website-preview.html) */
export const IMAGES = {
  team:
    'https://static.wixstatic.com/media/b8fe10_7f17cf1054234d36bf8dc0eaf3f082b7~mv2.jpeg/v1/fill/w_1400,h_700,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-02-22%20at%2016_04_58.jpeg',
  festival:
    'https://static.wixstatic.com/media/b8fe10_77ee4d9e34434948b51b5076cab20e2d~mv2.jpg/v1/fill/w_1400,h_700,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/636926960_891171093660733_518372891806277317_n.jpg',
  surveillance:
    'https://static.wixstatic.com/media/b8fe10_6fbe7d71b2ec488798f5590eee0af6d5~mv2.jpg/v1/fill/w_1400,h_700,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Afbeelding%20van%20WhatsApp%20op%202024-06-18%20om.jpg',
  eso:
    'https://static.wixstatic.com/media/b8fe10_d3b22fc71aa942fdb690bca9d5b8cb11~mv2.jpeg/v1/fill/w_1400,h_700,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8.jpeg',
  ceo:
    'https://static.wixstatic.com/media/b8fe10_2305b014cb2e4168b25028c8c5718e18~mv2.jpg/v1/fill/w_1400,h_700,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/654328443_27017350404534680_8802946859876802782_n.jpg',
  logo:
    'https://static.wixstatic.com/media/cc1283_dea11d631ca44c47a0b79d176bc721ca~mv2.png/v1/fill/w_664,h_256,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/246399639_4962935193736184_5264466054426007896_n.png',
  svpb:
    'https://static.wixstatic.com/media/b8fe10_0ae8b26d1183436998b77b2b89fa50c8~mv2.png/v1/fill/w_352,h_396,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo_SVPB_RGB_4x.png',
  keurmerk:
    'https://static.wixstatic.com/media/cc1283_1354c3ac673249ab8978520bc0b6357f~mv2.png/v1/fill/w_500,h_472,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo-Keurmerk-Beveiliging-zwart-300x283.png',
} as const

export type HeroSlide = {
  tag: string
  title: string
  titleAccent: string
  description: string
  bullets: string[]
  image: string
  imageAlt: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    tag: 'Evenementenbeveiliging',
    title: 'Vaste teams voor elk',
    titleAccent: 'type evenement',
    description:
      'Monra Security werkt met vaste, gecertificeerde medewerkers — hierdoor 30–40% efficiënter dan vergelijkbare beveiligingsbedrijven.',
    bullets: [
      'Hechte teams die op elkaar zijn ingespeeld',
      'Hospitality-gerichte aanpak: gastvrij én alert',
      '24/7 bereikbaar voor opdrachtgevers',
    ],
    image: IMAGES.team,
    imageAlt: 'Monra Security team op evenement',
    primaryCta: { label: 'Offerte aanvragen', href: '#contact' },
    secondaryCta: { label: 'Onze diensten', href: '#diensten' },
  },
  {
    tag: 'Festivals & Concerten',
    title: 'Crowd management met',
    titleAccent: 'ervaring',
    description:
      'Van intieme clubshows tot grote festivals — wij zorgen voor veilige publieksstromen en een gastvrij verloop.',
    bullets: [
      'Toegangscontrole & backstage-beveiliging',
      'Coördinatie met organisatie en hulpdiensten',
      'SVPB-gecertificeerde evenementenbeveiligers',
    ],
    image: IMAGES.festival,
    imageAlt: 'Festival beveiliging',
    primaryCta: { label: 'Vrijblijvende offerte', href: '#contact' },
  },
  {
    tag: 'Mobiele Surveillance',
    title: 'Flexibel ingezet,',
    titleAccent: 'altijd alert',
    description:
      'Surveillancerondes op maat voor uw locatie of evenement. Snel inzetbaar, met rapportage achteraf.',
    bullets: [
      'Rondes op maat, dag en nacht',
      'Snel inzetbaar in Limburg en heel NL',
      'Vaste medewerkers, geen onbekende gezichten',
    ],
    image: IMAGES.surveillance,
    imageAlt: 'Mobiele surveillance',
    primaryCta: { label: 'Contact opnemen', href: '#contact' },
  },
  {
    tag: 'ESO Opleiding',
    title: 'Word gecertificeerd',
    titleAccent: 'Event Security Officer',
    description:
      'Als SBB erkend leerbedrijf bieden wij de volledige ESO-opleiding: theorie én praktijk op echte evenementen.',
    bullets: [
      'Theorie: wetgeving, crowd management, communicatie',
      'Praktijk op echte evenementenlocaties',
      'Officieel ESO-certificaat na afronding',
    ],
    image: IMAGES.eso,
    imageAlt: 'ESO opleiding',
    primaryCta: { label: 'Aanmelden', href: '#opleiding' },
    secondaryCta: { label: 'Meer info', href: '#opleiding' },
  },
  {
    tag: 'Ons verhaal',
    title: 'Veiligheid begint met',
    titleAccent: 'de juiste mensen',
    description:
      '25+ jaar ervaring in evenementenbeveiliging. Persoonlijk betrokken bij elk groot evenement.',
    bullets: [
      'Opgericht vanuit passie voor kwaliteit',
      'Wpbr-vergunning & SVPB-keurmerk',
      'Monra beveiligers zijn ons kapitaal',
    ],
    image: IMAGES.ceo,
    imageAlt: 'Raf Monsieur, CEO Monra Security',
    primaryCta: { label: 'Meer over ons', href: '#over-ons' },
  },
]

export const GALLERY_PHOTOS = [
  { src: IMAGES.team, alt: 'Monra Security team', wide: true },
  { src: IMAGES.festival, alt: 'Beveiliging in actie', wide: false },
  { src: IMAGES.ceo, alt: 'CEO Raf Monsieur', wide: false },
  { src: IMAGES.surveillance, alt: 'Evenement beveiliging', wide: false },
  { src: IMAGES.eso, alt: 'Monra Security in actie', wide: true },
]
