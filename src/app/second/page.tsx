import { EventPage } from '@/components/EventPage'
import { Layout } from '@/components/Layout'
import { EU_OSS_WEEK } from '@/config/archive/eu-oss-week'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: EU_OSS_WEEK.name,
  description: EU_OSS_WEEK.summary,
}

export default function Page() {
  return (
    <Layout>
      <EventPage event={EU_OSS_WEEK} href="/second" />
    </Layout>
  )
}
