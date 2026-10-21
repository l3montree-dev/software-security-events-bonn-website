import Image from 'next/image'
import { LABELS } from '@/config/labels'
import type { EventConfig, Logo } from '@/config/types'

function LogoList({
  logos,
  newTab,
  className,
  imageClassName,
}: {
  logos: Array<Logo>
  newTab: string
  className: string
  imageClassName: string
}) {
  return (
    <ul className={className}>
      {logos.map((logo) => (
        <li key={logo.href + logo.src}>
          <a href={logo.href} target="_blank" rel="noopener">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className={imageClassName}
            />
            <span className="sr-only"> {newTab}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export function Sponsors({ event }: { event: EventConfig }) {
  const t = LABELS[event.lang]

  return (
    <section
      id="sponsors"
      aria-labelledby="sponsors-heading"
      className="bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Current partners */}
        <div className="mb-16">
          <p className="text-sm font-semibold tracking-widest text-l3-700 uppercase">
            {t.sponsorsEyebrow}
          </p>
          <h2
            id="sponsors-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-balance text-zinc-900 sm:text-4xl"
          >
            {t.sponsorsHeading}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-zinc-600">
            {t.sponsorsIntro}
          </p>
        </div>

        <LogoList
          logos={event.partners}
          newTab={t.newTab}
          className="flex flex-wrap items-center justify-center gap-12 lg:justify-start lg:gap-20"
          imageClassName="h-12 w-auto object-contain"
        />

        {/* Past partners */}
        {event.pastPartners.length > 0 && (
          <div className="mt-20 border-t border-zinc-200 pt-12">
            <h3 className="mb-8 text-sm font-semibold tracking-widest text-zinc-500 uppercase">
              {t.pastPartners}
            </h3>
            <p className="mb-10 max-w-2xl text-lg leading-7 text-zinc-600">
              {t.pastPartnersIntro}
            </p>
            <LogoList
              logos={event.pastPartners}
              newTab={t.newTab}
              className="flex flex-wrap items-center justify-center gap-10 lg:justify-start lg:gap-14"
              imageClassName="h-10 w-auto object-contain"
            />
          </div>
        )}
      </div>
    </section>
  )
}
