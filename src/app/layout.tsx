import { type Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import Image from 'next/image'
import clsx from 'clsx'

import { EVENT } from '@/config/event'
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
    template: '%s | Software Security Events Bonn',
    default: 'Cyber- & Softwaresecurity Event - Bonn',
  },
  description:
    'Expert*innen geben in spannenden Impulsvorträgen wertvolle Einblicke in effiziente und sichere Softwareentwicklung und -tests – sowohl aus der Sicht von Managern als auch von Entwicklern.',
}

const env = process.env.NODE_ENV

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: EVENT.name,
  startDate: `${EVENT.dateISO}T${EVENT.schedule[0].start}`,
  endDate: `${EVENT.dateISO}T${EVENT.schedule[EVENT.schedule.length - 1].end}`,
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: {
    '@type': 'Place',
    name: 'L3montree HQ',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Markt 3',
      addressLocality: 'Bonn',
      postalCode: '53111',
      addressRegion: 'NRW',
      addressCountry: 'DE',
    },
  },
  image: ['/l3montree-logo.svg'],
  description: EVENT.summary,
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
        'h-full scroll-pt-20 bg-zinc-950 antialiased md:scroll-pt-28',
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
        <meta property="og:title" content="OSS - Event - Bonn" />
        <meta property="og:type" content="Event" />
        <meta property="og:url" content="http://www.oss-bonn.de/" />
        <meta property="og:image" content="/Startupweek_weiß_short.svg" />
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
