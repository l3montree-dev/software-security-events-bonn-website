import Faqs from '@/components/cyber_defence/Faqs'
import { Header } from '@/components/cyber_defence/Header'
import { Hero } from '@/components/cyber_defence/Hero'
import { Schedule } from '@/components/cyber_defence/Schedule'
import Speaker from '@/components/cyber_defence/Speakers'
import { Sponsors } from '@/components/cyber_defence/Sponsors'
import Topic from '@/components/cyber_defence/Topic'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cybersecurity in Defence',
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
