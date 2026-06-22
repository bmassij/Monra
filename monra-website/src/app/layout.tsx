import type { Metadata } from 'next'
import './globals.css'
import { CookieConsentBanner } from '@/components/CookieConsentBanner'

export const metadata: Metadata = {
  title: 'Monra Security — Professionele Evenementenbeveiliging',
  description: 'Professionele beveiliging nodig? De specialisten van Monra Security staan 24/7 klaar. Gecertificeerd, klantgericht en flexibel inzetbaar.',
  keywords: 'beveiliging, evenementenbeveiliging, security, festival beveiliging, concert beveiliging',
  openGraph: {
    title: 'Monra Security',
    description: 'Professionele evenementenbeveiliging — 24/7 bereikbaar, SVPB gecertificeerd.',
    type: 'website',
    locale: 'nl_NL',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body>
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  )
}
