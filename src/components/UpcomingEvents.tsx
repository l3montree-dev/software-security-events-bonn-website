import { LABELS } from '@/config/labels'
import { UPCOMING_EVENTS } from '@/config/navigation'
import type { EventConfig } from '@/config/types'
import { Button } from './Button'
import { Icon, ICONS } from './Icon'

// "Future Events" section: all upcoming events, shown on every event page.
export function UpcomingEvents({
  event,
  href,
}: {
  event: EventConfig
  href: string
}) {
  const t = LABELS[event.lang]

  return (
    <section
      id="future-events"
      aria-labelledby="future-events-heading"
      className="bg-black py-24 sm:py-32"
    >
      <div className="mx-auto max-w-site px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm font-semibold tracking-widest text-l3-400 uppercase">
            {t.upcomingEyebrow}
          </p>
          <h2
            id="future-events-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl"
          >
            {t.upcomingHeading}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-zinc-400">
            {t.upcomingIntro}
          </p>
        </div>

        <ul role="list" className="grid gap-6 lg:grid-cols-2">
          {UPCOMING_EVENTS.map(({ href: target, event: upcoming }) => {
            const isThisPage = target === href

            return (
              <li
                key={target}
                className="flex flex-col rounded-xl border border-white/10 bg-white/3 p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-base text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Icon d={ICONS.calendar} />
                    <time lang={upcoming.lang} dateTime={upcoming.dateISO}>
                      {upcoming.date}
                    </time>
                  </span>
                  <span
                    lang={upcoming.lang}
                    className="flex items-center gap-1.5"
                  >
                    <Icon d={ICONS.clock} />
                    {upcoming.time}
                  </span>
                  {isThisPage && (
                    <span className="rounded-full bg-l3-400/15 px-3 py-0.5 text-xs font-semibold tracking-widest text-l3-400 uppercase">
                      {t.youAreHere}
                    </span>
                  )}
                </div>
                <h3
                  lang={upcoming.lang}
                  className="mt-4 text-2xl font-bold tracking-tight text-white"
                >
                  {upcoming.name}
                </h3>
                <p
                  lang={upcoming.lang}
                  className="mt-3 max-w-xl flex-1 text-base leading-7 text-zinc-400"
                >
                  {upcoming.summary}
                </p>
                <p className="mt-4 flex items-center gap-1.5 text-sm text-zinc-400">
                  <Icon d={ICONS.pin} />
                  {upcoming.location.name}
                </p>
                <div className="mt-8">
                  <Button
                    href={isThisPage ? '#schedule' : target}
                    className="px-6 py-3 font-semibold"
                  >
                    {isThisPage ? t.toSchedule : t.toEvent}
                    <span className="sr-only">: {upcoming.name}</span>
                  </Button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
