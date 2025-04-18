import Image from 'next/image'
import React from 'react'

interface VerticalSpaceProps {
  height?: string
}

const VerticalSpace: React.FC<VerticalSpaceProps> = ({ height = '1.5cm' }) => {
  return <div style={{ height }} />
}

export default function Speaker() {
  return (
    <div className="overflow-hidden bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold leading-8 text-zinc-100">
          The Speakers
        </h2>
        <VerticalSpace />

        {/* Grid for 6 items */}
        <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-auto lg:max-w-none lg:grid-cols-3">
          {/* First Block */}
          <div className="text-center">
            <div className="relative h-0 w-full pb-[100%]">
              <Image
                alt="Nina Malkomes"
                src="/Nina_Malkomes_profil.png"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <VerticalSpace />
            <h3 className="text-lg font-semibold text-zinc-100">
              <span className="font-bold">Nina Malkomes</span>
              <br />
              Managing Consultant <br /> HiSolutions AG
            </h3>
            <p className="mt-2 text-base leading-8 text-zinc-300">
              DevSecOps - Mehr als nur Tools <br /> Zwischen Mindest und
              Methodik
            </p>
          </div>
          {/* Second Block */}
          <div className="text-center">
            <div className="relative h-0 w-full pb-[100%]">
              <Image
                alt="Tim Bastin"
                src="/tim_bastin_profil.png"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <VerticalSpace />
            <h3 className="text-lg font-semibold text-zinc-100">
              <span className="font-bold">Tim Bastin</span>
              <br />
              CTO <br /> L3montree Cybersecurity
            </h3>
            <p className="mt-2 text-base leading-8 text-zinc-300">tba</p>
          </div>
          {/* Third Block */}
          <div className="text-center">
            <div className="relative h-0 w-full pb-[100%]">
              <Image
                alt="Moritz Samrock"
                src="/moritz_samrock_profil.png"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <VerticalSpace />
            <h3 className="text-lg font-semibold text-zinc-100">
              <span className="font-bold">Moritz Samrock</span>
              <br />
              Hacker & Red-Teamer <br /> Laokoon SecurITy GmbH
            </h3>
            <p className="mt-2 text-base leading-8 text-zinc-300">
              Mythos Penetrationstest <br /> Offensive Sicherheitsmaßnahmen im
              Überblick
            </p>
          </div>
          {/* Fourth Block */}
          <div className="text-center">
            <div className="relative h-0 w-full pb-[100%]">
              <Image
                alt="Nico Mak"
                src="/nico_mak_profil.png"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <VerticalSpace />
            <h3 className="text-lg font-semibold text-zinc-100">
              <span className="font-bold">Nico Mak</span>
              <br />
              Geschäftsführer <br />
              0x101 Cyber Security
              <br />
            </h3>
            <p className="mt-2 text-base leading-8 text-zinc-300">
              The Server Is Owned – But Your Clients Aren’t: Wie moderne
              Software selbst kompromittierte Update-Kanäle überlebt
            </p>
          </div>
          {/* Fifth Block */}
          <div className="text-center">
            <div className="relative h-0 w-full pb-[100%]">
              <Image
                alt="Alexander Haunhorst Profilbild"
                src="/Alexander_Haunhorst-Profil.png"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <VerticalSpace />
            <h3 className="text-lg font-semibold text-zinc-100">
              <span className="font-bold">Alexander Haunhorst</span>
              <br />
              CTO <br />
              Valutis Technologies GmbH
              <br />
            </h3>
            <p className="mt-2 text-base leading-8 text-zinc-300">
              Hardwareentwicklung - so sicher nicht
            </p>
          </div>
          {/* Sixth Block */}
          <div className="text-center">
            <div className="relative h-0 w-full pb-[100%]">
              <Image
                alt="Sixth Person"
                src="/Alexander_Goth_Profil.jpg"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <VerticalSpace />
            <h3 className="text-lg font-semibold text-zinc-100">
              <span className="font-bold">Alexander Goth</span>
              <br />
              Data Architect <br />
              BusinessCode GmbH
              <br />
            </h3>
            <p className="mt-2 text-base leading-8 text-zinc-300">
              Homomorphe Verschlüsselung in der Praxis:
              <br /> Grundlagen, Einsatzmöglichkeiten und Herausforderungen
            </p>
          </div>
        </div>
      </div>
      <VerticalSpace />
    </div>
  )
}
