import { LABELS } from '@/config/labels'
import type { EventConfig } from '@/config/types'

const linkClass =
  'font-medium text-l3-700 underline decoration-dashed underline-offset-2 hover:text-l3-800'

export default function Faqs({ event }: { event: EventConfig }) {
  const t = LABELS[event.lang]

  return (
    <section aria-labelledby="faq-heading" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm font-semibold tracking-widest text-l3-700 uppercase">
            {t.faqEyebrow}
          </p>
          <h2
            id="faq-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-balance text-zinc-900 sm:text-4xl"
          >
            FAQs
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-zinc-600">
            {t.faqQuestion}{' '}
            <a href="mailto:info@l3montree.com" className={linkClass}>
              {t.faqMail}
            </a>
            .
          </p>
          <p className="mt-3 max-w-2xl text-lg leading-7 text-zinc-600">
            {t.faqConductBefore}{' '}
            <a
              href="https://github.com/l3montree-dev/devguard/blob/main/CODE_OF_CONDUCT.md"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Code of Conduct
              <span className="sr-only"> {t.newTab}</span>
            </a>
            {t.faqConductAfter}
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {event.faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-6 py-5"
            >
              <dt className="text-base font-semibold text-zinc-900">
                {faq.question}
              </dt>
              <dd className="mt-2 text-base leading-6 text-zinc-600">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
