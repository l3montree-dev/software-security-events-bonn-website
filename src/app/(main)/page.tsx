import Faqs from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import LastTimeImpressions from '@/components/LastTimeImpressions'
import LastTimeSponsors from '@/components/Speaker'
import { Schedule } from '@/components/Schedule'
import { Sponsors } from '@/components/Sponsors'
import Topic from '@/components/Topic'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Cybersecurity Hackathon 2024 | Bonn | Open Source Software Sicherheit',
  description:
    'Nimm am Cybersecurity Hackathon 2024 in Bonn vom 8. - 10. November teil! Entwickle Lösungen für OSS Sicherheit, vernetze dich mit Experten und gewinne 3k € Preisgeld. Kostenlose Teilnahme, spannende Workshops und eine großartige Atmosphäre erwarten dich.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Topic />
      <LastTimeSponsors />
      <Schedule />
      <Sponsors />
      <Faqs />
    </>
  )
}
