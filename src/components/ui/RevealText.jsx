import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '../../utils/media'
import './RevealText.css'

gsap.registerPlugin(ScrollTrigger)

export function RevealText({
  as: Comp = 'h2',
  text,
  className = '',
  highlightWords = [],
  split = 'words',
  delay = 0,
  scroll = true,
  ...props
}) {
  const rootRef = useRef(null)

  const parts =
    split === 'chars'
      ? text.split('')
      : text.split(/(\s+)/).filter((p) => p.length)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return undefined

    const units = root.querySelectorAll('.reveal-unit')
    if (!units.length) return undefined

    if (prefersReducedMotion()) {
      gsap.set(units, { yPercent: 0, opacity: 1 })
      return undefined
    }

    let played = false

    const ctx = gsap.context(() => {
      gsap.set(units, { yPercent: 110, opacity: 0 })

      const animate = () => {
        if (played) return
        played = true
        gsap.to(units, {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          stagger: split === 'chars' ? 0.015 : 0.04,
          delay,
          overwrite: 'auto',
        })
      }

      if (!scroll) {
        animate()
        return
      }

      ScrollTrigger.create({
        trigger: root,
        start: 'top 88%',
        once: true,
        onEnter: animate,
      })

      requestAnimationFrame(() => {
        ScrollTrigger.refresh()
        const rect = root.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
          animate()
        }
      })
    }, root)

    return () => ctx.revert()
  }, [text, split, delay, scroll])

  return (
    <Comp ref={rootRef} className={`reveal-text ${className}`.trim()} aria-label={text} {...props}>
      {parts.map((part, i) => {
        if (/^\s+$/.test(part)) {
          return <span key={`s-${i}`}> </span>
        }

        const clean = part.replace(/[.,!?]/g, '').toLowerCase()
        const highlighted = highlightWords.some((w) => w.toLowerCase() === clean)

        return (
          <span key={`${part}-${i}`} className="reveal-word" aria-hidden="true">
            <span className={`reveal-unit ${highlighted ? 'is-accent' : ''}`}>{part}</span>
          </span>
        )
      })}
    </Comp>
  )
}
