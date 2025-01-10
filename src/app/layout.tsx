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
    template: '%s - EU Open Source Week - Offside Event Bonn',
    default: 'EU Open Source Week - Offside Event Bonn',
  },
  description:
    'As part of the EU Open Source Week, we are excited to invite you to our Offside Event in Bonn, where we will dive deep into the intersection of Open Source Security, Open Source Policies, and Open Source as a Reliable Business Model.',
}

const env = process.env.NODE_ENV

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'EU Open Source Week - Offside Event Bonn',
  startDate: '2025-01-30T18:00',
  endDate: '2024-01-30T22:00',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: {
    '@type': 'Place',
    name: 'DIGITALHUB.DE',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rheinwerkallee 6',
      addressLocality: 'Bonn',
      postalCode: '53227',
      addressRegion: 'NRW',
      addressCountry: 'DE',
    },
  },
  image: ['https://cybersecurity-hackathon.de/teilnehmende-2023.jpg'],
  description:
    'As part of the EU Open Source Week, we are excited to invite you to our Offside Event in Bonn, where we will dive deep into the intersection of Open Source Security, Open Source Policies, and Open Source as a Reliable Business Model.',
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
          content="EU Open Source Week - Offsite Event Bonn"
        />
        <meta property="og:type" content="Event" />
        <meta property="og:url" content="http://www.oss-bonn.de/" />
        <meta property="og:image" content="l3montree-logo.svg" />
        <meta
          property="og:description"
          content="As part of the -EU Open Source Week-, we are excited to invite you to our Offside Event in Bonn, where we will dive deep into the intersection of Open Source Security, Open Source Policies, and Open Source as a Reliable Business Model. This exclusive event aims to bring together thought leaders, policymakers, business innovators, and technologists to explore how open source is shaping the future of technology—and how we can ensure it remains secure, sustainable, and a trusted foundation for businesses of all sizes."
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
