// ─── Archived event: Digitale Souveränität (12. August 2025) ────────────────

import Image from 'next/image'
import type { EventConfig } from '../types'
import { DIGITALHUB_PRESENTERS, LOGOS, OSS_BONN_FAQS } from '../shared'

const PHISH_CHIPS_URL = 'https://www.digitalhub.de/phish-chips'

export const SOUVERAEN: EventConfig = {
  lang: 'de',
  name: 'Digitale Souveränität',
  summary: 'Open Source & Software Security Events in Bonn und Umgebung',
  hero: {
    badge: 'Software & Cyber-Security Event Bonn',
    title: 'Digitale Souveränität',
    titleHighlight: 'in der Cybersecurity',
    tagline: 'a Phish & Chips Satellite',
    description: (
      <>
        <p>
          Im Vorlauf des{' '}
          <a href={PHISH_CHIPS_URL} target="_blank" rel="noopener noreferrer">
            Phish & Chips Cybersecurity Konferenz
          </a>{' '}
          des DigitalHub Bonn, geht es in diesem Event um das Thema{' '}
          <strong>digitale Souveränität in der Cyber-Security</strong>.
        </p>
        <p>
          Expert*innen geben in kompakten Impulsvorträgen wertvolle Einblicke in
          Strategien zur Stärkung digitaler Souveränität – aus Sicht von
          Unternehmen, Entwicklerinnen und Entscheider*innen. Sie zeigen, wie
          technologische Abhängigkeiten reduziert, Lieferketten abgesichert und
          vertrauenswürdige Sicherheitsarchitekturen mit europäischen
          Komponenten aufgebaut werden können. Außerdem diskutieren sie die
          Rolle von Open-Source-Software und die Frage: Wer kontrolliert
          eigentlich den Code?
        </p>
        <div>
          <p>Informationen zur Konferenz:</p>
          <a href={PHISH_CHIPS_URL} target="_blank" rel="noopener noreferrer">
            <Image
              src="/pnc_banner.jpg"
              alt="Banner der Phish & Chips Cybersecurity Konferenz"
              width={1210}
              height={450}
              className="h-auto w-full rounded-xl"
            />
          </a>
        </div>
        <p>
          Sichere Dir 25% Rabatt auf Dein Ticket – Code:{' '}
          <strong>L3montree25P&amp;C</strong> 🤫
        </p>
      </>
    ),
  },
  date: 'Dienstag, 12. August 2025',
  dateISO: '2025-08-12',
  time: '18:00 Uhr',
  location: {
    name: 'DIGITALHUB.DE, Rheinwerkallee 6, 53227 Bonn',
    mapsUrl: 'https://maps.app.goo.gl/Avz3bxHrK6i6JcHQ8',
  },
  ticketUrl:
    'https://www.eventbrite.de/e/digitale-souveranitat-in-der-cybersecurity-a-phish-chips-satelite-tickets-1431188837339?aff=oddtdtcreator&utm-source=cp&utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing',
  talksLabel: 'Die Themen sind unter anderem',
  talks: [
    {
      title: 'Lieferketten absichern',
      body: 'Strategien gegen technologische Abhängigkeiten',
    },
    {
      title: 'Open-Source vs. Proprietär',
      body: 'Wer kontrolliert den Code wirklich?',
    },
    {
      title: 'Sicherheitsarchitektur „Made in EU“',
      body: 'Aufbau vertrauenswürdiger Systeme mit europäischen Komponenten',
    },
  ],
  speakers: {
    eyebrow: 'Digitale Souveränität',
    intro:
      'Hier findest du alle SpeakerInnen, die auf der Konferenz sprechen werden. Wir freuen uns auf spannende Vorträge und interessante Diskussionen!',
    list: [
      {
        name: 'Stephan Wirtz',
        role: 'CEO anykey GmbH - Mitglied ITK-Ausschuss des DIHK',
        imageUrl: '/profilbild_stephan-wirtz.png',
        topic:
          'Von Brüssel bis zum Serverraum – wie erhalte ich digitale Souveränität.',
      },
      {
        name: 'Sebastian Kawelke',
        role: 'CEO',
        company: { name: 'L3montree GmbH', href: LOGOS.l3montree.href },
        imageUrl: '/profilbild-sebastian.png',
        topic:
          'Sichere Lieferketten und digitale Souveränität - Aktuelle Initiativen aus der öffentlichen Verwaltung',
        pdfFile: '/pdfs/OSS-Event-Digitale-Souveränität-Initiativen_ÖV.pdf',
      },
      {
        name: 'Stefan Pilarczyk',
        role: 'Head of Cyber Security',
        company: { name: 'BRL BOEGE ROHDE LUEBBEHUESEN', href: LOGOS.brl.href },
        imageUrl: '/profilbild-stefan_pilarczyk.png',
        topic:
          'Sicher? Sicher nicht! Das Dilemma mit der digitalen Souveränität.',
        pdfFile: '/pdfs/das_dilemma_mit_der_digitalen_souveränität.pdf',
      },
      {
        name: 'Harald Wagener',
        role: '',
        company: { name: 'BusinessCode GmbH', href: LOGOS.businesscode.href },
        imageUrl: '/profilbild-harald_wagener.png',
        topic: 'Die souveräne Supply Chain in der Software-Entwicklung',
        pdfFile: '/pdfs/Die_souveraene_supply_chain.pdf',
      },
    ],
  },
  topic: {
    eyebrow: 'Quo Vadis, IT-Sec?',
    heading: 'Digitale Souveränität in der Cybersecurity',
    intro: (
      <p>
        Globale Spannungen, technologische Abhängigkeiten, unsichere
        Lieferketten – europäische Unternehmen stehen vor der Herausforderung,
        digitale Souveränität neu zu denken. An diesem Abend diskutieren
        Expert*innen aus Wirtschaft, Politik und Tech, wie Europa sich resilient
        und unabhängig im Bereich Cybersecurity aufstellt. Kompakt. Strategisch.
        Praxisnah. Wie können Unternehmen mit europäischen Lösungen Sicherheit –
        von Infrastruktur bis Cloud - zurückgewinnen?
      </p>
    ),
    note: 'Im Anschluss an die Talks wird es bei Food & Drinks die Möglichkeit für vertiefende Fragen und Networking geben.',
    images: [
      {
        src: '/crowd.JPG',
        alt: 'Publikum beim Event Digitale Souveränität',
        width: 6960,
        height: 4640,
      },
      {
        src: '/network.JPG',
        alt: 'Networking beim Event Digitale Souveränität',
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
      description: 'Von Brüssel bis zum Serverraum',
      details: 'wie erhalte ich digitale Souveränität?',
      start: '18:30',
      end: '19:00',
    },
    {
      name: 'Talk 2',
      description: 'Sicher? Sicher nicht!',
      details: 'Das Dilemma mit der digitalen Souveränität',
      start: '19:00',
      end: '19:30',
    },
    {
      name: 'Talk 3',
      description: 'Die souveräne Supply Chain',
      details: 'in der Software-Entwicklung',
      start: '19:30',
      end: '20:00',
    },
    {
      name: 'Talk 4',
      description: 'Sichere Lieferketten und digitale Souveränität',
      details: 'Aktuelle Initiativen aus der öffentlichen Verwaltung',
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
    LOGOS.anykey,
    LOGOS.businesscode,
    LOGOS.brl,
  ],
  pastPartners: [],
  faqs: OSS_BONN_FAQS,
}
