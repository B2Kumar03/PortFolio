import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Download, Images, Play } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DeviceFrame } from '../media/DeviceFrame'
import { PortlRoleExplorer } from './PortlRoleExplorer'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import './PortlScrollStory.css'

gsap.registerPlugin(ScrollTrigger)

const STAGES = [
  {
    id: 'connected',
    title: 'One connected society',
    copy: 'A single product for residents, guards and administrators — sharing one source of truth.',
  },
  {
    id: 'roles',
    title: 'Three role experiences',
    copy: 'Each role gets an interface designed around its responsibilities, without fracturing the data model.',
  },
  {
    id: 'visitor',
    title: 'Visitor workflow',
    copy: 'From gate registration to resident approval and check-out — kept live across devices.',
  },
  {
    id: 'beyond',
    title: 'Beyond visitor management',
    copy: 'Community, polls, notices, help desk, amenities, billing, complaints and emergencies.',
  },
  {
    id: 'explore',
    title: 'Explore the product',
    copy: 'Dive into the case study, browse 44 screens, watch the demo or download the APK.',
  },
]

const VISITOR_STEPS = [
  {
    label: 'Guard registers visitor',
    src: '/projects/portl/guard/visitor-screem.webp',
    alt: 'Guard registers a visitor',
  },
  {
    label: 'Resident receives request',
    src: '/projects/portl/resident/visitor-request-screen.webp',
    alt: 'Resident visitor approval request',
  },
  {
    label: 'Resident approves',
    src: '/projects/portl/resident/visitor-approved-screen.webp',
    alt: 'Resident approves visitor',
  },
  {
    label: 'Guard receives result',
    src: '/projects/portl/guard/visito-approve.webp',
    alt: 'Guard receives approval result',
  },
  {
    label: 'Visitor checks in',
    src: '/projects/portl/guard/inside-screen.webp',
    alt: 'Visitor checked in',
  },
  {
    label: 'Visitor checks out',
    src: '/projects/portl/guard/pending-entry-screen.webp',
    alt: 'Visitor checkout flow',
  },
  {
    label: 'History updates',
    src: '/projects/portl/resident/visitor-request-screen.webp',
    alt: 'Visitor history updated',
  },
]

const MOSAIC = [
  { src: '/projects/portl/resident/community-screen.webp', label: 'Community' },
  { src: '/projects/portl/resident/community-polls.webp', label: 'Polls' },
  { src: '/projects/portl/resident/notice-board-screen.webp', label: 'Notices' },
  { src: '/projects/portl/resident/help-desk-screen.webp', label: 'Help desk' },
  { src: '/projects/portl/admin/amenities-screen.webp', label: 'Amenities' },
  { src: '/projects/portl/admin/billing-screen.webp', label: 'Billing' },
  { src: '/projects/portl/admin/complaints-screen.webp', label: 'Complaints' },
  { src: '/projects/portl/admin/emergency-screem.webp', label: 'Emergency' },
]

function VisitorWorkflowVisual({ visitorStep }) {
  const active = VISITOR_STEPS[visitorStep] || VISITOR_STEPS[0]

  return (
    <div className="portl-story__visitor">
      <DeviceFrame
        platform="ios"
        size="lg"
        glow
        theme="#1F6FEB"
        screenLabel={active.label}
      >
        <div className="portl-story__visitor-stack" aria-hidden="true">
          {VISITOR_STEPS.map((step, index) => (
            <img
              key={step.src}
              src={step.src}
              alt=""
              width={540}
              height={1206}
              decoding="async"
              loading="eager"
              className={index === visitorStep ? 'is-active' : ''}
            />
          ))}
        </div>
      </DeviceFrame>
    </div>
  )
}

function StageVisual({ stage, visitorStep }) {
  if (stage === 2) {
    return <VisitorWorkflowVisual visitorStep={visitorStep} />
  }

  if (stage === 3) {
    return (
      <div className="portl-story__mosaic" data-cursor="Explore">
        {MOSAIC.map((item) => (
          <figure key={item.label}>
            <img src={item.src} alt="" loading="lazy" width={280} height={625} />
            <figcaption>{item.label}</figcaption>
          </figure>
        ))}
      </div>
    )
  }

  return (
    <div className={`portl-story__phones stage-${STAGES[stage].id}`}>
      <div className="portl-story__phone portl-story__phone--resident">
        <DeviceFrame
          platform="ios"
          size={stage === 0 || stage === 4 ? 'lg' : 'md'}
          glow
          src="/projects/portl/resident/residetn-dashboard.webp"
          alt="Resident dashboard"
          screenLabel="Resident"
          theme="#1F6FEB"
        />
      </div>
      {stage >= 1 ? (
        <>
          <div className="portl-story__phone portl-story__phone--guard">
            <DeviceFrame
              platform="android"
              size="sm"
              src="/projects/portl/guard/guard-dashboard.webp"
              alt="Guard dashboard"
              screenLabel="Guard"
            />
          </div>
          <div className="portl-story__phone portl-story__phone--admin">
            <DeviceFrame
              platform="ios"
              size="sm"
              src="/projects/portl/admin/admin-dashboard.webp"
              alt="Admin command center"
              screenLabel="Admin"
            />
          </div>
        </>
      ) : null}
    </div>
  )
}

export function PortlScrollStory({ project }) {
  const rootRef = useRef(null)
  const beatRefs = useRef([])
  const visitorStepRef = useRef(0)
  const [stage, setStage] = useState(0)
  const [visitorStep, setVisitorStep] = useState(0)
  const reduced = useReducedMotion()
  const mobile = useMediaQuery('(max-width: 979px)')
  const useScrollStory = !reduced && !mobile

  useEffect(() => {
    VISITOR_STEPS.forEach((step) => {
      const img = new Image()
      img.src = step.src
    })
  }, [])

  const counts = useMemo(
    () => ({
      resident: project.roles.resident.count,
      guard: project.roles.guard.count,
      admin: project.roles.admin.count,
    }),
    [project],
  )

  useEffect(() => {
    if (!useScrollStory || !rootRef.current) return undefined

    const ctx = gsap.context(() => {
      beatRefs.current.forEach((beat, index) => {
        if (!beat) return
        ScrollTrigger.create({
          trigger: beat,
          start: 'top 55%',
          end: 'bottom 45%',
          onEnter: () => setStage(index),
          onEnterBack: () => setStage(index),
        })
      })

      const visitorBeat = beatRefs.current[2]
      if (visitorBeat) {
        ScrollTrigger.create({
          trigger: visitorBeat,
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 0.35,
          onUpdate: (self) => {
            const idx = Math.min(
              VISITOR_STEPS.length - 1,
              Math.floor(self.progress * VISITOR_STEPS.length),
            )
            if (idx !== visitorStepRef.current) {
              visitorStepRef.current = idx
              setVisitorStep(idx)
            }
          },
        })
      }
    }, rootRef)

    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    document.fonts?.ready?.then(refresh)

    return () => {
      window.removeEventListener('load', refresh)
      ctx.revert()
    }
  }, [useScrollStory])

  const currentStage = STAGES[stage]

  return (
    <article id="portl" className="portl-story" ref={rootRef} data-cursor="Explore">
      <div className="portl-story__intro container">
        <p className="portl-story__kicker">01 / Featured Project</p>
        <h3 className="portl-story__title">Portl</h3>
        <p className="portl-story__headline">{project.headline}</p>
        <p className="portl-story__summary">{project.summary}</p>
        <ul className="portl-story__chips">
          <li>Hackathon Project</li>
          <li>Mobile + Backend</li>
          <li>React Native</li>
          <li>Node.js</li>
          <li>PostgreSQL</li>
          <li>Real-time updates</li>
        </ul>
      </div>

      {useScrollStory ? (
        <div className="portl-story__sequence">
          {STAGES.map((item, index) => (
            <section
              key={item.id}
              ref={(el) => {
                beatRefs.current[index] = el
              }}
              className={`portl-story__beat ${stage === index ? 'is-active' : ''}`}
              data-stage={item.id}
              aria-labelledby={`portl-stage-${item.id}`}
            >
              <div className="portl-story__ambient" aria-hidden="true" />
              <div className="container portl-story__stage">
                <div className="portl-story__copy">
                  <p className="portl-story__stage-index">
                    Stage {String(index + 1).padStart(2, '0')} / {String(STAGES.length).padStart(2, '0')}
                  </p>
                  <h4 id={`portl-stage-${item.id}`}>{item.title}</h4>
                  <p>{item.copy}</p>

                  {index === 1 ? (
                    <ul className="portl-story__counts">
                      <li>
                        <strong>{counts.resident}</strong>
                        <span>Resident screens</span>
                      </li>
                      <li>
                        <strong>{counts.guard}</strong>
                        <span>Guard screens</span>
                      </li>
                      <li>
                        <strong>{counts.admin}</strong>
                        <span>Admin screens</span>
                      </li>
                    </ul>
                  ) : null}

                  {index === 2 ? (
                    <ol className="portl-story__steps">
                      {VISITOR_STEPS.map((step, i) => (
                        <li key={step.label} className={i === visitorStep ? 'is-active' : ''}>
                          {step.label}
                        </li>
                      ))}
                    </ol>
                  ) : null}

                  {index === 4 ? (
                    <div className="portl-story__actions">
                      <Link to={`/projects/${project.slug}`} data-cursor="View">
                        View complete case study
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </Link>
                      {project.galleryUrl ? (
                        <a href={project.galleryUrl} target="_blank" rel="noopener noreferrer" data-cursor="Open">
                          <Images size={15} aria-hidden="true" />
                          Explore 44 screens
                        </a>
                      ) : null}
                      {project.demoVideoUrl ? (
                        <a href={project.demoVideoUrl} target="_blank" rel="noopener noreferrer" data-cursor="Open">
                          <Play size={15} aria-hidden="true" />
                          Watch product demo
                        </a>
                      ) : null}
                      {project.apkUrl ? (
                        <a href={project.apkUrl} target="_blank" rel="noopener noreferrer" data-cursor="Open">
                          <Download size={15} aria-hidden="true" />
                          Download APK
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </div>

                <div className="portl-story__visual">
                  <StageVisual stage={index} visitorStep={visitorStep} />
                </div>
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="portl-story__static">
          <div className="portl-story__beat is-active" data-stage={currentStage.id}>
            <div className="portl-story__ambient" aria-hidden="true" />
            <div className="container portl-story__stage">
              <div className="portl-story__copy">
                <p className="portl-story__stage-index">
                  Stage {String(stage + 1).padStart(2, '0')} / {String(STAGES.length).padStart(2, '0')}
                </p>
                <h4>{currentStage.title}</h4>
                <p>{currentStage.copy}</p>

                {stage === 1 ? (
                  <ul className="portl-story__counts">
                    <li>
                      <strong>{counts.resident}</strong>
                      <span>Resident screens</span>
                    </li>
                    <li>
                      <strong>{counts.guard}</strong>
                      <span>Guard screens</span>
                    </li>
                    <li>
                      <strong>{counts.admin}</strong>
                      <span>Admin screens</span>
                    </li>
                  </ul>
                ) : null}

                {stage === 2 ? (
                  <ol className="portl-story__steps">
                    {VISITOR_STEPS.map((step, i) => (
                      <li key={step.label} className={i === visitorStep ? 'is-active' : ''}>
                        {step.label}
                      </li>
                    ))}
                  </ol>
                ) : null}

                {stage === 4 ? (
                  <div className="portl-story__actions">
                    <Link to={`/projects/${project.slug}`} data-cursor="View">
                      View complete case study
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </Link>
                    {project.galleryUrl ? (
                      <a href={project.galleryUrl} target="_blank" rel="noopener noreferrer" data-cursor="Open">
                        <Images size={15} aria-hidden="true" />
                        Explore 44 screens
                      </a>
                    ) : null}
                    {project.demoVideoUrl ? (
                      <a href={project.demoVideoUrl} target="_blank" rel="noopener noreferrer" data-cursor="Open">
                        <Play size={15} aria-hidden="true" />
                        Watch product demo
                      </a>
                    ) : null}
                    {project.apkUrl ? (
                      <a href={project.apkUrl} target="_blank" rel="noopener noreferrer" data-cursor="Open">
                        <Download size={15} aria-hidden="true" />
                        Download APK
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>

              <div className="portl-story__visual">
                <StageVisual stage={stage} visitorStep={visitorStep} />
              </div>
            </div>
          </div>

          <div className="portl-story__mobile-nav" role="tablist" aria-label="Portl story stages">
            {STAGES.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={stage === i}
                className={stage === i ? 'is-active' : ''}
                onClick={() => setStage(i)}
              >
                {String(i + 1).padStart(2, '0')}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="container">
        <PortlRoleExplorer project={project} />
      </div>
    </article>
  )
}
