import { useEffect, useRef } from 'react'
import { isTouchDevice } from '../utils/media'
import { motion } from '../utils/motion'

export function useMagnetic(strength = 0.28) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || isTouchDevice()) return undefined

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    }

    const onLeave = () => {
      el.style.transition = `transform ${motion.duration.fast}s ease`
      el.style.transform = 'translate(0, 0)'
      window.setTimeout(() => {
        if (el) el.style.transition = ''
      }, motion.duration.fast * 1000)
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [strength])

  return ref
}
