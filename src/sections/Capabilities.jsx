import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { capabilities, systemDiagram } from '../data/portfolio'
import { SectionHeading } from '../components/ui/SectionHeading'
import { prefersReducedMotion } from '../utils/media'
import './Capabilities.css'

gsap.registerPlugin(ScrollTrigger)

export function Capabilities() {
  const rootRef = useRef(null)
  const [active, setActive] = useState(capabilities[0].id)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || prefersReducedMotion()) return undefined

    const ctx = gsap.context(() => {
      gsap.from('.capability-diagram__node', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.capability-diagram',
          start: 'top 80%',
          once: true,
        },
      })

      gsap.from('.capability-diagram__line', {
        scaleX: 0,
        transformOrigin: 'left center',
        stagger: 0.1,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.capability-diagram',
          start: 'top 80%',
          once: true,
        },
      })
    }, root)

    return () => ctx.revert()
  }, [])

  const current = capabilities.find((c) => c.id === active) || capabilities[0]

  return (
    <section id="capabilities" className="section capabilities" ref={rootRef}>
      <div className="container">
        <SectionHeading
          label="Engineering capabilities"
          title="How I build"
          subtitle="MERN-stack web apps, Flutter and React Native mobile products, and PostgreSQL-backed systems."
        />

        <div className="capability-diagram" aria-label="System flow diagram">
          {systemDiagram.map((node, index) => (
            <div key={node} className="capability-diagram__item">
              <div className="capability-diagram__node">{node}</div>
              {index < systemDiagram.length - 1 ? (
                <div className="capability-diagram__line" aria-hidden="true" />
              ) : null}
            </div>
          ))}
        </div>

        <div className="capabilities__layout">
          <div className="capabilities__tabs" role="tablist" aria-label="Capability groups">
            {capabilities.map((group) => (
              <button
                key={group.id}
                type="button"
                role="tab"
                aria-selected={active === group.id}
                className={active === group.id ? 'is-active' : ''}
                onClick={() => setActive(group.id)}
              >
                {group.title}
              </button>
            ))}
          </div>

          <div className="capabilities__panel" role="tabpanel">
            <h3>{current.title}</h3>
            <ul>
              {current.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
