import Image from 'next/image'
import { CURRENT_PARTNERS, PAST_PARTNERS } from '@/config/event'

export function Sponsors() {
  return (
    <section
      id="sponsors"
      aria-label="Sponsors"
      className="bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Current partners */}
        <div className="mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-l3-600">
            Ermöglicht durch
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Die Partner dieses Events
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-zinc-600">
            Die Partner sind die tragenden Säulen der Veranstaltungen. Mit ihrer
            Unterstützung machen sie es möglich, eine außergewöhnliche
            Veranstaltung wie diese zu schaffen.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12 lg:justify-start lg:gap-20">
          {CURRENT_PARTNERS.map((p) => (
            <a
              key={p.href + p.darkSrc}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={p.darkSrc}
                alt={p.alt}
                width={p.width}
                height={p.height}
                className="h-12 w-auto object-contain"
              />
            </a>
          ))}
        </div>

        {/* Past partners */}
        <div className="mt-20 border-t border-zinc-200 pt-12">
          <p className="mb-8 text-sm font-semibold uppercase tracking-widest text-zinc-400">
            Vergangene Partner
          </p>
          <p className="mb-10 max-w-2xl text-lg leading-7 text-zinc-600">
            Partner, die die bisherigen OSS-Events durch ihre Fachvorträge
            bereichert haben.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 lg:justify-start lg:gap-14">
            {PAST_PARTNERS.map((p) => (
              <a
                key={p.href + p.src}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={p.width}
                  height={p.height}
                  className="h-10 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
