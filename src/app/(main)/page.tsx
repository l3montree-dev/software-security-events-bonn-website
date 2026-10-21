import { EventPage } from '@/components/EventPage'
import { EVENT } from '@/config/event'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: EVENT.name,
  description: EVENT.summary,
}

export default function Home() {
  return <EventPage event={EVENT} href="/" />
}
