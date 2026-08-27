import { useLayoutEffect, useRef } from 'react'
import { ArrowDown } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { personal } from '../data/portfolio'
import { PhoneShowcase } from '../components/media/PhoneShowcase'
import { MagneticButton } from '../components/ui/MagneticButton'
import { scrollToHash } from '../utils/scroll'
import { prefersReducedMotion } from '../utils/media'
import { motion } from '../utils/motion'
import './Hero.css'

gsap.registerPlugin(ScrollTrigger)

function highlightLine(line, words) {
  const parts = line.split(/(\s+)/)
  return parts.map((part, index) => {
    const clean = part.replace(/[.,]/g, '').toLowerCase()
    if (words.includes(clean)) {
      return (
        <span key={`${part}-${index}`} className="hero__accent">
          {part}
        </span>
      )
    }
    return <span key={`${part}-${index}`}>{part}</span>
  })
}

function HeroHeading({ lines, highlightWords = [] }) {
  return (
    <h1 className="hero__heading">
      {lines.map((line) => (
        <span key={line} className="hero__line">
          <span className="hero__line-inner">{highlightLine(line, highlightWords)}</span>
        </span>
      ))}
    </h1>
  )
}

export function Hero() {
  const { hero } = personal
  const resume = personal.resumeUrl
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return undefined

    if (prefersReducedMotion()) {
      root.querySelectorAll('[data-hero-reveal]').forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
      return undefined
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: motion.ease.standard } })

      tl.from('.hero__eyebrow-mask', {
        clipPath: 'inset(0 100% 0 0)',
        duration: motion.duration.normal,
      })
        .from(
          '.hero__line-inner',
          {
            yPercent: 110,
            duration: motion.duration.slow,
            stagger: 0.1,
          },
          '-=0.25',
        )
        .from(
          '.hero__accent',
          {
            color: 'var(--color-text-muted)',
            duration: motion.duration.normal,
            stagger: 0.05,
          },
          '-=0.45',
        )
        .from(
          '.hero__paragraph',
          { y: motion.distance.medium, opacity: 0, duration: motion.duration.normal },
          '-=0.35',
        )
        .from(
          '.hero__actions > *',
          { y: 18, opacity: 0, duration: motion.duration.fast, stagger: 0.08 },
          '-=0.2',
        )
        .from(
          '.hero__meta',
          { y: 12, opacity: 0, duration: motion.duration.fast },
          '-=0.1',
        )
        .from(
          '.phone-showcase__phone',
          {
            rotateY: -18,
            rotateX: 8,
            y: 40,
            opacity: 0,
            duration: motion.duration.cinematic,
            ease: motion.ease.expressive,
          },
          '-=0.55',
        )
        .from(
          '.phone-showcase__side',
          {
            y: 48,
            opacity: 0,
            duration: motion.duration.slow,
            stagger: 0.08,
          },
          '-=0.7',
        )
        .from(
          '.phone-showcase__label',
          { opacity: 0, y: 10, duration: motion.duration.fast, stagger: 0.05 },
          '-=0.45',
        )
        .from('.hero__scroll', { opacity: 0, duration: motion.duration.fast }, '-=0.2')

      ScrollTrigger.create({
        trigger: root,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress
          root.style.setProperty('--hero-parallax', `${p}`)
          const visual = root.querySelector('.hero__visual')
          const copy = root.querySelector('.hero__copy')
          if (copy) copy.style.transform = `translate3d(0, ${p * -40}px, 0)`
          if (visual) visual.style.transform = `translate3d(0, ${p * 24}px, 0)`
        },
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" aria-label="Introduction" ref={rootRef}>
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__inner container">
        <div className="hero__copy" data-hero-reveal>
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-mask">{hero.eyebrow}</span>
          </p>

          <HeroHeading lines={hero.headingLines} highlightWords={hero.highlightWords} />
          <p className="hero__paragraph">{hero.paragraph}</p>

          <div className="hero__actions">
            <MagneticButton
              as="a"
              href="#work"
              className="magnetic-btn--primary"
              data-cursor="Explore"
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
                data-cursor="Open"
              >
                {hero.secondaryCta}
              </MagneticButton>
            ) : null}
          </div>

          <ul className="hero__meta">
            {hero.meta.map((item) => (
              <li key={item.label}>{item.label}</li>
            ))}
          </ul>
        </div>

        <div className="hero__visual" data-hero-reveal>
          <PhoneShowcase />
        </div>
      </div>

      <a
        href="#work"
        className="hero__scroll"
        onClick={(e) => {
          e.preventDefault()
          scrollToHash('#work')
        }}
      >
        <span>Scroll</span>
        <ArrowDown size={16} aria-hidden="true" />
      </a>
    </section>
  )
}
