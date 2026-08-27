import { useRef, useState } from 'react'
import { Copy, ExternalLink, FileText, Mail } from 'lucide-react'
import { personal } from '../data/portfolio'
import { MagneticButton } from '../components/ui/MagneticButton'
import { useToast } from '../hooks/useToast'
import { useLocalTime } from '../hooks/useLocalTime'
import { copyToClipboard } from '../utils/clipboard'
import './Contact.css'

export function Contact() {
  const { show } = useToast()
  const time = useLocalTime(personal.timezone)
  const { contact } = personal
  const lineRef = useRef(null)
  const [copied, setCopied] = useState(false)

  const onCopyEmail = async () => {
    if (!personal.email) {
      show('Add your email in src/data/portfolio.js', 'success')
      return
    }
    const ok = await copyToClipboard(personal.email)
    show(ok ? 'Email copied to clipboard' : 'Could not copy email — please copy it manually')
    if (ok) {
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    }
  }

  const onPointerMove = (e) => {
    if (!lineRef.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    lineRef.current.style.transform = `translateX(${x - 50}%)`
  }

  return (
    <section
      id="contact"
      className="section contact"
      onPointerMove={onPointerMove}
      aria-labelledby="contact-heading"
    >
      <div className="contact__glow" aria-hidden="true" />
      <div ref={lineRef} className="contact__pointer-line" aria-hidden="true" />
      <div className="container contact__inner">
        <div className="contact__status">
          <span className="contact__dot" aria-hidden="true" />
          Available for opportunities
          {time ? <span className="contact__time">Local time · {time} IST</span> : null}
        </div>

        <h2 className="contact__heading" id="contact-heading">
          {contact.heading}
        </h2>
        <p className="contact__supporting">{contact.supporting}</p>

        <div className="contact__actions">
          {personal.email ? (
            <>
              <MagneticButton
                as="a"
                href={`mailto:${personal.email}?subject=${encodeURIComponent('Opportunity inquiry — Bittu Kumar portfolio')}`}
                className="magnetic-btn--primary"
                data-cursor="Open"
              >
                <Mail size={16} aria-hidden="true" />
                {contact.cta || "Let's talk"}
              </MagneticButton>
              <MagneticButton
                type="button"
                className="magnetic-btn--secondary"
                onClick={onCopyEmail}
                data-cursor="Copy"
                aria-live="polite"
              >
                <Copy size={16} aria-hidden="true" />
                {copied ? 'Copied' : 'Copy email'}
              </MagneticButton>
            </>
          ) : (
            <MagneticButton
              type="button"
              className="magnetic-btn--primary"
              onClick={() => show('Add your email in src/data/portfolio.js')}
            >
              {contact.cta || "Let's talk"}
            </MagneticButton>
          )}

          {personal.linkedin ? (
            <MagneticButton
              as="a"
              href={personal.linkedin}
              className="magnetic-btn--secondary"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="Open"
            >
              <ExternalLink size={16} aria-hidden="true" />
              LinkedIn
            </MagneticButton>
          ) : null}

          {personal.github ? (
            <MagneticButton
              as="a"
              href={personal.github}
              className="magnetic-btn--secondary"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="Open"
            >
              <ExternalLink size={16} aria-hidden="true" />
              GitHub
            </MagneticButton>
          ) : null}

          {personal.resumeUrl ? (
            <MagneticButton
              as="a"
              href={personal.resumeUrl}
              className="magnetic-btn--secondary"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="Open"
            >
              <FileText size={16} aria-hidden="true" />
              Download résumé
            </MagneticButton>
          ) : null}
        </div>

        {!personal.email && !personal.linkedin && !personal.github && !personal.resumeUrl ? (
          <p className="contact__todo">
            TODO: Add email, LinkedIn, GitHub and résumé URL in <code>src/data/portfolio.js</code>.
          </p>
        ) : null}
      </div>
    </section>
  )
}
