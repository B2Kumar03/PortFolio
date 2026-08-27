import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experience } from '../data/portfolio'
import { SectionHeading } from '../components/ui/SectionHeading'
import { prefersReducedMotion } from '../utils/media'
import './Experience.css'

gsap.registerPlugin(ScrollTrigger)

export function Experience() {
  const rootRef = useRef(null)
  const [active, setActive] = useState(0)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return undefined

    if (prefersReducedMotion()) return undefined

    const ctx = gsap.context(() => {
      const areas = gsap.utils.toArray('.experience__area')
      areas.forEach((area, i) => {
        ScrollTrigger.create({
          trigger: area,
          start: 'top 60%',
          end: 'bottom 40%',
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        })
      })

      gsap.set('.experience__progress', { scaleY: 0 })
      gsap.to('.experience__progress', {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.experience__timeline',
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: true,
        },
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" className="section experience" ref={rootRef}>
      <div className="container">
        <SectionHeading
          label="Engineering experience"
          title="Building with Flutter, React Native and full-stack systems."
          subtitle={experience.description}
        />

        <div className="experience__card">
          <div className="experience__header">
            <div>
              <p className="experience__role">{experience.role}</p>
              <h3 className="experience__company">{experience.company}</h3>
            </div>
            <p className="experience__period">{experience.period}</p>
          </div>

          <ul className="experience__contributions">
            {experience.contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="experience__timeline">
          <div className="experience__track" aria-hidden="true">
            <div className="experience__progress" />
          </div>
          <ol className="experience__areas">
            {experience.focusAreas.map((area, index) => (
              <li
                key={area.id}
                className={`experience__area ${active === index ? 'is-active' : ''}`}
              >
                <span className="experience__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h4>{area.title}</h4>
                  <p>{area.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
