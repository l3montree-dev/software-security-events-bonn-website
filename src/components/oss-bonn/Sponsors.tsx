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
        <h2 className="text-left font-display text-4xl font-medium tracking-tighter text-black">
          Partner 2025
        </h2>

        <div className="mt-20 grid grid-cols-1 items-center gap-y-10 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <p className="mt-6 text-base leading-8 text-zinc-600">
              The sponsors are the supporting pillars of the events. With their
              generous support, they make it possible us to create an
              extraordinary event.
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-2xl grid-cols-1 items-center gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:pl-8">
            <a
              href="https://www.digitalhub.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="lg:max-h-26 max-h-24 w-full object-contain object-center lg:max-h-24 lg:object-right"
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
                className="lg:max-h-26 max-h-24 w-full object-contain object-center lg:max-h-24 lg:object-right"
                src="/ccb-logo.png"
                alt="Cybersecurity Cluster Bonn e.V. Logo"
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
