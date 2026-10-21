import { EventPage } from '@/components/EventPage'
import { Layout } from '@/components/Layout'
import { CYBER_DEFENCE } from '@/config/archive/cyber-defence'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: CYBER_DEFENCE.name,
  description: CYBER_DEFENCE.summary,
}

export default function Page() {
  return (
    <Layout>
      <EventPage event={CYBER_DEFENCE} href="/cyber_defence" />
    </Layout>
  )
}
