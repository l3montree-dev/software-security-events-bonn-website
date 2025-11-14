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
                Wissen allein reicht nicht!
              </h2>

              <h3 className="mt-2 font-display text-3xl font-medium tracking-tighter text-black">
                Cybersecurity in dynamischen Zeiten
              </h3>

              <p className="mb-4 mt-6 text-base leading-8 text-zinc-800">
                Die Bedrohungslage im Cyberraum ist komplex und dynamisch –
                besonders im Defence-Bereich. Globale Konflikte, hybride
                Angriffsszenarien und die Abhängigkeit von kritischen
                Infrastrukturkomponenten erfordern nicht nur theoretisches
                Wissen, sondern vor allem praktische Handlungsfähigkeit. An
                diesem Abend diskutieren Expert*innen der Bundeswehr und des
                BWI, wie Deutschland und seine Partner sich strategisch und
                operativ aufstellen, um Cyberangriffe abzuwehren und Resilienz
                zu stärken.
              </p>

              <p className="mb-4 text-base leading-8 text-zinc-800">
                Kompakt. Strategisch. Praxisnah.
              </p>

              <p className="mb-4 text-base leading-8 text-zinc-800">
                <strong>Die Themen sind unter anderem:</strong>
              </p>

              <ul className="mt-6 list-disc space-y-4 pl-6 text-base leading-8 text-zinc-800">
                <li>
                  <strong>
                    Die (neue) Teilstreitkraft Cyber- und Informationsraum der
                    Bundeswehr
                  </strong>
                  <br />
                  Wie gestaltet sich die Zusammenarbeit mit Wissenschaft,
                  Forschung, Wirtschaft und anderen Behörden, um die digitale
                  Souveränität und Handlungsfähigkeit zu sichern?
                </li>
                <li>
                  <strong>
                    Cyber Threat Management: Vom Wissen zur Anwendung
                  </strong>
                  <br />
                  Warum ist es entscheidend, nicht nur Bedrohungen zu
                  analysieren, sondern gezielt und schnell zu handeln? Wie sieht
                  modernes Threat Management in der Praxis aus?
                </li>
                <li>
                  <strong>More TBA</strong>
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
