import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navigation, personal } from '../../data/portfolio'
import { getActiveSection, scrollToHash } from '../../utils/scroll'
import { MagneticButton } from '../ui/MagneticButton'
import { MobileMenu } from './MobileMenu'
import './Navigation.css'

const SECTION_IDS = ['work', 'experience', 'skills', 'about', 'contact']

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('work')
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      if (isHome) setActive(getActiveSection(SECTION_IDS))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const handleNav = (e, href) => {
    if (!isHome) return
    e.preventDefault()
    scrollToHash(href)
    setMenuOpen(false)
  }

  const resume = personal.resumeUrl

  return (
    <>
      <header
        className={`nav ${scrolled || menuOpen ? 'is-scrolled' : ''} ${menuOpen ? 'nav--menu-open' : ''}`}
      >
        <div className="nav__inner container">
          <Link to="/" className="nav__brand" aria-label={`${personal.name} home`}>
            {personal.name}
          </Link>

          <nav className="nav__links" aria-label="Primary">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={isHome ? item.href : `/#${item.id}`}
                className={`nav__link ${active === item.id ? 'is-active' : ''}`}
                aria-current={active === item.id ? 'location' : undefined}
                onClick={(e) => handleNav(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            {resume ? (
              <MagneticButton
                as="a"
                href={resume}
                className="magnetic-btn--nav nav__resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </MagneticButton>
            ) : null}

            <button
              type="button"
              className={`nav__burger ${menuOpen ? 'is-open' : ''}`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={handleNav}
        isHome={isHome}
        resumeUrl={resume}
        active={active}
      />
    </>
  )
}
