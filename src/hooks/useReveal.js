import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '../utils/media'
import { motion } from '../utils/motion'

gsap.registerPlugin(ScrollTrigger)

export function useReveal(options = {}) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return undefined
    if (prefersReducedMotion()) {
      el.style.opacity = '1'
      el.style.transform = 'none'
      return undefined
    }

    const ctx = gsap.context(() => {
      gsap.from(el, {
        y: options.y ?? motion.distance.medium,
        opacity: 0,
        duration: options.duration ?? motion.duration.normal,
        ease: options.ease ?? motion.ease.standard,
        scrollTrigger: {
          trigger: el,
          start: options.start ?? 'top 88%',
          once: true,
        },
      })
    })

    return () => ctx.revert()
  }, [options.duration, options.ease, options.start, options.y])

  return ref
}
