import { ALL_LINKS } from './navigation'

export const CONTACT_LABEL = 'Contact'
export const CONTACT_HEADLINE = "Let's work together"
export const CONTACT_DESCRIPTION =
  "Open to opportunities in administration, procurement, and operations. Feel free to reach out — I'd be glad to connect."

export type ContactChannel = { label: string; value: string; href: string }

/**
 * Fill these in with confirmed details. Empty entries are not rendered,
 * so the site never shows placeholder contact information.
 */
export const CONTACT_EMAIL = '' // e.g. 'name@domain.com'
const LINKEDIN_URL = '' // e.g. 'https://www.linkedin.com/in/your-profile'
const WHATSAPP_NUMBER = '' // digits only, e.g. '6281234567890'

const ALL_CHANNELS: ContactChannel[] = [
  { label: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  {
    label: 'LinkedIn',
    value: LINKEDIN_URL.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''),
    href: LINKEDIN_URL,
  },
  { label: 'WhatsApp', value: WHATSAPP_NUMBER && `+${WHATSAPP_NUMBER}`, href: `https://wa.me/${WHATSAPP_NUMBER}` },
  { label: 'Location', value: 'Bali, Indonesia', href: 'https://maps.google.com/?q=Bali,Indonesia' },
]

export const CONTACT_CHANNELS = ALL_CHANNELS.filter((c) => c.value !== '')

export const FOOTER_LINKS = ALL_LINKS
export const FOOTER_TAGLINE = 'Administration · Procurement · Operations'
