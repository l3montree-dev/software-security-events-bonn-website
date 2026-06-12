import Image from 'next/image'
import { SPEAKERS } from '@/config/event'

export default function Speakers() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <span className="text-base font-semibold uppercase tracking-widest text-l3-600">
            Open Source Stimmen
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Die Speaker*innen
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-zinc-600">
            Wir freuen uns auf spannende Vorträge und interessante Diskussionen
            mit diesen Expert*innen.
          </p>
        </div>

        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SPEAKERS.map((person) => (
            <li
              key={person.name}
              className="flex flex-col rounded-xl border border-zinc-200 bg-zinc-50 p-6"
            >
              <Image
                alt={`${person.name} – ${person.role}`}
                src={person.imageUrl}
                width={224}
                height={224}
                sizes="(min-width:1024px) 14rem, (min-width:640px) 12rem, 10rem"
                className="mx-auto h-40 w-40 rounded-full object-cover"
              />
              <div className="mt-5 flex flex-1 flex-col">
                <p className="text-lg font-semibold text-zinc-900">
                  {person.name}
                </p>
                <p className="mt-0.5 min-h-[3rem] text-base text-zinc-500">
                  {person.role}
                </p>
                <p className="mt-4 flex-1 border-t border-zinc-200 pt-4 text-base leading-5 text-zinc-600">
                  &quot;{person.topic}&quot;
                </p>
                {person.pdfFile && (
                  <a
                    href={person.pdfFile}
                    download
                    className="mt-4 inline-flex justify-center rounded-lg bg-l3-500 px-4 py-2 text-lg font-semibold text-black transition hover:bg-l3-400"
                  >
                    Präsentation herunterladen
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
