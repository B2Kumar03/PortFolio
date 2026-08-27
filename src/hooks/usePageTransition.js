import { useCallback } from 'react'

export function usePageTransition() {
  const navigateWithTransition = useCallback((navigate, to) => {
    if (typeof document !== 'undefined' && document.startViewTransition) {
      document.startViewTransition(() => {
        navigate(to)
      })
      return
    }
    navigate(to)
  }, [])

  return { navigateWithTransition }
}
