import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '../utils/media'

gsap.registerPlugin(ScrollTrigger)

export function useParallax(distance = 40) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return undefined

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: distance },
        {
          y: -distance,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      )
    })

    return () => ctx.revert()
  }, [distance])

  return ref
}
