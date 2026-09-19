import { useState } from 'react'
import { Copy, Mail } from 'lucide-react'
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

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-heading">
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
              >
                <Mail size={16} aria-hidden="true" />
                {contact.cta || 'Email Me'}
              </MagneticButton>
              <MagneticButton
                type="button"
                className="magnetic-btn--secondary"
                onClick={onCopyEmail}
                aria-live="polite"
              >
                <Copy size={16} aria-hidden="true" />
                {copied ? 'Copied' : 'Copy email'}
              </MagneticButton>
            </>
          ) : null}

          {personal.linkedin ? (
            <MagneticButton
              as="a"
              href={personal.linkedin}
              className="magnetic-btn--secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
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
            >
              GitHub
            </MagneticButton>
          ) : null}
        </div>
      </div>
    </section>
  )
}
