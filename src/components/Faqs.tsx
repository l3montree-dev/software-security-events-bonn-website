import { FAQS } from '@/config/event'

export default function Faqs() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-l3-600">
            Häufige Fragen
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            FAQs
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-zinc-600">
            Du hast Fragen zum Event, auf die Du hier keine Antwort findest?{' '}
            <a
              href="mailto:info@l3montree.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-l3-600 underline decoration-dashed underline-offset-2 hover:text-l3-500"
            >
              <br />
              Dann sende uns einfach eine E-Mail
            </a>
            .
          </p>
          <p className="mt-3 max-w-2xl text-lg leading-7 text-zinc-600">
            Für alle OSS Events gilt dieser{' '}
            <a
              href="https://github.com/l3montree-dev/devguard/blob/main/CODE_OF_CONDUCT.md"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-l3-600 underline decoration-dashed underline-offset-2 hover:text-l3-500"
            >
              Code of Conduct
            </a>
            .
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FAQS.map((faq) => (
            <div
              key={faq.id}
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
