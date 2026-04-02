import Image from 'next/image'

const people = [
  {
    name: 'Peter Stamm',
    role: 'CEO WhereGroup GmbH',
    imageUrl: '/Profil_Peter_Stamm.jpg',
    topic: 'Open source software as a business model (held in german)',
    pdfFile: '',
  },
  {
    name: 'Sebastian Kawelke',
    role: 'CEO L3montree Cybersecurity',
    imageUrl: '/Profil_Sebastian_Kawelke.jpeg',
    topic: 'Securing Public Services: The Power of Open Source',
    pdfFile: '/pdfs/Securing public Services - The Power of Open Source.pdf',
  },
  {
    name: 'Neal H. Walfield',
    role: 'Co-Founder Sequoia PGP',
    imageUrl: '/Profil_Neal_H._Walfield.png',
    topic: 'Interacting with FOSS Projects: Setting and Respecting Expectations',
    pdfFile: '',
  },
  {
    name: 'David Luhmer',
    role: 'Maintainer: Nextcloud News App for Android & Team Lead DevOps',
    imageUrl: '/David_Luhmer_Profil.jpeg',
    topic: 'Maintaining an open source application - a look behind the scenes',
    pdfFile:
      '/pdfs/Maintaining an open source application - a look behind the scenes.pdf',
  },
]

export default function Speaker() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <h2 className="text-center text-3xl font-bold leading-8 text-zinc-100">
          The Speakers
        </h2>
        <ul
          role="list"
          className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8"
        >
          {people.map((person) => (
            <li key={person.name} className="rounded-2xl bg-zinc-800 px-8 py-10 text-center">
              <Image
                alt={`${person.name} - ${person.role}`}
                src={person.imageUrl}
                width={224}
                height={224}
                sizes="(min-width: 1024px) 14rem, (min-width: 640px) 12rem, 6rem"
                className="mx-auto size-48 rounded-full object-cover md:size-56"
              />
              <h3 className="mt-6 text-base font-semibold text-zinc-100">
                {person.name}
              </h3>
              <p className="text-sm text-zinc-400">{person.role}</p>
              <p className="mt-2 border-t border-zinc-600 p-2 text-sm font-semibold text-zinc-200">
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
