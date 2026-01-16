'use client'

import { useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

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
    date: 'Dienstag 20. Januar',
    dateTime: '2026-01-20',
    summary: '',
    timeSlots: [
      {
        name: 'Food, Networking, Arriving',
        description: null,
        description2: null,
        start: '18:00',
        end: '18:20',
        openForOthers: false,
        id: 1,
      },
      {
        name: 'Welcome & Opening',
        description: null,
        description2: null,
        start: '18:20',
        end: '18:30',
        openForOthers: false,
        id: 2,
      },
      {
        name: 'Talk 1',
        description:
          'Die (neue) Teilstreitkraft Cyber- und Informationsraum der Bundeswehr',
        description2:
          'Und deren Zusammenarbeit mit Partnern aus Wissenschaft & Forschung, Wirtschaft & Industrie sowie mit Vertretern anderer Behörden.',
        start: '18:30',
        end: '19:00',
        openForOthers: false,
        id: 3,
      },
      {
        name: 'Talk 2',
        description: 'Cybersicherheit im Feld',
        description2: '',
        start: '19:00',
        end: '19:30',
        openForOthers: false,
        id: 4,
      },
      {
        name: 'Talk 3',
        description: 'Software Supply Chain Security',
        description2:
          'Lückenlose Nachvollziehbarkeit für Mission-Critical Systems',
        start: '19:30',
        end: '20:00',
        openForOthers: false,
        id: 5,
      },
      {
        name: 'Talk 4',
        description: 'Cyber Threat Management:',
        description2: 'Es ist nicht genug zu WISSEN, man muss es auch ANWENDEN',
        start: '20:00',
        end: '20:30',
        openForOthers: false,
        id: 6,
      },
      {
        name: 'Networking with Food & Drinks',
        description: '🥬 🥔 🥙 🧆 🌮 🍔',
        description2: null,
        start: '20:30',
        end: '22:00',
        openForOthers: false,
        id: 7,
      },
    ],
  },
]

function DaySummary({ day }: { day: Day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-white">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-zinc-400">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }: { day: Day; className?: string }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-zinc-900 px-10 py-14 text-center lg:mx-auto lg:max-w-[40%]',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.id}
          aria-label={`TOP: ${timeSlot.name}; Beschreibung: ${timeSlot.description};Beschreibung: ${timeSlot.description2} Start um ${timeSlot.start} bis ${timeSlot.end}`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-white/20" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-zinc-100">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="text-lg font-semibold tracking-tight text-zinc-100">
              {timeSlot.description}
            </p>
          )}
          {timeSlot.description2 && (
            <p className="mt-1 tracking-tight text-zinc-100">
              {timeSlot.description2}
            </p>
          )}
          {timeSlot.openForOthers && (
            <p className="mt-1 text-sm font-medium tracking-tight text-l3-400">
              Offen mit{' '}
              <a
                href="https://pretix.eu/l3montree/cybers-hack-2024/"
                className="text-l3-400 underline decoration-dashed decoration-1 underline-offset-2 hover:text-l3-200"
              >
                Besucherticket
              </a>
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-zinc-400">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="lg:grid lg:grid-cols-1 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime} className="px-2">
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section
      id="schedule"
      aria-label="Schedule"
      className="bg-zinc-950 py-20 text-center sm:py-32"
    >
      <h2 className="text-center font-display text-4xl font-medium tracking-tight text-white">
        Event - Schedule
      </h2>
      <div className="relative mt-14 sm:mt-20">
        <Container className="relative">
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
