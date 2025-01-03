const faqs = [
  {
    id: 1,
    question: 'Whats the EU Open Source week?',
    answer:
      'Every year, at the end of January and the beginning of February, thousands of people from Europe and around the world gather in Brussels to discuss open source and open technologies. The main attraction is FOSDEM, Europe’s largest open source conference, which has inspired a range of side events, social activities, and workshops. For those interested in open technology, digital policy, and EU developments, OpenForum Europe’s EU Open Source Policy Summit brings together open source leaders and policymakers. Together, these events make up the EU Open Source Week.',
  },
  {
    id: 2,
    question: 'Who can participate?',
    answer:
      'Basically anyone who is interested! Participation is possible on site in Bonn or online. In either case, please buy a ticket in our shop.',
  },
  {
    id: 3,
    question: 'What about food and drink?',
    answer:
      'We will provide you with snacks and drinks (free of charge) on site.',
  },
]

export default function Faqs() {
  return (
    <div className="bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="font-display text-4xl font-medium tracking-tighter text-white">
          Häufig gestellte Fragen
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300">
          You have another question and can't find the answer you're looking
          for? are looking for? Then{' '}
          <a
            href="mailto:info@l3montree.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-l3-400 underline decoration-dashed decoration-1 underline-offset-2 hover:text-l3-200"
          >
            please send us an e-mail
          </a>
          .
        </p>
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300">
          For all L3montree events our{' '}
          <a
            href="https://github.com/l3montree-dev/devguard/blob/main/CODE_OF_CONDUCT.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-l3-400 underline decoration-dashed decoration-1 underline-offset-2 hover:text-l3-200"
          >
            Code of Conduct
          </a>
          .
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-semibold leading-7 text-white">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
