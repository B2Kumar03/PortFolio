import { useRef, useState } from 'react'
import { DeviceFrame } from './DeviceFrame'
import { portlHeroScreens } from '../../data/portlHero'
import './PhoneStack.css'

const ROLE_ORDER = ['resident', 'guard', 'admin']

const FEATURED = {
  resident: portlHeroScreens.resident,
  guard: portlHeroScreens.guard,
  admin: portlHeroScreens.admin,
}

export function PhoneStack({
  onRoleChange,
  showTabs = true,
  activeRole,
  roleMeta = {},
  screensByRole,
}) {
  const [internalActive, setInternalActive] = useState('resident')
  const active = activeRole || internalActive
  const tabRefs = useRef([])

  const selectRole = (id, index) => {
    if (!activeRole) setInternalActive(id)
    onRoleChange?.(id)
    tabRefs.current[index]?.focus()
  }

  const onKeyDown = (e) => {
    const current = ROLE_ORDER.indexOf(active)
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      const next = (current + 1) % ROLE_ORDER.length
      selectRole(ROLE_ORDER[next], next)
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      const prev = (current - 1 + ROLE_ORDER.length) % ROLE_ORDER.length
      selectRole(ROLE_ORDER[prev], prev)
    }
  }

  const activeScreen = screensByRole?.[active]?.[0] || FEATURED[active]
  const count = roleMeta[active]?.count || screensByRole?.[active]?.length || 0

  return (
    <div className="phone-stack">
      {showTabs ? (
        <div
          className="phone-stack__tabs"
          role="tablist"
          aria-label="Portl user roles"
          onKeyDown={onKeyDown}
        >
          {ROLE_ORDER.map((role, index) => (
            <button
              key={role}
              type="button"
              role="tab"
              ref={(el) => {
                tabRefs.current[index] = el
              }}
              id={`portl-tab-${role}`}
              aria-controls={`portl-panel-${role}`}
              aria-selected={active === role}
              tabIndex={active === role ? 0 : -1}
              className={active === role ? 'is-active' : ''}
              onClick={() => selectRole(role, index)}
            >
              {roleMeta[role]?.title || role}
              <span>{roleMeta[role]?.count || screensByRole?.[role]?.length || 0}</span>
            </button>
          ))}
        </div>
      ) : null}

      <div
        className="phone-stack__stage"
        role="tabpanel"
        id={`portl-panel-${active}`}
        aria-labelledby={`portl-tab-${active}`}
      >
        <div className="phone-stack__track" data-active={active}>
          {ROLE_ORDER.map((role) => {
            const screen = screensByRole?.[role]?.[0] || FEATURED[role]
            const isActive = active === role
            if (!screen) return null
            return (
              <div
                key={role}
                className={`phone-stack__item phone-stack__item--${role} ${isActive ? 'is-active' : ''}`}
              >
                <DeviceFrame
                  platform={role === 'guard' ? 'android' : 'ios'}
                  size={isActive ? 'md' : 'sm'}
                  glow={isActive}
                  src={isActive ? screen.src : screen.thumb || screen.src}
                  alt={isActive ? screen.alt : ''}
                  screenLabel={isActive ? screen.name : undefined}
                  priority={isActive && role === 'resident'}
                />
              </div>
            )
          })}
        </div>

        {activeScreen ? (
          <p className="phone-stack__meta">
            <strong>{activeScreen.name}</strong>
            <span>
              {count} screens · {roleMeta[active]?.title || active}
            </span>
          </p>
        ) : null}
      </div>

      <div className="phone-stack__dots" aria-hidden="true">
        {ROLE_ORDER.map((role) => (
          <button
            key={role}
            type="button"
            className={active === role ? 'is-active' : ''}
            onClick={() => selectRole(role, ROLE_ORDER.indexOf(role))}
            tabIndex={-1}
          />
        ))}
      </div>
    </div>
  )
}
