import Image from 'next/image'

const people = [
  {
    name: 'Jutta Horstmann',
    role: 'Geschäftsführerin / Co-CEO — Heinlein Support GmbH',
    imageUrl: '/profilbild-jutta-horstmann.png',
    topic: 'Ein digitaler Fallschirm für die Demokratie',
    pdfFile: '',
  },
  {
    name: 'Peter Stamm',
    role: 'CEO — WhereGroup GmbH',
    imageUrl: '/Profil_Peter_Stamm.jpg',
    topic: 'Erfolgsmodell Open Source — Wirklich selbständig sein.',
    pdfFile: '',
  },
  {
    name: 'Sascha Foerster',
    role: 'Geschäftsführender Gesellschafter — Bonn.digital',
    imageUrl: '/profilbild-sascha-foerster.png',
    topic:
      'Jenseits von Meta und Musk: Marketing mit OpenSource-Software im Fediverse',
    pdfFile: '',
  },
  {
    name: 'TBA',
    role: 'Software-Security Expert — L3montree GmbH',
    imageUrl: '/dummy_person_white.png',
    topic: 'TBA',
    pdfFile: '',
  },
]

export default function Speakers() {
  return (
    <section className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Kicker + heading */}
        <div className="mx-auto max-w-2xl text-center lg:max-w-none">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#525252]">
            Lineup
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#fafafa] sm:text-4xl">
            Die SpeakerInnen
          </h2>
          <p className="mt-4 text-base leading-[1.6] text-[#a3a3a3]">
            Spannende Vorträge von Expert*innen aus Open Source, Sicherheit und
            digitaler Souveränität.
          </p>
        </div>

        {/* Cards */}
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="rounded-xl border border-white/[0.08] bg-[#111] px-8 py-10"
            >
              <Image
                alt={`${person.name} – ${person.role}`}
                src={person.imageUrl}
                width={224}
                height={224}
                sizes="(min-width: 1024px) 14rem, (min-width: 640px) 12rem, 6rem"
                className="mx-auto h-48 w-48 rounded-full object-cover ring-1 ring-white/[0.08] md:h-56 md:w-56"
              />
              <h3 className="mt-6 text-sm font-semibold tracking-tight text-[#fafafa]">
                {person.name}
              </h3>
              <p className="mt-1 font-mono text-xs text-[#525252]">
                {person.role}
              </p>
              <p className="mt-4 border-t border-white/[0.06] pt-4 text-sm leading-[1.6] text-[#a3a3a3]">
                &ldquo;{person.topic}&rdquo;
              </p>
              {person.pdfFile && (
                <a
                  href={person.pdfFile}
                  download
                  className="mt-6 inline-flex items-center gap-2 rounded-[6px] border border-white/[0.12] px-4 py-2 text-sm text-[#fafafa] transition-colors hover:border-white/25"
                >
                  Präsentation herunterladen
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
