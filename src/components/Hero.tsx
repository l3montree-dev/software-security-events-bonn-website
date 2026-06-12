import Image from 'next/image'
import { CURRENT_PARTNERS, EVENT, TALKS } from '@/config/event'
import { Button } from './Button'

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-8 lg:pt-16">
        {/* Top badge */}
        <div className="mb-8 flex">
          <span className="inline-flex items-center gap-2 border-b-2 border-l3-400 pb-1 text-base font-semibold uppercase tracking-widest text-l3-400">
            {EVENT.name}
          </span>
        </div>

        {/* Main content grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Open Source &{' '}
              <span className="text-l3-400">digitale Souveränität</span>
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-base text-zinc-400">
              <span className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 text-l3-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
                {EVENT.date}
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 text-l3-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                {EVENT.time}
              </span>
              <a
                href={EVENT.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-l3-300"
              >
                <svg
                  className="h-4 w-4 text-l3-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                {EVENT.location.name}
              </a>
            </div>

            <p className="mt-6 text-lg leading-7 text-zinc-400">
              {EVENT.subtitle}
            </p>

            <div className="mt-8">
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

          {/* Right column — talks */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-base font-semibold uppercase tracking-widest text-zinc-500">
              Impulsvorträge
            </p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {TALKS.map((talk, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-5 py-4 backdrop-blur-sm"
                >
                  <svg
                    className="mt-1 h-4 w-4 shrink-0 text-l3-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                  <span className="text-base leading-6 text-zinc-200">
                    {talk.title}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-base text-zinc-400">
              Im Anschluss: Fragen, Diskussionen &amp; Networking
            </p>
          </div>
        </div>

        {/* Sponsor bar */}
        <div className="mt-20 border-t border-white/10 pt-10">
          <p className="mb-6 text-base font-semibold uppercase tracking-widest text-zinc-500">
            Presented by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 lg:justify-start lg:gap-20">
            {CURRENT_PARTNERS.map((s) => (
              <a
                key={s.href + s.lightSrc}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt={s.alt}
                  src={s.lightSrc}
                  width={s.width}
                  height={s.height}
                  className="h-12 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
