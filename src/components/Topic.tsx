import Image from 'next/image'
import { LABELS } from '@/config/labels'
import { EXTERNAL_EVENT_LINKS, PAST_EVENT_LINKS } from '@/config/navigation'
import type { EventConfig } from '@/config/types'
import { Button } from './Button'
import { RichText } from './RichText'
import { TalkAbstract } from './TalkAbstract'

const eventButtonClass = 'flex w-full justify-center text-center'

// Anchor of a talk card, linked from the talk list in the hero.
export const talkAnchor = (index: number) => `talk-${index + 1}`

// Sentence break: ., ! or ? after a letter (so "20. Oktober" stays intact),
// followed by whitespace and an uppercase letter or opening quote.
const SENTENCE_BREAK = /(?<=\p{L}[.!?])\s+(?=[\p{Lu}„"])/u

// Text descriptions longer than two sentences get a teaser made of the first
// two sentences; shorter ones and markup are shown in full.
function splitTeaser(body: React.ReactNode) {
  const paragraphs =
    typeof body === 'string'
      ? [body]
      : Array.isArray(body) && body.every((p) => typeof p === 'string')
        ? (body as string[])
        : null
  if (!paragraphs) return null

  const sentences = paragraphs[0].split(SENTENCE_BREAK)
  if (paragraphs.length === 1 && sentences.length <= 2) return null

  const text = sentences.slice(0, 2).join(' ')
  const teaser = text.endsWith('.') ? `${text.slice(0, -1)}…` : `${text} …`
  return { teaser, paragraphs }
}

export default function Topic({
  event,
  href,
}: {
  event: EventConfig
  href: string
}) {
  const t = LABELS[event.lang]
  const { topic } = event
  const pastEvents = PAST_EVENT_LINKS.filter((e) => e.href !== href)

  return (
    <section
      aria-labelledby="topic-heading"
      className="bg-black py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-l3-400">
            {topic.eyebrow}
          </p>
          <h2
            id="topic-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {topic.heading}
          </h2>
          <RichText className="mt-4 max-w-2xl text-lg leading-7 text-zinc-400">
            {topic.intro}
          </RichText>
        </div>

        {/* Main grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: talks */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
              {event.talksLabel}
            </h3>
            {event.talks.map((talk, index) => {
              const abstract = talk.body ? splitTeaser(talk.body) : null

              return (
                <div
                  key={talk.title}
                  id={talkAnchor(index)}
                  className="rounded-xl border border-white/5 bg-white/[0.03] px-6 py-5"
                >
                  <h4 className="text-base font-semibold text-white">
                    {talk.title}
                  </h4>
                  {talk.subtitle && (
                    <p className="mt-1 text-base font-medium text-zinc-300">
                      {talk.subtitle}
                    </p>
                  )}
                  {abstract ? (
                    <TalkAbstract
                      anchorId={talkAnchor(index)}
                      title={talk.title}
                      {...abstract}
                      labels={{ readMore: t.readMore, readLess: t.readLess }}
                    />
                  ) : (
                    talk.body && (
                      <RichText className="mt-2 text-base leading-6 text-zinc-400">
                        {talk.body}
                      </RichText>
                    )
                  )}
                </div>
              )
            })}
            {topic.note && (
              <RichText className="mt-2 text-base text-zinc-400">
                {topic.note}
              </RichText>
            )}
          </div>

          {/* Right: images */}
          <div className="flex flex-col gap-4">
            {topic.images.map((image) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width:1024px) 36rem, 100vw"
                className="aspect-[3/2] w-full rounded-xl object-cover"
              />
            ))}
          </div>
        </div>

        {/* Past events */}
        <div className="mt-20 border-t border-white/10 pt-12">
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-zinc-400">
            {t.pastEvents}
          </h3>
          <ul
            lang="de"
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {pastEvents.map((e) => (
              <li key={e.href}>
                <Button href={e.href} className={eventButtonClass}>
                  {e.label}
                </Button>
              </li>
            ))}
            {EXTERNAL_EVENT_LINKS.map((e) => (
              <li key={e.href}>
                <Button
                  href={e.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={eventButtonClass}
                >
                  {e.label}
                  <span className="sr-only"> {LABELS.de.newTab}</span>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
