import { technologyGroups } from '../data/portfolio'
import { SectionHeading } from '../components/ui/SectionHeading'
import { TechIcon } from '../components/tech/TechIcon'
import './TechStack.css'

export function TechStack() {
  return (
    <section id="skills" className="section tech-stack">
      <div className="container">
        <SectionHeading
          label="Technical expertise"
          title="Tools I use to build and ship."
          subtitle="Grouped by area — the stack I actually work with across web, backend and mobile."
        />

        <div className="tech-stack__grid">
          {technologyGroups.map((group) => (
            <article key={group.id} className="tech-stack__group">
              <h3 className="tech-stack__group-label">{group.label}</h3>
              <ul className="tech-stack__list">
                {group.items.map((tech) => (
                  <li key={tech} className="tech-stack__item">
                    <TechIcon name={tech} />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
