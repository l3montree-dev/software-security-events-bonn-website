import { EventPage } from '@/components/EventPage'
import { Layout } from '@/components/Layout'
import { SOUVERAEN } from '@/config/archive/souveraen'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: SOUVERAEN.name,
  description: SOUVERAEN.summary,
}

export default function Page() {
  return (
    <Layout>
      <EventPage event={SOUVERAEN} href="/souveraen" />
    </Layout>
  )
}
