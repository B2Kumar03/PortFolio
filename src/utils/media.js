export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function isTouchDevice() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(hover: none), (pointer: coarse)').matches
}

export function isMobileViewport() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(max-width: 768px)').matches
}
