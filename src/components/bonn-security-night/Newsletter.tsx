import { Button } from './Button'

export default function Newsletter() {
  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="max-w-xl font-display text-4xl font-medium tracking-tighter text-black lg:col-span-7">
          <h2 className="inline sm:block lg:inline xl:block">
            Du willst auf dem laufenden bleiben?
          </h2>{' '}
          <p className="inline sm:block lg:inline xl:block">
            Melde dich für unseren Newsletter an.
          </p>
        </div>
        <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-black/10 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-l3-500 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <Button type="submit">Subscribe</Button>
          </div>
          <p className="mt-4 text-sm leading-6 text-zinc-600">
            We care about your data. Read our{' '}
            <a href="#" className="font-semibold text-zinc-800">
              privacy&nbsp;policy
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  )
}
