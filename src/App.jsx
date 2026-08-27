import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navigation } from './components/layout/Navigation'
import { Footer } from './components/layout/Footer'
import { Loader } from './components/layout/Loader'
import { CustomCursor } from './components/ui/CustomCursor'
import { ToastProvider } from './components/ui/Toast'
import { HomePage } from './pages/HomePage'
import { ProjectPage } from './pages/ProjectPage'
import { useLenis } from './hooks/useLenis'
import { useReducedMotion } from './hooks/useReducedMotion'

function AppShell() {
  const reduced = useReducedMotion()
  useLenis(!reduced)

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="noise-overlay" aria-hidden="true" />
      <CustomCursor />
      <Navigation />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <BrowserRouter>
      <ToastProvider>
        {!loaded ? <Loader onComplete={() => setLoaded(true)} /> : null}
        <div className={loaded ? 'app is-ready' : 'app'} aria-hidden={!loaded}>
          <AppShell />
        </div>
      </ToastProvider>
    </BrowserRouter>
  )
}
