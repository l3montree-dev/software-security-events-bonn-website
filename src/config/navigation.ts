import { EVENT } from './event'
import type { EventConfig } from './types'
import { CYBER_DEFENCE_2 } from './upcoming/cyber-defence-2'

// Upcoming events, soonest first. The first one is the landing page "/" and is
// shown as "Nächstes Event" in the header. Once an event has taken place, move
// it to PAST_EVENT_LINKS (and its config to src/config/archive/).
export const UPCOMING_EVENTS: Array<{ href: string; event: EventConfig }> = [
  { href: '/', event: EVENT },
  { href: '/cyber-defence-2', event: CYBER_DEFENCE_2 },
]

// Past event pages, newest first.
export const PAST_EVENT_LINKS: Array<{
  href: string
  label: string
  date: string
}> = [
  {
    href: '/oss-meetup',
    label: 'OSS Meetup Bonn',
    date: 'Dienstag, 14. Juli 2026',
  },
  {
    href: '/cyber_defence',
    label: 'Cybersecurity in Defence',
    date: 'Dienstag, 20. Januar 2026',
  },
  {
    href: '/bonn-security-night',
    label: 'Bonn Cybersecurity Night',
    date: 'Mittwoch, 24. September 2025',
  },
  {
    href: '/souveraen',
    label: 'Digitale Souveränität',
    date: 'Dienstag, 12. August 2025',
  },
  {
    href: '/afterwork',
    label: 'Cybersecurity AfterWorkshop',
    date: 'Donnerstag, 8. Mai 2025',
  },
  {
    href: '/second',
    label: 'EU Open Source Week – Offsite Event Bonn',
    date: 'Donnerstag, 30. Januar 2025',
  },
]

export const UPCOMING_EVENT_LINKS = UPCOMING_EVENTS.map(({ href, event }) => ({
  href,
  label: event.name,
  date: event.date,
}))

export const EXTERNAL_EVENT_LINKS = [
  {
    href: 'https://gitlab.opencode.de/cybersecurity-hackathon',
    label: 'Open Source Security Hackathon 2024',
  },
]
