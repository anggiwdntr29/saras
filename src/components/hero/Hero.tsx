import { HERO_CTA, HERO_LEFT, HERO_RIGHT } from '../../constants/hero'
import { delay } from '../common'
import HeroPortrait from './HeroPortrait'
import HeroText from './HeroText'

function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative isolate mx-auto flex w-full max-w-[90rem] flex-col justify-end px-5 sm:px-8 lg:min-h-[calc(100svh-5.25rem)] lg:px-10"
    >
      {/* Soft warm glow behind the portrait */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_50%_60%,rgba(231,226,216,0.95),transparent_62%)]"
      />
      {/* Fade into the next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-b from-transparent to-background lg:h-32"
      />

      <div className="grid flex-1 grid-cols-1 items-center justify-items-center gap-10 pt-10 sm:pt-14 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-end lg:justify-items-stretch lg:gap-0 lg:pt-4">
        <div className="relative z-20 order-1 lg:order-none lg:mb-[16vh] lg:justify-self-start lg:pr-6">
          <HeroText {...HERO_LEFT} as="h1" align="left" delay={0.15}>
            <a
              href={HERO_CTA.href}
              style={delay(0.8)}
              className="reveal group mt-9 inline-flex items-center gap-3 whitespace-nowrap rounded-full border border-bronze/60 px-7 py-3.5 font-sans text-sm font-medium tracking-wide transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze"
            >
              {HERO_CTA.label}
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </HeroText>
        </div>

        <HeroPortrait />

        <div className="relative z-20 order-3 pb-16 lg:order-none lg:mb-[22vh] lg:justify-self-end lg:pb-0 lg:pl-6">
          <HeroText {...HERO_RIGHT} align="right" delay={0.55} />
        </div>
      </div>
    </section>
  )
}

export default Hero
