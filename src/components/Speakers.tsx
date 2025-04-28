import Image from 'next/image'

const people = [
  {
    name: 'Nina Malkomes',
    role: 'Managing Consultant, HiSolutions AG',
    imageUrl: '/Nina_Malkomes_profil.png',
    topic: 'DevSecOps - Mehr als nur Tools - Zwischen Mindest und Methodik',
  },
  {
    name: 'Tim Bastin',
    role: 'CTO, L3montree Cybersecurity',
    imageUrl: '/tim_bastin_profil.png',
    topic: 'tba',
  },
  {
    name: 'Moritz Samrock',
    role: 'Hacker & Red-Teamer, Laokoon SecurITy GmbH',
    imageUrl: '/moritz_samrock_profil.png',
    topic:
      'Mythos Penetrationstest - Offensive Sicherheitsmaßnahmen im Überblick',
  },
  {
    name: 'Nico Mak',
    role: 'Geschäftsführer, 0x101 Cyber Security',
    imageUrl: '/nico_mak_profil.png',
    topic:
      'The Server Is Owned - But Your Clients Aren’t: Wie moderne Software selbst kompromittierte Update-Kanäle überlebt',
  },
  {
    name: 'Alexander Haunhorst',
    role: 'CTO, Valutis Technologies GmbH',
    imageUrl: '/Alexander_Haunhorst-Profil.png',
    topic: 'Hardwareentwicklung - so sicher nicht',
  },
  {
    name: 'Alexander Goth',
    role: 'Data Architect, BusinessCode GmbH',
    imageUrl: '/Alexander_Goth_Profil.jpg',
    topic:
      'Homomorphe Verschlüsselung in der Praxis: Grundlagen, Einsatzmöglichkeiten und Herausforderungen',
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
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
