import { personal } from '../../data/portfolio'
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
        <div>
          <p className="footer__name">{personal.footer.credit}</p>
          <p className="footer__role">{personal.footer.role}</p>
        </div>

        {socials.length ? (
          <ul className="footer__socials">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={s.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}

        <p className="footer__copy">© {year}</p>
      </div>
    </footer>
  )
}
