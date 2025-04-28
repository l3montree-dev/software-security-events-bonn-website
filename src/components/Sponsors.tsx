import Image from 'next/image'
import { Container } from '@/components/Container'

export function Sponsors() {
  return (
    <section
      id="sponsors"
      aria-label="Sponsors"
      className="bg-white py-12 sm:py-32"
    >
      <Container>
        <h2 className="text-center font-display text-4xl font-medium tracking-tighter text-black">
          Partner 2025
        </h2>

        <div className="mt-20 items-center gap-y-10">
          <div className="mx-auto w-full max-w-xl text-center">
            <p className="mt-6 text-center text-base leading-8 text-zinc-800">
              Die Partner sind die tragenden Säulen der Veranstaltungen. Mit
              ihrer Unterstützung machen sie es möglich, eine außergewöhnliche
              Veranstaltung wie diese zu schaffen.
            </p>
          </div>
          <br />
          <br />
          <div className="mx-auto grid w-full max-w-2xl grid-cols-2 items-center gap-x-12 gap-y-16 px-6 text-center sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:pl-8">
            <a
              href="https://www.digitalhub.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="max-h-24 w-full object-contain object-center"
                src="/digitalhub.svg"
                alt="DigitalHub Bonn Logo"
                width={104}
                height={48}
              />
            </a>
            <a
              href="https://cyber-security-cluster.eu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="max-h-24 w-full object-contain object-center"
                src="/ccb-logo.png"
                alt="Cybersecurity Cluster Bonn e.V. Logo"
                width={158}
                height={48}
              />
            </a>
            <a
              href="https://laokoon-security.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="max-h-24 w-full object-contain object-center"
                src="/laokoon-security-logo.png"
                alt="Laokoon SecurITy GmbH Logo"
                width={158}
                height={48}
              />
            </a>
            <a
              href="https://www.hisolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="max-h-24 w-full object-contain object-center"
                src="/logo_his2.png"
                alt="HiSolutions Logo"
                width={158}
                height={48}
              />
            </a>
            <a
              href="https://netlockrmm.com/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="max-h-24 w-full object-contain object-center"
                src="/logo_0x101.png"
                alt="0x101 Cybersecurity Logo"
                width={158}
                height={48}
              />
            </a>
            <a
              href="https://valutistech.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="max-h-24 w-full object-contain object-center"
                src="/valutis_logo_black.svg"
                alt="valutis Logo"
                width={158}
                height={48}
              />
            </a>
            <a
              href="https://www.business-code.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="max-h-24 w-full object-contain object-center"
                src="/bcdPlusTextLogo.svg"
                alt="BusinessCode Logo"
                width={158}
                height={48}
              />
            </a>
            <a
              href="https://www.l3montree.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="max-h-24 w-full object-contain object-center"
                src="/l3montree.svg"
                alt="L3montree Cybersecurtiy Logo"
                width={158}
                height={48}
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
