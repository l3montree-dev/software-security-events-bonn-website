import Image from 'next/image'
import { Button } from './Button'

export function Hero() {
  return (
    <div className="relative bg-black">
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, oklch(0.86 0.1677 101.44 / 0.08) 0%, transparent 70%)',
        }}
      />

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
        {/* Kicker */}
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#525252]">
          Community Event · Bonn · 14. Juli 2026
        </p>

        {/* Heading */}
        <h1 className="mt-4 text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-[#fafafa] sm:text-7xl">
          OSS Meetup{' '}
          <span style={{ color: 'oklch(0.86 0.1677 101.44)' }}>Bonn</span>
        </h1>

        <p className="mt-5 font-mono text-sm text-[#525252]">
          14.07.2026 — 17:00 Uhr · L3montree HQ, Markt 3, 53111 Bonn
        </p>

        {/* Copy */}
        <p className="mt-8 max-w-2xl text-base leading-[1.6] text-[#a3a3a3]">
          Expert*innen, Maintainer*innen und Entwickler*innen aus der OSS
          Community aus Bonn und Umgebung treffen sich an diesem Nachmittag, um
          sich in lockerer Atmosphäre über Open Source und digitale Souveränität
          zu unterhalten. Neben Snack &amp; Drinks gibt es spannende
          Impulsvorträge.
        </p>

        {/* Talk list */}
        <ul className="mt-8 max-w-2xl space-y-3">
          {[
            'Ein digitaler Fallschirm für die Demokratie',
            'Erfolgsmodell Open Source',
            'Jenseits von Meta und Musk: Marketing mit OpenSource-Software im Fediverse',
            'Wie setze ich Open Source Software sicher und effizient in meinem Unternehmen ein?',
          ].map((talk) => (
            <li key={talk} className="flex items-start gap-3">
              <span
                className="mt-[5px] h-1.5 w-1.5 flex-shrink-0 rounded-full"
                style={{ background: 'oklch(0.86 0.1677 101.44)' }}
              />
              <span className="text-sm leading-[1.6] text-[#a3a3a3]">
                {talk}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-[#525252]">
          💬 Im Anschluss: Fragen, Diskussionen und Networking —{' '}
          <a
            href="https://maps.app.goo.gl/BS8JJH8eGxBSEmz49"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-150 hover:text-[#a3a3a3]"
            style={{ color: 'oklch(0.86 0.1677 101.44)' }}
          >
            L3montree HQ, Markt 3, 53111 Bonn
          </a>
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Button
            className="px-6 py-3.5 text-sm font-semibold"
            href="https://ticket.bonn.digital/bonndigital/ossbn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sicher Dir Dein Ticket
          </Button>
        </div>

        {/* Presented by strip */}
        <div className="mt-20 border-t border-white/[0.06] pt-10">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#525252]">
            Presented by
          </p>
          <div className="mt-8 grid grid-cols-2 items-center gap-x-10 gap-y-8 sm:grid-cols-4">
            <a
              href="https://www.digitalhub.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              <Image
                alt="DigitalHub AG Bonn"
                src="/digitalhub-w.svg"
                width={140}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </a>
            <a
              href="https://wheregroup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              <Image
                alt="WhereGroup GmbH"
                src="/WhereGroup-Logo-quer-cmyk_weiß.png"
                width={140}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </a>
            <a
              href="https://bonn.digital/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              <Image
                alt="Bonn Digital"
                src="/Logo_weiß_bonn.png"
                width={140}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </a>
            <a
              href="https://www.l3montree.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              <Image
                alt="L3montree"
                src="/l3montree-logo.svg"
                width={140}
                height={40}
                className="h-7 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
