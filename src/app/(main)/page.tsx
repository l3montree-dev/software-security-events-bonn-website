import Faqs from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import LastTimeSponsors from '@/components/Speaker'
import { Schedule } from '@/components/Schedule'
import { Sponsors } from '@/components/Sponsors'
import Topic from '@/components/Topic'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EU Open Source Week - Offside Event Bonn',
  description:
    'Open Source Security, - Policy & Open Source as a business model',
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
