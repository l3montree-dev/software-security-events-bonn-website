import Faqs from '@/components/souveraen/Faqs'
import { Hero } from '@/components/souveraen/Hero'
import { Schedule } from '@/components/souveraen/Schedule'
import Speakers from '@/components/souveraen/Speakers'
import { Sponsors } from '@/components/souveraen/Sponsors'
import Topic from '@/components/souveraen/Topic'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Software Security Events Bonn - Digitale Souveränität',
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
