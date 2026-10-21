import type { Lang } from './types'

// Fixed texts of the section layout. Event-specific texts live in the event
// configs.
export const LABELS = {
  de: {
    talksFollowUp: 'Im Anschluss: Fragen, Diskussionen & Networking',
    presentedBy: 'Presented by',
    ticketCta: 'Sicher Dir Dein Ticket →',
    ticketsSoon: 'Tickets in Kürze verfügbar',
    pastEvent: (date: string) => `Dieses Event hat am ${date} stattgefunden.`,
    upcomingEvent: 'Kommendes Event',
    upcomingEyebrow: 'Future Events',
    upcomingHeading: 'Kommende Events',
    upcomingIntro:
      'Merk Dir die nächsten Termine vor – wir freuen uns auf Dich!',
    toEvent: 'Zum Event →',
    toSchedule: 'Zum Programm ↓',
    youAreHere: 'Du bist hier',
    speakersHeading: 'Die Speaker*innen',
    downloadSlides: 'Präsentation herunterladen',
    readMore: 'Weiterlesen',
    readLess: 'Weniger anzeigen',
    toAbstract: 'zum Abstract',
    pastEvents: 'Vergangene Events',
    newTab: '(öffnet in neuem Tab)',
    sponsorsEyebrow: 'Ermöglicht durch',
    sponsorsHeading: 'Die Partner dieses Events',
    sponsorsIntro:
      'Die Partner sind die tragenden Säulen der Veranstaltungen. Mit ihrer Unterstützung machen sie es möglich, eine außergewöhnliche Veranstaltung wie diese zu schaffen.',
    pastPartners: 'Vergangene Partner',
    pastPartnersIntro:
      'Partner, die die bisherigen OSS-Events durch ihre Fachvorträge bereichert haben.',
    scheduleEyebrow: 'Ablauf',
    scheduleHeading: (date: string) => `Programm — ${date}`,
    faqEyebrow: 'Häufige Fragen',
    faqQuestion:
      'Du hast Fragen zum Event, auf die Du hier keine Antwort findest?',
    faqMail: 'Dann sende uns einfach eine E-Mail',
    faqConductBefore: 'Für alle OSS Events gilt dieser',
    faqConductAfter: '.',
  },
  en: {
    talksFollowUp: 'Followed by questions, discussions & networking',
    presentedBy: 'Presented by',
    ticketCta: 'Get your ticket →',
    ticketsSoon: 'Tickets available soon',
    pastEvent: (date: string) => `This event took place on ${date}.`,
    upcomingEvent: 'Upcoming event',
    upcomingEyebrow: 'Future events',
    upcomingHeading: 'Upcoming events',
    upcomingIntro: 'Save the dates – we look forward to seeing you!',
    toEvent: 'Go to event →',
    toSchedule: 'See the programme ↓',
    youAreHere: 'You are here',
    speakersHeading: 'The Speakers',
    downloadSlides: 'Download presentation',
    readMore: 'Read more',
    readLess: 'Show less',
    toAbstract: 'go to abstract',
    pastEvents: 'Past events',
    newTab: '(opens in a new tab)',
    sponsorsEyebrow: 'Made possible by',
    sponsorsHeading: 'The partners of this event',
    sponsorsIntro:
      'The sponsors are the supporting pillars of the events. With their generous support, they make it possible us to create an extraordinary event.',
    pastPartners: 'Past partners',
    pastPartnersIntro:
      'Partners who have enriched previous OSS events with their talks.',
    scheduleEyebrow: 'Schedule',
    scheduleHeading: (date: string) => `Programme — ${date}`,
    faqEyebrow: 'Frequently asked questions',
    faqQuestion:
      "You have another question and can't find the answer you're looking for?",
    faqMail: 'Then please send us an e-mail',
    faqConductBefore: 'For all OSS events our',
    faqConductAfter: ' applies.',
  },
} satisfies Record<Lang, unknown>
