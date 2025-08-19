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
              Quo Vadis, IT-Sec?
              <h3 className="mt-2 font-display text-3xl font-medium tracking-tighter text-black">
                Digitale Souveränität in der Cybersecurity
              </h3>
              <p className="margin-bottom: 15px mt-6 text-base leading-8 text-zinc-800">
                Globale Spannungen, technologische Abhängigkeiten, unsichere
                Lieferketten – europäische Unternehmen stehen vor der
                Herausforderung, digitale Souveränität neu zu denken. An diesem
                Abend diskutieren Expert*innen aus Wirtschaft, Politik und Tech,
                wie Europa sich resilient und unabhängig im Bereich
                Cybersecurity aufstellt. Kompakt. Strategisch. Praxisnah. Wie
                können Unternehmen mit europäischen Lösungen Sicherheit – von
                Infrastruktur bis Cloud - zurückgewinnen?
                <br />
                <br />
                <strong> Die Themen sind unter anderem: </strong>
              </p>
              <ul className="mt-6 list-disc space-y-4 pl-6 text-base leading-8 text-zinc-800">
                <li>
                  <strong>Lieferketten absichern:</strong>
                  <br />
                  Strategien gegen technologische Abhängigkeiten
                </li>
                <li>
                  <strong>Open-Source vs. Proprietär:</strong>
                  <br />
                  Wer kontrolliert den Code wirklich?
                </li>
                <li>
                  <strong>Sicherheitsarchitektur „Made in EU“:</strong>
                  <br />
                  Aufbau vertrauenswürdiger Systeme mit europäischen Komponenten
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
            <a
              href="https://www.digitalhub.de/phish-chips"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/pnc_banner.jpg"
                alt="Beschreibung"
                height={1000}
                width={800}
                className="h-auto w-full cursor-pointer rounded-lg shadow-xl shadow-black/10 ring-1 ring-white/10"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
