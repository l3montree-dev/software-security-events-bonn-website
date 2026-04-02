import Image from 'next/image'
import { Button } from './Button'

export default function Topic() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-l3-600">
                Open Source gehört die Zukunft!
              </h2>
              <h3 className="mt-2 font-display text-3xl font-medium tracking-tighter text-black">
                OSS-Meetup in Bonn
              </h3>
              <p className="mb-4 mt-6 text-base leading-8 text-zinc-800">
                Am 14. Juli 2026 findet Open-Source-Meetup Bonn statt – ein
                Nachmittag voller spannender Impulse, Diskussionen und
                Networking rund um die Themen Open Source und digitale
                Souveränität.
              </p>
              <p className="mb-4 text-base leading-8 text-zinc-800">
                Kompakt. Praxisnah. Offen.
              </p>
              <p className="mb-4 text-base leading-8 text-zinc-800">
                <strong>Die Themen der Impulse sind unter anderem:</strong>
              </p>
              <ul className="mt-6 list-disc space-y-4 pl-6 text-base leading-8 text-zinc-800">
                <li>
                  <strong>
                    Wie setze ich Open Source Software sicher und effizient in
                    meinem Unternehmen ein?
                  </strong>
                  <br />
                  Open Source Security ist das Haupt-Thema bei L3montree. Es
                  gibt eine ganze Menge Open Source Tools, die die Entwicklung
                  nicht nur sicherer, sondern auch noch compliant zu neuen
                  Anforderungen wie zum Beispiel dem CRA machen können. Wir
                  zeigen euch welche Tools ihr nutzen könnt.
                </li>
                <li>
                  <strong>Erfolgsmodell Open Source</strong>
                  <br />
                  Wenn Sie digital wirklich unabhängig und souverän agieren
                  wollen, führt am Geschäftsmodell Open Source kein Weg vorbei.
                  Ein kurzer Abriss der letzten 20 Jahre und ein noch kürzerer
                  Ausblick auf die nächsten.
                </li>
                <li>
                  <strong>
                    Jenseits von Meta und Musk: Marketing mit
                    OpenSource-Software im Fediverse
                  </strong>
                  <br />
                  Die Agentur von Bonn.digital hat schon immer auf
                  Marketing-Tools im OpenSource-Bereich gesetzt. Angefangen von
                  WordPress auf der eigenen Domain, über Newsletter-Tools bis
                  hin zu Social-Media-Portalen im Fediverse. Aber aufgrund der
                  weltpolitischen Lage fragen auch immer mehr Kunden nach einer
                  +1-Strategie an, um digital souveräner zu werden. Sascha
                  Foerster gibt einen SpeedRun durch die Marketing-Toolbox von
                  Bonn.digital, auf Basis von OpenSource-Software mit Fokus aufs
                  Fediverse.
                </li>
              </ul>

              <p className="mb-6 mt-6 text-base leading-8 text-zinc-800">
                Im Anschluss an die Talks wird es bei Food & Drinks die
                Möglichkeit für vertiefende Fragen und Networking geben.
              </p>
            </div>

            <div className="mb-6" />

            <h3 className="mt-2 font-display text-3xl font-medium tracking-tighter text-black">
              Vergangene Events
            </h3>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Button
                href="../cyber_defence"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bonn Cybersecurity in Defence öffnen"
              >
                Cybersecurity in Defence
              </Button>

              <Button
                href="../bonn-security-night"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bonn Cybersecurity Night öffnen"
              >
                Bonn Cybersecurity Night
              </Button>

              <Button
                href="../souveraen"
                target="_blank"
                rel="noopener noreferrer"
              >
                Digitale Souveränität
              </Button>

              <Button
                href="../afterwork"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cybersecurity AfterWorkshop
              </Button>

              <Button
                href="../second"
                target="_blank"
                rel="noopener noreferrer"
              >
                EU Open Source Week - Offsite Event Bonn
              </Button>

              <Button
                href="https://gitlab.opencode.de/cybersecurity-hackathon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Source Security Hackathon 2024
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:mt-10 lg:self-start">
            <Image
              src="/talk.jpeg"
              alt="Speaker auf der Bühne während eines Vortrags"
              height={600}
              width={900}
              sizes="(min-width:1024px) 45rem, (min-width:640px) 36rem, 100vw"
              className="h-auto w-full rounded-lg shadow-xl shadow-black/10 ring-1 ring-white/10"
            />
            <Image
              src="/crowd.jpeg"
              alt="Publikum bei einer Veranstaltung"
              height={600}
              width={900}
              sizes="(min-width:1024px) 45rem, (min-width:640px) 36rem, 100vw"
              className="h-auto w-full rounded-lg shadow-xl shadow-black/10 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
