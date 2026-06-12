// ─── Event config ────────────────────────────────────────────────────────────
// All event-specific data lives here. Update this file for the next event.

export const EVENT = {
  name: 'OSS Meetup Bonn',
  title: 'Open Source & digitale Souveränität',
  subtitle:
    'Expert*innen, Maintainer*innen und Entwickler*innen aus der OSS Community aus Bonn und Umgebung treffen sich in lockerer Atmosphäre. Neben Snack & Drinks gibt es spannende Impulsvorträge.',
  date: '14. Juli 2026',
  dateISO: '2026-07-14',
  time: '17:00 Uhr',
  location: {
    name: 'L3montree HQ, Markt 3, 53111 Bonn',
    mapsUrl: 'https://maps.app.goo.gl/BS8JJH8eGxBSEmz49',
  },
  ticketUrl: 'https://ticket.bonn.digital/bonndigital/ossbn/',
}

// ─── Talks ───────────────────────────────────────────────────────────────────

export const TALKS: Array<{ title: string; body: string }> = [
  {
    title: 'Ein digitaler Fallschirm für die Demokratie',
    body: '',
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
      'Wie setze ich Open Source Software sicher und effizient in meinem Unternehmen ein?',
    body: 'Open Source Security ist das Haupt-Thema bei L3montree. Es gibt eine ganze Menge Open Source Tools, die die Entwicklung nicht nur sicherer, sondern auch noch compliant zu neuen Anforderungen wie zum Beispiel dem CRA machen können. Wir zeigen euch welche Tools ihr nutzen könnt.',
  },
]

// ─── Speakers ────────────────────────────────────────────────────────────────

export const SPEAKERS: Array<{
  name: string
  role: string
  imageUrl: string
  topic: string
  pdfFile: string
}> = [
  {
    name: 'Jutta Horstmann',
    role: 'Co-CEO - Heinlein Group',
    imageUrl: '/profilbild-jutta-horstmann.png',
    topic: 'Ein digitaler Fallschirm für die Demokratie',
    pdfFile: '',
  },
  {
    name: 'Peter Stamm',
    role: 'CEO - WhereGroup GmbH',
    imageUrl: '/Profil_Peter_Stamm.jpg',
    topic: 'Erfolgsmodell Open Source – Wirklich selbständig sein.',
    pdfFile: '',
  },
  {
    name: 'Sascha Foerster',
    role: 'Geschäftsführender Gesellschafter - Bonn.digital',
    imageUrl: '/profilbild-sascha-foerster.png',
    topic:
      'Jenseits von Meta und Musk: Marketing mit OpenSource-Software im Fediverse',
    pdfFile: '',
  },
  {
    name: 'TBA',
    role: 'Softwaresecurity-Expert - L3montree GmbH',
    imageUrl: '/dummy_person_white.png',
    topic: 'TBA',
    pdfFile: '',
  },
]

// ─── Schedule ─────────────────────────────────────────────────────────────────

export const SCHEDULE: Array<{
  id: number
  name: string
  description: string | null
  start: string
  end: string
  openForOthers: boolean
}> = [
  {
    id: 1,
    name: 'Ankommen & erstes Networking',
    description:
      'Türen auf! Kommt rein, holt euch was zu trinken und lernt erste Gesichter kennen.',
    start: '17:00',
    end: '17:20',
    openForOthers: false,
  },
  {
    id: 2,
    name: 'Welcome & Opening',
    description:
      'Kurze Begrüßung und Intro in den Abend — wer wir sind, was euch erwartet.',
    start: '17:30',
    end: '17:40',
    openForOthers: false,
  },
  {
    id: 3,
    name: 'Impulsvortrag 1',
    description: 'Ein digitaler Fallschirm für die Demokratie',
    start: '17:40',
    end: '18:00',
    openForOthers: false,
  },
  {
    id: 4,
    name: 'Impulsvortrag 2',
    description: 'Erfolgsmodell Open Source – Wirklich selbständig sein.',
    start: '18:00',
    end: '18:20',
    openForOthers: false,
  },
  {
    id: 5,
    name: 'Impulsvortrag 3',
    description:
      'Jenseits von Meta und Musk: Marketing mit OpenSource-Software im Fediverse',
    start: '18:20',
    end: '18:40',
    openForOthers: false,
  },
  {
    id: 6,
    name: 'Impulsvortrag 4',
    description:
      'Wie setze ich Open Source Software sicher und effizient in meinem Unternehmen ein?',
    start: '18:40',
    end: '19:00',
    openForOthers: false,
  },
  {
    id: 7,
    name: 'Networking, Food & Drinks',
    description:
      'Der Abend gehört euch — Zeit für Gespräche, Fragen an die Speaker und neue Kontakte. 🥬 🥔 🥙 🧆 🌮 🍔',
    start: '19:00',
    end: '22:00',
    openForOthers: false,
  },
]

// ─── Partners (current event) ─────────────────────────────────────────────────
// lightSrc: white/light logo for dark backgrounds (Hero)
// darkSrc:  dark logo for white backgrounds (Sponsors section)

export const CURRENT_PARTNERS: Array<{
  href: string
  lightSrc: string
  darkSrc: string
  alt: string
  width: number
  height: number
}> = [
  {
    href: 'https://www.digitalhub.de/',
    lightSrc: '/digitalhub-w.svg',
    darkSrc: '/digitalhub.svg',
    alt: 'DigitalHub AG Bonn',
    width: 158,
    height: 48,
  },
  {
    href: 'https://wheregroup.com/',
    lightSrc: '/WhereGroup-Logo-quer-cmyk_weiß.png',
    darkSrc: '/WhereGroup-Logo-quer-cmyk.jpg',
    alt: 'WhereGroup GmbH',
    width: 158,
    height: 48,
  },
  {
    href: 'https://bonn.digital/',
    lightSrc: '/Logo_weiß_bonn.png',
    darkSrc: '/Logo_schwarz_bonn.png',
    alt: 'Bonn Digital eGbR',
    width: 158,
    height: 48,
  },
  {
    href: 'https://www.l3montree.com/',
    lightSrc: '/l3montree-logo.svg',
    darkSrc: '/l3montree.svg',
    alt: 'L3montree',
    width: 158,
    height: 48,
  },
]

// ─── Past partners ────────────────────────────────────────────────────────────

export const PAST_PARTNERS: Array<{
  href: string
  src: string
  alt: string
  width: number
  height: number
}> = [
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

// ─── Past events ──────────────────────────────────────────────────────────────

export const PAST_EVENTS: Array<{ href: string; label: string }> = [
  { href: '../cyber_defence', label: 'Cybersecurity in Defence' },
  { href: '../bonn-security-night', label: 'Bonn Cybersecurity Night' },
  { href: '../souveraen', label: 'Digitale Souveränität' },
  { href: '../afterwork', label: 'Cybersecurity AfterWorkshop' },
  { href: '../second', label: 'EU Open Source Week – Offsite Event Bonn' },
  {
    href: 'https://gitlab.opencode.de/cybersecurity-hackathon',
    label: 'Open Source Security Hackathon 2024',
  },
]

// ─── FAQs ─────────────────────────────────────────────────────────────────────

export const FAQS: Array<{ id: number; question: string; answer: string }> = [
  {
    id: 1,
    question: 'Wer kann bei dem Event teilnehmen?',
    answer:
      'Jeder, der interessiert ist! Die Teilnahme ist dieses Mal nicht kostenlos, da wir Euch mit gutem Essen und Drinks versorgen wollen. Bitte registriere Dich über den Ticketshop.',
  },
  {
    id: 2,
    question: 'Wie sieht es mit Essen und Trinken aus?',
    answer: 'Wir versorgen Euch vor Ort mit Essen und Getränken.',
  },
]
