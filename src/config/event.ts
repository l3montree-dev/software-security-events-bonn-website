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
  // Small wordmark – shown larger; the negative margin keeps the bar height.
  { ...LOGOS.ccbLight, heightClassName: 'h-16 -my-2' },
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
  LOGOS.ccb,
  {
    href: trackable('https://open-elements.com/'),
    src: '/open-elements-logo.svg',
    alt: 'Open Elements',
    width: 213,
    height: 48,
  },
  {
    href: trackable('https://www.uni-bonn.de/'),
    src: '/uni-bonn-logo.svg',
    alt: 'Universität Bonn',
    width: 121,
    height: 48,
  },
  {
    href: trackable('https://www.fkie.fraunhofer.de/'),
    src: '/fraunhofer-fkie-logo.svg',
    alt: 'Fraunhofer FKIE',
    width: 143,
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

const TALK_GOVERNANCE = {
  title: 'Open Governance',
  subtitle: 'Von Linux Foundation bis Gov Stack',
}

const TALK_SUPPLY_CHAIN = {
  title: 'Software Supply Chain Angriffe und wo sie zu finden sind',
}

const TALK_VULN_ASSESSMENT = {
  title: 'Schwachstellenbewertung skalierbar machen',
  subtitle: 'Eine Einführung in den VEX',
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
  talks: [
    {
      ...TALK_LLM_SECURITY,
      body: [
        'Am 20. Oktober 2026 wurden zwei kritische Schwachstellen im PHP-Interpreter, CVE-2026-109618 und CVE-2026-109619, zwei Tage vor dem vereinbarten Disclosure-Termin öffentlich. Das PHP Security Team zog das Release vor, Infrastrukturanbieter verteilten Filterregeln, und Berichte über Angriffe folgten nach wenigen Stunden. Für ältere PHP-Versionen, die auf vielen Servern weiterlaufen, gibt es keinen Fix.',
        'Der Fall steht für eine Entwicklung, die Open Source-Projekte seit Anfang 2026 verändert: Mit LLM-gestützten Werkzeugen ist das Finden von Schwachstellen billig geworden, das Bewerten, Beheben und Koordinieren nicht. Der Vortrag zeigt aus Sicht des Ecosystem Security Teams der PHP Foundation und eines langjährigen Maintainers, wo die Engpässe heute liegen: in der Triage von Meldungen, in der Qualität von Advisory-Daten und in Abläufen, die für deutlich weniger Meldungen ausgelegt waren.',
        'Zum Schluss geht es darum, was das für alle bedeutet, die Open Source betreiben, von der Frage, wo überhaupt welche Version läuft, bis zu den Meldepflichten des Cyber Resilience Act.',
      ],
    },
    {
      ...TALK_GOVERNANCE,
      body: [
        'Open Source ist mehr als eine Lizenz. Ob ein Projekt langfristig trägt, entscheidet seine Governance: Wer darf mergen, wer bestimmt die Roadmap, wie werden Konflikte gelöst, und was passiert, wenn der Hauptsponsor aussteigt? Mit KI wird das noch wichtiger: Wenn Code in Massen generiert wird und Agenten Pull Requests stellen, braucht es klare Regeln für Verantwortung, Review und Vertrauen.',
        'Der Vortrag zeigt das an drei Beispielen aus der Praxis. Eclipse Adoptium ist den Weg von einer losen Community zum herstellerneutralen Foundation-Projekt gegangen. CLPR, ein Lab der LF Decentralized Trust, wurde von Anfang an offen entwickelt. Die Building Blocks von GovStack übertragen diese Prinzipien auf digitale Verwaltungsinfrastruktur.',
        'Die Teilnehmenden lernen, an welchen Strukturen wie Charter, TSC, Committer-Modell und Spezifikationsprozess sich gute Governance erkennen lässt und worauf sie bei der Auswahl und Mitarbeit in Projekten achten sollten.',
      ],
    },
    {
      ...TALK_SUPPLY_CHAIN,
      body: 'In diesem Vortrag wird erläutert, wie Open-Source-Pakete zu gefährlichen Einfallstoren werden und wie die Mechanismen aktueller Supply-Chain-Angriffe, wie dem Shai-Hulud-Wurm, ablaufen. Anhand realer Vorfälle und Täterstrukturen, wie sie bei TeamPCP zu beobachten sind, wird aufgezeigt, wo die kritischen Schwachstellen in modernen Entwicklungs-Ökosystemen lauern.',
    },
    {
      ...TALK_VULN_ASSESSMENT,
      body: [
        'Der CI-Scan meldet eine kritische CVE in einer Abhängigkeit. Ob der verwundbare Code überhaupt erreichbar ist, weiß der Scanner nicht, denn er gleicht nur Paketversionen mit Advisories ab. Also prüft jemand den Aufrufpfad von Hand, notiert das Ergebnis im Ticket, und beim nächsten Scan taucht dieselbe Meldung wieder auf.',
        'Wie funktionieren Schwachstellenmanagement von der SBOM bis zur Bewertung und warum kostet gerade die Bewertung so viel Zeit? Das klären wir und zeigen in diesem Zuge auch den VEX, der Vulnerability Exploitability eXchange: ein maschinenlesbares Format, das festhält, ob ein Produkt von einer Schwachstelle betroffen ist. So wird aus einer einmaligen Analyse eine Aussage, die andere Teams, Kunden oder die Community wiederverwenden können.',
        'Diese Bewertungen können auch noch mit Mitarbeitenden, Kunden oder der Community geteilt werden, sodass andere Teams nicht dieselbe Arbeit machen müssen. So kann die Schwachstellenbewertung skalierbar werden, und die Teams können sich auf die wirklich kritischen CVEs konzentrieren.',
      ],
    },
  ],
  speakers: {
    eyebrow: 'Speaker & Maintainer',
    intro:
      'Wir freuen uns auf technische Deep Dives und spannende Diskussionen mit diesen Maintainer*innen und Entwickler*innen.',
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
        topic: TALK_GOVERNANCE.title,
        topicSubtitle: TALK_GOVERNANCE.subtitle,
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
        name: 'Dr. Marc Ohm',
        role: 'Forschung zu Software Supply Chain Security',
        company: {
          name: 'Universität Bonn',
          href: 'https://www.uni-bonn.de/de/forschung-lehre/forschungsprofil/transdisziplinaere-forschungsbereiche/modelling/mitgliederverzeichnis/marc-ohm',
        },
        // Foto: Universität Bonn, © Max Waidhas
        imageUrl: '/profilbild_marc_ohm.jpg',
        topic: TALK_SUPPLY_CHAIN.title,
        links: [
          {
            href: 'https://www.fkie.fraunhofer.de/',
            label: 'Fraunhofer FKIE',
            kind: 'org',
          },
          {
            href: 'https://dblp.org/pid/224/4378.html',
            label: 'Publikationen',
            kind: 'research',
          },
        ],
      },
      {
        name: 'Sebastian Kawelke',
        role: 'Softwaresecurity-Expert',
        company: { name: 'L3montree GmbH', href: 'https://www.l3montree.com/' },
        imageUrl: '/profilbild_sebastian_kawelke.jpeg',
        topic: TALK_VULN_ASSESSMENT.title,
        topicSubtitle: TALK_VULN_ASSESSMENT.subtitle,
        links: [
          {
            href: 'https://github.com/l3montree-dev/devguard',
            label: 'Maintainer von DevGuard',
            kind: 'code',
          },
          {
            href: 'https://cyber-security-cluster.eu/vorstand-beirat-und-team/',
            label: 'Vorstand – Cyber Security Cluster Bonn',
            kind: 'role',
          },
        ],
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
  schedule: [
    {
      name: 'Ankommen, Pizza & erstes Networking',
      description:
        'Türen auf! Kommt rein, holt euch Pizza und was zu trinken und lernt erste Gesichter kennen – so hören alle die Talks satt. 🍕',
      start: '18:00',
      end: '18:20',
    },
    {
      name: 'Welcome & Opening',
      description:
        'Kurze Begrüßung und Intro in den Abend. Wer wir sind, was euch erwartet.',
      start: '18:20',
      end: '18:30',
    },
    {
      name: TALK_LLM_SECURITY.title,
      description: TALK_LLM_SECURITY.subtitle,
      details: 'Sebastian Bergmann',
      start: '18:30',
      end: '19:00',
    },
    {
      name: TALK_GOVERNANCE.title,
      description: TALK_GOVERNANCE.subtitle,
      details: 'Hendrik Ebbers',
      start: '19:00',
      end: '19:30',
    },
    {
      name: 'Pause',
      description: 'Kurz durchatmen und Getränke auffüllen.',
      start: '19:30',
      end: '19:40',
    },
    {
      name: TALK_SUPPLY_CHAIN.title,
      details: 'Dr. Marc Ohm',
      start: '19:40',
      end: '20:10',
    },
    {
      name: TALK_VULN_ASSESSMENT.title,
      description: TALK_VULN_ASSESSMENT.subtitle,
      details: 'Sebastian Kawelke',
      start: '20:10',
      end: '20:40',
    },
    {
      name: 'Networking, Food & Drinks',
      description:
        'Der Abend gehört euch. Zeit für Gespräche, Fragen an die Speaker und neue Kontakte. 🥬 🥔 🥙 🧆 🌮 🍔',
      start: '20:40',
      end: '22:00',
    },
  ],
  presentedBy: PRESENTED_BY,
  partners: PARTNERS,
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
