import Image from 'next/image'
import { Button } from './Button'

export default function Topic() {
  return (
    <div className="overflow-hidden bg-[#0a0a0a] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Left column */}
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              {/* Kicker */}
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#525252]">
                Open Source gehört die Zukunft
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#fafafa] sm:text-4xl">
                OSS-Meetup in Bonn
              </h2>
              <p className="mb-4 mt-6 text-base leading-[1.6] text-[#a3a3a3]">
                Am 14. Juli 2026 findet das Open-Source-Meetup Bonn statt – ein
                Nachmittag voller spannender Impulse, Diskussionen und
                Networking rund um Open Source und digitale Souveränität.
              </p>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#525252]">
                Kompakt. Praxisnah. Offen.
              </p>

              <p className="mb-4 text-sm font-medium text-[#737373]">
                Impulsthemen u.a.:
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title:
                      'Wie setze ich Open Source Software sicher und effizient in meinem Unternehmen ein?',
                    body: 'Open Source Security ist das Haupt-Thema bei L3montree. Es gibt eine ganze Menge Open Source Tools, die die Entwicklung nicht nur sicherer, sondern auch noch compliant zu neuen Anforderungen wie zum Beispiel dem CRA machen können.',
                  },
                  {
                    title: 'Erfolgsmodell Open Source',
                    body: 'Wenn Sie digital wirklich unabhängig und souverän agieren wollen, führt am Geschäftsmodell Open Source kein Weg vorbei. Ein kurzer Abriss der letzten 20 Jahre und ein noch kürzerer Ausblick auf die nächsten.',
                  },
                  {
                    title:
                      'Jenseits von Meta und Musk: Marketing mit OpenSource-Software im Fediverse',
                    body: 'Die Agentur von Bonn.digital hat schon immer auf Marketing-Tools im OpenSource-Bereich gesetzt – von WordPress über Newsletter-Tools bis hin zu Social-Media-Portalen im Fediverse.',
                  },
                ].map((item) => (
                  <li
                    key={item.title}
                    className="rounded-lg border border-white/[0.08] bg-[#111] p-5"
                  >
                    <p className="text-sm font-semibold text-[#fafafa]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-[1.6] text-[#737373]">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-sm leading-[1.6] text-[#737373]">
                Im Anschluss an die Talks gibt es bei Food &amp; Drinks die
                Möglichkeit für vertiefende Fragen und Networking.
              </p>
            </div>

            {/* Past events */}
            <div className="mt-14 border-t border-white/[0.06] pt-10">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#525252]">
                Vergangene Events
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Button
                  variant="secondary"
                  href="../cyber_defence"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bonn Cybersecurity in Defence öffnen"
                  className="text-sm"
                >
                  Cybersecurity in Defence
                </Button>
                <Button
                  variant="secondary"
                  href="../bonn-security-night"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bonn Cybersecurity Night öffnen"
                  className="text-sm"
                >
                  Bonn Cybersecurity Night
                </Button>
                <Button
                  variant="secondary"
                  href="../souveraen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                >
                  Digitale Souveränität
                </Button>
                <Button
                  variant="secondary"
                  href="../afterwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                >
                  Cybersecurity AfterWorkshop
                </Button>
                <Button
                  variant="secondary"
                  href="../second"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                >
                  EU Open Source Week Bonn
                </Button>
                <Button
                  variant="secondary"
                  href="https://gitlab.opencode.de/cybersecurity-hackathon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                >
                  OSS Security Hackathon 2024
                </Button>
              </div>
            </div>
          </div>

          {/* Right column – photos */}
          <div className="flex flex-col gap-6 lg:mt-10 lg:self-start">
            <Image
              src="/talk.jpeg"
              alt="Speaker auf der Bühne während eines Vortrags"
              height={600}
              width={900}
              sizes="(min-width:1024px) 45rem, (min-width:640px) 36rem, 100vw"
              className="h-auto w-full rounded-xl ring-1 ring-white/[0.08]"
            />
            <Image
              src="/crowd.jpeg"
              alt="Publikum bei einer Veranstaltung"
              height={600}
              width={900}
              sizes="(min-width:1024px) 45rem, (min-width:640px) 36rem, 100vw"
              className="h-auto w-full rounded-xl ring-1 ring-white/[0.08]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
