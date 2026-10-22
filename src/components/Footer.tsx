import {
  EXTERNAL_EVENT_LINKS,
  PAST_EVENT_LINKS,
  UPCOMING_EVENT_LINKS,
} from '@/config/navigation'
import Image from 'next/image'
import Link from 'next/link'

const linkClass =
  'inline-block rounded-sm py-1 text-zinc-300 transition-colors hover:text-l3-400 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-l3-500'

function EventLink({
  href,
  label,
  date,
}: {
  href: string
  label: string
  date: string
}) {
  return (
    <li>
      <Link href={href} className={linkClass}>
        {label}
      </Link>
      <span className="block text-zinc-400">{date}</span>
    </li>
  )
}

export function Footer() {
  return (
    <footer className="flex-none bg-zinc-900 py-16">
      <div className="mx-auto grid max-w-site gap-12 px-6 md:grid-cols-[auto_1fr] md:gap-20 lg:px-8">
        <div className="flex flex-col items-start gap-8 text-sm text-zinc-400">
          <Link
            href="/"
            className="shrink-0 rounded-md focus:outline-hidden focus-visible:ring-2 focus-visible:ring-l3-500"
            aria-label="L3montree – zur Startseite"
          >
            <Image
              src="/l3montree-logo.svg"
              width={355}
              height={87}
              className="h-10 w-auto"
              alt=""
            />
          </Link>
          <div className="flex gap-10">
            <a
              className={linkClass}
              href="https://l3montree.com/impressum"
              target="_blank"
              rel="noopener noreferrer"
            >
              Impressum
              <span className="sr-only"> (öffnet in neuem Tab)</span>
            </a>
            <a
              className={linkClass}
              href="https://l3montree.com/datenschutz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datenschutz
              <span className="sr-only"> (öffnet in neuem Tab)</span>
            </a>
          </div>
          <p>
            Copyright &copy; {new Date().getFullYear()} L3montree GmbH. All
            rights reserved.
          </p>
        </div>

        <nav
          aria-label="Alle Events"
          className="grid gap-10 sm:grid-cols-[auto_1fr] md:justify-self-end"
        >
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">
              Kommende Events
            </h2>
            <ul className="mt-4 grid gap-y-3 text-sm">
              {UPCOMING_EVENT_LINKS.map((e) => (
                <EventLink key={e.href} {...e} />
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">
              Vergangene Events
            </h2>
            <ul className="mt-4 grid gap-x-10 gap-y-3 text-sm lg:grid-cols-2">
              {PAST_EVENT_LINKS.map((e) => (
                <EventLink key={e.href} {...e} />
              ))}
              {EXTERNAL_EVENT_LINKS.map((e) => (
                <li key={e.href}>
                  <a
                    href={e.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {e.label} <span aria-hidden="true">↗</span>
                    <span className="sr-only">(öffnet in neuem Tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  )
}
