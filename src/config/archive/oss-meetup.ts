// ─── Archived event: OSS Meetup Bonn (14. Juli 2026) ─────────────────────────
// Frozen snapshot used by /oss-meetup.

import type { EventConfig } from '../types'

export const OSS_MEETUP: EventConfig = {
  lang: 'de',
  name: 'OSS Meetup Bonn',
  summary: 'Open Source & digitale Souveränität',
  hero: {
    badge: 'OSS Meetup Bonn',
    title: 'Open Source &',
    titleHighlight: 'digitale Souveränität',
    description:
      'Expert*innen, Maintainer*innen und Entwickler*innen aus der OSS Community aus Bonn und Umgebung treffen sich in lockerer Atmosphäre. Neben Snack & Drinks gibt es spannende Impulsvorträge.',
  },
  date: 'Dienstag, 14. Juli 2026',
  dateISO: '2026-07-14',
  time: '17:00 Uhr',
  location: {
    name: 'L3montree HQ, Markt 3, 53111 Bonn',
    mapsUrl: 'https://maps.app.goo.gl/BS8JJH8eGxBSEmz49',
  },
  ticketUrl: 'https://ticket.bonn.digital/bonndigital/ossbn/',
  talksLabel: 'Impulsvorträge',
  talks: [
    {
      title: 'Ein digitaler Fallschirm für die Demokratie',
    },
    {
      title: 'Erfolgsmodell Open Source',
      body: 'Wenn Sie digital wirklich unabhängig und souverän agieren wollen, führt am Geschäftsmodell Open Source kein Weg vorbei. Ein kurzer Abriss der letzten 20 Jahre und ein noch kürzerer Ausblick auf die nächsten.',
    },
    {
      title:
        'Jenseits von Meta und Musk: Marketing mit OpenSource-Software im Fediverse',
      body: 'Die Agentur von Bonn.digital hat schon immer auf Marketing-Tools im OpenSource-Bereich gesetzt. Sascha Foerster gibt einen SpeedRun durch die Marketing-Toolbox von Bonn.digital, auf Basis von OpenSource-Software mit Fokus aufs Fediverse.',
    },
    {
      title:
        'Die neue souveräne & sichere Lieferkette der öffentlichen Verwaltung',
      body: 'Mit container.gov.de haben wir als technischer Umsetzungspartner des ZenDiS eine Lösung für die öffentliche Verwaltung Deutschlands geschaffen, um sichere Software-Images nutzen und teilen zu können.',
    },
  ],
  speakers: {
    eyebrow: 'Open Source Stimmen',
    intro:
      'Wir freuen uns auf spannende Vorträge und interessante Diskussionen mit diesen Expert*innen.',
    list: [
      {
        name: 'Jutta Horstmann',
        role: 'Co-CEO',
        company: { name: 'Heinlein Group' },
        imageUrl: '/profilbild-jutta-horstmann.png',
        topic: 'Ein digitaler Fallschirm für die Demokratie',
      },
      {
        name: 'Peter Stamm',
        role: 'CEO',
        company: { name: 'WhereGroup GmbH', href: 'https://wheregroup.com/' },
        imageUrl: '/Profil_Peter_Stamm.jpg',
        topic: 'Erfolgsmodell Open Source – Wirklich selbständig sein.',
      },
      {
        name: 'Sascha Foerster',
        role: 'Geschäftsführender Gesellschafter',
        company: { name: 'Bonn.digital', href: 'https://bonn.digital/' },
        imageUrl: '/profilbild-sascha-foerster.png',
        topic:
          'Jenseits von Meta und Musk: Marketing mit OpenSource-Software im Fediverse',
      },
      {
        name: 'Sebastian Kawelke',
        role: 'Softwaresecurity-Expert',
        company: { name: 'L3montree GmbH', href: 'https://www.l3montree.com/' },
        imageUrl: '/profilbild_sebastian_kawelke.jpeg',
        topic:
          'Die neue souveräne & sichere Lieferkette der öffentlichen Verwaltung',
      },
    ],
  },
  topic: {
    eyebrow: 'Open Source gehört die Zukunft!',
    heading: 'OSS Meetup Bonn',
    intro:
      'Am 14. Juli 2026 findet das Open-Source-Meetup Bonn statt – ein Nachmittag voller spannender Impulse, Diskussionen und Networking rund um Open Source und digitale Souveränität. Kompakt. Praxisnah. Offen.',
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
      name: 'Ankommen & erstes Networking',
      description:
        'Türen auf! Kommt rein, holt euch was zu trinken und lernt erste Gesichter kennen.',
      start: '17:00',
      end: '17:20',
    },
    {
      name: 'Welcome & Opening',
      description:
        'Kurze Begrüßung und Intro in den Abend — wer wir sind, was euch erwartet.',
      start: '17:30',
      end: '17:40',
    },
    {
      name: 'Impulsvortrag 1',
      description: 'Ein digitaler Fallschirm für die Demokratie',
      start: '17:40',
      end: '18:00',
    },
    {
      name: 'Impulsvortrag 2',
      description: 'Erfolgsmodell Open Source – Wirklich selbständig sein.',
      start: '18:00',
      end: '18:20',
    },
    {
      name: 'Impulsvortrag 3',
      description:
        'Jenseits von Meta und Musk: Marketing mit OpenSource-Software im Fediverse',
      start: '18:20',
      end: '18:40',
    },
    {
      name: 'Impulsvortrag 4',
      description:
        'Die neue souveräne & sichere Lieferkette der öffentlichen Verwaltung',
      start: '18:40',
      end: '19:00',
    },
    {
      name: 'Networking, Food & Drinks',
      description:
        'Der Abend gehört euch — Zeit für Gespräche, Fragen an die Speaker und neue Kontakte. 🥬 🥔 🥙 🧆 🌮 🍔',
      start: '19:00',
      end: '22:00',
    },
  ],
  presentedBy: [
    {
      href: 'https://www.digitalhub.de/',
      alt: 'DigitalHub AG Bonn',
      width: 158,
      height: 48,
      src: '/digitalhub-w.svg',
    },
    {
      href: 'https://wheregroup.com/',
      alt: 'WhereGroup GmbH',
      width: 158,
      height: 48,
      src: '/WhereGroup-Logo-quer-cmyk_weiß.png',
    },
    {
      href: 'https://bonn.digital/',
      alt: 'Bonn Digital eGbR',
      width: 158,
      height: 48,
      src: '/Logo_weiß_bonn.png',
    },
    {
      href: 'https://www.l3montree.com/',
      alt: 'L3montree',
      width: 158,
      height: 48,
      src: '/l3montree-logo.svg',
    },
  ],
  partners: [
    {
      href: 'https://www.digitalhub.de/',
      alt: 'DigitalHub AG Bonn',
      width: 158,
      height: 48,
      src: '/digitalhub.svg',
    },
    {
      href: 'https://wheregroup.com/',
      alt: 'WhereGroup GmbH',
      width: 158,
      height: 48,
      src: '/WhereGroup-Logo-quer-cmyk.jpg',
    },
    {
      href: 'https://bonn.digital/',
      alt: 'Bonn Digital eGbR',
      width: 158,
      height: 48,
      src: '/Logo_schwarz_bonn.png',
    },
    {
      href: 'https://www.l3montree.com/',
      alt: 'L3montree',
      width: 158,
      height: 48,
      src: '/l3montree.svg',
    },
  ],
  pastPartners: [
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
  ],
  faqs: [
    {
      question: 'Wer kann bei dem Event teilnehmen?',
      answer:
        'Jeder, der interessiert ist! Die Teilnahme ist dieses Mal nicht kostenlos, da wir Euch mit gutem Essen und Drinks versorgen wollen. Bitte registriere Dich über den Ticketshop.',
    },
    {
      question: 'Wie sieht es mit Essen und Trinken aus?',
      answer: 'Wir versorgen Euch vor Ort mit Essen und Getränken.',
    },
  ],
}
