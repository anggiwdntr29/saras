import type { CSSProperties, ReactNode, Ref } from 'react'
import { CONTAINER, delay } from './layout'

type SectionProps = {
  id: string
  ref?: Ref<HTMLElement>
  className?: string
  children: ReactNode
}

/** Consistent vertical rhythm for every content section. */
export function Section({ id, ref, className = '', children }: SectionProps) {
  return (
    <section
      ref={ref}
      id={id}
      aria-labelledby={`${id}-title`}
      className={`relative py-20 sm:py-24 lg:py-28 ${className}`}
    >
      <div className={CONTAINER}>{children}</div>
    </section>
  )
}

type EyebrowProps = { children: ReactNode; className?: string; style?: CSSProperties }

export function Eyebrow({ children, className = '', style }: EyebrowProps) {
  return (
    <div style={style} className={`flex items-center gap-4 ${className}`}>
      <span aria-hidden className="h-px w-10 bg-bronze" />
      <p className="font-sans text-xs font-medium uppercase tracking-[0.28em] text-bronze">
        {children}
      </p>
    </div>
  )
}

type SectionHeadingProps = {
  id: string
  label: string
  /** Full headline; `emphasis` (its final words) is set in bronze italic. */
  headline: string
  emphasis: string
  show: string
  size?: 'lg' | 'xl'
}

export function SectionHeading({ id, label, headline, emphasis, show, size = 'lg' }: SectionHeadingProps) {
  const lead = headline.slice(0, headline.length - emphasis.length).trimEnd()
  const sizes =
    size === 'xl'
      ? 'text-[2.75rem] sm:text-6xl lg:text-[4.5rem]'
      : 'text-[2.5rem] sm:text-5xl lg:text-[3.75rem]'
  return (
    <div>
      <Eyebrow style={delay(0.05)} className={show}>
        {label}
      </Eyebrow>
      <h2
        id={`${id}-title`}
        style={delay(0.15)}
        className={`${show} mt-5 text-balance font-serif font-medium leading-[1.04] tracking-tight ${sizes}`}
      >
        {lead} <em className="font-normal text-bronze">{emphasis}</em>
      </h2>
    </div>
  )
}

type TagProps = { children: ReactNode; className?: string; style?: CSSProperties }

/** Minimal outlined pill used for skills, key areas and highlights. */
export function Tag({ children, className = '', style }: TagProps) {
  return (
    <li
      style={style}
      className={`rounded-full border border-bronze/35 px-3.5 py-1.5 font-sans text-[0.8125rem] leading-snug text-primary ${className}`}
    >
      {children}
    </li>
  )
}
