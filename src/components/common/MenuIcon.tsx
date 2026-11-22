type MenuIconProps = {
  isOpen: boolean
}

const CLOSE_PATH = 'm6 6 12 12M18 6 6 18'
const MENU_PATH = 'M4 7h16M4 12h16M4 17h16'

function MenuIcon({ isOpen }: MenuIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className="size-5"
    >
      <path d={isOpen ? CLOSE_PATH : MENU_PATH} />
    </svg>
  )
}

export default MenuIcon
