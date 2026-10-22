import { LABELS } from '@/config/labels'
import type { EventConfig } from '@/config/types'
import { TicketButton } from './TicketButton'

export function Schedule({
  event,
  archived,
}: {
  event: EventConfig
  archived: boolean
}) {
  const t = LABELS[event.lang]

  return (
    <section
      id="schedule"
      aria-labelledby="schedule-heading"
      className="bg-black py-24 sm:py-32"
    >
      <div className="mx-auto max-w-site px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm font-semibold tracking-widest text-l3-400 uppercase">
            {t.scheduleEyebrow}
          </p>
          <h2
            id="schedule-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl"
          >
            {t.scheduleHeading(event.date)}
          </h2>
        </div>

        <div className="relative">
          {/* vertical line (from sm up; on phones the time sits in the card) */}
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 hidden w-px bg-white/10 sm:left-36 sm:block"
          />

          <ol role="list" className="relative">
            {event.schedule.map((slot) => (
              <li
                key={slot.start + slot.name}
                className="relative flex gap-6 pb-4 last:pb-0 sm:pb-10"
              >
                {/* Time badge */}
                <div className="hidden w-32 shrink-0 pt-4.5 text-right sm:block">
                  <time
                    dateTime={`${event.dateISO}T${slot.start}`}
                    className="font-mono text-sm font-semibold text-l3-400"
                  >
                    {slot.start}
                  </time>
                </div>

                {/* Content */}
                <div className="flex min-w-0 flex-1 flex-col rounded-xl border border-white/5 bg-white/3 px-5 py-4">
                  <h3 className="text-base font-semibold text-white">
                    {slot.name}
                  </h3>
                  {slot.description && (
                    <p className="mt-1 text-base leading-6 text-zinc-400">
                      {slot.description}
                    </p>
                  )}
                  {slot.details && (
                    <p className="mt-1 text-base leading-6 text-zinc-300">
                      {slot.details}
                    </p>
                  )}
                  <p className="order-first mb-1 font-mono text-sm font-semibold text-l3-400 sm:order-0 sm:mt-2 sm:mb-0 sm:font-normal sm:text-zinc-400">
                    <time dateTime={`${event.dateISO}T${slot.start}`}>
                      {slot.start}
                    </time>{' '}
                    –{' '}
                    <time dateTime={`${event.dateISO}T${slot.end}`}>
                      {slot.end}
                    </time>
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {!archived && (
          <div className="mt-16 flex justify-start">
            <TicketButton event={event} />
          </div>
        )}
      </div>
    </section>
  )
}
