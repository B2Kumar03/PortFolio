import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Hero } from '../sections/Hero'
import { SelectedWork } from '../sections/SelectedWork'
import { Experience } from '../sections/Experience'
import { Highlights } from '../sections/Highlights'
import { TechStack } from '../sections/TechStack'
import { CurrentlyBuilding } from '../sections/CurrentlyBuilding'
import { About } from '../sections/About'
import { SocialProof } from '../sections/SocialProof'
import { Contact } from '../sections/Contact'
import { siteConfig } from '../data/portfolio'
import { scrollToHash } from '../utils/scroll'

export function HomePage() {
  const location = useLocation()

  useEffect(() => {
    document.title = siteConfig.title
  }, [])

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
      <Highlights />
      <TechStack />
      <CurrentlyBuilding />
      <About />
      <SocialProof />
      <Contact />
    </>
  )
}
