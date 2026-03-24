import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 flex-none lg:py-8">
      <Container className="flex flex-wrap items-center justify-center px-6 sm:justify-between lg:flex-nowrap lg:px-8">
        <div className="justify-center gap-10 max-sm:hidden"></div>
      </Container>
    </header>
  )
}
