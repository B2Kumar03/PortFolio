import { ArrowUpRight } from 'lucide-react'
import { personal } from '../data/portfolio'
import { MagneticButton } from '../components/ui/MagneticButton'
import { scrollToHash } from '../utils/scroll'
import './Hero.css'

export function Hero() {
  const { hero } = personal
  const resume = personal.resumeUrl

  const socials = [
    { label: 'GitHub', href: personal.github },
    { label: 'LinkedIn', href: personal.linkedin },
    { label: 'Email', href: personal.email ? `mailto:${personal.email}` : '' },
  ].filter((item) => item.href)

  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero__inner container">
        <div className="hero__copy">
          <p className="hero__eyebrow" data-hero-reveal>
            {hero.eyebrow}
          </p>

          <h1 className="hero__heading" data-hero-reveal>
            {hero.heading}
          </h1>

          <p className="hero__paragraph" data-hero-reveal>
            {hero.paragraph}
          </p>

          <div className="hero__actions" data-hero-reveal>
            <MagneticButton
              as="a"
              href="#work"
              className="magnetic-btn--primary"
              onClick={(e) => {
                e.preventDefault()
                scrollToHash('#work')
              }}
            >
              {hero.primaryCta}
            </MagneticButton>
            {resume ? (
              <MagneticButton
                as="a"
                href={resume}
                className="magnetic-btn--secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {hero.secondaryCta}
              </MagneticButton>
            ) : null}
          </div>

          {socials.length ? (
            <ul className="hero__socials" data-hero-reveal>
              {socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  >
                    {item.label}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          ) : null}

          <p className="hero__tech" data-hero-reveal>
            {hero.techLine.join(' · ')}
          </p>
        </div>

        <aside className="hero__aside" data-hero-reveal aria-label="Profile summary">
          <p className="hero__status">
            <span className="hero__status-dot" aria-hidden="true" />
            Available for opportunities
          </p>
          <p className="hero__aside-role">{personal.currentRole}</p>
          <p className="hero__aside-meta">
            {personal.location}
            <span aria-hidden="true"> · </span>
            Open to relocation
          </p>
          <a
            href="#work"
            className="hero__featured"
            onClick={(e) => {
              e.preventDefault()
              scrollToHash('#work')
            }}
          >
            <img
              src="/projects/portl/resident/residetn-dashboard.webp"
              alt="Portl resident dashboard"
              width={540}
              height={1206}
              decoding="async"
              fetchPriority="high"
            />
            <span>
              <em>Featured work</em>
              <strong>Portl</strong>
            </span>
          </a>
        </aside>
      </div>
    </section>
  )
}
