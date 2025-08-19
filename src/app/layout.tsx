import { type Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: {
    template: 'Cyber- & Softwaresecurity Event - Bonn',
    default: 'Cyber- & Softwaresecurity Event - Bonn',
  },
  description:
    'Expert*innen geben in spannenden Impulsvorträgen wertvolle Einblicke in effiziente und sichere Softwareentwicklung und -tests – sowohl aus der Sicht von Managern als auch von Entwicklern.',
}

const env = process.env.NODE_ENV

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Cyber- & Softwaresecurity Event - Bonn',
  startDate: '2025-09-24T18:00',
  endDate: '2025-09-24T22:00',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: {
    '@type': 'Place',
    name: 'DIGITALHUB.DE',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Am Hauptbahnhof 6',
      addressLocality: 'Bonn',
      postalCode: '53111',
      addressRegion: 'NRW',
      addressCountry: 'DE',
    },
  },
  image: ['/l3montree-logo.svg'],
  description:
    'Expert*innen geben in spannenden Impulsvorträgen wertvolle Einblicke in effiziente und sichere Softwareentwicklung und -tests – sowohl aus der Sicht von Managern als auch von Entwicklern.',
  organizer: {
    '@type': 'Organization',
    name: 'L3montree Cybersecurity',
    url: 'https://l3montree.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="de"
      className={clsx(
        'h-full bg-zinc-950 antialiased',
        inter.variable,
        dmSans.variable,
      )}
    >
      <head>
        {env === 'production' && (
          <script
            async
            src="https://umami.l3montree.com/script.js"
            data-website-id="e3572955-12ea-44c9-9581-634e16bf8b74"
          ></script>
        )}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Cyber- & Softwaresecurity Event - Bonn"
        />
        <meta property="og:type" content="Event" />
        <meta property="og:url" content="http://www.oss-bonn.de/" />
        <meta property="og:image" content="l3montree-logo.svg" />
        <meta
          property="og:description"
          content="Expert*innen geben in spannenden Impulsvorträgen wertvolle Einblicke in effiziente und sichere Softwareentwicklung und -tests – sowohl aus der Sicht von Managern als auch von Entwicklern."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        ></script>
      </head>
      <body className="flex min-h-full">
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  )
}
