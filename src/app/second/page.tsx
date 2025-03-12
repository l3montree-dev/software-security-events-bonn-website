import Faqs from '@/components/oss-bonn/Faqs'
import { Header } from '@/components/oss-bonn/Header'
import { Hero } from '@/components/oss-bonn/Hero'
import { Schedule } from '@/components/oss-bonn/Schedule'
import Speaker from '@/components/oss-bonn/Speaker'
import { Sponsors } from '@/components/oss-bonn/Sponsors'
import Topic from '@/components/oss-bonn/Topic'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EU Open Source Week - Offside Event Bonn',
  description:
    'Open Source Security, - Policy & Open Source as a business model',
}

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Topic />
      <Speaker />
      <Schedule />
      <Sponsors />
      <Faqs />
    </>
  )
}
