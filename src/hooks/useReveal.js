import { useLayoutEffect, useRef } from 'react'
import { prefersReducedMotion } from '../utils/media'

function isInViewport(el) {
  const rect = el.getBoundingClientRect()
  return rect.top < window.innerHeight * 0.94 && rect.bottom > 40
}

export function useReveal() {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const show = () => {
      el.classList.add('is-visible')
      el.classList.remove('js-reveal')
    }

    if (prefersReducedMotion() || isInViewport(el)) {
      show()
      return undefined
    }

    el.classList.add('js-reveal')

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show()
          io.disconnect()
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -8% 0px' },
    )

    io.observe(el)
    const fallback = window.setTimeout(show, 900)

    return () => {
      io.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  return ref
}
