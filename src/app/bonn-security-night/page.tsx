import { EventPage } from '@/components/EventPage'
import { Layout } from '@/components/Layout'
import { BONN_SECURITY_NIGHT } from '@/config/archive/bonn-security-night'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: BONN_SECURITY_NIGHT.name,
  description: BONN_SECURITY_NIGHT.summary,
}

export default function Page() {
  return (
    <Layout>
      <EventPage event={BONN_SECURITY_NIGHT} href="/bonn-security-night" />
    </Layout>
  )
}
