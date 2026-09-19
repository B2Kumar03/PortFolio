import { experience } from '../data/portfolio'
import { SectionHeading } from '../components/ui/SectionHeading'
import './Experience.css'

export function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <SectionHeading
          label="Experience"
          title="Professional work on production web and mobile systems."
        />

        <ol className="experience__timeline">
          {experience.map((role) => (
            <li key={`${role.company}-${role.period}`}>
              <article className={`experience__card ${role.current ? 'is-current' : ''}`}>
                <div className="experience__header">
                  <div>
                    <p className="experience__role">{role.role}</p>
                    <h3 className="experience__company">{role.company}</h3>
                  </div>
                  <p className="experience__period">
                    {role.current ? <span>Current</span> : null}
                    {role.period}
                  </p>
                </div>

                <p className="experience__description">{role.description}</p>

                <ul className="experience__contributions">
                  {role.contributions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {role.technologies?.length ? (
                  <ul className="experience__tech">
                    {role.technologies.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
