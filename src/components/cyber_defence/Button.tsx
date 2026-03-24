import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps =
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })

export function Button({ className, ...props }: ButtonProps) {
  className = clsx(
    'inline-flex justify-center rounded-md bg-l3-500 px-4 py-3 text-base font-semibold text-black hover:bg-l3-400 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-l3-500 active:text-black/70',
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
