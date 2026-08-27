import { useMemo, useState } from 'react'
import { DeviceFrame } from '../media/DeviceFrame'
import './PortlRoleExplorer.css'

const ROLE_ORDER = ['resident', 'guard', 'admin']

const ROLE_SCREENS = {
  resident: [
    '/projects/portl/resident/residetn-dashboard.webp',
    '/projects/portl/resident/visitor-request-screen.webp',
    '/projects/portl/resident/community-screen.webp',
    '/projects/portl/resident/help-desk-screen.webp',
  ],
  guard: [
    '/projects/portl/guard/guard-dashboard.webp',
    '/projects/portl/guard/visitor-screem.webp',
    '/projects/portl/guard/scan.webp',
    '/projects/portl/guard/inside-screen.webp',
  ],
  admin: [
    '/projects/portl/admin/admin-dashboard.webp',
    '/projects/portl/admin/amenities-screen.webp',
    '/projects/portl/admin/billing-screen.webp',
    '/projects/portl/admin/emergency-screem.webp',
  ],
}

export function PortlRoleExplorer({ project }) {
  const [role, setRole] = useState('resident')
  const active = project.roles[role]
  const screens = ROLE_SCREENS[role]
  const index = ROLE_ORDER.indexOf(role)

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      setRole(ROLE_ORDER[(index + 1) % ROLE_ORDER.length])
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      setRole(ROLE_ORDER[(index - 1 + ROLE_ORDER.length) % ROLE_ORDER.length])
    }
    if (e.key === 'Home') {
      e.preventDefault()
      setRole(ROLE_ORDER[0])
    }
    if (e.key === 'End') {
      e.preventDefault()
      setRole(ROLE_ORDER[ROLE_ORDER.length - 1])
    }
  }

  const theme = useMemo(() => {
    if (role === 'guard') return '#1A9B6C'
    if (role === 'admin') return '#0E7490'
    return '#1F6FEB'
  }, [role])

  return (
    <section className={`portl-roles portl-roles--${role}`} aria-labelledby="portl-roles-heading">
      <div className="portl-roles__header">
        <p className="portl-roles__kicker">Role explorer</p>
        <h4 id="portl-roles-heading">Three interfaces. One connected system.</h4>
      </div>

      <div
        className="portl-roles__control"
        role="tablist"
        aria-label="Portl roles"
        onKeyDown={onKeyDown}
      >
        <span
          className="portl-roles__indicator"
          style={{ transform: `translateX(${index * 100}%)` }}
          aria-hidden="true"
        />
        {ROLE_ORDER.map((id) => (
          <button
            key={id}
            type="button"
            role="tab"
            id={`tab-${id}`}
            aria-selected={role === id}
            aria-controls={`panel-${id}`}
            tabIndex={role === id ? 0 : -1}
            className={role === id ? 'is-active' : ''}
            onClick={() => setRole(id)}
            data-cursor="View"
          >
            {project.roles[id].title}
          </button>
        ))}
      </div>

      <div
        className="portl-roles__panel"
        role="tabpanel"
        id={`panel-${role}`}
        aria-labelledby={`tab-${role}`}
      >
        <div className="portl-roles__copy">
          <p className="portl-roles__count">{active.count} screens</p>
          <p>{active.description}</p>
          <ul>
            {active.features.slice(0, 6).map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="portl-roles__stage">
          <div className="portl-roles__main">
            <DeviceFrame
              platform={role === 'guard' ? 'android' : 'ios'}
              size="md"
              glow
              src={screens[0]}
              alt={`${active.title} primary screen`}
              screenLabel={active.title}
              theme={theme}
            />
          </div>
          <div className="portl-roles__strip" aria-label={`${active.title} screen previews`}>
            {screens.slice(1).map((src) => (
              <img key={src} src={src} alt="" loading="lazy" width={140} height={312} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
