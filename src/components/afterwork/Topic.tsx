import { Button } from './Button'
import Image from 'next/image'

export default function Topic() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-l3-600">
                Cybersecurity AfterWorkshop
              </h2>
              <h3 className="mt-2 font-display text-3xl font-medium tracking-tighter text-black">
                Lust auf geballtes Know-How & Networking?
              </h3>
              <p className="margin-bottom: 15px mt-6 text-base leading-8 text-zinc-800">
                Cybersecurity geht uns alle an – egal ob Start-up oder
                Großkonzern! In diesem AfterWorkshop des DigitalHub Bonn zeigen
                euch vier Expert*innen, worauf es bei sicherer
                Softwareentwicklung und -tests wirklich ankommt. Kompakt,
                praxisnah und auf den Punkt – holt euch das Wissen, um eure
                Software und IT sicherer zu machen!
                <br />
                <br />
                <strong> Die Themen sind unter anderem: </strong>
              </p>
              <ul className="mt-6 list-disc space-y-4 pl-6 text-base leading-8 text-zinc-800">
                <li>
                  <strong>Security by Design:</strong>
                  <br />
                  Sicherheit von Dev bis Ops
                </li>
                <li>
                  <strong>
                    Automatisierte Sicherheit im Entwicklungsprozess:
                  </strong>
                  <br />
                  Mehr Security mit jedem Commit
                </li>
                <li>
                  <strong>Softwaretesting durch Red-Teams:</strong>
                  <br />
                  Was kommt nach den Schwachstellenscans
                </li>
                <li>
                  <strong>Security Monitoring & Management:</strong>
                  <br />
                  Wie man den Überblick über seine Endgeräte behält
                </li>
                <li>
                  <strong>Hardwaresecurity:</strong>
                  <br />
                  Wie entwickel ich sicheren Code für Hardware?
                </li>
                <li>
                  <strong>Homomorphe Verschlüsselung:</strong>
                  <br />
                  Ganzheitliche Vertraulichkeit bei Rechenoperationen erreichen
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
                Bonn Security Night
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
              src="/AW_intro.jpg"
              alt="Beschreibung"
              className="h-auto w-full rounded-lg shadow-xl shadow-black/10 ring-1 ring-white/10"
              width={800}
              height={600}
            />
            <Image
              src="/crowd.jpg"
              alt="Beschreibung"
              className="h-auto w-full rounded-lg shadow-xl shadow-black/10 ring-1 ring-white/10"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
