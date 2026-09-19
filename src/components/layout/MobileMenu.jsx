import { useEffect, useRef } from 'react'
import { navigation, personal } from '../../data/portfolio'
import './MobileMenu.css'

export function MobileMenu({ open, onClose, onNavigate, isHome, resumeUrl, active }) {
  const panelRef = useRef(null)
  const previouslyFocused = useRef(null)

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  useEffect(() => {
    if (!open) return undefined

    previouslyFocused.current = document.activeElement

    const onKey = (e) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab' || !panelRef.current) return
      const focusables = [
        ...panelRef.current.querySelectorAll('a[href], button:not([disabled])'),
      ].filter((el) => el.tabIndex !== -1)
      if (!focusables.length) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    const onPointerDown = (e) => {
      const target = e.target
      if (!(target instanceof Node)) return
      if (panelRef.current?.contains(target)) return
      if (target instanceof Element && target.closest('.nav__burger')) return
      onClose()
    }

    window.addEventListener('keydown', onKey)
    window.addEventListener('pointerdown', onPointerDown)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('pointerdown', onPointerDown)
      previouslyFocused.current?.focus?.()
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open || !panelRef.current) return
    const first = panelRef.current.querySelector('a, button')
    first?.focus()
  }, [open])

  return (
    <div
      id="mobile-menu"
      className={`mobile-menu ${open ? 'is-open' : ''}`}
      aria-hidden={!open}
    >
      <div
        ref={panelRef}
        className="mobile-menu__panel"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav aria-label="Mobile">
          <ul className="mobile-menu__list">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={isHome ? item.href : `/#${item.id}`}
                  tabIndex={open ? 0 : -1}
                  className={active === item.id ? 'is-active' : ''}
                  aria-current={active === item.id ? 'location' : undefined}
                  onClick={(e) => onNavigate(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-menu__meta">
          {resumeUrl ? (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              className="mobile-menu__resume"
            >
              Resume
            </a>
          ) : null}
          <p className="mobile-menu__name">{personal.name}</p>
          <p>{personal.role}</p>
        </div>
      </div>
    </div>
  )
}
