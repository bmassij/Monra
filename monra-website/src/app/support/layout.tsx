import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Monra Support BV — Hospitality, Toezicht & Zorg',
  description: 'Ondersteuningsprofessionals voor hospitality, veiligheid en zorg – flexibel inzetbaar, altijd gastvrij. 9 diensten: BHV, EHBO, brandwachten, barpersoneel en meer.',
}

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return children
}
