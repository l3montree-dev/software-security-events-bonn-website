import { UPCOMING_EVENTS } from '@/config/navigation'
import type { EventConfig } from '@/config/types'
import Faqs from './Faqs'
import { Hero } from './Hero'
import { Schedule } from './Schedule'
import Speakers from './Speakers'
import { Sponsors } from './Sponsors'
import Topic from './Topic'
import { UpcomingEvents } from './UpcomingEvents'

// One layout for every event page. `href` is the page's own route; pages that
// are not listed in UPCOMING_EVENTS are archived events.
export function EventPage({
  event,
  href,
}: {
  event: EventConfig
  href: string
}) {
  const archived = !UPCOMING_EVENTS.some((e) => e.href === href)

  return (
    <div lang={event.lang} className="wrap-break-word">
      <Hero event={event} href={href} archived={archived} />
      <Speakers event={event} />
      <Topic event={event} href={href} />
      <Sponsors event={event} />
      <Schedule event={event} archived={archived} />
      <Faqs event={event} />
      <UpcomingEvents event={event} href={href} />
    </div>
  )
}
