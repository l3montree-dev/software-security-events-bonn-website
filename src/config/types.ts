import type { ReactNode } from 'react'

export type Lang = 'de' | 'en'

export type Logo = {
  href: string
  src: string
  alt: string
  width: number
  height: number
}

export type TopicImage = {
  src: string
  alt: string
  width: number
  height: number
}

// Everything that differs between event pages. The section components render
// any EventConfig in the same layout, so archived events keep the current style.
// ReactNode fields take a string, an array of strings (one paragraph each) or
// markup (<p>, <ul>, <a>, <strong>) – styling is applied by the section that
// renders them.
export type EventConfig = {
  lang: Lang
  name: string
  summary: string // plain text for meta description / JSON-LD
  hero: {
    badge: string
    title: string
    titleHighlight?: string
    tagline?: string
    description: ReactNode
  }
  date: string
  dateISO: string
  time: string
  location: { name: string; mapsUrl: string }
  ticketUrl: string
  ticketCta?: string // overrides the default ticket button label
  talksLabel: string
  talks: Array<{ title: string; subtitle?: string; body?: ReactNode }>
  speakers: {
    eyebrow: string
    intro?: string
    list: Array<{
      name: string
      role: string
      company?: { name: string; href?: string } // href gets a tracking parameter
      imageUrl: string
      topic: string
      topicSubtitle?: string
      pdfFile?: string
      links?: Array<{ href: string; label: string; kind: 'code' | 'role' }>
    }>
  }
  topic: {
    eyebrow: string
    heading: string
    intro: ReactNode
    note?: ReactNode
    images: Array<TopicImage>
  }
  schedule: Array<{
    name: string
    description?: string
    details?: string
    start: string
    end: string
  }>
  presentedBy: Array<Logo> // light logos for the dark hero
  partners: Array<Logo> // dark logos for the white sponsors section
  pastPartners: Array<Logo>
  faqs: Array<{ question: string; answer: string }>
}
