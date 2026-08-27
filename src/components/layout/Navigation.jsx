import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navigation, personal } from '../../data/portfolio'
import { getActiveSection, scrollToHash } from '../../utils/scroll'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { useMagnetic } from '../../hooks/useMagnetic'
import { MagneticButton } from '../ui/MagneticButton'
import { MobileMenu } from './MobileMenu'
import './Navigation.css'

const SECTION_IDS = ['work', 'experience', 'capabilities', 'stack', 'about', 'journey', 'contact']
const SECTION_LABELS = {
  work: '01',
  about: '02',
  experience: '03',
  contact: '04',
  capabilities: '·',
  stack: '·',
  journey: '·',
}

function BrandMark() {
  const ref = useMagnetic(0.22)
  return (
    <Link to="/" className="nav__brand" aria-label={`${personal.name} home`} ref={ref}>
      <span aria-hidden="true">{personal.monogram}</span>
    </Link>
  )
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('work')
  const [menuOpen, setMenuOpen] = useState(false)
  const progress = useScrollProgress()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 48)
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
  const sectionNumber = SECTION_LABELS[active] || '01'

  return (
    <>
      <header
        className={`nav ${scrolled || menuOpen ? 'nav--solid' : 'nav--blend'} ${menuOpen ? 'nav--menu-open' : ''}`}
      >
        <div
          className="nav__progress"
          style={{ transform: `scaleX(${progress})` }}
          aria-hidden="true"
        />
        <div className="nav__inner container">
          <BrandMark />

          <nav className="nav__links" aria-label="Primary">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={isHome ? item.href : `/#${item.id}`}
                className={`nav__link ${active === item.id ? 'is-active' : ''}`}
                onClick={(e) => handleNav(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <span className="nav__section-num" aria-hidden="true">
              {sectionNumber}
            </span>

            <span className="nav__status" title={personal.availability}>
              <span className="nav__status-dot" aria-hidden="true" />
              <span className="nav__status-text">Available</span>
            </span>

            {resume ? (
              <MagneticButton
                as="a"
                href={resume}
                className="magnetic-btn--nav nav__resume"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Open"
              >
                Résumé
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
