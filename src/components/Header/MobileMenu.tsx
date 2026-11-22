import { NavigationLink } from '../common'
import { ALL_LINKS, MOBILE_MENU_ID, toSectionId } from '../../constants/navigation'

type MobileMenuProps = {
  isOpen: boolean
  active: string
  onLinkClick: () => void
}

/**
 * Overlay dropdown below the pill. It is absolutely positioned so opening or
 * closing it never changes the sticky header's height (which would shift the page).
 */
function MobileMenu({ isOpen, active, onLinkClick }: MobileMenuProps) {
  return (
    <div
      id={MOBILE_MENU_ID}
      inert={!isOpen}
      className={`absolute inset-x-0 top-full mt-2 origin-top rounded-[1.5rem] border border-white/70 bg-background/95 p-3 shadow-[0_18px_40px_rgba(41,41,35,0.14)] backdrop-blur-xl transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none lg:hidden ${
        isOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
      }`}
    >
      <div className="grid grid-cols-2 gap-1">
        {ALL_LINKS.map((label) => (
          <NavigationLink
            key={label}
            label={label}
            isActive={active === toSectionId(label)}
            onClick={onLinkClick}
            className="py-3 text-[0.9375rem]"
          />
        ))}
      </div>
    </div>
  )
}

export default MobileMenu
