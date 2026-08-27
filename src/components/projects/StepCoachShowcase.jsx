import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { DeviceFrame } from '../media/DeviceFrame'
import { useInViewPlayback } from '../../hooks/useInViewPlayback'
import { prefersReducedMotion } from '../../utils/media'
import './StepCoachShowcase.css'

const GOAL = 8000
const DEMO_STEPS = 6420

export function StepCoachShowcase({ project }) {
  const [ref, active] = useInViewPlayback({ threshold: 0.35, once: true })
  const [steps, setSteps] = useState(0)
  const [showCoach, setShowCoach] = useState(false)
  const reduced = prefersReducedMotion()
  const progress = Math.min(1, steps / GOAL)
  const screens = project.screenshots || []

  useEffect(() => {
    if (!active) return undefined
    if (reduced) {
      setSteps(DEMO_STEPS)
      setShowCoach(true)
      return undefined
    }

    let raf = 0
    const start = performance.now()
    const duration = 1400

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - (1 - t) ** 3
      setSteps(Math.round(DEMO_STEPS * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
      else setShowCoach(true)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, reduced])

  return (
    <article className="step-coach" ref={ref} data-cursor="View">
      <div className="step-coach__copy">
        <p className="step-coach__number">
          <span>{project.number}</span>
          <span>/</span>
          <span>{project.title}</span>
        </p>
        <p className="step-coach__label">{project.label}</p>
        <h3>{project.headline}</h3>
        <p className="step-coach__summary">{project.summary}</p>
        <ul className="step-coach__tech">
          {project.primaryTech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link to={`/projects/${project.slug}`} className="step-coach__link" data-cursor="View">
          View case study
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>

      <div className={`step-coach__stage ${active ? 'is-active' : ''}`}>
        <div
          className="step-coach__ring"
          style={{ '--progress': progress }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="52" className="step-coach__ring-track" />
            <circle cx="60" cy="60" r="52" className="step-coach__ring-value" />
          </svg>
          <div className="step-coach__metrics">
            <strong>{steps.toLocaleString()}</strong>
            <span>example steps</span>
          </div>
        </div>

        <div className="step-coach__phones">
          <div className="step-coach__phone step-coach__phone--main">
            {screens[0] ? (
              <DeviceFrame
                platform="ios"
                size="md"
                glow
                src={screens[0].src}
                alt={screens[0].alt}
                screenLabel="Home progress"
                theme="#D87E36"
              />
            ) : null}
          </div>
          <div className="step-coach__phone step-coach__phone--secondary">
            {screens[1] ? (
              <DeviceFrame
                platform="ios"
                size="sm"
                src={screens[1].src}
                alt={screens[1].alt}
                screenLabel="Goals"
              />
            ) : null}
          </div>
        </div>

        <div className={`step-coach__notice ${showCoach ? 'is-visible' : ''}`} role="status">
          <p>You’ve been inactive for 30 minutes. A short walk can reset your energy.</p>
        </div>

        <div className="step-coach__bars" aria-hidden="true">
          {[42, 68, 55, 80, 73, 61, 88].map((value, i) => (
            <span
              key={i}
              style={{
                '--h': `${value}%`,
                transitionDelay: `${i * 60}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </article>
  )
}
