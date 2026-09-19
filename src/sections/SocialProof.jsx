import { ArrowUpRight } from 'lucide-react'
import { personal } from '../data/portfolio'
import './SocialProof.css'

export function SocialProof() {
  const links = [
    {
      label: 'GitHub',
      href: personal.github,
      copy: 'Selected repositories and personal projects.',
    },
    {
      label: 'LinkedIn',
      href: personal.linkedin,
      copy: 'Professional background and how to reach me.',
    },
  ].filter((item) => item.href)

  if (!links.length) return null

  return (
    <section className="section social-proof" aria-labelledby="social-heading">
      <div className="container">
        <p className="section-label">Elsewhere</p>
        <h2 className="section-heading" id="social-heading">
          Find me on GitHub and LinkedIn.
        </h2>

        <div className="social-proof__grid">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="social-proof__card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <strong>{item.label}</strong>
                <p>{item.copy}</p>
              </span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
