import Image from 'next/image'
import { Button } from './Button'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="bg-black">
      <div className="relative isolate overflow-hidden px-6 pt-6">
        <div
          className="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        ></div>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-x-6 gap-y-4 px-6 sm:flex-row sm:items-start sm:justify-between sm:gap-y-0 lg:px-8">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/Startupweek_weiß_short.svg"
                width={400}
                height={160}
                className="h-40 w-auto"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="mx-auto max-w-7xl py-12 sm:py-20 lg:px-8 lg:py-12">
          <div className="text-start">
            <h1 className="mt-0 text-3xl font-semibold tracking-tight text-white sm:text-6xl">
              Open Source Software Bonn Meetup
            </h1>
            <h2 className="mt-6 text-xl font-semibold tracking-tight text-white sm:text-3xl">
              Ein Open Source Bonn Community Event
            </h2>

            <p className="text-l mx-auto mt-8 text-white">
              Expert*innen, Maintainer*innen und Entwickler*innen aus der OSS
              Community aus Bonn und Umgebung treffen sich an diesem Nachmittag,
              um sich in lockerer Atmosphäre über die Themen Open Source und
              digitale Souveränität zu Unterhalten. Neben Snack & Drinks gibt es
              spannende Impulsvorträge zu den Themen:
              <ul className="text-white-800 mt-6 list-disc space-y-4 pl-6 text-base leading-8">
                <li>
                  <strong>Erfolgsmodell Open Source</strong>
                </li>
                <li>
                  <strong>
                    Jenseits von Meta und Musk: Marketing mit
                    OpenSource-Software im Fediverse
                  </strong>
                </li>
                <li>
                  <strong>
                    Wie setze ich Open Source Software sicher und effizient in
                    meinem Unternehmen ein?
                  </strong>
                </li>
              </ul>
            </p>

            <p className="text-l mx-auto mt-16 text-white">
              💬 Im Anschluss gibt es ausreichend Zeit für Fragen, Diskussionen
              und Networking!
            </p>
            <p className="text-l mt-4 text-white">
              Location:{' '}
              <a
                href="https://maps.app.goo.gl/BS8JJH8eGxBSEmz49"
                target="_blank"
                rel="noopener noreferrer"
                className="text-l3-400 underline decoration-dashed decoration-1 underline-offset-2 hover:text-l3-200"
              >
                L3montree HQ, Markt 3, 53111 Bonn
              </a>
            </p>

            <div className="justify-center gap-10">
              <div className="mt-10 flex justify-center sm:justify-end">
                <Button
                  className="px-6 py-4 text-lg font-semibold"
                  href="https://ticket.bonn.digital/bonndigital/ossbn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sicher Dir Dein Ticket!
                </Button>
              </div>
            </div>
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
                href="https://wheregroup.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="order-4 sm:order-3"
              >
                <Image
                  alt="Where Group GmbH Logo"
                  src="/where_group_logo.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
                />
              </a>
              <a
                href="https://bonn.digital/"
                target="_blank"
                rel="noopener noreferrer"
                className="order-5 sm:order-2"
              >
                <Image
                  alt="Bonn Digital eGbR Logo"
                  src="/Logo_weiß_bonn.png"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
                />
              </a>
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
