// ─── Archived event: Bonn Cybersecurity Night (24. September 2025) ──────────

import type { EventConfig } from '../types'
import { DIGITALHUB_PRESENTERS, LOGOS, OSS_BONN_FAQS } from '../shared'

export const BONN_SECURITY_NIGHT: EventConfig = {
  lang: 'de',
  name: 'Bonn Cybersecurity Night',
  summary: 'Software & Cyber-Security Event Bonn',
  hero: {
    badge: 'Software & Cyber-Security Event Bonn',
    title: 'Bonn',
    titleHighlight: 'Cybersecurity Night',
    tagline: 'DDoS, Souveränität & sichere Software',
    description: (
      <>
        <p>
          Expert*innen geben in kompakten Impulsvorträgen wertvolle Einblicke in
          aktuelle Themen, die die Cybersecurity Community aus der Sicht von
          Unternehmen, Entwicklerinnen und Entscheider*innen bewegen.
        </p>
        <ul>
          <li>
            <strong>
              Wie laufen moderne DDoS Angriffe ab und wie kann ich mich gegen
              diese schützen?
            </strong>
          </li>
          <li>
            <strong>Wie wird und bleibt die Cloud des Bundes souverän?</strong>
          </li>
          <li>
            <strong>
              Wie funktioniert das moderne Schwachstellenaustauschformat CSAF
              (Common Security Advisory Framework)?
            </strong>
          </li>
        </ul>
        <p>
          Diese und weitere Fragen werden in diesem OSS-Bonn Event thematisiert
          und beantwortet!
        </p>
      </>
    ),
  },
  date: 'Mittwoch, 24. September 2025',
  dateISO: '2025-09-24',
  time: '18:00 Uhr',
  location: {
    name: 'DIGITALHUB.DE, Am Hauptbahnhof 6, 53111 Bonn',
    mapsUrl: 'https://maps.app.goo.gl/9Lu7pS17AHp5wn31A',
  },
  ticketUrl:
    'https://www.eventbrite.de/e/cybersecurity-night-tickets-1616801479749?aff=oddtdtcreator',
  talksLabel: 'Die Themen sind unter anderem',
  talks: [
    {
      title: 'Distributed Denial of Service (DDoS) as a Service',
      body: 'Wie groß sind Angriffe auf die Verfügbarkeit aktuell und wie sie mittlerweile schon als Service angeboten werden.',
    },
    {
      title: 'Souveräne Cloud für den Bund',
      body: 'Wie kann der Bund eine Cloudinfrastruktur aufbauen ohne, dass er sich dabei in zu große Abhängigkeiten begiebt?',
    },
    {
      title: 'CSAF (Common Security Advisory Framework)',
      body: 'Was ist das standardisierte, quelloffene und maschinenlesbare Format für Security Advisories, das die automatisierte Verteilung, Bewertung und Skalierung von Schwachstellen- und Mitigationsinformationen ermöglicht?',
    },
  ],
  speakers: {
    eyebrow: 'Bonn Cybersecurity Night',
    intro:
      'Hier findest du alle SpeakerInnen, die auf der Konferenz sprechen werden. Wir freuen uns auf spannende Vorträge und interessante Diskussionen!',
    list: [
      {
        name: 'Lisa Fröhlich',
        role: 'Corporate Communications',
        company: { name: 'Link11', href: LOGOS.link11.href },
        imageUrl: '/profilbild_lisa_fröhlich.png',
        topic: 'Botnet reloaded',
        pdfFile:
          '/pdfs/2509_Botnet reloaded_Cybersecurity Night Bonn_short.pdf',
      },
      {
        name: 'Sebastian Kokott',
        role: 'Senior IT & Security Consultant',
        company: { name: 'CONET', href: LOGOS.conet.href },
        imageUrl: '/profilbild_sebastian_kokott.png',
        topic: 'Souveräne Cloud im Bund',
        pdfFile: '/pdfs/Souveräne_Cloud_conet.pdf',
      },
      {
        name: 'Dr. Dina Truxius',
        role: 'Referentin Industrielle Steuerungs- und Automatisierungssysteme',
        company: { name: 'BSI', href: LOGOS.bsi.href },
        imageUrl: '/Dina_Profilbild.jpeg',
        topic:
          'CSAF - ein Standard, der das Schwachstellenmanagement revolutioniert',
        pdfFile: '/pdfs/Truxius_CSAF.pdf',
      },
    ],
  },
  topic: {
    eyebrow: 'Wie bin und bleibe ich sicher?',
    heading: 'Cybersecurity in "angespannten" Zeiten',
    intro: (
      <>
        <p>
          Globale Spannungen, technologische Abhängigkeiten, unsichere
          Lieferketten – Das BSI bezeichnet die Lage der IT-Sicherheit in
          Deutschland als &quot;angespannt&quot;!
        </p>
        <p>
          An diesem Abend diskutieren Expert*innen aus modern und zukunftsfähig
          im Bereich der Cybersecurity aufstellt.{' '}
          <strong>Kompakt. Strategisch. Praxisnah.</strong> Was sind die
          aktuellen Bedrohungen und wie können Unternehmen sich gegen diese
          schützen?
        </p>
      </>
    ),
    note: 'Im Anschluss an die Talks wird es bei Food & Drinks die Möglichkeit für vertiefende Fragen und Networking geben.',
    images: [
      {
        src: '/crowd.JPG',
        alt: 'Publikum bei der Bonn Cybersecurity Night',
        width: 6960,
        height: 4640,
      },
      {
        src: '/network.JPG',
        alt: 'Networking bei der Bonn Cybersecurity Night',
        width: 6960,
        height: 4640,
      },
    ],
  },
  schedule: [
    { name: 'Food, Networking, Arriving', start: '18:00', end: '18:20' },
    { name: 'Welcome & Opening', start: '18:20', end: '18:30' },
    {
      name: 'Talk 1',
      description: 'Botnet reloaded',
      start: '18:30',
      end: '19:00',
    },
    {
      name: 'Talk 2',
      description: 'Souveräne Cloud im Bund',
      start: '19:00',
      end: '19:30',
    },
    {
      name: 'Talk 3',
      description:
        'CSAF - ein Standard, der das Schwachstellenmanagement revolutioniert',
      start: '19:30',
      end: '20:00',
    },
    {
      name: 'Networking with Food & Drinks',
      description: '🥬 🥔 🥙 🧆 🌮 🍔',
      start: '20:00',
      end: '22:00',
    },
  ],
  presentedBy: DIGITALHUB_PRESENTERS,
  partners: [
    LOGOS.digitalhub,
    LOGOS.ccb,
    LOGOS.l3montree,
    LOGOS.link11,
    LOGOS.conet,
    LOGOS.bsi,
  ],
  pastPartners: [
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
