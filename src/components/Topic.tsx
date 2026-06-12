import Image from 'next/image'
import { EVENT, PAST_EVENTS, TALKS } from '@/config/event'
import { Button } from './Button'

export default function Topic() {
  return (
    <section className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-l3-400">
            Open Source gehört die Zukunft!
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {EVENT.name}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-zinc-400">
            Am {EVENT.date} findet das Open-Source-Meetup Bonn statt – ein
            Nachmittag voller spannender Impulse, Diskussionen und Networking
            rund um Open Source und digitale Souveränität. Kompakt. Praxisnah.
            Offen.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: talks */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
              Impulsvorträge
            </p>
            {TALKS.map((talk, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/5 bg-white/[0.03] px-6 py-5"
              >
                <p className="text-base font-semibold text-white">
                  {talk.title}
                </p>
                {talk.body && (
                  <p className="mt-2 text-base leading-6 text-zinc-400">
                    {talk.body}
                  </p>
                )}
              </div>
            ))}
            <p className="mt-2 text-base text-zinc-400">
              Im Anschluss an die Talks: Food &amp; Drinks, vertiefende Fragen
              und Networking.
            </p>
          </div>

          {/* Right: images */}
          <div className="grid grid-rows-2 gap-4">
            <Image
              src="/talk.jpeg"
              alt="Speaker auf der Bühne während eines Vortrags"
              height={600}
              width={900}
              sizes="(min-width:1024px) 45rem, (min-width:640px) 36rem, 100vw"
              className="h-full w-full rounded-xl object-cover"
            />
            <Image
              src="/crowd.jpeg"
              alt="Publikum bei einer Veranstaltung"
              height={600}
              width={900}
              sizes="(min-width:1024px) 45rem, (min-width:640px) 36rem, 100vw"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Past events */}
        <div className="mt-20 border-t border-white/10 pt-12">
          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Vergangene Events
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PAST_EVENTS.map((e) => (
              <Button
                key={e.href}
                href={e.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full justify-center text-center"
              >
                {e.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
