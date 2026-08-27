import { useEffect, useRef } from 'react'
import { DeviceFrame } from './DeviceFrame'
import { portlHeroScreens } from '../../data/portlHero'
import { isTouchDevice, prefersReducedMotion } from '../../utils/media'
import './PhoneShowcase.css'

export function PhoneShowcase() {
  const stageRef = useRef(null)
  const mainRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const labelsRef = useRef(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const { resident, guard, admin } = portlHeroScreens

  useEffect(() => {
    if (isTouchDevice() || prefersReducedMotion()) return undefined
    let raf = 0
    let active = true

    const tick = () => {
      if (!active) return
      current.current.x += (target.current.x - current.current.x) * 0.08
      current.current.y += (target.current.y - current.current.y) * 0.08
      const { x, y } = current.current

      if (mainRef.current) {
        mainRef.current.style.transform = `rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg) translateY(${(-y * 4).toFixed(2)}px)`
      }
      if (leftRef.current) {
        leftRef.current.style.transform = `translate(18%, 12%) rotate(${(-8 + x * 2).toFixed(2)}deg) translate3d(${(x * -10).toFixed(2)}px, ${(y * -6).toFixed(2)}px, 0)`
      }
      if (rightRef.current) {
        rightRef.current.style.transform = `translate(-18%, 16%) rotate(${(8 + x * 2).toFixed(2)}deg) translate3d(${(x * 12).toFixed(2)}px, ${(y * -8).toFixed(2)}px, 0)`
      }
      if (labelsRef.current) {
        labelsRef.current.style.transform = `translate3d(${(x * 8).toFixed(2)}px, ${(y * 6).toFixed(2)}px, 0)`
      }
      if (stageRef.current) {
        stageRef.current.style.setProperty('--glow-x', `${50 + x * 18}%`)
        stageRef.current.style.setProperty('--glow-y', `${42 + y * 18}%`)
      }
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => {
      active = false
      cancelAnimationFrame(raf)
    }
  }, [])

  const onMove = (e) => {
    if (isTouchDevice() || prefersReducedMotion() || !stageRef.current) return
    const rect = stageRef.current.getBoundingClientRect()
    target.current.x = Math.max(-1, Math.min(1, (e.clientX - rect.left) / rect.width - 0.5)) * 2
    target.current.y = Math.max(-1, Math.min(1, (e.clientY - rect.top) / rect.height - 0.5)) * 2
  }

  const onLeave = () => {
    target.current.x = 0
    target.current.y = 0
  }

  return (
    <div
      className="phone-showcase"
      ref={stageRef}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      data-cursor="Explore"
    >
      <div className="phone-showcase__glow" aria-hidden="true" />

      <div className="phone-showcase__labels" ref={labelsRef} aria-hidden="true">
        <span className="phone-showcase__label phone-showcase__label--role-a">Resident</span>
        <span className="phone-showcase__label phone-showcase__label--role-b">Guard</span>
        <span className="phone-showcase__label phone-showcase__label--role-c">Admin</span>
        <span className="phone-showcase__label phone-showcase__label--tech-a">React Native</span>
        <span className="phone-showcase__label phone-showcase__label--tech-b">Real-time updates</span>
        <span className="phone-showcase__label phone-showcase__label--tech-c">Three role experiences</span>
      </div>

      <div className="phone-showcase__stack">
        <div className="phone-showcase__side phone-showcase__side--left" ref={leftRef} aria-hidden="true">
          {guard ? (
            <DeviceFrame
              platform="android"
              size="sm"
              src={guard.src}
              alt=""
              screenLabel="Guard Dashboard"
            />
          ) : null}
        </div>

        <div className="phone-showcase__phone" ref={mainRef}>
          {resident ? (
            <DeviceFrame
              platform="ios"
              size="lg"
              glow
              priority
              src={resident.src}
              alt={resident.alt}
              screenLabel="Resident Dashboard"
              theme="#D87E36"
            />
          ) : null}
        </div>

        <div className="phone-showcase__side phone-showcase__side--right" ref={rightRef} aria-hidden="true">
          {admin ? (
            <DeviceFrame
              platform="ios"
              size="sm"
              src={admin.src}
              alt=""
              screenLabel="Admin Command Center"
            />
          ) : null}
        </div>
      </div>
    </div>
  )
}
