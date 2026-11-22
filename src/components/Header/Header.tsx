import { useEffect, useRef, useState } from 'react'
import { Brand } from '../brand'
import DesktopLinks from './DesktopLinks'
import MobileMenu from './MobileMenu'
import MobileMenuButton from './MobileMenuButton'
import { ALL_LINKS, LEFT_LINKS, RIGHT_LINKS, toSectionId } from '../../constants/navigation'
import { useActiveSection } from '../../hooks/useActiveSection'

const SECTION_IDS = ALL_LINKS.map(toSectionId)

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(SECTION_IDS)
  const navRef = useRef<HTMLElement>(null)

  const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on Escape or a tap outside it.
  useEffect(() => {
    if (!isMenuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsMenuOpen(false)
    const onPointer = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setIsMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [isMenuOpen])

  return (
    <header className="header-reveal sticky top-0 z-50 mx-auto w-full max-w-7xl px-3 pt-3 sm:px-6 sm:pt-5">
      <nav
        ref={navRef}
        aria-label="Main navigation"
        className={`relative rounded-[1.75rem] border border-white/70 px-4 py-2.5 ring-1 ring-white/30 backdrop-blur-xl backdrop-saturate-150 transition-[background-color,box-shadow] duration-500 lg:rounded-full lg:px-5 lg:py-2.5 ${
          scrolled || isMenuOpen
            ? 'bg-background/80 shadow-[0_12px_40px_rgba(41,41,35,0.10),inset_0_1px_0_rgba(255,255,255,0.9)]'
            : 'bg-white/30 shadow-[0_8px_30px_rgba(41,41,35,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]'
        }`}
      >
        <div className="flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <DesktopLinks links={LEFT_LINKS} active={active} className="justify-start lg:col-start-1" />
          <Brand />
          <DesktopLinks links={RIGHT_LINKS} active={active} className="justify-end lg:col-start-3" />
          <MobileMenuButton isOpen={isMenuOpen} onToggle={toggleMenu} />
        </div>

        <MobileMenu isOpen={isMenuOpen} active={active} onLinkClick={closeMenu} />
      </nav>
    </header>
  )
}

export default Header
