// ─── Current event ───────────────────────────────────────────────────────────
// All data of the current event (shown on /) lives here. For the next event:
// 1. move this config to src/config/archive/<slug>.ts and add a page for it
//    (see src/app/oss-meetup/page.tsx),
// 2. add the archived event to src/config/navigation.ts,
// 3. update this file.

import { LOGOS } from './shared'
import { trackable } from './tracking'
import type { EventConfig, Logo } from './types'

// ─── Partners (current event) ─────────────────────────────────────────────────

// "Presented by" in the hero – white logos for the dark background.
const PRESENTED_BY: Array<Logo> = [
  {
    href: 'https://www.l3montree.com/',
    src: '/l3montree-logo.svg',
    alt: 'L3montree',
    width: 158,
    height: 48,
  },
  LOGOS.devguardLight,
]

// "Die Partner dieses Events" – logos for the white background.
const PARTNERS: Array<Logo> = [
  {
    href: 'https://github.com/sebastianbergmann/phpunit',
    src: '/phpunit-logo.svg',
    alt: 'PHPUnit',
    width: 120,
    height: 48,
  },
  LOGOS.devguard,
  {
    href: trackable('https://open-elements.com/'),
    src: '/open-elements-logo.svg',
    alt: 'Open Elements',
    width: 213,
    height: 48,
  },
]

// ─── Past partners ────────────────────────────────────────────────────────────

export const PAST_PARTNERS: Array<Logo> = [
  {
    href: 'https://www.digitalhub.de/',
    src: '/digitalhub.svg',
    alt: 'DigitalHub AG Bonn',
    width: 158,
    height: 48,
  },
  {
    href: 'https://bonn.digital/',
    src: '/Logo_schwarz_bonn.png',
    alt: 'Bonn Digital eGbR',
    width: 158,
    height: 48,
  },
  {
    href: 'https://cyber-security-cluster.eu/',
    src: '/ccb-logo.png',
    alt: 'Cybersecurity Cluster Bonn e.V.',
    width: 158,
    height: 48,
  },
  {
    href: 'https://www.bundeswehr.de/de/organisation/cyber-und-informationsraum',
    src: '/logo-CIR.png',
    alt: 'CIR',
    width: 158,
    height: 48,
  },
  {
    href: 'https://www.bwi.de/',
    src: '/logo-BWI-2.png',
    alt: 'BWI',
    width: 158,
    height: 48,
  },
  {
    href: 'https://nixcademy.com/de/',
    src: '/nixcademy-logo.png',
    alt: 'NixCademy',
    width: 158,
    height: 48,
  },
  {
    href: 'https://www.link11.com/de/',
    src: '/logo-link11.png',
    alt: 'Link11',
    width: 158,
    height: 48,
  },
  {
    href: 'https://www.conet.de/',
    src: '/conet_logo.png',
    alt: 'CONET',
    width: 158,
    height: 48,
  },
  {
    href: 'https://www.bsi.bund.de/',
    src: '/bsi-logo.png',
    alt: 'BSI',
    width: 158,
    height: 48,
  },
  {
    href: 'https://laokoon-security.com/',
    src: '/laokoon-security-logo.png',
    alt: 'Laokoon SecurITy',
    width: 158,
    height: 48,
  },
  {
    href: 'https://www.hisolutions.com/',
    src: '/logo_his2.png',
    alt: 'HiSolutions',
    width: 158,
    height: 48,
  },
  {
    href: 'https://netlockrmm.com/index.html',
    src: '/logo_0x101.png',
    alt: '0x101 Cybersecurity',
    width: 158,
    height: 48,
  },
  {
    href: 'https://valutistech.com/',
    src: '/valutis_logo_black.svg',
    alt: 'valutis',
    width: 158,
    height: 48,
  },
  {
    href: 'https://www.business-code.de/',
    src: '/bcdPlusTextLogo.svg',
    alt: 'BusinessCode',
    width: 158,
    height: 48,
  },
  {
    href: 'https://wheregroup.com/',
    src: '/where_group_logo.png',
    alt: 'WhereGroup GmbH',
    width: 158,
    height: 48,
  },
  {
    href: 'https://sequoia-pgp.org/',
    src: '/sequoia_logo.png',
    alt: 'SequoiaPGP',
    width: 158,
    height: 48,
  },
  {
    href: 'https://www.anykey.de/',
    src: '/logo-anykey.png',
    alt: 'anykey',
    width: 158,
    height: 48,
  },
  {
    href: 'https://www.brl.de/de',
    src: '/BRL-logo.png',
    alt: 'BRL BOEGE ROHDE LUEBBEHUESEN',
    width: 158,
    height: 48,
  },
  {
    href: 'https://opensourceweek.eu/',
    src: '/EU_oss_week.png',
    alt: 'EU Open Source Week',
    width: 158,
    height: 48,
  },
]

// ─── Talks ───────────────────────────────────────────────────────────────────
// Title and subtitle are shared by the talk list, the speaker card and the
// schedule.

const TALK_LLM_SECURITY = {
  title: 'Finden ist billig, Beheben nicht',
  subtitle: 'Open-Source-Security, wenn LLMs nach Schwachstellen suchen',
}

// ─── Event ───────────────────────────────────────────────────────────────────

export const EVENT: EventConfig = {
  lang: 'de',
  name: 'OSS-Tech-Night',
  summary:
    'Die OSS-Tech-Night in Bonn: ein Abend für Techies rund um die technische Seite von Open Source und Softwareentwicklung.',
  hero: {
    badge: 'OSS-Tech-Night',
    title: 'Open Source',
    titleHighlight: 'Technical Deep Dives',
    description:
      'Ein Abend speziell für Techies: Maintainer*innen und Entwickler*innen aus der Open-Source-Community nehmen Euch mit auf die technische Seite von Open Source und Softwareentwicklung. Danach ist Zeit zum Fachsimpeln und Networking bei Snacks & Drinks.',
  },
  date: 'Freitag, 11. Dezember 2026',
  dateISO: '2026-12-11',
  time: '18:00 Uhr',
  location: {
    name: 'L3montree HQ, Markt 3, 53111 Bonn',
    mapsUrl: 'https://maps.app.goo.gl/BS8JJH8eGxBSEmz49',
  },
  ticketUrl: 'https://pretix.eu/l3montree/oss-deep-dives/',
  ticketCta: 'Kostenloses Ticket sichern →',
  talksLabel: 'Tech-Talks',
  // TODO: Talks 2–4 eintragen, sobald sie feststehen.
  talks: [
    {
      ...TALK_LLM_SECURITY,
      body: [
        'Am 20. Oktober 2026 wurden zwei kritische Schwachstellen im PHP-Interpreter, CVE-2026-109618 und CVE-2026-109619, zwei Tage vor dem vereinbarten Disclosure-Termin öffentlich. Das PHP Security Team zog das Release vor, Infrastrukturanbieter verteilten Filterregeln, und Berichte über Angriffe folgten nach wenigen Stunden. Für ältere PHP-Versionen, die auf vielen Servern weiterlaufen, gibt es keinen Fix.',
        'Der Fall steht für eine Entwicklung, die Open Source-Projekte seit Anfang 2026 verändert: Mit LLM-gestützten Werkzeugen ist das Finden von Schwachstellen billig geworden, das Bewerten, Beheben und Koordinieren nicht. Der Vortrag zeigt aus Sicht des Ecosystem Security Teams der PHP Foundation und eines langjährigen Maintainers, wo die Engpässe heute liegen: in der Triage von Meldungen, in der Qualität von Advisory-Daten und in Abläufen, die für deutlich weniger Meldungen ausgelegt waren.',
        'Zum Schluss geht es darum, was das für alle bedeutet, die Open Source betreiben, von der Frage, wo überhaupt welche Version läuft, bis zu den Meldepflichten des Cyber Resilience Act.',
      ],
    },
    { title: 'Tech-Talk #2', subtitle: 'Thema folgt in Kürze' },
    { title: 'Tech-Talk #3', subtitle: 'Thema folgt in Kürze' },
    { title: 'Tech-Talk #4', subtitle: 'Thema folgt in Kürze' },
  ],
  speakers: {
    eyebrow: 'Speaker & Maintainer',
    intro:
      'Wir freuen uns auf technische Deep Dives und spannende Diskussionen mit diesen Maintainer*innen und Entwickler*innen.',
    // TODO: Speaker*innen 3–4 eintragen (Profilbild nach /public legen).
    list: [
      {
        name: 'Sebastian Bergmann',
        role: 'PHP-Experte',
        company: {
          name: 'The PHP Consulting Company',
          href: 'https://thephp.cc/',
        },
        imageUrl: '/profilbild_sebastian_bergmann.jpg',
        topic: TALK_LLM_SECURITY.title,
        topicSubtitle: TALK_LLM_SECURITY.subtitle,
        links: [
          {
            href: 'https://github.com/sebastianbergmann/phpunit',
            label: 'Maintainer von PHPUnit',
            kind: 'code',
          },
        ],
      },
      {
        name: 'Hendrik Ebbers',
        role: 'Geschäftsführer',
        company: {
          name: 'Open Elements GmbH',
          href: 'https://open-elements.com/',
        },
        imageUrl: '/profilbild_hendrik_ebbers.jpg',
        // TODO: Talk-Titel und Abstract folgen.
        topic: 'Tech-Talk #2',
        topicSubtitle: 'Thema folgt in Kürze',
        links: [
          {
            href: 'https://lf-decentralized-trust.github.io/governance/member-info/tac-members/',
            label: 'TAC – Linux Foundation',
            kind: 'role',
          },
          {
            href: 'https://www.eclipse.org/org/foundation/directors/',
            label: 'Board – Eclipse Foundation',
            kind: 'role',
          },
        ],
      },
      {
        name: 'Speaker*in #3',
        role: 'Wird in Kürze bekannt gegeben',
        imageUrl: '/dummy_person_dark.png',
        topic: 'Tech-Talk #3',
        topicSubtitle: 'Thema folgt in Kürze',
      },
      {
        name: 'Speaker*in #4',
        role: 'Wird in Kürze bekannt gegeben',
        imageUrl: '/dummy_person_dark.png',
        topic: 'Tech-Talk #4',
        topicSubtitle: 'Thema folgt in Kürze',
      },
    ],
  },
  topic: {
    eyebrow: 'Von Techies für Techies',
    heading: 'OSS-Tech-Night',
    intro:
      'Am 11. Dezember 2026 findet die OSS-Tech-Night statt – ein Abend speziell für Entwickler*innen, Maintainer*innen und alle, die wissen wollen, wie Open Source und Softwareentwicklung technisch funktionieren. Technisch. Tiefgehend. Offen.',
    note: 'Im Anschluss an die Talks: Food & Drinks, vertiefende Fragen und Networking.',
    images: [
      {
        src: '/talk.jpeg',
        alt: 'Speaker auf der Bühne während eines Vortrags',
        width: 1280,
        height: 804,
      },
      {
        src: '/crowd.jpeg',
        alt: 'Publikum bei einer Veranstaltung',
        width: 1280,
        height: 853,
      },
    ],
  },
  // TODO: Zeiten bestätigen (Annahme: Ablauf wie beim OSS Meetup, ab 18:00 Uhr)
  // und Talk-Titel eintragen.
  schedule: [
    {
      name: 'Ankommen & erstes Networking',
      description:
        'Türen auf! Kommt rein, holt euch was zu trinken und lernt erste Gesichter kennen.',
      start: '18:00',
      end: '18:30',
    },
    {
      name: 'Welcome & Opening',
      description:
        'Kurze Begrüßung und Intro in den Abend — wer wir sind, was euch erwartet.',
      start: '18:30',
      end: '18:40',
    },
    {
      name: TALK_LLM_SECURITY.title,
      description: TALK_LLM_SECURITY.subtitle,
      details: 'Sebastian Bergmann',
      start: '18:40',
      end: '19:00',
    },
    {
      name: 'Tech-Talk 2',
      description: 'Thema folgt in Kürze',
      start: '19:00',
      end: '19:20',
    },
    {
      name: 'Tech-Talk 3',
      description: 'Thema folgt in Kürze',
      start: '19:20',
      end: '19:40',
    },
    {
      name: 'Tech-Talk 4',
      description: 'Thema folgt in Kürze',
      start: '19:40',
      end: '20:00',
    },
    {
      name: 'Networking, Food & Drinks',
      description:
        'Der Abend gehört euch — Zeit für Gespräche, Fragen an die Speaker und neue Kontakte. 🥬 🥔 🥙 🧆 🌮 🍔',
      start: '20:00',
      end: '22:00',
    },
  ],
  presentedBy: PRESENTED_BY,
  partners: PARTNERS,
  pastPartners: PAST_PARTNERS,
  faqs: [
    {
      question: 'Wer kann bei dem Event teilnehmen?',
      answer:
        'Alle, die sich für die technische Seite von Open Source interessieren – ob Maintainer*in, Entwickler*in, Student*in oder einfach neugierig. Bitte registriere Dich vorab über den Ticketshop.',
    },
    {
      question: 'Wie technisch wird es?',
      answer:
        'Die Talks richten sich an ein technisches Publikum: Es geht um Code, Architektur, Tooling und die Praxis hinter Open-Source-Projekten.',
    },
    {
      question: 'Wie sieht es mit Essen und Trinken aus?',
      answer: 'Wir versorgen Euch vor Ort mit Essen und Getränken.',
    },
  ],
}
