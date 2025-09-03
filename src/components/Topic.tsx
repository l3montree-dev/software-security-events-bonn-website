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
              Wie bin und bleibe ich sicher?
              <h3 className="mt-2 font-display text-3xl font-medium tracking-tighter text-black">
                Cybersecurity in &quot;angespannten&quot; Zeiten
              </h3>
              <p className="margin-bottom: 15px mt-6 text-base leading-8 text-zinc-800">
                Globale Spannungen, technologische Abhängigkeiten, unsichere
                Lieferketten – Das BSI bezeichnet die Lage der IT-Sicherheit in
                Deutschland als &quot;angespannt&quot;.
                <br />
                An diesem Abend diskutieren Expert*innen aus modern und
                zukunftsfähig im Bereich der Cybersecurity aufstellt.
                <strong> Kompakt. Strategisch. Praxisnah. </strong>
                Was sind die aktuellen Bedrohungen und wie können Unternehmen
                sich gegen diese schützen?
                <br />
                <br />
                <strong> Die Themen sind unter anderem: </strong>
              </p>
              <ul className="mt-6 list-disc space-y-4 pl-6 text-base leading-8 text-zinc-800">
                <li>
                  <strong>
                    Distributed Denial of Service (DDoS) as a Service
                  </strong>
                  <br />
                  Wie Angriffe mittlerweile als Service angeboten werden.
                </li>
                <li>
                  <strong>Souveräne Cloud für den Bund</strong>
                  <br />
                  Wie kann der Bund eine Cloudinfrastruktur aufbauen ohne, dass
                  er sich dabei in zu große Abhängigkeiten begiebt?
                </li>
                <li>
                  <strong>CSAF (Common Security Advisory Framework)</strong>
                  <br />
                  Was ist das standardisierte, quelloffene und maschinenlesbare
                  Format für Security Advisories, das die automatisierte
                  Verteilung, Bewertung und Skalierung von Schwachstellen- und
                  Mitigationsinformationen ermöglicht?
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
