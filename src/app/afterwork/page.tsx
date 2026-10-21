import { EventPage } from '@/components/EventPage'
import { Layout } from '@/components/Layout'
import { AFTERWORK } from '@/config/archive/afterwork'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: AFTERWORK.name,
  description: AFTERWORK.summary,
}

export default function Page() {
  return (
    <Layout>
      <EventPage event={AFTERWORK} href="/afterwork" />
    </Layout>
  )
}
