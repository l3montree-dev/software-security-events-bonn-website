import { trackable } from './tracking'
import type { Logo } from './types'

// Partner logos used by the event configs. "…Light" variants are
// white logos for the dark hero, the others are meant for white backgrounds.
const logo = (href: string, src: string, alt: string): Logo => ({
  href,
  src,
  alt,
  width: 158,
  height: 48,
})

export const LOGOS = {
  l3montreeLight: logo(
    'https://www.l3montree.com/',
    '/l3montree-logo.svg',
    'L3montree',
  ),
  l3montreeCeLight: logo(
    'https://www.l3montree.com/',
    '/l3montree-logo-ce.svg',
    'L3montree Cybersecurity',
  ),
  l3montree: logo(
    'https://www.l3montree.de/',
    '/l3montree.svg',
    'L3montree Cybersecurity',
  ),
  digitalhubLight: logo(
    'https://www.digitalhub.de/',
    '/digitalhub-w.svg',
    'DigitalHub AG Bonn',
  ),
  digitalhub: logo(
    'https://www.digitalhub.de/',
    '/digitalhub.svg',
    'DigitalHub Bonn',
  ),
  dwnrwLight: logo(
    'https://dwnrw-hubs.de/startseite/',
    '/dwnrw.png',
    'Digitale Wirtschaft NRW',
  ),
  ccbLight: logo(
    'https://cyber-security-cluster.eu/',
    '/ccb-logo-w.png',
    'Cyber Security Cluster Bonn e.V.',
  ),
  ccb: logo(
    'https://cyber-security-cluster.eu/',
    '/ccb-logo.png',
    'Cybersecurity Cluster Bonn e.V.',
  ),
  cir: logo(
    'https://www.bundeswehr.de/de/organisation/cyber-und-informationsraum',
    '/logo-CIR.png',
    'CIR',
  ),
  bwi: logo('https://www.bwi.de/', '/logo-BWI-2.png', 'BWI'),
  conet: logo('https://www.conet.de/', '/conet_logo.png', 'CONET'),
  nixcademy: logo(
    'https://nixcademy.com/de/',
    '/nixcademy-logo.png',
    'NixCademy',
  ),
  link11: logo('https://www.link11.com/de/', '/logo-link11.png', 'Link11'),
  bsi: logo('https://www.bsi.bund.de/', '/bsi-logo.png', 'BSI'),
  laokoon: logo(
    'https://laokoon-security.com/',
    '/laokoon-security-logo.png',
    'Laokoon SecurITy GmbH',
  ),
  hisolutions: logo(
    'https://www.hisolutions.com/',
    '/logo_his2.png',
    'HiSolutions',
  ),
  x101: logo(
    'https://netlockrmm.com/index.html',
    '/logo_0x101.png',
    '0x101 Cybersecurity',
  ),
  valutis: logo(
    'https://valutistech.com/',
    '/valutis_logo_black.svg',
    'valutis',
  ),
  businesscode: logo(
    'https://www.business-code.de/',
    '/bcdPlusTextLogo.svg',
    'BusinessCode',
  ),
  wheregroup: logo(
    'https://wheregroup.com/',
    '/where_group_logo.png',
    'WhereGroup GmbH',
  ),
  sequoia: logo('https://sequoia-pgp.org/', '/sequoia_logo.png', 'SequoiaPGP'),
  anykey: logo('https://www.anykey.de/', '/logo-anykey.png', 'anykey'),
  brl: logo(
    'https://www.brl.de/de',
    '/BRL-logo.png',
    'BRL BOEGE ROHDE LUEBBEHUESEN',
  ),
  euOssWeek: logo(
    'https://opensourceweek.eu/',
    '/EU_oss_week.png',
    'EU Open Source Week',
  ),
  // Sponsor – backlinks with tracking parameter
  devguardLight: {
    href: trackable('https://devguard.org/'),
    src: '/devguard-logo-white.svg',
    alt: 'DevGuard',
    width: 138,
    height: 48,
  },
  devguard: {
    href: trackable('https://devguard.org/'),
    src: '/devguard-logo-black.svg',
    alt: 'DevGuard',
    width: 130,
    height: 48,
  },
}

export const DIGITALHUB_PRESENTERS = [
  LOGOS.l3montreeLight,
  LOGOS.digitalhubLight,
  LOGOS.dwnrwLight,
  LOGOS.ccbLight,
]

// FAQs shared by the OSS-Bonn events at the DigitalHub.
export const OSS_BONN_FAQS = [
  {
    question: 'Was ist ein OSS-Bonn Event?',
    answer:
      'Das OSS-Bonn Eventformat ist ein Format das aus der Kooperation von L3montree Cybersecurity, dem DigitalHubs Bonn und des Cyber Security Clusters Bonn e.V. ins Leben gerufen wurde und regelmäßig abendliche Events zu verschiedensten Themen aus dem Bereich der Informatik und Cybersecurity veranstaltet.',
  },
  {
    question: 'Wer kann bei dem Event teilnehmen?',
    answer:
      'Jeder, der interessiert ist! Die Teilnahme ist komplett kostenlos, bitte Registriere Dich aber über den Ticketshop. Die Daten werden NICHT zu werbezwecken gespeichert und dienen lediglich der Event-Organisation.',
  },
  {
    question: 'Wie sieht es mit Essen und Trinken aus?',
    answer: 'Wir versorgen Euch vor Ort mit Snacks und Getränken (kostenlos).',
  },
]
