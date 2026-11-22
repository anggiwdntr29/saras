export type HeroCopy = {
  label: string
  title: string
  description: string
}

export const HERO_NAME = 'Sri Puspadewi'

export const HERO_LEFT: HeroCopy = {
  label: "Hello, I'm",
  title: HERO_NAME,
  description:
    'Organized processes, effective coordination, and reliable business support — across procurement, operations, and administration.',
}

export const HERO_RIGHT: HeroCopy = {
  label: 'What I do',
  title: 'Administration & Procurement',
  description:
    'Experience across real estate, hospitality, food and beverage, and business operations — from supplier sourcing to inventory and reporting.',
}

export const HERO_CTA = { label: 'Explore My Journey', href: '#about' }
