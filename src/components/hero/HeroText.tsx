import type { CSSProperties, ReactNode } from 'react'
import type { HeroCopy } from '../../constants/hero'

type HeroTextProps = HeroCopy & {
  align: 'left' | 'right'
  as?: 'h1' | 'h2'
  delay?: number
  children?: ReactNode
}

const TITLE_SIZE = {
  h1: 'text-[3.25rem] sm:text-6xl lg:text-[clamp(2.75rem,4.4vw,5.25rem)]',
  h2: 'text-[2.25rem] sm:text-5xl lg:text-[clamp(2.25rem,3vw,3.5rem)]',
}

const ALIGNMENT = {
  left: 'lg:text-left lg:items-start',
  right: 'lg:text-right lg:items-end',
}

function HeroText({
  label,
  title,
  description,
  align,
  as: Heading = 'h2',
  delay = 0,
  children,
}: HeroTextProps) {
  const d = (n: number) => ({ '--d': `${delay + n}s` }) as CSSProperties
  return (
    <div
      className={`flex max-w-sm flex-col lg:max-w-[19rem] xl:max-w-[24rem] items-center text-center ${ALIGNMENT[align]}`}
    >
      <p
        style={d(0)}
        className="reveal text-xs font-medium uppercase tracking-[0.3em] text-bronze"
      >
        {label}
      </p>
      <Heading
        style={d(0.12)}
        className={`reveal mt-4 text-balance font-serif font-medium leading-[1] tracking-tight ${TITLE_SIZE[Heading]}`}
      >
        {title}
      </Heading>
      <span
        style={d(0.3)}
        className="line-reveal mt-6 block h-px w-14 bg-bronze/60"
      />
      <p
        style={d(0.4)}
        className="reveal mt-6 font-sans text-base leading-[1.75] text-secondary lg:text-[clamp(1rem,1.05vw,1.125rem)]"
      >
        {description}
      </p>
      {children}
    </div>
  )
}

export default HeroText
