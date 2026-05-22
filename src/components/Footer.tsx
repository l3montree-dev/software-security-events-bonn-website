import { Container } from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="flex-none bg-zinc-900 py-16">
      <Container className="flex flex-col items-start justify-between md:flex-row lg:items-center">
        <Link href="/" className="flex-shrink-0" aria-label="Zur Startseite">
          <Image
            src="/Startupweek_weiß_short.png"
            width={260}
            height={104}
            className="h-16 w-auto"
            alt="Startupweek Bonn / Rhein-Sieg"
          />
        </Link>
        <div className="mt-12 text-sm text-zinc-400 lg:mt-0">
          <div className="flex flex-1 justify-start lg:justify-end">
            <a
              className="mr-10"
              href="https://l3montree.com/impressum"
              target="_blank"
              rel="noopener noreferrer"
            >
              Impressum
            </a>
            <a
              className=""
              href="https://l3montree.com/datenschutz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datenschutz
            </a>
          </div>
          <p className="mt-4">
            Copyright &copy; {new Date().getFullYear()} L3montree GmbH. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
