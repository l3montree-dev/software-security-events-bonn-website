// Backlinks to speakers and sponsors carry this source, so they can see visits
// from the event pages in their analytics.
const TRACKING_SOURCE = 'oss-bonn-event'

export function trackable(href: string) {
  const url = new URL(href)
  url.searchParams.set('utm_source', TRACKING_SOURCE)
  url.searchParams.set('utm_medium', 'referral')
  return url.toString()
}
