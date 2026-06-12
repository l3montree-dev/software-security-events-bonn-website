import { Button } from '@/components/Button'
import { EVENT, SCHEDULE } from '@/config/event'

export function Schedule() {
  return (
    <section
      id="schedule"
      aria-label="Schedule"
      className="bg-black py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-l3-400">
            Ablauf
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Programm — {EVENT.date}
          </h2>
        </div>

        <ol role="list" className="relative">
          {/* vertical line */}
          <div className="absolute bottom-0 left-[7.5rem] top-0 w-px bg-white/10 sm:left-36" />

          {SCHEDULE.map((slot) => (
            <li key={slot.id} className="relative flex gap-6 pb-10 last:pb-0">
              {/* Time badge */}
              <div className="w-24 shrink-0 pt-[1.125rem] text-right sm:w-32">
                <span className="font-mono text-sm font-semibold text-l3-400">
                  {slot.start}
                </span>
              </div>

              {/* Line crossing point — spacer */}
              <div className="w-0 shrink-0" />

              {/* Content */}
              <div className="flex-1 rounded-xl border border-white/5 bg-white/[0.03] px-5 py-4">
                <p className="text-base font-semibold text-white">
                  {slot.name}
                </p>
                {slot.description && (
                  <p className="mt-1 text-base leading-6 text-zinc-400">
                    {slot.description}
                  </p>
                )}
                <p className="mt-2 font-mono text-sm text-zinc-600">
                  {slot.start} – {slot.end}
                </p>
                {slot.openForOthers && (
                  <p className="mt-1 text-sm text-l3-400">
                    Offen mit{' '}
                    <a
                      href="https://pretix.eu/l3montree/cybers-hack-2024/"
                      className="underline decoration-dashed underline-offset-2 hover:text-l3-200"
                    >
                      Besucherticket
                    </a>
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex justify-start">
          <Button
            href={EVENT.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 text-lg font-semibold"
          >
            Sicher Dir Dein Ticket →
          </Button>
        </div>
      </div>
    </section>
  )
}
