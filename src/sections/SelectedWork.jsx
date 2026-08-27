import { projects } from '../data/portfolio'
import { PortlScrollStory } from '../components/projects/PortlScrollStory'
import { StepCoachShowcase } from '../components/projects/StepCoachShowcase'
import { BrowserShowcase } from '../components/projects/BrowserShowcase'
import { SectionHeading } from '../components/ui/SectionHeading'
import './SelectedWork.css'

export function SelectedWork() {
  const portl = projects.find((p) => p.id === 'portl')
  const stepCoach = projects.find((p) => p.id === 'ai-step-coach')
  const extensions = projects.find((p) => p.id === 'browser-extensions')

  return (
    <section id="work" className="section selected-work">
      <div className="container">
        <SectionHeading
          label="Selected work"
          title="Personal products I’ve built and shipped."
          subtitle="Portl, AI Step Coach and browser extensions — focused mobile and tool experiences."
        />
      </div>

      <div className="selected-work__list">
        {portl ? <PortlScrollStory project={portl} /> : null}
        <div className="container selected-work__stack">
          {stepCoach ? <StepCoachShowcase project={stepCoach} /> : null}
          {extensions ? <BrowserShowcase project={extensions} /> : null}
        </div>
      </div>
    </section>
  )
}
