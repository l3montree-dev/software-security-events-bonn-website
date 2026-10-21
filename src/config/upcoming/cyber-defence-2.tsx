// ─── Upcoming event: Cybersecurity in Defence 2.0 (20. Januar 2027) ─────────

import { PAST_PARTNERS } from '../event'
import { LOGOS, OSS_BONN_FAQS } from '../shared'
import type { EventConfig } from '../types'

const partners = [
  LOGOS.digitalhub,
  LOGOS.ccb,
  LOGOS.bwi,
  LOGOS.cir,
  LOGOS.devguard,
]

export const CYBER_DEFENCE_2: EventConfig = {
  lang: 'de',
  name: 'Cybersecurity in Defence 2.0',
  summary:
    'Die Fortsetzung von Cybersecurity in Defence: Impulsvorträge und Networking rund um Cybersecurity im Verteidigungssektor – mit BWI, dem CIR der Bundeswehr, dem DigitalHub Bonn und dem Cyber Security Cluster Bonn.',
  hero: {
    badge: 'Software & Cyber-Security Event Bonn',
    title: 'Cybersecurity',
    titleHighlight: 'in Defence 2.0',
    tagline: 'Die Fortsetzung von Cybersecurity in Defence',
    description: (
      <>
        <p>
          Nach der ersten Ausgabe im Januar 2026 geht{' '}
          <a href="/cyber_defence">Cybersecurity in Defence</a> in die zweite
          Runde. Wieder mit dabei: die BWI, der Cyber- und Informationsraum
          (CIR) der Bundeswehr, der DigitalHub Bonn und der Cyber Security
          Cluster Bonn e.V.
        </p>
        <p>
          In kompakten Impulsvorträgen geht es um aktuelle Herausforderungen und
          Lösungsansätze der Cybersecurity im Verteidigungssektor – mit
          anschließender Zeit für Fragen, Diskussionen und Networking.
        </p>
      </>
    ),
  },
  date: 'Mittwoch, 20. Januar 2027',
  dateISO: '2027-01-20',
  time: '18:00 Uhr',
  location: {
    name: 'DIGITALHUB.DE, Am Hauptbahnhof 6, 53111 Bonn',
    mapsUrl: 'https://maps.app.goo.gl/9Lu7pS17AHp5wn31A',
  },
  // TODO: Ticket-Link eintragen. Solange leer, zeigt die Seite
  // "Tickets in Kürze verfügbar" statt des Ticket-Buttons.
  ticketUrl: '',
  talksLabel: 'Impulsvorträge',
  // TODO: Talk-Titel und Beschreibungen eintragen, sobald sie feststehen.
  talks: [
    { title: 'Talk #1', subtitle: 'Thema folgt in Kürze' },
    { title: 'Talk #2', subtitle: 'Thema folgt in Kürze' },
    { title: 'Talk #3', subtitle: 'Thema folgt in Kürze' },
    { title: 'Talk #4', subtitle: 'Thema folgt in Kürze' },
  ],
  speakers: {
    eyebrow: 'Cybersecurity in Defence 2.0',
    intro:
      'Wir freuen uns auf spannende Vorträge und interessante Diskussionen!',
    // TODO: Speaker*innen eintragen (Profilbild nach /public legen).
    list: [1, 2, 3, 4].map((n) => ({
      name: `Speaker*in #${n}`,
      role: 'Wird in Kürze bekannt gegeben',
      imageUrl: '/dummy_person_dark.png',
      topic: `Talk #${n}`,
      topicSubtitle: 'Thema folgt in Kürze',
    })),
  },
  topic: {
    eyebrow: 'Wissen allein reicht nicht!',
    heading: 'Cybersecurity in Defence geht weiter',
    intro: (
      <p>
        Die Bedrohungslage im Cyberraum bleibt komplex und dynamisch – besonders
        im Defence-Bereich. Ein Jahr nach der ersten Ausgabe bringen wir
        Expert*innen und Community erneut zusammen, um über Strategien,
        Partnerschaften und Praxis zu sprechen. Kompakt. Strategisch. Praxisnah.
      </p>
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
  // Ablauf wie bei Cybersecurity in Defence 2026.
  // TODO: Talk-Titel eintragen.
  schedule: [
    { name: 'Food, Networking, Arriving', start: '18:00', end: '18:20' },
    { name: 'Welcome & Opening', start: '18:20', end: '18:30' },
    {
      name: 'Talk 1',
      description: 'Thema folgt in Kürze',
      start: '18:30',
      end: '19:00',
    },
    {
      name: 'Talk 2',
      description: 'Thema folgt in Kürze',
      start: '19:00',
      end: '19:30',
    },
    {
      name: 'Talk 3',
      description: 'Thema folgt in Kürze',
      start: '19:30',
      end: '20:00',
    },
    {
      name: 'Talk 4',
      description: 'Thema folgt in Kürze',
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
  // BWI and CIR have no white logo variant, so – as in 2026 – they only
  // appear in the white partner section.
  presentedBy: [LOGOS.digitalhubLight, LOGOS.ccbLight, LOGOS.devguardLight],
  partners,
  pastPartners: PAST_PARTNERS.filter(
    (past) => !partners.some((p) => p.href === past.href),
  ),
  // TODO: prüfen – Annahme: Teilnahme und Verpflegung wieder kostenlos wie 2026.
  faqs: OSS_BONN_FAQS,
}
