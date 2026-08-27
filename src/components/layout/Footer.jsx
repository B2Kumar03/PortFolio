import { ArrowUp } from 'lucide-react'
import { personal } from '../../data/portfolio'
import { scrollToHash } from '../../utils/scroll'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()
  const socials = [
    { label: 'GitHub', href: personal.github },
    { label: 'LinkedIn', href: personal.linkedin },
    { label: 'Email', href: personal.email ? `mailto:${personal.email}` : '' },
  ].filter((s) => s.href)

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__top">
          <p className="footer__credit">
            {personal.footer.credit} © {year}
          </p>
          <button
            type="button"
            className="footer__top-btn"
            onClick={() => {
              const lenis = window.__lenis
              if (lenis) lenis.scrollTo(0, { duration: 1.1 })
              else window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={16} aria-hidden="true" />
          </button>
        </div>

        <div className="footer__bottom">
          <p className="footer__built">{personal.footer.builtWith}</p>
          {socials.length ? (
            <ul className="footer__socials">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={s.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    onClick={(e) => {
                      if (s.href.startsWith('#')) {
                        e.preventDefault()
                        scrollToHash(s.href)
                      }
                    }}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="footer__hint">Add social links in src/data/portfolio.js</p>
          )}
        </div>
      </div>
    </footer>
  )
}
