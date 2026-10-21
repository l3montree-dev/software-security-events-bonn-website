// ─── Archived event: EU Open Source Week – Offsite Event Bonn (30.01.2025) ──

import type { EventConfig } from '../types'
import { LOGOS } from '../shared'

export const EU_OSS_WEEK: EventConfig = {
  lang: 'en',
  name: 'EU Open Source Week – Offsite Event Bonn',
  summary: 'Open Source Security, - Policy & Open Source as a business model',
  hero: {
    badge: 'EU Open Source Week',
    title: 'Offsite Event',
    titleHighlight: 'Bonn',
    tagline: 'Open Source Security, - Policy & Open Source as a business model',
    description: (
      <p>
        As part of the -
        <a
          href="https://opensourceweek.eu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>EU Open Source Week</strong>
        </a>
        -, we are excited to invite you to our Offsite Event in{' '}
        <strong>Bonn</strong>, where we will dive deep into the intersection of{' '}
        <strong>Open Source Security</strong>,{' '}
        <strong>Open Source Policies</strong>, and{' '}
        <strong>Open Source as a Reliable Business Model</strong>. This
        exclusive event aims to bring together thought leaders, policymakers,
        business innovators, and technologists to explore how open source is
        shaping the future of technology—and how we can ensure it remains
        secure, sustainable, and a trusted foundation for businesses of all
        sizes.
      </p>
    ),
  },
  date: 'Thursday, 30 January 2025',
  dateISO: '2025-01-30',
  time: '18:00',
  location: {
    name: 'DIGITALHUB.DE, Rheinwerkallee 6, 53227 Bonn',
    mapsUrl: 'https://maps.app.goo.gl/6AY3vJ9h1jjVihG19',
  },
  ticketUrl: '',
  talksLabel: 'Topics',
  talks: [
    {
      title: 'Open Source Security',
      body: 'How can we ensure that open source projects remain secure in an increasingly complex and hostile digital landscape? What are the tools, strategies, and best practices for managing open source security risks?',
    },
    {
      title: 'Open Source Policies',
      body: 'What role do policymakers play in shaping the future of open source in Europe and globally? How can governments and institutions foster an ecosystem that promotes innovation while safeguarding public and private interests?',
    },
    {
      title: 'Open Source as a Business Model',
      body: "Open source is no longer just a tech movement; it's a sustainable business model for many organizations. We'll explore successful open source business strategies, monetization models, and how companies can build and maintain thriving businesses around open source.",
    },
  ],
  speakers: {
    eyebrow: 'EU Open Source Week',
    list: [
      {
        name: 'Peter Stamm',
        role: 'CEO',
        company: { name: 'WhereGroup GmbH', href: LOGOS.wheregroup.href },
        imageUrl: '/Profil_Peter_Stamm.jpg',
        topic: 'Open source software as a business model (held in german)',
      },
      {
        name: 'Sebastian Kawelke',
        role: 'CEO',
        company: {
          name: 'L3montree Cybersecurity',
          href: LOGOS.l3montreeCeLight.href,
        },
        imageUrl: '/Profil_Sebastian_Kawelke.jpeg',
        topic: 'Securing Public Services: The Power of Open Source',
        pdfFile:
          '/pdfs/Securing public Services - The Power of Open Source.pdf',
      },
      {
        name: 'Neal H. Walfield',
        role: 'Co-Founder',
        company: { name: 'Sequoia PGP', href: LOGOS.sequoia.href },
        imageUrl: '/Profil_Neal_H._Walfield.png',
        topic:
          'Interacting with FOSS Projects: Setting and Respecting Expectations',
      },
      {
        name: 'David Luhmer',
        role: 'Maintainer: Nextcloud News App for Android & Team Lead DevOps',
        imageUrl: '/David_Luhmer_Profil.jpeg',
        topic:
          'Maintaining an open source application - a look behind the scenes',
        pdfFile:
          '/pdfs/Maintaining an open source application - a look behind the scenes.pdf',
      },
    ],
  },
  topic: {
    eyebrow: 'The Topic',
    heading:
      'Is Open Source Crucial for the Future of Technology? How can we as a community tackle security, policy, and business models and shape the evolution of OSS.',
    intro: (
      <p>
        Open source is no longer just a development philosophy; it is at the
        heart of global technological advancements. However, as the adoption of
        open source continues to grow, so too do the challenges related to
        security, governance, and its integration into business operations. In
        this session, we will address:
      </p>
    ),
    note: (
      <>
        <p>
          Join us for this dynamic session where we&apos;ll not only highlight
          the latest challenges and opportunities but also pave the way for
          collaboration across sectors to drive the future of open source
          forward with confidence and security. Whether you&apos;re a developer,
          policymaker, business leader, or open source enthusiast, this is an
          event you won&apos;t want to miss.
        </p>
        <p>
          We look forward to an engaging and thought-provoking discussion in
          Bonn as part of the EU Open Source Week!
        </p>
      </>
    ),
    images: [
      {
        src: '/OSS-Event.png',
        alt: 'Talk at the EU Open Source Week Offsite Event in Bonn',
        width: 3775,
        height: 2334,
      },
    ],
  },
  schedule: [
    { name: 'Welcome & Opening', start: '18:00', end: '18:15' },
    {
      name: 'Interacting with FOSS Projects:',
      description: 'Setting and Respecting Expectations',
      details: 'Neal H. Walfield',
      start: '18:15',
      end: '18:40',
    },
    {
      name: 'Open source software as a business model',
      description: '(held in german)',
      details: 'Peter Stamm',
      start: '18:40',
      end: '19:05',
    },
    {
      name: 'Maintaining an open source application',
      description: 'A look behind the scenes',
      details: 'David Luhmer',
      start: '19:05',
      end: '19:30',
    },
    {
      name: 'Security is a necessity',
      description: 'Open source software in public administration',
      details: 'Sebastian Kawelke',
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
  presentedBy: [
    LOGOS.l3montreeCeLight,
    LOGOS.digitalhubLight,
    LOGOS.dwnrwLight,
    LOGOS.ccbLight,
  ],
  partners: [LOGOS.digitalhub, LOGOS.ccb],
  pastPartners: [],
  faqs: [
    {
      question: 'Whats the EU Open Source week?',
      answer:
        'Every year, at the end of January and the beginning of February, thousands of people from Europe and around the world gather in Brussels to discuss open source and open technologies. The main attraction is FOSDEM, Europe’s largest open source conference, which has inspired a range of side events, social activities, and workshops. For those interested in open technology, digital policy, and EU developments, OpenForum Europe’s EU Open Source Policy Summit brings together open source leaders and policymakers. Together, these events make up the EU Open Source Week.',
    },
    {
      question: 'Who can participate?',
      answer:
        'Basically anyone who is interested! Participation is possible on site in Bonn or online. In either case, please buy a ticket in our shop.',
    },
    {
      question: 'What about food and drink?',
      answer:
        'We will provide you with snacks and drinks (free of charge) on site.',
    },
  ],
}
