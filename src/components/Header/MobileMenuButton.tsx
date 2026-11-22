import { MenuIcon } from '../common'
import { MOBILE_MENU_ID } from '../../constants/navigation'

type MobileMenuButtonProps = {
  isOpen: boolean
  onToggle: () => void
}

function MobileMenuButton({ isOpen, onToggle }: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
      aria-expanded={isOpen}
      aria-controls={MOBILE_MENU_ID}
      onClick={onToggle}
      className="order-2 flex size-10 items-center justify-center rounded-full text-primary transition-colors hover:bg-white/50 lg:hidden"
    >
      <MenuIcon isOpen={isOpen} />
    </button>
  )
}

export default MobileMenuButton
