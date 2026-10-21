// ─── Archived event: Cybersecurity in Defence (20. Januar 2026) ─────────────

import type { EventConfig } from '../types'
import { DIGITALHUB_PRESENTERS, LOGOS, OSS_BONN_FAQS } from '../shared'

export const CYBER_DEFENCE: EventConfig = {
  lang: 'de',
  name: 'Cybersecurity in Defence',
  summary: 'Software & Cyber-Security Event Bonn',
  hero: {
    badge: 'Software & Cyber-Security Event Bonn',
    title: 'Cybersecurity',
    titleHighlight: 'in Defence',
    tagline:
      'Cybersecurity im Defence-Bereich: Strategien, Partnerschaften & Praxis',
    description: (
      <>
        <p>
          Expert*innen aus Bundeswehr und BWI geben in kompakten Impulsvorträgen
          wertvolle Einblicke in aktuelle Herausforderungen und Lösungsansätze
          der Cybersecurity im Verteidigungssektor. Wie gestaltet sich die
          Zusammenarbeit zwischen der neuen Teilstreitkraft Cyber- und
          Informationsraum und Partnern aus Wissenschaft und Wirtschaft? Und
          warum reicht es nicht aus, Bedrohungen zu kennen – wie setzt man
          wirksame Abwehrmaßnahmen um?
        </p>
        <p>
          Diese und weitere Fragen werden in diesem OSS-Bonn Event thematisiert
          und beantwortet!
        </p>
      </>
    ),
  },
  date: 'Dienstag, 20. Januar 2026',
  dateISO: '2026-01-20',
  time: '18:00 Uhr',
  location: {
    name: 'DIGITALHUB.DE, Am Hauptbahnhof 6, 53111 Bonn',
    mapsUrl: 'https://maps.app.goo.gl/9Lu7pS17AHp5wn31A',
  },
  ticketUrl:
    'https://www.eventbrite.de/e/cybersecurity-night-tickets-1968555256765?aff=oddtdtcreator',
  talksLabel: 'Die Themen sind unter anderem',
  talks: [
    {
      title:
        'Die (neue) Teilstreitkraft Cyber- und Informationsraum der Bundeswehr',
      body: 'Wie gestaltet sich die Zusammenarbeit mit Wissenschaft, Forschung, Wirtschaft und anderen Behörden, um die digitale Souveränität und Handlungsfähigkeit zu sichern?',
    },
    {
      title: 'Cyber Threat Management: Vom Wissen zur Anwendung',
      body: 'Warum ist es entscheidend, nicht nur Bedrohungen zu analysieren, sondern gezielt und schnell zu handeln? Wie sieht modernes Threat Management in der Praxis aus?',
    },
    {
      title: 'Cybersicherheit im Feld',
      body: 'Wie lassen sich digitale Komponenten auch außerhalb fester Infrastrukturen schützen? Welche Herausforderungen und Lösungen gibt es um hier Sicherheit im mobilen Einsatz zu gewährleisten?',
    },
    {
      title: 'Software Supply Chain Security mit NixOS',
      body: 'In hochsicheren Umgebungen stehen wir oft vor einem Dilemma: Strenge Sicherheitsanforderungen und langwierige Audits verlangsamen notwendige Updates und Patches. Wie kann NixOS helfen, dieses Dilemma zu lösen und gleichzeitig lückenlose Nachvollziehbarkeit für mission-kritische Systeme zu gewährleisten?',
    },
  ],
  speakers: {
    eyebrow: 'Cybersecurity in Defence',
    intro:
      'Hier findest du alle SpeakerInnen, die auf dem Event sprechen werden. Wir freuen uns auf spannende Vorträge und interessante Diskussionen!',
    list: [
      {
        name: 'Peter Leffler',
        role: 'Oberstleutnant',
        imageUrl: '/profilbild-peter-leffler.png',
        topic:
          'Die (neue) Teilstreitkraft Cyber- und Informationsraum der Bundeswehr und deren Zusammenarbeit mit Partnern aus Wissenschaft & Forschung, Wirtschaft & Industrie sowie mit Vertretern anderer Behörden.',
        pdfFile: '/pdfs/CIR.pdf',
      },
      {
        name: 'Matthias Wyss',
        role: 'Leitung Cyber Defense Center',
        imageUrl: '/MW.png',
        topic:
          'Cyber Threat Management: Es ist nicht genug zu WISSEN, man muss es auch ANWENDEN',
        pdfFile: '/pdfs/BWI-Cyber-Threat-Management.pdf',
      },
      {
        name: 'Sebastian Kokott',
        role: 'Senior IT & Security Consultant',
        company: { name: 'CONET', href: LOGOS.conet.href },
        imageUrl: '/profilbild_sebastian_kokott.png',
        topic: 'Cybersicherheit im Feld',
        pdfFile: '/pdfs/IT-Security_Feld_Lagebild.pdf',
      },
      {
        name: 'Jacek Galowicz',
        role: 'CEO',
        company: { name: 'Applicative Systems GmbH & NixCademy' },
        imageUrl: '/profilbild_jacek_galowicz.png',
        topic:
          'Software Supply Chain Security: Lückenlose Nachvollziehbarkeit für Mission-Critical Systems',
        pdfFile: '/pdfs/NixOS-Introduction.pdf',
      },
    ],
  },
  topic: {
    eyebrow: 'Wissen allein reicht nicht!',
    heading: 'Cybersecurity in dynamischen Zeiten',
    intro: (
      <>
        <p>
          Die Bedrohungslage im Cyberraum ist komplex und dynamisch – besonders
          im Defence-Bereich. Globale Konflikte, hybride Angriffsszenarien und
          die Abhängigkeit von kritischen Infrastrukturkomponenten erfordern
          nicht nur theoretisches Wissen, sondern vor allem praktische
          Handlungsfähigkeit. An diesem Abend diskutieren Expert*innen der
          Bundeswehr und des BWI, wie Deutschland und seine Partner sich
          strategisch und operativ aufstellen, um Cyberangriffe abzuwehren und
          Resilienz zu stärken.
        </p>
        <p>Kompakt. Strategisch. Praxisnah.</p>
      </>
    ),
    note: 'Im Anschluss an die Talks wird es bei Food & Drinks die Möglichkeit für vertiefende Fragen und Networking geben.',
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
    { name: 'Food, Networking, Arriving', start: '18:00', end: '18:20' },
    { name: 'Welcome & Opening', start: '18:20', end: '18:30' },
    {
      name: 'Talk 1',
      description:
        'Die (neue) Teilstreitkraft Cyber- und Informationsraum der Bundeswehr',
      details:
        'Und deren Zusammenarbeit mit Partnern aus Wissenschaft & Forschung, Wirtschaft & Industrie sowie mit Vertretern anderer Behörden.',
      start: '18:30',
      end: '19:00',
    },
    {
      name: 'Talk 2',
      description: 'Cybersicherheit im Feld',
      start: '19:00',
      end: '19:30',
    },
    {
      name: 'Talk 3',
      description: 'Software Supply Chain Security',
      details: 'Lückenlose Nachvollziehbarkeit für Mission-Critical Systems',
      start: '19:30',
      end: '20:00',
    },
    {
      name: 'Talk 4',
      description: 'Cyber Threat Management:',
      details: 'Es ist nicht genug zu WISSEN, man muss es auch ANWENDEN',
      start: '20:00',
      end: '20:30',
    },
    {
      name: 'Networking with Food & Drinks',
      description: '🥬 🥔 🥙 🧆 🌮 🍔',
      start: '20:30',
      end: '22:00',
    },
  ],
  presentedBy: DIGITALHUB_PRESENTERS,
  partners: [
    LOGOS.digitalhub,
    LOGOS.ccb,
    LOGOS.l3montree,
    LOGOS.cir,
    LOGOS.bwi,
    LOGOS.conet,
    LOGOS.nixcademy,
  ],
  pastPartners: [
    LOGOS.link11,
    LOGOS.conet,
    LOGOS.bsi,
    LOGOS.laokoon,
    LOGOS.hisolutions,
    LOGOS.x101,
    LOGOS.valutis,
    LOGOS.businesscode,
    LOGOS.wheregroup,
    LOGOS.sequoia,
    LOGOS.anykey,
    LOGOS.brl,
    LOGOS.euOssWeek,
  ],
  faqs: OSS_BONN_FAQS,
}
