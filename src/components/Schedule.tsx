import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

interface Day {
  date: React.ReactNode
  dateTime: string
  summary: string
  timeSlots: Array<{
    name: string
    description: string | null
    description2: string | null
    start: string
    end: string
    openForOthers: boolean
    id: number
  }>
}

const schedule: Array<Day> = [
  {
    date: 'Dienstag 14. Juli',
    dateTime: '2026-07-14',
    summary: '',
    timeSlots: [
      {
        name: 'Food, Networking, Arriving',
        description: null,
        description2: null,
        start: '17:00',
        end: '17:20',
        openForOthers: false,
        id: 1,
      },
      {
        name: 'Welcome & Opening',
        description: null,
        description2: null,
        start: '17:30',
        end: '17:40',
        openForOthers: false,
        id: 2,
      },
      {
        name: 'Impulse 1',
        description: null,
        description2: null,
        start: '17:40',
        end: '18:00',
        openForOthers: false,
        id: 3,
      },
      {
        name: 'Impulse 2',
        description: null,
        description2: null,
        start: '18:00',
        end: '18:20',
        openForOthers: false,
        id: 4,
      },
      {
        name: 'Impulse 3',
        description: null,
        description2: null,
        start: '18:20',
        end: '18:40',
        openForOthers: false,
        id: 5,
      },
      {
        name: 'Impulse 4',
        description: null,
        description2: null,
        start: '18:40',
        end: '19:00',
        openForOthers: false,
        id: 6,
      },
      {
        name: 'Networking with Food & Drinks',
        description: '🥬 🥔 🥙 🧆 🌮 🍔',
        description2: null,
        start: '19:00',
        end: '22:00',
        openForOthers: false,
        id: 7,
      },
    ],
  },
]

function TimeSlots({ day, className }: { day: Day; className?: string }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'mx-auto w-full max-w-lg space-y-0 overflow-hidden rounded-xl border border-white/[0.08] bg-[#111]',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.id}
          aria-label={`${timeSlot.name} von ${timeSlot.start} bis ${timeSlot.end}`}
          className={clsx(
            'flex items-center justify-between gap-6 px-6 py-4',
            timeSlotIndex > 0 && 'border-t border-white/[0.06]',
          )}
        >
          <div className="min-w-0 flex-1 text-left">
            <p className="text-sm font-medium text-[#fafafa]">
              {timeSlot.name}
            </p>
            {timeSlot.description && (
              <p className="mt-0.5 text-sm text-[#737373]">
                {timeSlot.description}
              </p>
            )}
            {timeSlot.description2 && (
              <p className="mt-0.5 text-sm text-[#737373]">
                {timeSlot.description2}
              </p>
            )}
            {timeSlot.openForOthers && (
              <p className="mt-1 text-xs text-[#a3a3a3]">
                Offen mit{' '}
                <a
                  href="https://pretix.eu/l3montree/cybers-hack-2024/"
                  className="underline decoration-dashed underline-offset-2 transition-colors hover:text-[#fafafa]"
                  style={{ color: 'oklch(0.86 0.1677 101.44)' }}
                >
                  Besucherticket
                </a>
              </p>
            )}
          </div>
          <p className="flex-shrink-0 font-mono text-xs text-[#525252]">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>
            {' – '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>
          </p>
        </li>
      ))}
    </ol>
  )
}

export function Schedule() {
  return (
    <section
      id="schedule"
      aria-label="Schedule"
      className="bg-[#0a0a0a] py-24 sm:py-32"
    >
      <Container>
        {/* Kicker + heading */}
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#525252]">
            Ablauf
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#fafafa] sm:text-4xl">
            Event-Schedule
          </h2>
          <p className="mt-4 text-base text-[#a3a3a3]">
            <time dateTime="2026-07-14">Dienstag, 14. Juli 2026</time>
          </p>
        </div>

        <div className="mt-14">
          {schedule.map((day) => (
            <TimeSlots key={day.dateTime} day={day} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            className="px-6 py-3.5 text-sm font-semibold"
            href="https://ticket.bonn.digital/bonndigital/ossbn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sicher Dir Dein Ticket
          </Button>
        </div>
      </Container>
    </section>
  )
}
