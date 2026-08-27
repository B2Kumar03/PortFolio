import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

/**
 * Creates a GSAP context scoped to a root ref and cleans up on unmount.
 * Safe for React Strict Mode double-mount.
 */
export function useGsapContext(setup, deps = []) {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    if (!rootRef.current) return undefined
    const ctx = gsap.context(() => {
      setup(gsap, rootRef)
    }, rootRef)

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return rootRef
}
