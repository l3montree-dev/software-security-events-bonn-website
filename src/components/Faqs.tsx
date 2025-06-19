const faqs = [
  {
    id: 1,
    question: 'Was ist ein OSS-Bonn Event?',
    answer:
      'Das OSS-Bonn Eventformat ist ein Format das aus der Kooperation von L3montree Cybersecurity, dem DigitalHubs Bonn und des Cyber Security Clusters Bonn e.V. ins Leben gerufen wurde und regelmäßig abendliche Events zu verschiedensten Themen aus dem Bereich der Informatik und Cybersecurity veranstaltet.',
  },
  {
    id: 2,
    question: 'Wer kann bei dem Event teilnehmen?',
    answer:
      'Jeder, der interessiert ist! Die Teilnahme ist komplett kostenlos, bitte Registriere Dich aber über den Ticketshop. Die Daten werden NICHT zu werbezwecken gespeichert und dienen lediglich der Event-Organisation.',
  },
  {
    id: 3,
    question: 'Wie sieht es mit Essen und Trinken aus?',
    answer: 'Wir versorgen Euch vor Ort mit Snacks und Getränken (kostenlos).',
  },
]

export default function Faqs() {
  return (
    <div className="bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="font-display text-4xl font-medium tracking-tighter text-white">
          FAQs
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300">
          Du hast Fragen zum Event, auf die Du hier keine Antwort findest?{' '}
          <a
            href="mailto:info@l3montree.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-l3-400 underline decoration-dashed decoration-1 underline-offset-2 hover:text-l3-200"
          >
            Dann sende uns einfach eine E-mail
          </a>
          .
        </p>
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300">
          Für alle L3montree Events gilt dieser{' '}
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
