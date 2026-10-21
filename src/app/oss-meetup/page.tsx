import { EventPage } from '@/components/EventPage'
import { Layout } from '@/components/Layout'
import { OSS_MEETUP } from '@/config/archive/oss-meetup'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: OSS_MEETUP.name,
  description: OSS_MEETUP.summary,
}

export default function Page() {
  return (
    <Layout>
      <EventPage event={OSS_MEETUP} href="/oss-meetup" />
    </Layout>
  )
}
