import Image from 'next/image'
import { Container } from '@/components/Container'

const currentPartners = [
  {
    href: 'https://www.digitalhub.de/',
    src: '/digitalhub-w.svg',
    alt: 'DigitalHub Bonn',
    className: 'max-h-10',
  },
  {
    href: 'https://www.l3montree.de/',
    src: '/l3montree-logo.svg',
    alt: 'L3montree',
    className: 'max-h-8',
  },
  {
    href: 'https://wheregroup.com/',
    src: '/WhereGroup-Logo-quer-cmyk_weiß.png',
    alt: 'WhereGroup GmbH',
    className: 'max-h-8',
  },
  {
    href: 'https://bonn.digital/',
    src: '/Logo_weiß_bonn.png',
    alt: 'Bonn Digital',
    className: 'max-h-8',
  },
]

const pastPartners = [
  {
    href: 'https://cyber-security-cluster.eu/',
    src: '/ccb-logo.png',
    alt: 'Cybersecurity Cluster Bonn e.V.',
  },
  {
    href: 'https://www.bundeswehr.de/de/organisation/cyber-und-informationsraum',
    src: '/logo-CIR.png',
    alt: 'CIR',
  },
  { href: 'https://www.bwi.de/', src: '/logo-BWI-2.png', alt: 'BWI' },
  {
    href: 'https://nixcademy.com/de/',
    src: '/nixcademy-logo.png',
    alt: 'NixCademy',
  },
  {
    href: 'https://www.link11.com/de/',
    src: '/logo-link11.png',
    alt: 'Link11',
  },
  { href: 'https://www.conet.de/', src: '/conet_logo.png', alt: 'CONET' },
  { href: 'https://www.bsi.bund.de/', src: '/bsi-logo.png', alt: 'BSI' },
  {
    href: 'https://laokoon-security.com/',
    src: '/laokoon-security-logo.png',
    alt: 'Laokoon SecurITy',
  },
  {
    href: 'https://www.hisolutions.com/',
    src: '/logo_his2.png',
    alt: 'HiSolutions',
  },
  {
    href: 'https://netlockrmm.com/index.html',
    src: '/logo_0x101.png',
    alt: '0x101 Cybersecurity',
  },
  {
    href: 'https://valutistech.com/',
    src: '/valutis_logo_black.svg',
    alt: 'valutis',
  },
  {
    href: 'https://www.business-code.de/',
    src: '/bcdPlusTextLogo.svg',
    alt: 'BusinessCode',
  },
  {
    href: 'https://wheregroup.com/',
    src: '/where_group_logo.png',
    alt: 'WhereGroup GmbH',
  },
  {
    href: 'https://sequoia-pgp.org/',
    src: '/sequoia_logo.png',
    alt: 'SequoiaPGP',
  },
  { href: 'https://www.anykey.de/', src: '/logo-anykey.png', alt: 'anykey' },
  {
    href: 'https://www.brl.de/de',
    src: '/BRL-logo.png',
    alt: 'BRL BOEGE ROHDE LUEBBEHUESEN',
  },
  {
    href: 'https://opensourceweek.eu/',
    src: '/EU_oss_week.png',
    alt: 'EU Open Source Week',
  },
]

export function Sponsors() {
  return (
    <section
      id="sponsors"
      aria-label="Sponsors"
      className="bg-black py-24 sm:py-32"
    >
      <Container>
        {/* Current partners */}
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#525252]">
            Partner
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#fafafa] sm:text-4xl">
            Partners for this Event
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-[1.6] text-[#a3a3a3]">
            Die Partner sind die tragenden Säulen der Veranstaltungen. Mit ihrer
            Unterstützung machen sie es möglich, eine außergewöhnliche
            Veranstaltung wie diese zu schaffen.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
          {currentPartners.map((p) => (
            <a
              key={p.alt}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={140}
                height={48}
                className={`w-auto object-contain ${p.className}`}
              />
            </a>
          ))}
        </div>

        {/* Past partners */}
        <div className="mt-24 border-t border-white/[0.06] pt-20 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#525252]">
            Historie
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#fafafa] sm:text-4xl">
            Past Partners
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-[1.6] text-[#a3a3a3]">
            Partner, die die bisherigen OSS-Events durch ihre Fachvorträge
            bereichert haben.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {pastPartners.map((p) => (
            <a
              key={p.alt}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-40 grayscale transition-all hover:opacity-70 hover:grayscale-0"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={120}
                height={40}
                className="max-h-8 w-auto object-contain brightness-0 invert"
              />
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
