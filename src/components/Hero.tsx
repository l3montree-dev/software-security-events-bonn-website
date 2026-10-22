import { ArrowDownIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import { LABELS } from '@/config/labels'
import type { EventConfig } from '@/config/types'
import { Icon, ICONS } from './Icon'
import { RichText } from './RichText'
import { talkAnchor } from './Topic'
import { PastEventNotice, TicketButton } from './TicketButton'

export function Hero({
  event,
  archived,
}: {
  event: EventConfig
  archived: boolean
}) {
  const t = LABELS[event.lang]
  const { hero } = event

  return (
    <section className="relative overflow-hidden bg-black">
      <div className="mx-auto max-w-site px-6 pt-12 pb-24 lg:px-8 lg:pt-16">
        {/* Top badge + link to the upcoming events section */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <p className="inline-flex items-center gap-2 border-b-2 border-l3-400 pb-1 text-base font-semibold tracking-widest text-l3-400 uppercase">
            {hero.badge}
          </p>
          <a
            href="#future-events"
            className="group ml-auto inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-l3-400/60 hover:bg-white/10 hover:text-l3-400 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-l3-500"
          >
            {t.futureEvents}
            <ArrowDownIcon
              aria-hidden="true"
              className="h-4 w-4 text-l3-400 transition-transform group-hover:translate-y-0.5 motion-reduce:transition-none"
            />
          </a>
        </div>

        {/* Main content grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
              {hero.title}
              {hero.titleHighlight && (
                <>
                  {' '}
                  <span className="text-l3-400">{hero.titleHighlight}</span>
                </>
              )}
            </h1>
            {hero.tagline && (
              <p className="mt-4 text-xl font-semibold tracking-tight text-zinc-200 sm:text-2xl">
                {hero.tagline}
              </p>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-4 text-base text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Icon d={ICONS.calendar} />
                <time dateTime={event.dateISO}>{event.date}</time>
              </span>
              <span className="flex items-center gap-1.5">
                <Icon d={ICONS.clock} />
                {event.time}
              </span>
              <a
                href={event.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-sm transition-colors hover:text-l3-300"
              >
                <Icon d={ICONS.pin} />
                {event.location.name}
                <span className="sr-only"> {t.newTab}</span>
              </a>
            </div>

            <RichText className="mt-6 max-w-2xl text-lg leading-7 text-zinc-400">
              {hero.description}
            </RichText>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {archived ? (
                <PastEventNotice event={event} />
              ) : (
                <TicketButton event={event} />
              )}
            </div>
          </div>

          {/* Right column — talks */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-base font-semibold tracking-widest text-zinc-400 uppercase">
              {event.talksLabel}
            </h2>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {event.talks.map((talk, index) => {
                const text = (
                  <span className="min-w-0">
                    <span className="block text-base leading-6 font-semibold text-white transition-colors group-hover:text-l3-400">
                      {talk.title}
                    </span>
                    {talk.subtitle && (
                      <span className="mt-1 block text-sm leading-5 text-zinc-400">
                        {talk.subtitle}
                      </span>
                    )}
                  </span>
                )

                return (
                  <li key={talk.title}>
                    {talk.body ? (
                      <a
                        href={`#${talkAnchor(index)}`}
                        className="group flex h-full items-start gap-3 rounded-xl border border-white/10 bg-white/3 px-5 py-4 transition-colors hover:border-l3-400/50 hover:bg-white/6 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-l3-500"
                      >
                        <ArrowDownIcon
                          aria-hidden="true"
                          className="mt-1 h-4 w-4 shrink-0 text-l3-400 transition-transform group-hover:translate-y-0.5 motion-reduce:transition-none"
                        />
                        {text}
                        <span className="sr-only"> – {t.toAbstract}</span>
                      </a>
                    ) : (
                      <div className="flex h-full items-start gap-3 rounded-xl border border-white/10 bg-white/3 px-5 py-4">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500"
                        />
                        {text}
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
            <p className="mt-5 text-base text-zinc-400">{t.talksFollowUp}</p>
          </div>
        </div>

        {/* Sponsor bar */}
        <div className="mt-20 border-t border-white/10 pt-10">
          <h2 className="mb-6 text-base font-semibold tracking-widest text-zinc-400 uppercase">
            {t.presentedBy}
          </h2>
          <ul className="flex flex-wrap items-center justify-center gap-12 lg:justify-start lg:gap-20">
            {event.presentedBy.map((logo) => (
              <li key={logo.href + logo.src}>
                <a href={logo.href} target="_blank" rel="noopener">
                  <Image
                    alt={logo.alt}
                    src={logo.src}
                    width={logo.width}
                    height={logo.height}
                    className="h-12 w-auto object-contain"
                  />
                  <span className="sr-only"> {t.newTab}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
