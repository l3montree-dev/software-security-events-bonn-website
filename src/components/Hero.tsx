import Image from 'next/image'
import { Button } from './Button'

export function Hero() {
  return (
    <div className="bg-zinc-950">
      <div className="relative isolate overflow-hidden px-6 pt-20">
        <video
          src="/blueprint-for-software-1-5.mp4"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-10"
          autoPlay
          muted
        />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#020617] to-[#ca8a04] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:px-8 lg:py-32">
          <div className="text-start">
            <h1 className="text-4xl font-bold tracking-tight text-white max-sm:text-center sm:text-3xl">
              Software & Cyber-Security Event Bonn
            </h1>
            <h2 className="mt-8 text-3xl font-bold tracking-tight text-white max-sm:text-center sm:text-6xl">
              Digitale Souveränität in der Cybersecurity
            </h2>
            <h2 className="mt-8 text-3xl font-bold tracking-tight text-white max-sm:text-center sm:text-3xl">
              a Phish & Chips Satellite
            </h2>
            <p className="text-l mx-auto mt-20 text-white max-sm:border-t max-sm:border-zinc-600 max-sm:pt-4">
              Im Vorlauf des{' '}
              <a
                href="https://www.digitalhub.de/phish-chips"
                target="_blank"
                rel="noopener noreferrer"
                className="text-l3-400 underline decoration-dashed decoration-1 underline-offset-2 hover:text-l3-200"
              >
                Phish & Chips Cybersecurity Konferenz
              </a>{' '}
              des DigitalHub Bonn, geht es in diesem Event um das Thema{' '}
              <strong> digitale Souveränität in der Cyber-Security</strong>.
            </p>
            <p className="text-l mx-auto mt-4 text-white">
              Expert*innen geben in kompakten Impulsvorträgen wertvolle
              Einblicke in Strategien zur Stärkung digitaler Souveränität – aus
              Sicht von Unternehmen, Entwicklerinnen und Entscheider*innen. Sie
              zeigen, wie technologische Abhängigkeiten reduziert, Lieferketten
              abgesichert und vertrauenswürdige Sicherheitsarchitekturen mit
              europäischen Komponenten aufgebaut werden können. Außerdem
              diskutieren sie die Rolle von Open-Source-Software und die Frage:
              Wer kontrolliert eigentlich den Code?
            </p>
            <p className="text-l mx-auto mt-4 text-white">
              💬 Im Anschluss gibt es ausreichend Zeit für Fragen, Diskussionen
              und Networking!
            </p>
            <p className="text-l mt-4 text-white">
              Location:{' '}
              <a
                href="https://maps.app.goo.gl/Avz3bxHrK6i6JcHQ8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-l3-400 underline decoration-dashed decoration-1 underline-offset-2 hover:text-l3-200"
              >
                DIGITALHUB.DE, Rheinwerkallee 6, 53227 Bonn
              </a>
            </p>

            <div className="justify-center gap-10">
              <div className="mt-10 flex items-center justify-start gap-x-6">
                <Button
                  href="https://www.eventbrite.de/e/digitale-souveranitat-in-der-cybersecurity-a-phish-chips-satelite-tickets-1431188837339?aff=oddtdtcreator&utm-source=cp&utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kostenloses Ticket sichern
                </Button>
              </div>
            </div>
            <div className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
              Informationen zur Konferenz
            </div>
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
                className="mx-auto mt-[1cm] h-auto w-full max-w-[600px] cursor-pointer rounded-lg shadow-xl shadow-black/10 ring-1 ring-white/10"
              />
            </a>
            <p className="mt-4 text-center text-base text-white">
              Sichere Dir 25% Rabatt auf Dein Ticket – Code:{' '}
              <strong>L3montree25P&amp;C</strong> 🤫
            </p>
          </div>
        </div>

        <div className="-mt-10 pb-16 lg:-mt-12">
          <div className="mx-auto max-w-7xl lg:px-8">
            <h2 className="mt-4 justify-center text-lg font-semibold tracking-tight text-white">
              Presented by:
            </h2>
            <div style={{ marginBottom: '0.6cm' }}></div>
            <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              <a
                href="https://www.l3montree.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="order-3 sm:order-1"
              >
                <Image
                  alt="L3montree Logo"
                  src="/l3montree-logo.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
              </a>
              <a
                href="https://www.digitalhub.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="order-3 sm:order-1"
              >
                <Image
                  alt="DigitalHub AG Bonn Logo"
                  src="/digitalhub-w.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
                />
              </a>
              <a
                href="https://dwnrw-hubs.de/startseite/"
                target="_blank"
                rel="noopener noreferrer"
                className="order-5 sm:order-2"
              >
                <Image
                  alt="Digitale Wirtschaft NRW Logo"
                  src="/dwnrw.png"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
                />
              </a>
              <a
                href="https://cyber-security-cluster.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="order-4 sm:order-3"
              >
                <Image
                  alt="Cyber Security Logo Bonn e.V. Logo"
                  src="/ccb-logo-w.png"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
                />
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#020617] to-[#ca8a04] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
