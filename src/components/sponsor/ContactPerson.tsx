import Image from 'next/image'

const people = [
  {
    name: 'Frederic Noppe',
    role: 'Consultant @ L3montree',
    imageUrl: '/profilfoto-frederic.jpeg',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    xUrl: '#',
    linkedinUrl: '#',
  },
]

export default function ContactPerson() {
  return (
    <div className="bg-zinc-950 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
        <div className="max-w-2xl xl:col-span-2">
          <h2 className="font-display text-5xl font-medium tracking-tighter text-zinc-100">
            Ihr Ansprechpartner
          </h2>
          <p className="mt-6 leading-8 text-zinc-300">
            Persönliche Beratung und Unterstützung für Ihre Sponsoring-Anfragen:
            Lassen Sie uns gemeinsam die Sicherheit in der
            Open-Source-Softwareentwicklung vorantreiben.
          </p>
        </div>
        <ul
          role="list"
          className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="flex flex-col gap-10 pt-12 sm:flex-row"
            >
              <Image
                alt=""
                height={1000}
                width={400}
                src={person.imageUrl}
                className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
              />
              <div className="max-w-xl flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-zinc-100">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-zinc-300">
                  {person.role}
                </p>
                <p className="mt-6 text-base leading-7 text-zinc-300">
                  E-Mail:{' '}
                  <a
                    className="text-l3-400 underline decoration-dashed decoration-1 underline-offset-2 hover:text-l3-200"
                    href="mailto:frederic.noppe@l3montree.com?subject= EU OSS Offsin Sponsoring"
                  >
                    sponsor@cybersecurity-hackathon.de
                  </a>
                </p>
                <p className="mt-2 text-base leading-7 text-zinc-300">
                  Telefon:{' '}
                  <a
                    className="text-l3-400 underline decoration-dashed decoration-1 underline-offset-2 hover:text-l3-200"
                    href="tel:+4922892998568"
                  >
                    +49 (0)228 92998568
                  </a>
                </p>
                <span className="mt-2 flex text-base leading-7 text-zinc-300">
                  LinkedIn:{' '}
                  <a
                    href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-noppe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 mt-1 text-zinc-300 hover:text-zinc-100"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
