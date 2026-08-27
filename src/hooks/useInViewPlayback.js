import { useEffect, useRef, useState } from 'react'

export function useInViewPlayback({ threshold = 0.35, once = false } = {}) {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setActive(false)
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once, threshold])

  return [ref, active]
}
