import { toSectionId } from '../../constants/navigation'

type NavigationLinkProps = {
  label: string
  isActive?: boolean
  onClick?: () => void
  className?: string
}

const BASE_STYLE =
  'relative whitespace-nowrap rounded-full px-3.5 py-2 font-sans text-[0.875rem] font-medium tracking-[0.01em] transition-colors duration-300 ease-out after:absolute after:inset-x-4 after:bottom-1 after:h-px after:origin-center after:bg-bronze after:transition-transform after:duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze xl:px-4'
const ACTIVE_STYLE = 'text-primary after:scale-x-100'
const INACTIVE_STYLE = 'text-primary/65 after:scale-x-0 hover:text-primary hover:after:scale-x-100'

function NavigationLink({ label, isActive = false, onClick, className = '' }: NavigationLinkProps) {
  return (
    <a
      href={`#${toSectionId(label)}`}
      aria-current={isActive ? 'location' : undefined}
      onClick={onClick}
      className={`${BASE_STYLE} ${isActive ? ACTIVE_STYLE : INACTIVE_STYLE} ${className}`}
    >
      {label}
    </a>
  )
}

export default NavigationLink
