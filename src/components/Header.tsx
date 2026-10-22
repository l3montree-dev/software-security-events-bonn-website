'use client'

import {
  CloseButton,
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  EXTERNAL_EVENT_LINKS,
  PAST_EVENT_LINKS,
  UPCOMING_EVENT_LINKS,
  UPCOMING_EVENTS,
} from '@/config/navigation'

const itemClass =
  'flex flex-col rounded-md border-l-2 border-transparent px-4 py-3 text-white transition-colors hover:bg-white/10 hover:text-l3-400 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-l3-500 aria-[current=page]:border-l3-400 aria-[current=page]:bg-white/10 aria-[current=page]:text-l3-400'

function EventItem({
  href,
  label,
  date,
  current,
}: {
  href: string
  label: string
  date: string
  current: boolean
}) {
  return (
    <li>
      <CloseButton
        as={Link}
        href={href}
        aria-current={current ? 'page' : undefined}
        className={itemClass}
      >
        <span className="text-base font-medium">{label}</span>
        <span className="text-sm text-zinc-400">{date}</span>
      </CloseButton>
    </li>
  )
}

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const next = UPCOMING_EVENTS[0].event

  return (
    <>
      <Popover
        as="header"
        className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-xs"
      >
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4 md:h-24">
            {/* Logo – Home Button */}
            <Link
              href="/"
              className="shrink-0 rounded-md focus:outline-hidden focus-visible:ring-2 focus-visible:ring-l3-500"
              aria-label="L3montree – zur Startseite"
            >
              <Image
                src="/l3montree-logo.svg"
                width={355}
                height={87}
                className="h-8 w-auto sm:h-10"
                alt=""
              />
            </Link>

            {/* Next event – desktop */}
            <div className="hidden min-w-0 flex-1 justify-center md:flex">
              <Link
                href="/"
                aria-current={isHome ? 'page' : undefined}
                className="group flex flex-col items-center rounded-md px-3 py-1 text-center focus:outline-hidden focus-visible:ring-2 focus-visible:ring-l3-500"
              >
                <span className="text-xs font-semibold tracking-widest text-l3-400 uppercase">
                  Nächstes Event
                </span>{' '}
                <span className="font-display text-2xl font-medium tracking-tight text-white transition-colors group-hover:text-l3-400">
                  {next.name}
                </span>{' '}
                <time dateTime={next.dateISO} className="text-sm text-zinc-300">
                  {next.date}
                </time>
              </Link>
            </div>

            {/* Menu button */}
            <PopoverButton className="group flex shrink-0 items-center gap-3 rounded-md px-3 py-2 text-white transition-colors hover:text-l3-400 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-l3-500 data-open:text-l3-400">
              <span className="text-sm font-semibold tracking-widest uppercase">
                Events
              </span>
              <span
                aria-hidden="true"
                className="flex flex-col items-center justify-center gap-2"
              >
                <span className="block h-0.5 w-8 origin-center bg-current transition-all duration-300 group-data-open:translate-y-2.5 group-data-open:rotate-45 motion-reduce:transition-none" />
                <span className="block h-0.5 w-8 bg-current transition-all duration-300 group-data-open:opacity-0 motion-reduce:transition-none" />
                <span className="block h-0.5 w-8 origin-center bg-current transition-all duration-300 group-data-open:-translate-y-2.5 group-data-open:-rotate-45 motion-reduce:transition-none" />
              </span>
            </PopoverButton>
          </div>
        </div>

        {/* Dropdown Navigation */}
        <PopoverPanel
          focus
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-black/95 backdrop-blur-xs md:max-h-[calc(100dvh-6rem)]"
        >
          <nav
            aria-label="Events"
            className="mx-auto grid max-w-site gap-8 px-4 py-6 sm:px-6 md:grid-cols-[1fr_2fr] lg:px-8"
          >
            <div>
              <p
                id="nav-upcoming-events"
                className="px-4 text-sm font-semibold tracking-widest text-zinc-400 uppercase"
              >
                Kommende Events
              </p>
              <ul
                aria-labelledby="nav-upcoming-events"
                className="mt-3 grid gap-1"
              >
                {UPCOMING_EVENT_LINKS.map((e) => (
                  <EventItem
                    key={e.href}
                    {...e}
                    current={pathname === e.href}
                  />
                ))}
              </ul>
            </div>
            <div>
              <p
                id="nav-past-events"
                className="px-4 text-sm font-semibold tracking-widest text-zinc-400 uppercase"
              >
                Vergangene Events
              </p>
              <ul
                aria-labelledby="nav-past-events"
                className="mt-3 grid gap-1 sm:grid-cols-2"
              >
                {PAST_EVENT_LINKS.map((e) => (
                  <EventItem
                    key={e.href}
                    {...e}
                    current={pathname === e.href}
                  />
                ))}
                {EXTERNAL_EVENT_LINKS.map((e) => (
                  <li key={e.href}>
                    <a
                      href={e.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={itemClass}
                    >
                      <span className="text-base font-medium">
                        {e.label} <span aria-hidden="true">↗</span>
                        <span className="sr-only">(öffnet in neuem Tab)</span>
                      </span>
                      <span className="text-sm text-zinc-400">
                        Externer Link
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </PopoverPanel>
      </Popover>
      {/* Next event – mobile: below the sticky header, scrolls away */}
      <Link
        href="/"
        aria-current={isHome ? 'page' : undefined}
        className="group flex flex-wrap items-baseline justify-center gap-x-2 border-b border-white/10 bg-black px-4 py-2 text-center text-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-l3-500 focus-visible:ring-inset md:hidden"
      >
        <span className="text-xs font-semibold tracking-widest text-l3-400 uppercase">
          Nächstes Event
        </span>{' '}
        <span className="font-semibold text-white group-hover:text-l3-400">
          {next.name}
        </span>{' '}
        <time dateTime={next.dateISO} className="text-zinc-300">
          {next.date}
        </time>
      </Link>
    </>
  )
}
