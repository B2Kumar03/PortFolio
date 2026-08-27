import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useInViewPlayback } from '../../hooks/useInViewPlayback'
import { prefersReducedMotion } from '../../utils/media'
import './BrowserShowcase.css'

const SAMPLE = 'Practice makes typing feel effortless.'

export function BrowserShowcase({ project }) {
  const [ref, active] = useInViewPlayback({ threshold: 0.3, once: false })
  const [ext, setExt] = useState('qr-wave')
  const [typed, setTyped] = useState('')
  const [wpm, setWpm] = useState(0)
  const [qrReady, setQrReady] = useState(false)
  const [downloaded, setDownloaded] = useState(false)
  const [replayKey, setReplayKey] = useState(0)
  const reduced = prefersReducedMotion()
  const current = project.extensions?.find((item) => item.id === ext) || project.extensions?.[0]

  useEffect(() => {
    if (!active) return undefined

    if (ext === 'qr-wave') {
      setQrReady(false)
      setDownloaded(false)
      if (reduced) {
        setQrReady(true)
        setDownloaded(true)
        return undefined
      }
      const build = window.setTimeout(() => setQrReady(true), 700)
      const done = window.setTimeout(() => setDownloaded(true), 1400)
      return () => {
        window.clearTimeout(build)
        window.clearTimeout(done)
      }
    }

    setTyped('')
    setWpm(0)
    if (reduced) {
      setTyped(SAMPLE)
      setWpm(68)
      return undefined
    }

    let i = 0
    const id = window.setInterval(() => {
      i += 1
      setTyped(SAMPLE.slice(0, i))
      setWpm(Math.min(72, 28 + i * 2))
      if (i >= SAMPLE.length) window.clearInterval(id)
    }, 42)

    return () => window.clearInterval(id)
  }, [active, ext, reduced, replayKey])

  return (
    <article className="browser-show" ref={ref} data-cursor="Explore">
      <div className="browser-show__copy">
        <p className="browser-show__number">
          <span>{project.number}</span>
          <span>/</span>
          <span>{project.title}</span>
        </p>
        <p className="browser-show__label">{project.label}</p>
        <h3>{project.headline}</h3>
        <p className="browser-show__summary">{project.summary}</p>

        <div className="browser-show__switch" role="tablist" aria-label="Extension switcher">
          {project.extensions?.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={ext === item.id}
              className={ext === item.id ? 'is-active' : ''}
              onClick={() => setExt(item.id)}
            >
              {item.title}
            </button>
          ))}
        </div>

        <p className="browser-show__ext-copy">{current?.description}</p>
        <ul className="browser-show__features">
          {current?.features?.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <div className="browser-show__actions">
          <Link to={`/projects/${project.slug}`} data-cursor="View">
            View case study
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setReplayKey((value) => value + 1)}
            className="browser-show__replay"
          >
            Replay demo
          </button>
        </div>
      </div>

      <div className={`browser-show__window browser-show__window--${ext}`}>
        <div className="browser-show__chrome">
          <div className="browser-show__dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="browser-show__tabs">
            <span className="is-active">{ext === 'qr-wave' ? 'Share tab' : 'Typing practice'}</span>
            <span>New tab</span>
          </div>
          <div className="browser-show__address">
            <span>https://example.com/{ext === 'qr-wave' ? 'share' : 'practice'}</span>
            <div className="browser-show__icons">
              <button
                type="button"
                className={ext === 'qr-wave' ? 'is-active' : ''}
                aria-label="QR Wave extension"
                onClick={() => setExt('qr-wave')}
              >
                QR
              </button>
              <button
                type="button"
                className={ext === 'type-anywhere' ? 'is-active' : ''}
                aria-label="Type Anywhere extension"
                onClick={() => setExt('type-anywhere')}
              >
                TA
              </button>
            </div>
          </div>
        </div>

        <div className="browser-show__page">
          {ext === 'qr-wave' ? (
            <>
              <p className="browser-show__page-title">Share this page instantly</p>
              <p className="browser-show__page-body">
                QR Wave turns the current browser tab into a downloadable QR code.
              </p>
              <div className={`browser-show__popup ${active ? 'is-open' : ''}`}>
                <p>QR Wave</p>
                <div className={`browser-show__qr ${qrReady ? 'is-ready' : ''}`} />
                <div className="browser-show__controls">
                  <span>Color</span>
                  <span className="swatch" />
                  <span>Size · M</span>
                </div>
                <p className="browser-show__confirm">{downloaded ? 'Downloaded' : 'Preparing…'}</p>
              </div>
            </>
          ) : (
            <>
              <p className="browser-show__page-title">Type Anywhere</p>
              <p className="browser-show__typed">
                {typed}
                <span className="browser-show__caret" />
              </p>
              <div className={`browser-show__popup browser-show__popup--type ${active ? 'is-open' : ''}`}>
                <p>Speed · Focused</p>
                <div className="browser-show__wpm">
                  <strong>{wpm}</strong>
                  <span>WPM</span>
                </div>
                <div className="browser-show__progress">
                  <span style={{ width: `${(typed.length / SAMPLE.length) * 100}%` }} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </article>
  )
}
