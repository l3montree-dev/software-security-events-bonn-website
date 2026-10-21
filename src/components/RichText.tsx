import clsx from 'clsx'

// Renders text from the event configs on a dark background: a string, an array
// of strings (one paragraph each) or simple markup (<p>, <ul>, <a>, <strong>).
export function RichText({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={clsx(
        'space-y-4 [&_a]:font-medium [&_a]:text-l3-400 [&_a]:underline [&_a]:decoration-dashed [&_a]:underline-offset-2 [&_a:hover]:text-l3-300 [&_strong]:font-semibold [&_strong]:text-zinc-200 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6',
        className,
      )}
    >
      {typeof children === 'string' ? (
        <p>{children}</p>
      ) : Array.isArray(children) &&
        children.every((c) => typeof c === 'string') ? (
        children.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
      ) : (
        children
      )}
    </div>
  )
}
