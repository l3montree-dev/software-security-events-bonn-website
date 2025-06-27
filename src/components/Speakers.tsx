import Image from 'next/image'

const people = [
  {
    name: 'anykey GmbH',
    role: 'CEO anykey GmbH - Mitglied ITK-Ausschuss des DIHK',
    imageUrl: '/profilbild_stephan-wirtz.png',
    topic:
      'Von Brüssel bis zum Serverraum – wie erhalte ich digitale Souveränität.',
    pdfFile: '',
  },
  {
    name: 'Sebastian Kawelke',
    role: 'CEO L3montree GmbH',
    imageUrl: '/profilbild-sebastian.png',
    topic: 'Topic: tba',
    pdfFile: '',
  },
  {
    name: 'Stefan Pilarczyk',
    role: 'Head of Cyber Security - BRL BOEGE ROHDE LUEBBEHUESEN',
    imageUrl: '/profilbild-stefan_pilarczyk.png',
    topic: 'Topic: tba',
    pdfFile: '',
  },
  {
    name: 'tba',
    role: 'BusinessCode GmbH',
    imageUrl: '/dummy_person_white.png',
    topic: '-',
    pdfFile: '',
  },
]

export default function Speakers() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center font-display text-4xl font-medium tracking-tight text-white">
            Die SpeakerInnen
          </h2>
          <p className="mt-6 text-lg/8 text-zinc-400">
            Hier findest du alle SpeakerInnen, die auf der Konferenz sprechen
            werden. Wir freuen uns auf spannende Vorträge und interessante
            Diskussionen!
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="rounded-2xl bg-zinc-800 px-8 py-10"
            >
              <Image
                alt={`${person.name} - ${person.role}`}
                height={500}
                width={500}
                src={person.imageUrl}
                className="mx-auto size-48 rounded-full object-cover md:size-56"
              />
              <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-white">
                {person.name}
              </h3>
              <p className="text-sm/6 text-zinc-400">{person.role}</p>
              <p className="mt-2 border-t border-zinc-600 p-2 text-sm/6 font-semibold text-zinc-200">
                &quot;{person.topic}&quot;
              </p>
              {person.pdfFile && (
                <a
                  href={person.pdfFile}
                  download
                  className="mt-4 inline-block rounded-lg bg-l3-500 px-4 py-2 text-black transition hover:bg-l3-300"
                >
                  Download Presentation
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
