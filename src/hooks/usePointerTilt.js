import { useEffect, useRef } from 'react'
import { isTouchDevice, prefersReducedMotion } from '../utils/media'

export function usePointerTilt({ max = 4, enabled = true } = {}) {
  const ref = useRef(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const el = ref.current
    if (!el || !enabled || isTouchDevice() || prefersReducedMotion()) return undefined

    let raf = 0
    let active = true

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const nx = (e.clientX - rect.left) / rect.width - 0.5
      const ny = (e.clientY - rect.top) / rect.height - 0.5
      target.current.x = Math.max(-max, Math.min(max, -ny * max * 2))
      target.current.y = Math.max(-max, Math.min(max, nx * max * 2))
    }

    const onLeave = () => {
      target.current.x = 0
      target.current.y = 0
    }

    const tick = () => {
      if (!active) return
      current.current.x += (target.current.x - current.current.x) * 0.08
      current.current.y += (target.current.y - current.current.y) * 0.08
      el.style.setProperty('--tilt-x', `${current.current.x.toFixed(2)}deg`)
      el.style.setProperty('--tilt-y', `${current.current.y.toFixed(2)}deg`)
      raf = requestAnimationFrame(tick)
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    raf = requestAnimationFrame(tick)

    return () => {
      active = false
      cancelAnimationFrame(raf)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [enabled, max])

  return ref
}
