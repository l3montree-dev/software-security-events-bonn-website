import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps = (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
) & { variant?: 'primary' | 'secondary' }

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  className = clsx(
    'inline-flex justify-center rounded-[6px] px-4 py-3 text-base font-semibold transition-colors duration-150 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
    variant === 'primary' && [
      'bg-[oklch(0.86_0.1677_101.44)] text-black',
      'hover:bg-[oklch(0.79_0.1677_101.44)]',
      'focus-visible:outline-[oklch(0.86_0.1677_101.44)]',
      'active:text-black/70',
    ],
    variant === 'secondary' && [
      'border border-white/[0.12] bg-transparent text-[#fafafa]',
      'hover:border-white/25 hover:text-white',
      'focus-visible:outline-white/30',
      'active:text-white/70',
    ],
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...(props as React.ComponentPropsWithoutRef<'button'>)} />
  ) : (
    <Link className={className} {...(props as React.ComponentPropsWithoutRef<typeof Link>)} />
  )
}
