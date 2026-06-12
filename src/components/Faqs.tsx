const faqs = [
  {
    id: 1,
    question: 'Wer kann bei dem Event teilnehmen?',
    answer:
      'Jeder, der interessiert ist! Die Teilnahme ist dieses Mal nicht kostenlos, da wir Euch mit gutem Essen und Drinks versorgen wollen. Bitte registriere Dich über den Ticketshop.',
  },
  {
    id: 2,
    question: 'Wie sieht es mit Essen und Trinken aus?',
    answer: 'Wir versorgen Euch vor Ort mit Essen und Getränken.',
  },
]

export default function Faqs() {
  return (
    <section className="bg-[#0a0a0a] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Kicker + heading */}
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#525252]">
          FAQ
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#fafafa] sm:text-4xl">
          Häufige Fragen
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-[1.6] text-[#a3a3a3]">
          Du hast Fragen zum Event, auf die Du hier keine Antwort findest?{' '}
          <a
            href="mailto:info@l3montree.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-150 hover:text-[#fafafa]"
            style={{ color: 'oklch(0.86 0.1677 101.44)' }}
          >
            Dann sende uns einfach eine E-Mail.
          </a>
        </p>
        <p className="mt-3 max-w-2xl text-base leading-[1.6] text-[#a3a3a3]">
          Für alle OSS Events gilt dieser{' '}
          <a
            href="https://github.com/l3montree-dev/devguard/blob/main/CODE_OF_CONDUCT.md"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-150 hover:text-[#fafafa]"
            style={{ color: 'oklch(0.86 0.1677 101.44)' }}
          >
            Code of Conduct
          </a>
          .
        </p>

        {/* FAQ items */}
        <dl className="mt-16 space-y-0 divide-y divide-white/[0.06] rounded-xl border border-white/[0.08] bg-[#111]">
          {faqs.map((faq) => (
            <div key={faq.id} className="px-6 py-6">
              <dt className="text-sm font-semibold text-[#fafafa]">
                {faq.question}
              </dt>
              <dd className="mt-2 text-sm leading-[1.6] text-[#a3a3a3]">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
