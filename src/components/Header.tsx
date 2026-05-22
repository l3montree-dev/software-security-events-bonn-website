'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Open Source Bonn Meetup' },
  { href: '/bonn-security-night', label: 'Bonn Security Night' },
  { href: '/souveraen', label: 'Digitale Souveränität' },
  { href: '/afterwork', label: 'Cybersecurity AfterWorkshop' },
  { href: '/cyber_defence', label: 'Cybersecurity in Defence' },
  { href: '/second', label: 'EU Open Source Week' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between gap-4">
          {/* Logo – Home Button */}
          <Link href="/" className="flex-shrink-0" aria-label="Zur Startseite">
            <Image
              src="/Startupweek_weiß_short.png"
              width={260}
              height={104}
              className="h-16 w-auto"
              alt="Startupweek Bonn / Rhein-Sieg"
            />
          </Link>

          {/* Banner – Mitte */}
          <div className="hidden flex-1 justify-center sm:flex">
            <Image
              src="/OSS-Meetup Bonn.png"
              width={560}
              height={112}
              className="h-16 w-auto sm:h-20"
              alt="Software Security Events Bonn"
            />
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={menuOpen}
            className="flex flex-shrink-0 flex-col items-center justify-center gap-2 rounded-md p-2 text-white transition-colors hover:text-l3-400 focus:outline-none focus:ring-2 focus:ring-l3-500"
          >
            <span
              className={`block h-0.5 w-8 origin-center bg-current transition-all duration-300 ${menuOpen ? 'translate-y-2.5 rotate-45' : ''}`}
            />
            <span
              className={`block h-0.5 w-8 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-8 origin-center bg-current transition-all duration-300 ${menuOpen ? '-translate-y-2.5 -rotate-45' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Dropdown Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-sm">
          <nav className="mx-auto max-w-7xl py-4 sm:px-6 lg:px-8">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-md px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:text-l3-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
