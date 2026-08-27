import { useEffect, useState } from 'react'
import { isTouchDevice, prefersReducedMotion } from '../../utils/media'
import './CustomCursor.css'

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const canUse =
      !isTouchDevice() &&
      !prefersReducedMotion() &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      window.innerWidth > 960

    setEnabled(canUse)
  }, [])

  useEffect(() => {
    if (!enabled) return undefined

    const root = document.querySelector('.custom-cursor')
    const dot = document.querySelector('.custom-cursor__dot')
    const ring = document.querySelector('.custom-cursor__ring')
    const label = document.querySelector('.custom-cursor__label')
    if (
      !(root instanceof HTMLElement) ||
      !(dot instanceof HTMLElement) ||
      !(ring instanceof HTMLElement) ||
      !(label instanceof HTMLElement)
    ) {
      return undefined
    }

    document.documentElement.classList.add('has-custom-cursor')

    let x = 0
    let y = 0
    let rx = 0
    let ry = 0
    let raf = 0

    const isFormControl = (el) =>
      Boolean(el?.closest('input, textarea, select, [contenteditable="true"]'))

    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
      const target = e.target instanceof Element ? e.target : null
      if (isFormControl(target)) {
        root.classList.add('is-hidden')
        return
      }
      root.classList.remove('is-hidden')

      const cursorTarget = target?.closest('[data-cursor]')
      if (cursorTarget) {
        label.textContent = cursorTarget.getAttribute('data-cursor') || ''
        label.classList.add('is-visible')
        root.classList.add('is-active')
      } else {
        label.classList.remove('is-visible')
        root.classList.remove('is-active')
      }
    }

    const tick = () => {
      rx += (x - rx) * 0.16
      ry += (y - ry) * 0.16
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      label.style.transform = `translate3d(${rx + 20}px, ${ry + 20}px, 0)`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      document.documentElement.classList.remove('has-custom-cursor')
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div className="custom-cursor" aria-hidden="true">
      <div className="custom-cursor__dot" />
      <div className="custom-cursor__ring" />
      <div className="custom-cursor__label" />
    </div>
  )
}
