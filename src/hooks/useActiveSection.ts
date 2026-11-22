import { useEffect, useState } from 'react'

/** Scroll-spy: returns the id of the section currently under the header. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState('')
  const key = ids.join(',')

  useEffect(() => {
    const els = key
      .split(',')
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (!els.length) return

    // A thin band ~35% down the viewport decides which section is "current".
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: '-35% 0px -64% 0px' },
    )
    els.forEach((el) => io.observe(el))
    const onTop = () => {
      if (window.scrollY < window.innerHeight * 0.3) setActive('')
    }
    window.addEventListener('scroll', onTop, { passive: true })
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onTop)
    }
  }, [key])

  return active
}
