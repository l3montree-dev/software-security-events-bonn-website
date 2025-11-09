import Image from 'next/image'
import { Button } from './Button'

export default function Topic() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            {/* Linke Spalte */}
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-l3-600"></h2>
              Wissen allein reicht nicht
              <h3 className="mt-2 font-display text-3xl font-medium tracking-tighter text-black">
                Cybersecurity in dynamischen Zeiten
              </h3>
              <p className="margin-bottom: 15px mt-6 text-base leading-8 text-zinc-800">
                Die Bedrohungslage im Cyberraum ist komplex und dynamisch –
                besonders im Defence-Bereich. Globale Konflikte, hybride
                Angriffsszenarien und die Abhängigkeit von kritischen
                Infrastrukturkomponenten erfordern nicht nur theoretisches
                Wissen, sondern vor allem praktische Handlungsfähigkeit. An
                diesem Abend diskutieren Expert*innen der Bundeswehr und des
                BWI, wie Deutschland und seine Partner sich strategisch und
                operativ aufstellen, um Cyberangriffe abzuwehren und Resilienz
                zu stärken. Kompakt. Strategisch. Praxisnah.
                <br />
                <br />
                <strong> Die Themen sind unter anderem: </strong>
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
              </ul>
              <p className="margin-bottom: 15px; mt-6 text-base leading-8 text-zinc-800">
                Im Anschluss an die Talks wird es bei Food & Drinks die
                Möglichkeit für vertiefende Fragen und Networking geben.
              </p>
            </div>
            <div style={{ marginBottom: '1cm' }}></div>
            <h3 className="mt-2 font-display text-3xl font-medium tracking-tighter text-black">
              Vergangene Events
            </h3>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Button
                href="../bonn-security-night"
                target="_blank"
                rel="noopener noreferrer"
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

          <div className="flex flex-col gap-[1cm]">
            <Image
              src="/crowd.JPG"
              alt="Beschreibung"
              height={1000}
              width={800}
              className="h-auto w-full rounded-lg shadow-xl shadow-black/10 ring-1 ring-white/10"
            />
            <Image
              src="/network.JPG"
              alt="Beschreibung"
              height={1000}
              width={800}
              className="h-auto w-full rounded-lg shadow-xl shadow-black/10 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
