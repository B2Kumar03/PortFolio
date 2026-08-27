import { Footprints, MessageCircle } from 'lucide-react'
import './screens.css'

export function AiStepCoachScreen({ variant = 'home' }) {
  if (variant === 'coach') {
    return (
      <div className="app-screen app-screen--steps">
        <header className="app-screen__top">
          <div>
            <p className="app-screen__eyebrow">Coach</p>
            <h3>Keep moving</h3>
          </div>
          <MessageCircle size={14} aria-hidden="true" />
        </header>
        <div className="steps-coach">
          <MessageCircle size={14} aria-hidden="true" />
          <p>You’ve been still for a while. A 10-minute walk will keep your streak alive.</p>
        </div>
        <div className="steps-timeline">
          <span />
          <span />
          <span className="is-now" />
          <span />
          <span />
        </div>
        <p className="steps-note">Inactivity notice · gentle reminder</p>
      </div>
    )
  }

  return (
    <div className="app-screen app-screen--steps">
      <header className="app-screen__top">
        <div>
          <p className="app-screen__eyebrow">Today</p>
          <h3>Step Coach</h3>
        </div>
        <Footprints size={14} aria-hidden="true" />
      </header>

      <div className="steps-ring-wrap">
        <div className="steps-ring" />
        <div className="steps-ring__center">
          <strong>6,842</strong>
          <span>/ 8,000</span>
        </div>
      </div>

      <div className="steps-coach">
        <MessageCircle size={14} aria-hidden="true" />
        <p>A step-tracking app that notices inactivity and motivates users to move.</p>
      </div>

      <div className="steps-timeline">
        <span />
        <span />
        <span className="is-now" />
        <span />
        <span />
      </div>
      <p className="steps-note">Weekly progress · 4 of 7 active days</p>
    </div>
  )
}

export function BrowserToolsScreen() {
  return (
    <div className="web-screen web-screen--ext">
      <div className="ext-toolbar">
        <span className="ext-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <div className="ext-url">chrome://extensions</div>
        <div className="ext-icons">
          <span className="is-active">QR</span>
          <span>Aa</span>
        </div>
      </div>
      <div className="ext-popups ext-popups--two">
        <article>
          <strong>QR Wave</strong>
          <div className="portl-qr portl-qr--sm" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <p>Customizable QR for the current tab</p>
          <div className="ext-actions">
            <span>Size</span>
            <span>Color</span>
            <span>Download</span>
            <span>Copy</span>
          </div>
        </article>
        <article>
          <strong>Type Anywhere</strong>
          <div className="ext-type">
            <span>the quick brown fox</span>
            <i />
          </div>
          <p>Practice typing with simple speed feedback</p>
          <div className="ext-actions">
            <span>Speed</span>
            <span>Practice</span>
            <span>Progress</span>
          </div>
        </article>
      </div>
    </div>
  )
}
