import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../utils/media'

export function useReducedMotion() {
  const [reduced, setReduced] = useState(() => prefersReducedMotion())

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduced
}
