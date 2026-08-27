import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Hero } from '../sections/Hero'
import { SelectedWork } from '../sections/SelectedWork'
import { Experience } from '../sections/Experience'
import { Capabilities } from '../sections/Capabilities'
import { TechStack } from '../sections/TechStack'
import { About } from '../sections/About'
import { Journey } from '../sections/Journey'
import { Contact } from '../sections/Contact'
import { scrollToHash } from '../utils/scroll'

export function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = window.setTimeout(() => scrollToHash(location.hash), 80)
      return () => window.clearTimeout(id)
    }
    return undefined
  }, [location.hash])

  return (
    <>
      <Hero />
      <SelectedWork />
      <Experience />
      <Capabilities />
      <TechStack />
      <About />
      <Journey />
      <Contact />
    </>
  )
}
