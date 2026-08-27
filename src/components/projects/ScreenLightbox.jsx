import { useEffect, useRef } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { DeviceFrame } from '../media/DeviceFrame'
import './ScreenLightbox.css'

export function ScreenLightbox({ screens, index, onClose, onChange }) {
  const closeRef = useRef(null)
  const previouslyFocused = useRef(null)
  const touchX = useRef(null)

  const screen = screens[index]
  const hasPrev = index > 0
  const hasNext = index < screens.length - 1

  useEffect(() => {
    previouslyFocused.current = document.activeElement
    document.body.classList.add('lightbox-open')
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && hasPrev) onChange(index - 1)
      if (e.key === 'ArrowRight' && hasNext) onChange(index + 1)
      if (e.key === 'Tab') {
        const focusables = [
          closeRef.current,
          ...Array.from(document.querySelectorAll('.screen-lightbox__nav')),
        ].filter(Boolean)
        if (!focusables.length) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('lightbox-open')
      previouslyFocused.current?.focus?.()
    }
  }, [hasNext, hasPrev, index, onChange, onClose])

  if (!screen) return null

  return (
    <div
      className="screen-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${screen.alt}`}
      onClick={onClose}
    >
      <div
        className="screen-lightbox__panel"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => {
          touchX.current = e.changedTouches[0]?.clientX ?? null
        }}
        onTouchEnd={(e) => {
          if (touchX.current == null) return
          const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current
          if (dx > 50 && hasPrev) onChange(index - 1)
          if (dx < -50 && hasNext) onChange(index + 1)
          touchX.current = null
        }}
      >
        <button
          ref={closeRef}
          type="button"
          className="screen-lightbox__close"
          onClick={onClose}
          aria-label="Close screenshot preview"
        >
          <X size={18} aria-hidden="true" />
        </button>

        <div className="screen-lightbox__frame">
          <DeviceFrame
            platform={screen.role === 'guard' ? 'android' : 'ios'}
            size="lg"
            src={screen.src}
            alt={screen.alt}
            priority
          />
        </div>

        <div className="screen-lightbox__meta">
          <p className="screen-lightbox__role">{screen.role}</p>
          <h3>{screen.name}</h3>
          <p>{screen.group}</p>
        </div>

        <div className="screen-lightbox__controls">
          <button
            type="button"
            className="screen-lightbox__nav"
            onClick={() => hasPrev && onChange(index - 1)}
            disabled={!hasPrev}
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <span>
            {index + 1} / {screens.length}
          </span>
          <button
            type="button"
            className="screen-lightbox__nav"
            onClick={() => hasNext && onChange(index + 1)}
            disabled={!hasNext}
            aria-label="Next screenshot"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
