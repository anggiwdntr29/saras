import { NavigationLink } from '../common'
import { toSectionId } from '../../constants/navigation'

type DesktopLinksProps = {
  links: string[]
  active: string
  className: string
}

function DesktopLinks({ links, active, className }: DesktopLinksProps) {
  return (
    <div className={`hidden items-center gap-1 lg:flex ${className}`}>
      {links.map((label) => (
        <NavigationLink key={label} label={label} isActive={active === toSectionId(label)} />
      ))}
    </div>
  )
}

export default DesktopLinks
