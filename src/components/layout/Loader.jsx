import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { personal } from '../../data/portfolio'
import { LOADER_SESSION_KEY, motion } from '../../utils/motion'
import { prefersReducedMotion } from '../../utils/media'
import './Loader.css'

const STAGES = personal.loader.stages || ['Designing', 'Building', 'Testing', 'Shipping']

export function Loader({ onComplete }) {
  const rootRef = useRef(null)
  const progressRef = useRef(null)
  const monogramRef = useRef(null)
  const [stage, setStage] = useState(STAGES[0])
  const [progress, setProgress] = useState(0)
  const doneRef = useRef(false)

  useEffect(() => {
    document.body.classList.add('is-loading')
    const root = rootRef.current
    if (!root) return undefined

    const finish = () => {
      if (doneRef.current) return
      doneRef.current = true
      try {
        sessionStorage.setItem(LOADER_SESSION_KEY, '1')
      } catch {
        /* ignore */
      }
      document.body.classList.remove('is-loading')
      onComplete?.()
    }

    let seen = false
    try {
      seen = sessionStorage.getItem(LOADER_SESSION_KEY) === '1'
    } catch {
      seen = false
    }

    if (prefersReducedMotion()) {
      setProgress(100)
      const id = window.setTimeout(finish, 60)
      return () => {
        window.clearTimeout(id)
        document.body.classList.remove('is-loading')
      }
    }

    if (seen) {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(root, {
            clipPath: 'inset(0 0 100% 0)',
            duration: motion.duration.fast,
            ease: motion.ease.smooth,
            onComplete: finish,
          })
        },
      })
      tl.fromTo(
        monogramRef.current,
        { opacity: 0, scale: 0.94 },
        { opacity: 1, scale: 1, duration: 0.28, ease: motion.ease.standard },
      )
      return () => {
        tl.kill()
        document.body.classList.remove('is-loading')
      }
    }

    let ready = document.readyState === 'complete'
    const onLoad = () => {
      ready = true
    }
    window.addEventListener('load', onLoad)

    const state = { value: 0 }
    const tl = gsap.timeline({
      onComplete: () => {
        const exit = () => {
          gsap.to(root, {
            clipPath: 'inset(0 0 100% 0)',
            duration: motion.duration.slow,
            ease: motion.ease.smooth,
            onComplete: finish,
          })
        }
        if (ready) exit()
        else window.addEventListener('load', exit, { once: true })
      },
    })

    tl.set(root, { clipPath: 'inset(0 0 0 0)' })
      .fromTo(
        monogramRef.current,
        { clipPath: 'inset(100% 0 0 0)', opacity: 1 },
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: motion.duration.normal,
          ease: motion.ease.expressive,
        },
      )
      .fromTo(
        '.loader__tagline',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: motion.duration.fast, ease: motion.ease.standard },
        '-=0.2',
      )
      .to(state, {
        value: 100,
        duration: 0.42,
        ease: 'power2.out',
        onUpdate: () => {
          const next = Math.round(state.value)
          setProgress(next)
          if (progressRef.current) progressRef.current.style.width = `${next}%`
          const idx = Math.min(STAGES.length - 1, Math.floor((next / 100) * STAGES.length))
          setStage(STAGES[idx])
        },
      })
      .to(progressRef.current, {
        scaleX: 1.02,
        transformOrigin: 'left center',
        duration: 0.18,
        yoyo: true,
        repeat: 1,
      })

    const safety = window.setTimeout(() => {
      ready = true
    }, 1600)

    return () => {
      tl.kill()
      window.clearTimeout(safety)
      window.removeEventListener('load', onLoad)
      document.body.classList.remove('is-loading')
    }
  }, [onComplete])

  return (
    <div
      ref={rootRef}
      className="loader"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="Loading portfolio"
    >
      <div className="loader__vignette" aria-hidden="true" />
      <div className="loader__inner">
        <div ref={monogramRef} className="loader__monogram" aria-hidden="true">
          {personal.monogram}
        </div>
        <p className="loader__tagline">{personal.loader.tagline}</p>
        <div className="loader__bar" aria-hidden="true">
          <span ref={progressRef} className="loader__bar-fill" />
        </div>
        <div className="loader__meta">
          <p className="loader__stage">{stage}</p>
          <p className="loader__progress">{String(progress).padStart(3, '0')}</p>
        </div>
      </div>
    </div>
  )
}
