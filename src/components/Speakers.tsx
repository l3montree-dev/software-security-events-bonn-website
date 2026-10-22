import { BuildingOffice2Icon, CodeBracketIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import { LABELS } from '@/config/labels'
import { trackable } from '@/config/tracking'
import type { EventConfig } from '@/config/types'

// External speaker link as a separate chip. No "noreferrer", so the target
// sees the visit came from this page.
function SpeakerLink({
  href,
  icon: Icon,
  children,
  newTab,
}: {
  href: string
  icon: typeof CodeBracketIcon
  children: React.ReactNode
  newTab: string
}) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener"
        className="inline-flex items-start gap-1.5 rounded-md border border-l3-700 bg-white px-2.5 py-1.5 text-left text-sm font-medium text-zinc-800 transition-colors hover:bg-l3-50 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-l3-500"
      >
        <Icon
          aria-hidden="true"
          className="mt-0.5 h-4 w-4 shrink-0 text-l3-700"
        />
        <span>
          {children}
          <span className="sr-only"> {newTab}</span>
        </span>
      </a>
    </li>
  )
}

export default function Speakers({ event }: { event: EventConfig }) {
  const t = LABELS[event.lang]
  const { speakers } = event

  return (
    <section
      aria-labelledby="speakers-heading"
      className="bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-site px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-base font-semibold tracking-widest text-l3-700 uppercase">
            {speakers.eyebrow}
          </p>
          <h2
            id="speakers-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-balance text-zinc-900 sm:text-4xl"
          >
            {t.speakersHeading}
          </h2>
          {speakers.intro && (
            <p className="mt-4 max-w-2xl text-lg leading-7 text-zinc-600">
              {speakers.intro}
            </p>
          )}
        </div>

        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {speakers.list.map((person) => (
            <li
              key={person.name}
              className="flex flex-col rounded-xl border border-zinc-200 bg-zinc-50 p-6"
            >
              <Image
                alt={[
                  person.name,
                  [person.role, person.company?.name]
                    .filter(Boolean)
                    .join(', '),
                ]
                  .filter(Boolean)
                  .join(' – ')}
                src={person.imageUrl}
                width={224}
                height={224}
                sizes="10rem"
                className="mx-auto h-40 w-40 rounded-full object-cover"
              />
              <div className="mt-5 flex flex-1 flex-col">
                <h3 className="text-lg font-semibold text-zinc-900">
                  {person.name}
                </h3>
                <div className="mt-0.5 min-h-12 text-base text-zinc-500">
                  {person.role && <p>{person.role}</p>}
                  {person.company && !person.company.href && (
                    <p>{person.company.name}</p>
                  )}
                  {(person.company?.href || person.link) && (
                    <ul className="mt-3 flex flex-col items-start gap-2">
                      {person.company?.href && (
                        <SpeakerLink
                          href={trackable(person.company.href)}
                          icon={BuildingOffice2Icon}
                          newTab={t.newTab}
                        >
                          {person.company.name}
                        </SpeakerLink>
                      )}
                      {person.link && (
                        <SpeakerLink
                          href={person.link.href}
                          icon={CodeBracketIcon}
                          newTab={t.newTab}
                        >
                          {person.link.label}
                        </SpeakerLink>
                      )}
                    </ul>
                  )}
                </div>
                <div className="mt-4 flex-1 border-t border-zinc-200 pt-4">
                  <p className="text-xs font-semibold tracking-widest text-l3-700 uppercase">
                    Talk
                  </p>
                  <p className="mt-1.5 text-base leading-snug font-semibold text-zinc-900">
                    {person.topic}
                  </p>
                  {person.topicSubtitle && (
                    <p className="mt-1 text-sm leading-5 text-zinc-600">
                      {person.topicSubtitle}
                    </p>
                  )}
                </div>
                {person.pdfFile && (
                  <a
                    href={person.pdfFile}
                    download
                    aria-label={`${t.downloadSlides}: ${person.topic}`}
                    className="mt-4 inline-flex justify-center rounded-lg bg-l3-500 px-4 py-2 text-base font-semibold text-black transition hover:bg-l3-400 focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-l3-700"
                  >
                    {t.downloadSlides}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
