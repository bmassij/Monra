export type MonraSite = 'security' | 'support' | 'events' | 'belgium'

export type ChatReply = {
  text: string
  action?: { label: string; href: string }
}

const CONTACT = {
  phone: '+31 (0)6 45398678',
  phonePlanning: '+31 (0)6 23624789',
  mailSecurity: 'info@monra-security.nl',
  mailSupport: 'info@monra-support.nl',
  mailEvents: 'info@monra-events-security.nl',
  mailBelgium: 'info@monra-belgium.be',
  address: 'Schuttersstraat 7, 6067 GE Linne',
}

const SITES = {
  security: {
    name: 'Monra Security',
    path: '/',
    email: CONTACT.mailSecurity,
    focus: 'evenementenbeveiliging, surveillance en ESO-opleiding (Nederland)',
  },
  support: {
    name: 'Monra Support',
    path: '/support',
    email: CONTACT.mailSupport,
    focus: 'hospitality, BHV, EHBO, brandwachten, barpersoneel en servicemedewerkers',
  },
  events: {
    name: 'Monra Events Security',
    path: '/events-security',
    email: CONTACT.mailEvents,
    focus: 'premium evenementenbeveiliging door Senna Monsigneur — festivals, VIP, sport',
  },
  belgium: {
    name: 'Monra Belgium',
    path: '/belgie',
    email: CONTACT.mailBelgium,
    focus: 'evenementenbeveiliging in heel België — Vlaanderen, Brussel, Wallonië, FOD-vergund',
  },
} as const

export const CHAT_GREETINGS: Record<MonraSite, string> = {
  security:
    'Welkom bij Monra Security!\n\nIk ben uw AI-assistent en ken alle vier Monra-takken (NL, Support, Events, Belgium). Stel gerust vragen over:\n• Evenementenbeveiliging & surveillance\n• ESO-opleiding\n• Offertes & contact\n\nWaarmee kan ik u helpen?',
  support:
    'Welkom bij Monra Support!\n\nIk ben uw AI-assistent voor hospitality & zorgpersoneel. Ik ken ook Monra Security, Events Security en Monra Belgium.\n\n• Barpersoneel & bediening\n• BHV, EHBO & brandwachten\n• Personeelsaanvragen\n\nWaarmee kan ik u helpen?',
  events:
    'Welkom bij Monra Events Security!\n\nIk ben uw AI-assistent (Senna Monsigneur). Festivals, VIP, sport — of doorverwijzing naar een andere Monra-tak.\n\n• Premium eventbeveiliging\n• VIP & close protection\n• Offertes & opleiding\n\nWaarmee kan ik u helpen?',
  belgium:
    'Welkom bij Monra Belgium!\n\nIk ben uw AI-assistent voor evenementenbeveiliging in België. Ook Monra Security NL, Support en Events Security ken ik.\n\n• Festivals & concerten in BE\n• Vlaanderen, Brussel, Wallonië\n• FOD-vergunde beveiliging\n\nWaarmee kan ik u helpen?',
}

export const QUICK_REPLIES: Record<MonraSite, string[]> = {
  security: ['Offerte aanvragen', 'Welke tak past?', 'ESO Opleiding', 'Contact'],
  support: ['Personeel aanvragen', 'BHV of EHBO?', 'Beveiliging nodig', 'Contact'],
  events: ['Offerte festival', 'Over Senna', 'VIP beveiliging', 'Contact'],
  belgium: ['Offerte aanvragen', 'Werkgebied BE', 'FOD vergunning', 'Contact'],
}

export function getMonraOverviewReply(): ChatReply {
  return {
    text: `OVER MONRA

Monra is een familiebedrijf uit Linne (Limburg) met 25+ JAAR ERVARING — 500+ events, vaste teams, 30–40% efficiënter dan gemiddeld.

VIER TAKKEN ONDER ÉÉN DAK:
• Monra Security (NL) — festivals, concerten, surveillance, ESO-opleiding
• Monra Support — barpersoneel, BHV, EHBO, brandwachten, hospitality
• Monra Events Security — premium events (Senna Monsigneur), VIP, sport
• Monra Belgium — evenementenbeveiliging in Vlaanderen, Brussel & Wallonië

CERTIFICERING:
• NL: SVPB-keurmerk · Wpbr-vergund · SBB erkend leerbedrijf · KVK 89581806
• BE: FOD-vergund · Wet private beveiliging 2017

CONTACT NL:
📞 ${CONTACT.phone}
📍 ${CONTACT.address}

CONTACT BE:
✉️ ${CONTACT.mailBelgium}`,
    action: { label: '→ Monra Groep overzicht', href: '/groep' },
  }
}

function isGeneralMonraQuestion(m: string): boolean {
  return (
    m.includes('over monra') ||
    m.includes('about monra') ||
    m.includes('wie is monra') ||
    m.includes('wie zijn jullie') ||
    m.includes('wat is monra') ||
    m.includes('wat doen jullie') ||
    m.includes('wat kan je') ||
    m.includes('wat kun je') ||
    m.includes('wat weet je') ||
    m.includes('vertel over') ||
    m.includes('vertel me') ||
    m.includes('meer informatie') ||
    m.includes('meer info') ||
    m.includes('informatie over') ||
    (m.includes('monra') && (m.includes('vertel') || m.includes('uitleg') || m.includes('informatie'))) ||
    m === 'monra' ||
    m === 'info' ||
    m === 'informatie'
  )
}

type RouteTarget = MonraSite | 'groep'

function isBelgiumIntent(m: string): boolean {
  return (
    m.includes('belgi') ||
    m.includes('belgium') ||
    m.includes('vlaanderen') ||
    m.includes('walloni') ||
    m.includes('brussel') ||
    m.includes('antwerpen') ||
    m.includes('gent') ||
    m.includes('luik') ||
    m.includes('charleroi') ||
    m.includes('fod') ||
    m.includes('kbo')
  )
}

function detectBestSite(msg: string): RouteTarget | null {
  const m = msg.toLowerCase()

  if (
    m.includes('groep') ||
    m.includes('welke tak') ||
    m.includes('wat past') ||
    m.includes('niet zeker') ||
    m.includes('help me kiezen') ||
    m.includes('verschil tussen')
  ) {
    return 'groep'
  }

  if (isBelgiumIntent(m)) {
    return 'belgium'
  }

  if (
    m.includes('support') ||
    m.includes('barpersoneel') ||
    m.includes('bar personeel') ||
    m.includes('serveer') ||
    m.includes('gastheer') ||
    m.includes('gastvrouw') ||
    m.includes('horeca') ||
    m.includes('bhv') ||
    m.includes('ehbo') ||
    m.includes('brandwacht') ||
    m.includes('servicemedewerk') ||
    m.includes('toezichthouder') ||
    m.includes('nachtbewaking') ||
    m.includes('hospitality') ||
    m.includes('zorg') ||
    m.includes('bediening')
  ) {
    return 'support'
  }

  if (
    m.includes('senna') ||
    m.includes('events security') ||
    m.includes('event security') ||
    m.includes('vip') ||
    m.includes('close protection') ||
    m.includes('artiest') ||
    m.includes('voetbal') ||
    m.includes('stadion') ||
    m.includes('kermis') ||
    m.includes('master of games')
  ) {
    return 'events'
  }

  if (
    m.includes('beveilig') ||
    m.includes('security') ||
    m.includes('surveillance') ||
    m.includes('steward') ||
    m.includes('crowd') ||
    m.includes('festival') ||
    m.includes('concert') ||
    m.includes('congres') ||
    m.includes('beurs') ||
    m.includes('eso') ||
    m.includes('opleid')
  ) {
    return 'security'
  }

  return null
}

function routeReply(current: MonraSite, target: RouteTarget): ChatReply {
  if (target === 'groep') {
    return {
      text: 'De Monra-groep heeft vier expertises:\n\n🛡️ Monra Security (NL) — evenementenbeveiliging & ESO\n🤝 Monra Support — hospitality, BHV, EHBO, brandwachten\n✨ Monra Events Security — premium events (Senna Monsigneur)\n🇧🇪 Monra Belgium — beveiliging in heel België\n\nOnze keuze-wijzer helpt u in 2 stappen de juiste match te vinden.',
      action: { label: '→ Monra Groep keuze-wijzer', href: '/groep' },
    }
  }

  if (target === current) {
    const site = SITES[target]
    const phone = target === 'belgium' ? site.email : CONTACT.phone
    return {
      text: `U bent al op de juiste plek — ${site.name}.\n\nWij zijn gespecialiseerd in ${site.focus}.\n\n${target === 'belgium' ? '✉️' : '📞'} ${phone}\n✉️ ${site.email}\n\nZal ik u helpen met een offerte of aanvraag?`,
      action: { label: '→ Naar contact', href: `${site.path}#contact` },
    }
  }

  const site = SITES[target]
  return {
    text: `Voor wat u zoekt past ${site.name} het beste.\n\n${site.name} richt zich op ${site.focus}.\n\n✉️ ${site.email}${target !== 'belgium' ? `\n📞 ${CONTACT.phone}` : ''}`,
    action: { label: `→ Bezoek ${site.name}`, href: site.path },
  }
}

function salesReply(site: MonraSite): ChatReply {
  const s = SITES[site]
  const subjects: Record<MonraSite, string> = {
    security: 'Offerte aanvraag Monra Security',
    support: 'Personeelsaanvraag Monra Support',
    events: 'Offerte aanvraag Monra Events Security',
    belgium: 'Offerte aanvraag Monra Belgium',
  }
  return {
    text: `Graag help ik u verder met een offerte!\n\n${s.name} stuurt u het liefst:\n• Type event of locatie\n• Datum(en)\n• Gewenste inzet / aantal personen\n\n${site === 'belgium' ? '' : `📞 ${CONTACT.phone} (direct)\n`}✉️ ${s.email}\n\nWij reageren binnen 24 uur.`,
    action: {
      label: '✉ Offerte per e-mail',
      href: `mailto:${s.email}?subject=${encodeURIComponent(subjects[site])}`,
    },
  }
}

export function getMonraChatResponse(message: string, currentSite: MonraSite): ChatReply {
  const m = message.toLowerCase().trim()

  if (isGeneralMonraQuestion(m)) {
    return getMonraOverviewReply()
  }

  if (
    m.includes('welk model') ||
    m.includes('ben je ai') ||
    m.includes('ben je een ai') ||
    m.includes('chatgpt') ||
    m.includes('wie ben je') ||
    m.includes('wat ben je')
  ) {
    return {
      text: 'Ik ben de Monra AI-assistent — aangedreven via OpenRouter. Ik help u met vragen over Monra Security, Monra Support, Monra Events Security en Monra Belgium, en verwijs u door naar de juiste tak of een offerte.\n\nWaarmee kan ik u verder helpen?',
    }
  }

  const best = detectBestSite(m)
  if (best) {
    const wantsRouting =
      best === 'groep' ||
      m.includes('welke') ||
      m.includes('past') ||
      m.includes('doorverw') ||
      m.includes('verwij') ||
      m.includes('nodig') ||
      m.includes('zoek') ||
      best !== currentSite

    if (wantsRouting && (best === 'groep' || best !== currentSite || m.includes('welke tak'))) {
      return routeReply(currentSite, best)
    }
  }

  if (m.includes('offerte') || m.includes('aanvraag') || m.includes('boek') || m.includes('reserver')) {
    return salesReply(currentSite)
  }

  if (m.includes('prijs') || m.includes('tarief') || m.includes('kosten') || m.includes('betalen')) {
    return {
      text: 'Tarief is maatwerk — afhankelijk van type event, duur, locatie en aantal personen.\n\nMonra werkt met vaste teams (30–40% efficiënter dan gemiddeld). Vraag een vrijblijvende offerte aan.',
      action: { label: '→ Offerte aanvragen', href: `mailto:${SITES[currentSite].email}` },
    }
  }

  if (m.includes('contact') || m.includes('bellen') || m.includes('mail') || m.includes('bereik') || m.includes('telefoon')) {
    return {
      text: `Monra Groep — contact:\n\n📞 Directie NL: ${CONTACT.phone}\n📞 Planning NL: ${CONTACT.phonePlanning}\n✉️ Security NL: ${CONTACT.mailSecurity}\n✉️ Support: ${CONTACT.mailSupport}\n✉️ Events: ${CONTACT.mailEvents}\n✉️ Belgium: ${CONTACT.mailBelgium}\n📍 NL: ${CONTACT.address}\n\n24/7 bereikbaar voor spoed & planning.`,
    }
  }

  if (m.includes('fod') || (m.includes('vergunn') && (isBelgiumIntent(m) || currentSite === 'belgium'))) {
    if (currentSite !== 'belgium') {
      return routeReply(currentSite, 'belgium')
    }
    return {
      text: 'Monra Belgium is FOD-vergund conform de Wet van 2 oktober 2017 tot regeling van de private en bijzondere veiligheid. Wij opereren in Vlaanderen, Brussel en Wallonië — Nederlandstalig en Franstalig.',
      action: { label: '→ Offerte België', href: 'mailto:info@monra-belgium.be' },
    }
  }

  if (m.includes('certifi') || m.includes('svpb') || m.includes('keurmerk') || m.includes('wpbr') || m.includes('vergunning')) {
    return {
      text: 'Alle Monra-takken werken met gecertificeerd personeel.\n• NL: SVPB-keurmerk, Wpbr-vergund, SBB erkend leerbedrijf (ESO)\n• BE: FOD-vergund, Wet private beveiliging 2017',
    }
  }

  if (m.includes('eso') || m.includes('opleid') || m.includes('cursus') || m.includes('leerbedrijf')) {
    return {
      text: 'ESO (Event Security Officer) opleiding bij Monra:\n• Theorie + praktijk op echte events\n• SBB erkend leerbedrijf\n• Officieel certificaat\n\nBeschikbaar via Monra Security NL en Monra Events Security.',
      action: { label: '→ ESO bij Events Security', href: '/events-security#opleiding' },
    }
  }

  if (m.includes('senna') || m.includes('oprichter') || m.includes('directeur')) {
    return {
      text: 'Senna Monsigneur is oprichter van Monra Events Security — opgegroeid in het Monra-bedrijf. Raf Monsieur is CEO van de Monra Groep (inclusief Monra Belgium).',
      action: { label: '→ Over Senna', href: '/events-security#senna' },
    }
  }

  if (m.includes('bhv') || m.includes('ehbo') || m.includes('brandwacht')) {
    if (currentSite !== 'support') {
      return routeReply(currentSite, 'support')
    }
    return {
      text: 'Monra Support levert BHV\'ers, EHBO\'ers en brandwachten — gecertificeerd, met VOG-screening. Ook 24/7 landelijk inzetbaar voor brandwachten.',
      action: { label: '→ Personeel aanvragen', href: 'mailto:info@monra-support.nl' },
    }
  }

  if (m.includes('bar') || m.includes('serveer') || m.includes('gastheer') || m.includes('horeca')) {
    if (currentSite !== 'support') {
      return routeReply(currentSite, 'support')
    }
    return {
      text: 'Monra Support levert barpersoneel, serveersters, gastheren/vrouwen en servicemedewerkers — representatief, HACCP-bewust waar nodig.',
      action: { label: '→ Naar diensten', href: '/support#diensten' },
    }
  }

  if (m.includes('werkgebied') || m.includes('vlaanderen') || m.includes('walloni') || m.includes('brussel')) {
    if (currentSite !== 'belgium') {
      return routeReply(currentSite, 'belgium')
    }
    return {
      text: 'Monra Belgium is actief in:\n• Vlaanderen — Antwerpen, Gent, Brugge, Leuven, Hasselt\n• Brussel — hele Brussels gewest\n• Wallonië — Luik, Namen, Charleroi, Bergen\n\nNederlandstalig, Franstalig en tweetalig.',
      action: { label: '→ Contact België', href: '/belgie#contact' },
    }
  }

  if (m.includes('festival') || m.includes('concert') || m.includes('vip') || m.includes('voetbal')) {
    if (isBelgiumIntent(m)) {
      return routeReply(currentSite, 'belgium')
    }
    if (currentSite !== 'events' && (m.includes('vip') || m.includes('senna'))) {
      return routeReply(currentSite, 'events')
    }
    if (currentSite === 'security') {
      return {
        text: 'Monra Security beveiligt festivals, concerten en sportevents met vaste teams. Voor België: Monra Belgium. Voor premium/VIP: Monra Events Security.',
        action: { label: '→ Events Security', href: '/events-security' },
      }
    }
  }

  if (m.includes('ervaring') || m.includes('jaar') || m.includes('wie is monra') || m.includes('over monra')) {
    return getMonraOverviewReply()
  }

  if (isBelgiumIntent(m) && currentSite !== 'belgium') {
    return routeReply(currentSite, 'belgium')
  }

  if (m.includes('support') && currentSite !== 'support') {
    return routeReply(currentSite, 'support')
  }

  if ((m.includes('events') || m.includes('event security')) && currentSite !== 'events') {
    return routeReply(currentSite, 'events')
  }

  if (m.includes('security') && currentSite !== 'security' && !m.includes('events')) {
    return routeReply(currentSite, 'security')
  }

  return {
    text: `Goede vraag! Ik kan u helpen met:\n• De juiste Monra-tak kiezen\n• Offerte of personeelsaanvraag\n• Contact & bereikbaarheid\n\nWaar bent u naar op zoek — beveiliging NL/BE, hospitality personeel, of premium event security?`,
    action: { label: '→ Help me kiezen', href: '/groep' },
  }
}

export function getSiteTheme(site: MonraSite) {
  const themes = {
    security: {
      primary: '#1A2B6D',
      accent: '#11CFE7',
      headerIcon: 'shield' as const,
      label: 'Monra Assistent',
    },
    support: {
      primary: '#0E5C4B',
      accent: '#1ABFA1',
      headerIcon: 'handshake' as const,
      label: 'Monra Assistent',
    },
    events: {
      primary: '#0a0a0a',
      accent: '#EF4444',
      headerIcon: 'sparkles' as const,
      label: 'Monra Assistent',
    },
    belgium: {
      primary: '#1A2B6D',
      accent: '#11CFE7',
      headerIcon: 'shield' as const,
      label: 'Monra Assistent',
    },
  }
  return themes[site]
}

export function buildMonraSystemPrompt(currentSite: MonraSite): string {
  const current = SITES[currentSite]
  return `Je bent de officiële AI-assistent van de Monra-groep. De bezoeker is op ${current.name} (${current.path}).

## Over Monra
- Familiebedrijf gevestigd in Linne, Limburg — Schuttersstraat 7, 6067 GE Linne
- 25+ jaar ervaring, 500+ evenementen beveiligd
- Vaste teams — 30–40% efficiënter dan branchegemiddelde
- NL: SVPB-keurmerk, Wpbr-vergunning, SBB erkend leerbedrijf (ESO), KVK 89581806
- BE: FOD-vergund, Wet private beveiliging 2017
- CEO Monra Groep: Raf Monsieur
- 24/7 bereikbaar voor planning en spoed

## De vier Monra-takken
1. Monra Security (/) — evenementenbeveiliging NL. E-mail: ${CONTACT.mailSecurity}
2. Monra Support (/support) — hospitality, BHV, EHBO, brandwachten. E-mail: ${CONTACT.mailSupport}
3. Monra Events Security (/events-security) — premium events, Senna Monsigneur. E-mail: ${CONTACT.mailEvents}
4. Monra Belgium (/belgie) — evenementenbeveiliging BE (Vlaanderen, Brussel, Wallonië). E-mail: ${CONTACT.mailBelgium}

## Contact
- Directie NL: ${CONTACT.phone}
- Planning NL: ${CONTACT.phonePlanning}
- Keuze-wijzer: /groep

## Opmaak
- Kopjes in HOOFDLETTERS, bullets met •
- Noem taknamen voluit inclusief Monra Belgium
- Max 6–8 zinnen, Nederlands

## Jouw taken
- Beantwoord vragen over alle vier takken, certificering NL/BE, ESO, offertes
- België/Vlaanderen/Wallonië → Monra Belgium (/belgie)
- Verwijs door als andere tak beter past
- Geen prijzen verzinnen — maatwerk

Huidige pagina-focus: ${current.focus}`
}
