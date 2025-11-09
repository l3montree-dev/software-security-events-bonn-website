import Faqs from '@/components/bonn-security-night/Faqs'
import { Header } from '@/components/bonn-security-night/Header'
import { Hero } from '@/components/bonn-security-night/Hero'
import { Schedule } from '@/components/bonn-security-night/Schedule'
import Speaker from '@/components/bonn-security-night/Speakers'
import { Sponsors } from '@/components/bonn-security-night/Sponsors'
import Topic from '@/components/bonn-security-night/Topic'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bonn Security Night',
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
