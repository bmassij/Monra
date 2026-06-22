/**
 * Opleidingsinformatie Monra Security — gebaseerd op:
 * - Originele site (monra-security.nl / monra-website-preview.html)
 * - monra-events-security.html (ESO-stappen)
 * - beveiligingsbranche.nl (MBO Beveiliger 2 & 3)
 * - svpb.nl (ESO branchecertificaat)
 * - platformbeveiliging.nl / SBB (erkend leerbedrijf)
 */

export type OpleidingStep = { step: string; title: string; desc: string }

export type OpleidingProgram = {
  id: 'eso' | 'beveiliger2' | 'beveiliger3'
  niveau: string
  title: string
  subtitle: string
  provider: string
  intro: string
  highlights: string[]
  steps: OpleidingStep[]
  mailSubject: string
  badge: string
}

/** Officiële MBO-kwalificaties in NL beveiliging: niveau 2 en 3 (geen Beveiliger niveau 1). */
export const NIVEAU_UITLEG =
  'In Nederland zijn de officiële MBO-kwalificaties Beveiliger niveau 2 en niveau 3. Niveau 1 is geen beveiligersdiploma maar een entree-vooropleiding. ESO is een apart SVPB-branchecertificaat voor evenementenbeveiliging.'

export const OPLEIDINGEN: OpleidingProgram[] = [
  {
    id: 'eso',
    niveau: 'SVPB-certificaat',
    title: 'Event Security Officer',
    subtitle: 'ESO Opleiding',
    provider: 'SVPB + SBB erkend leerbedrijf',
    intro:
      'De opleiding tot Event Security Officer is de ideale route voor wie wil werken in de dynamische wereld van evenementenbeveiliging. Je leert veiligheid combineren met gastvrijheid, communicatie en verantwoordelijkheid — in de praktijk bij een professioneel en erkend leerbedrijf.',
    highlights: [
      'Theorie en wetgeving: crowd control, publieksstromen, communicatie en wettelijke kaders',
      'Praktijk op echte evenementenlocaties met begeleiding van ervaren professionals',
      'Officieel ESO-certificaat na het afronden van theorie én praktijk (SVPB)',
      'Sterke basis voor een loopbaan in evenementenbeveiliging',
      'Geregistreerd op Stagemarkt/SBB als erkend leerbedrijf particuliere beveiliging',
    ],
    steps: [
      { step: '01', title: 'Theorieonderwijs', desc: 'Kennis opbouwen over event security, wetgeving, toezicht en communicatie.' },
      { step: '02', title: 'Theorie-examen', desc: 'Officieel SVPB-examen ter afsluiting van de theoretische component.' },
      { step: '03', title: 'Praktijk op evenementen', desc: 'Meelopen op echte evenementen — alertheid en samenwerking centraal.' },
      { step: '04', title: 'ESO-certificaat & doorgroei', desc: 'Behaal het officiële certificaat en groei door binnen Monra.' },
    ],
    mailSubject: 'Interesse ESO Opleiding',
    badge: 'SVPB + SBB',
  },
  {
    id: 'beveiliger2',
    niveau: 'MBO niveau 2',
    title: 'Beveiliger',
    subtitle: 'MBO Beveiliger niveau 2',
    provider: 'SBB erkend leerbedrijf + ROC/onderwijsinstelling',
    intro:
      'Om als beveiliger aan het werk te mogen, volg je de officiële mbo-opleiding Beveiliger niveau 2. Theorie volg je bij een erkende onderwijsinstelling (ROC); de praktijk leer je bij een SBB-erkend leerbedrijf zoals Monra Security — doorgaans in een BBL-traject (werken én leren).',
    highlights: [
      'Officiële mbo-opleiding niveau 2 — startkwalificatie voor de beveiligingsbranche',
      'Theorie bij ROC/onderwijsinstelling, praktijk (BPV) bij Monra als leerbedrijf',
      'Branche-examens via SVPB; mbo-diploma via de onderwijsinstelling',
      'Surveilleren, toegangscontrole, optreden bij incidenten en service',
      'Doorstroom mogelijk naar Beveiliger niveau 3',
    ],
    steps: [
      { step: '01', title: 'Arbeidsovereenkomst & instroom', desc: 'BBL-start bij Monra als erkend leerbedrijf, gekoppeld aan een ROC of onderwijsinstelling.' },
      { step: '02', title: 'Theorie op school', desc: 'Beroepsgerichte vakken en examens bij de onderwijsinstelling (ca. 1 dag per week).' },
      { step: '03', title: 'Praktijk op de werkvloer', desc: 'Begeleiding door gecertificeerde praktijkopleiders op echte opdrachten en evenementen.' },
      { step: '04', title: 'Diploma Beveiliger 2', desc: 'Mbo-diploma + SVPB-diploma na succesvolle afronding van theorie én praktijk.' },
    ],
    mailSubject: 'Interesse MBO Beveiliger niveau 2',
    badge: 'MBO 2 · SBB',
  },
  {
    id: 'beveiliger3',
    niveau: 'MBO niveau 3',
    title: 'Beveiliger (coördinator)',
    subtitle: 'MBO Beveiliger niveau 3',
    provider: 'SBB erkend leerbedrijf + ROC/onderwijsinstelling',
    intro:
      'Beveiliger niveau 3 is de verdieping na niveau 2. Je leert operationele leiding geven, teams aansturen en beveiligingsdiensten coördineren. Vereiste: het diploma Beveiliger niveau 2. Praktijk weer bij een SBB-erkend leerbedrijf.',
    highlights: [
      'Vakopleiding niveau 3 — operationele leiding en coördinatie',
      'Toelating: diploma Beveiliger niveau 2',
      'Leidinggeven, dienstplanning, rapportage en veilig werken',
      'Praktijk bij Monra onder begeleiding van praktijkopleiders',
      'Doorgroei naar teamleider, coördinator of beveiligingsadviseur',
    ],
    steps: [
      { step: '01', title: 'Instroom na niveau 2', desc: 'Start met het Beveiliger 2-diploma en een arbeidsovereenkomst bij het leerbedrijf.' },
      { step: '02', title: 'Theorie verdieping', desc: 'Vakgerichte vakken: gebouwen beveiligen, leidinggeven, planning en communicatie.' },
      { step: '03', title: 'Praktijk met verantwoordelijkheid', desc: 'Coördinerende taken en teambegeleiding op de werkvloer.' },
      { step: '04', title: 'Diploma Beveiliger 3', desc: 'Afronding mbo-diploma niveau 3 en doorstroom naar hogere functies.' },
    ],
    mailSubject: 'Interesse MBO Beveiliger niveau 3',
    badge: 'MBO 3 · SBB',
  },
]

/** ESO-stappen voor Events Security (uit monra-events-security.html) */
export const ESO_EVENTS_STEPS: OpleidingStep[] = [
  { step: '1', title: 'Intake & kennismakingsgesprek', desc: 'Bespreek uw achtergrond, motivatie en verwachtingen. Wij zoeken samen de juiste instroom.' },
  { step: '2', title: 'Theorieopleiding', desc: 'Leer de wettelijke en operationele kaders van evenementenbeveiliging, crowd control en communicatie.' },
  { step: '3', title: 'Theorie-examen', desc: 'Officieel SVPB-examen ter afsluiting van de theoretische component van de ESO-opleiding.' },
  { step: '4', title: 'Praktijkstage op evenementen', desc: 'Draai mee op echte evenementen onder begeleiding van ervaren professionals. Handen-in-het-veld leren.' },
  { step: '5', title: 'ESO Certificaat & Plaatsing', desc: 'Met uw certificaat kunt u direct aan de slag bij Monra Events Security of elders in de branche.' },
]

export const ESO_EVENTS_CERTS = [
  { icon: '📚', title: 'Theorie & Wetgeving', desc: 'Event security, toezicht, publieksstromen, communicatie en wettelijke kaders binnen particuliere beveiliging.' },
  { icon: '🏟️', title: 'Praktijk op echte locaties', desc: 'Na het theorie-examen leer je verder in het veld — opdrachten en begeleiding op echte evenementen.' },
  { icon: '🏅', title: 'Officieel ESO Certificaat', desc: 'Sterke basis voor een loopbaan in evenementenbeveiliging en verdere groei in de veiligheidsbranche.' },
  { icon: '📈', title: 'Doorgroeimogelijkheden', desc: 'Van beveiliger naar teamleider, coördinator of ESO-instructeur binnen de Monra-organisatie.' },
]

export function getOpleidingById(id: OpleidingProgram['id']): OpleidingProgram {
  return OPLEIDINGEN.find(o => o.id === id)!
}
