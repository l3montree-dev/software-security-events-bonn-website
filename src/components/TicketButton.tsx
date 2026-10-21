import { LABELS } from '@/config/labels'
import type { EventConfig } from '@/config/types'
import { Button } from './Button'

export function TicketButton({ event }: { event: EventConfig }) {
  const t = LABELS[event.lang]

  if (!event.ticketUrl) {
    return (
      <span className="inline-flex w-full justify-center rounded-md border border-l3-400/40 px-4 py-3 text-center text-base font-semibold text-l3-400 sm:w-auto sm:px-8 sm:text-lg">
        {t.ticketsSoon}
      </span>
    )
  }

  return (
    <Button
      href={event.ticketUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full px-4 py-3 text-base font-semibold sm:w-auto sm:px-8 sm:text-lg"
    >
      {t.ticketCta}
      <span className="sr-only"> {t.newTab}</span>
    </Button>
  )
}

export function PastEventNotice({ event }: { event: EventConfig }) {
  const t = LABELS[event.lang]

  return (
    <p className="w-full text-base text-zinc-300">{t.pastEvent(event.date)}</p>
  )
}
