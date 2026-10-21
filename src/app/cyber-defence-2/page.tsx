import { EventPage } from '@/components/EventPage'
import { Layout } from '@/components/Layout'
import { CYBER_DEFENCE_2 } from '@/config/upcoming/cyber-defence-2'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: CYBER_DEFENCE_2.name,
  description: CYBER_DEFENCE_2.summary,
}

export default function Page() {
  return (
    <Layout>
      <EventPage event={CYBER_DEFENCE_2} href="/cyber-defence-2" />
    </Layout>
  )
}
