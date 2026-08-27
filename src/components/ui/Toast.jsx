import { useCallback, useEffect, useMemo, useState } from 'react'
import { Check, X } from 'lucide-react'
import { ToastContext } from '../../hooks/useToast'
import './Toast.css'

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null)

  const hide = useCallback(() => setToast(null), [])

  const show = useCallback((message, type = 'success') => {
    setToast({ message, type, id: Date.now() })
  }, [])

  useEffect(() => {
    if (!toast) return undefined
    const id = window.setTimeout(hide, 2800)
    return () => window.clearTimeout(id)
  }, [toast, hide])

  const value = useMemo(() => ({ show, hide }), [show, hide])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="toast-region" aria-live="polite" aria-atomic="true">
        {toast ? (
          <div className={`toast toast--${toast.type}`} role="status">
            {toast.type === 'success' ? <Check size={16} aria-hidden="true" /> : null}
            <span>{toast.message}</span>
            <button type="button" className="toast__close" onClick={hide} aria-label="Dismiss notification">
              <X size={14} aria-hidden="true" />
            </button>
          </div>
        ) : null}
      </div>
    </ToastContext.Provider>
  )
}

