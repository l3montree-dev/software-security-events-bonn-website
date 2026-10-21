// ─── Archived event: Cybersecurity AfterWorkshop (8. Mai 2025) ──────────────

import type { EventConfig } from '../types'
import { DIGITALHUB_PRESENTERS, LOGOS } from '../shared'

export const AFTERWORK: EventConfig = {
  lang: 'de',
  name: 'Cybersecurity AfterWorkshop',
  summary: 'Software & Cyber-Security Event Bonn',
  hero: {
    badge: 'Software & Cyber-Security Event Bonn',
    title: 'Cybersecurity',
    titleHighlight: 'AfterWorkshop',
    description: (
      <>
        <p>
          Als Teil der AfterWorkshop Reihe des{' '}
          <a
            href="https://www.digitalhub.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DigitalHub Bonn
          </a>
          , geht es in diesem Event um das Thema{' '}
          <strong>Software & Cyber-Security</strong>.
        </p>
        <p>
          Expert*innen geben in spannenden Impulsvorträgen wertvolle Einblicke
          in effiziente und sichere Softwareentwicklung und -tests – sowohl aus
          der Sicht von Managern als auch von Entwicklern. Sie beleuchten Best
          Practices für kleine und große Unternehmen, zeigen, wie
          Sicherheitslücken durch Penetrationstests nachträglich aufgedeckt
          werden können, und erläutern Methoden zur Erkennung von Angriffen auf
          die eigenen Systeme.
        </p>
      </>
    ),
  },
  date: 'Donnerstag, 8. Mai 2025',
  dateISO: '2025-05-08',
  time: '18:00 Uhr',
  location: {
    name: 'DIGITALHUB.DE, Hauptbahnhof 6, 53111 Bonn',
    mapsUrl: 'https://maps.app.goo.gl/9F8Hw4MyQVvfTjVw8',
  },
  ticketUrl:
    'https://www.eventbrite.de/e/afterworkshop-zum-thema-cyber-security-tickets-1279678525919?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl',
  talksLabel: 'Die Themen sind unter anderem',
  talks: [
    { title: 'Security by Design', body: 'Sicherheit von Dev bis Ops' },
    {
      title: 'Automatisierte Sicherheit im Entwicklungsprozess',
      body: 'Mehr Security mit jedem Commit',
    },
    {
      title: 'Softwaretesting durch Red-Teams',
      body: 'Was kommt nach den Schwachstellenscans',
    },
    {
      title: 'Security Monitoring & Management',
      body: 'Wie man den Überblick über seine Endgeräte behält',
    },
    {
      title: 'Hardwaresecurity',
      body: 'Wie entwickel ich sicheren Code für Hardware?',
    },
    {
      title: 'Homomorphe Verschlüsselung',
      body: 'Ganzheitliche Vertraulichkeit bei Rechenoperationen erreichen',
    },
  ],
  speakers: {
    eyebrow: 'Cybersecurity AfterWorkshop',
    intro:
      'Hier findest du alle SpeakerInnen, die auf der Konferenz sprechen werden. Wir freuen uns auf spannende Vorträge und interessante Diskussionen!',
    list: [
      {
        name: 'Nina Malkomes',
        role: 'Managing Consultant',
        company: { name: 'HiSolutions AG', href: LOGOS.hisolutions.href },
        imageUrl: '/Nina_Malkomes_profil.png',
        topic: 'DevSecOps - Mehr als nur Tools - Zwischen Mindest und Methodik',
        pdfFile: '/pdfs/DevSecOps-Mehr-als-nur-Tools.pdf',
      },
      {
        name: 'Tim Bastin',
        role: 'CTO',
        company: {
          name: 'L3montree Cybersecurity',
          href: LOGOS.l3montree.href,
        },
        imageUrl: '/tim_bastin_profil.png',
        topic:
          'So wird die CI-Pipeline zur Basis für sichere Softwareentwicklung',
        pdfFile:
          '/pdfs/So_wird_die_CI-Pipeline_zur_Basis_fuer_sichere_Softwareentwicklung.pdf',
      },
      {
        name: 'Moritz Samrock',
        role: 'Hacker & Red-Teamer',
        company: { name: 'Laokoon SecurITy GmbH', href: LOGOS.laokoon.href },
        imageUrl: '/moritz_samrock_profil.png',
        topic:
          'Mythos Penetrationstest - Offensive Sicherheitsmaßnahmen im Überblick',
        pdfFile: '/pdfs/MythosPT.pdf',
      },
      {
        name: 'Nico Mak',
        role: 'Geschäftsführer',
        company: { name: '0x101 Cyber Security', href: LOGOS.x101.href },
        imageUrl: '/nico_mak_profil.png',
        topic:
          'The Server Is Owned - But Your Clients Aren’t: Wie moderne Software selbst kompromittierte Update-Kanäle überlebt',
        pdfFile: '/pdfs/The_Server_Is_Owned-But_Your_Clients_Aren_t.pdf',
      },
      {
        name: 'Alexander Haunhorst',
        role: 'CTO',
        company: {
          name: 'Valutis Technologies GmbH',
          href: LOGOS.valutis.href,
        },
        imageUrl: '/Alexander_Haunhorst-Profil.png',
        topic: 'Hardwareentwicklung - so sicher nicht',
        pdfFile: '/pdfs/Hardwaresicherheit.pdf',
      },
      {
        name: 'Alexander Goth',
        role: 'Data Architect',
        company: { name: 'BusinessCode GmbH', href: LOGOS.businesscode.href },
        imageUrl: '/Alexander_Goth_Profil.jpg',
        topic:
          'Homomorphe Verschlüsselung in der Praxis: Grundlagen, Einsatzmöglichkeiten und Herausforderungen',
        pdfFile: '/pdfs/Homomorphe_Verschluesselung.pdf',
      },
    ],
  },
  topic: {
    eyebrow: 'Cybersecurity AfterWorkshop',
    heading: 'Lust auf geballtes Know-How & Networking?',
    intro: (
      <p>
        Cybersecurity geht uns alle an – egal ob Start-up oder Großkonzern! In
        diesem AfterWorkshop des DigitalHub Bonn zeigen euch vier Expert*innen,
        worauf es bei sicherer Softwareentwicklung und -tests wirklich ankommt.
        Kompakt, praxisnah und auf den Punkt – holt euch das Wissen, um eure
        Software und IT sicherer zu machen!
      </p>
    ),
    note: 'Im Anschluss an die Talks wird es bei Food & Drinks die Möglichkeit für vertiefende Fragen und Networking geben.',
    images: [
      {
        src: '/AW_intro.JPG',
        alt: 'Einführungsvortrag beim Cybersecurity AfterWorkshop',
        width: 6414,
        height: 3878,
      },
      {
        src: '/crowd.jpeg',
        alt: 'Publikum beim Cybersecurity AfterWorkshop',
        width: 1280,
        height: 853,
      },
    ],
  },
  schedule: [
    { name: 'Food, Networking, Arriving', start: '18:00', end: '18:20' },
    { name: 'Welcome & Opening', start: '18:20', end: '18:30' },
    {
      name: 'DevSecOps - Mehr als nur Tools',
      description: 'Zwischen Mindest und Methodik',
      details: 'Nina Malkomes',
      start: '18:30',
      end: '18:50',
    },
    {
      name: 'Automatisierte Sicherheit per DevSecOps',
      description:
        'So wird die CI-Pipeline zur Basis für sichere Softwareentwicklung',
      details: 'Tim Bastin',
      start: '18:50',
      end: '19:10',
    },
    {
      name: 'Mythos Penetrationstest',
      description: 'Offensive Sicherheitsmaßnahmen im Überblick',
      details: 'Moritz Samrock',
      start: '19:10',
      end: '19:30',
    },
    {
      name: 'The Server Is Owned – But Your Clients Aren’t',
      description:
        'Wie moderne Software selbst kompromittierte Update-Kanäle überlebt',
      details: 'Nico Mak',
      start: '19:30',
      end: '19:50',
    },
    {
      name: 'Hardwareentwicklung',
      description: 'So sicher nicht',
      details: 'Alexander Haunhorst',
      start: '19:50',
      end: '20:10',
    },
    {
      name: 'Homomorphe Verschlüsselung in der Praxis:',
      description: 'Grundlagen, Einsatzmöglichkeiten und Herausforderungen',
      details: 'Alexander Goth',
      start: '20:10',
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
    LOGOS.laokoon,
    LOGOS.hisolutions,
    LOGOS.x101,
    LOGOS.valutis,
    LOGOS.businesscode,
    LOGOS.l3montree,
  ],
  pastPartners: [],
  faqs: [
    {
      question: 'Was ist der AfterWorkshop?',
      answer:
        'Das Eventformat der AfterWorkshops ist ein Format des DigitalHubs Bonn, bei dem es monatlich, interaktives Workshops und zu verschiedensten Themen geben wird.',
    },
    {
      question: 'Wer kann bei dem Event teilnehmen?',
      answer:
        'Jeder, der interessiert ist! Die Teilnahme ist komplett kostenlos, bitte Registriere Dich aber über den Ticketshop.',
    },
    {
      question: 'Wie sieht es mit Essen und Trinken aus?',
      answer: 'Wir versorgen Sie vor Ort mit Snacks und Getränken (kostenlos).',
    },
  ],
}
