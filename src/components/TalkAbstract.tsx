'use client'

import { useEffect, useId, useState } from 'react'
import { RichText } from './RichText'

// Long talk descriptions: a short teaser with a toggle to the full text. Both
// versions are rendered, so the full text is part of the HTML. Opens by itself
// when the page is opened or navigated to the talk's anchor (links in the hero).
export function TalkAbstract({
  anchorId,
  title,
  teaser,
  paragraphs,
  labels,
}: {
  anchorId: string
  title: string
  teaser: string
  paragraphs: string[]
  labels: { readMore: string; readLess: string }
}) {
  const [open, setOpen] = useState(false)
  const id = useId()

  useEffect(() => {
    const openIfTarget = () => {
      if (window.location.hash === `#${anchorId}`) setOpen(true)
    }
    openIfTarget()
    window.addEventListener('hashchange', openIfTarget)
    return () => window.removeEventListener('hashchange', openIfTarget)
  }, [anchorId])

  return (
    <div className="mt-2">
      <div id={id}>
        <div hidden={open}>
          <RichText className="text-base leading-6 text-zinc-400">
            {teaser}
          </RichText>
        </div>
        <div hidden={!open}>
          <RichText className="text-base leading-6 text-zinc-400">
            {paragraphs}
          </RichText>
        </div>
      </div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
        className="mt-3 inline-flex items-center gap-1.5 rounded-sm py-1 text-sm font-semibold text-l3-400 transition-colors hover:text-l3-300 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-l3-500"
      >
        {open ? labels.readLess : labels.readMore}
        <span className="sr-only">: {title}</span>
        <svg
          aria-hidden="true"
          className={`h-4 w-4 transition-transform motion-reduce:transition-none ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
    </div>
  )
}
