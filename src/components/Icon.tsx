// Heroicons (outline) paths used next to dates, times and locations.
export const ICONS = {
  calendar:
    'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5',
  clock: 'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  pin: [
    'M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
    'M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z',
  ],
}

export function Icon({ d }: { d: string | string[] }) {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0 text-l3-400"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      {[d].flat().map((path) => (
        <path
          key={path}
          strokeLinecap="round"
          strokeLinejoin="round"
          d={path}
        />
      ))}
    </svg>
  )
}
