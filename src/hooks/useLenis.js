import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { isTouchDevice, prefersReducedMotion } from '../utils/media'

gsap.registerPlugin(ScrollTrigger)

export function useLenis(enabled = true) {
  useEffect(() => {
    if (!enabled || prefersReducedMotion() || isTouchDevice()) return undefined

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      touchMultiplier: 1.2,
    })

    window.__lenis = lenis

    lenis.on('scroll', ScrollTrigger.update)

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value, { immediate: true })
        }
        return lenis.scroll
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
      pinType: document.documentElement.style.transform ? 'transform' : 'fixed',
    })

    ScrollTrigger.addEventListener('refresh', () => lenis.resize())
    ScrollTrigger.refresh()

    const ticker = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(ticker)
    gsap.ticker.lagSmoothing(0)

    const onVisibility = () => {
      if (document.hidden) {
        lenis.stop()
        gsap.globalTimeline.pause()
      } else {
        lenis.start()
        gsap.globalTimeline.resume()
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
      ScrollTrigger.scrollerProxy(document.documentElement, {})
      gsap.ticker.remove(ticker)
      lenis.destroy()
      if (window.__lenis === lenis) delete window.__lenis
    }
  }, [enabled])
}
