import { education, journey } from '../data/portfolio'
import { SectionHeading } from '../components/ui/SectionHeading'
import './Journey.css'

export function Journey() {
  return (
    <section id="journey" className="section journey">
      <div className="container">
        <SectionHeading
          label="Education & journey"
          title="A clear path from foundations to production work."
        />

        <div className="journey__layout">
          <ol className="journey__timeline">
            {journey.map((item, index) => (
              <li key={item.title}>
                <span className="journey__dot" aria-hidden="true" />
                <div>
                  <p className="journey__step">Step {index + 1}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <article className="journey__education">
            <p className="journey__label">Education</p>
            <h3>{education.degree}</h3>
            <p>{education.college}</p>
            <p>{education.university}</p>
            <p className="journey__session">Session: {education.session}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
