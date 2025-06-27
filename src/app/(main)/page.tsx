import Faqs from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Schedule } from '@/components/Schedule'
import Speakers from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import Topic from '@/components/Topic'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Software Security Events Bonn',
  description: 'Open Source & Software Security Events in Bonn und Umgebung',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Topic />
      <Speakers />
      <Sponsors />
      <Schedule />
      <Faqs />
    </>
  )
}
