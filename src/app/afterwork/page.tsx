import Faqs from '@/components/afterwork/Faqs'
import { Header } from '@/components/afterwork/Header'
import { Hero } from '@/components/afterwork/Hero'
import { Schedule } from '@/components/afterwork/Schedule'
import Speaker from '@/components/afterwork/Speakers'
import { Sponsors } from '@/components/afterwork/Sponsors'
import Topic from '@/components/afterwork/Topic'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cybersecurity AfterWorkshop',
  description: 'Software & Cyber-Security Event Bonn',
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
