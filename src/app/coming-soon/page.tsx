import Faqs from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import LastTimeImpressions from '@/components/LastTimeImpressions'
import Newsletter from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Sponsors } from '@/components/Sponsors'
import ThisYearsProblem from '@/components/Topic'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative isolate grid min-h-screen place-items-center bg-zinc-950">
      <Image
        src="/digital-crime.jpg"
        alt=""
        height={1080}
        width={1920}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
      />
      <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
        <p className="text-2xl font-semibold leading-8 text-white">
          Stay tuned!
        </p>
        <h1 className="mt-4 font-display text-5xl font-medium tracking-tighter text-white">
          Die Anmeldung ist noch nicht geöffent...
        </h1>
        <div className="mt-10 flex justify-center">
          <a href="/" className="text-sm font-semibold leading-7 text-white">
            <span aria-hidden="true">&larr;</span> Zurück zur Startseite
          </a>
        </div>
      </div>
    </div>
  )
}
