import { currentlyBuilding } from '../data/portfolio'
import { SectionHeading } from '../components/ui/SectionHeading'
import './CurrentlyBuilding.css'

export function CurrentlyBuilding() {
  const item = currentlyBuilding

  return (
    <section id="building" className="section currently-building">
      <div className="container">
        <SectionHeading
          label="Currently building"
          title="What I’m working on now."
        />

        <article className="currently-building__card">
          <p className="currently-building__status">{item.status}</p>
          <p className="currently-building__context">{item.context}</p>
          <h3>{item.title}</h3>
          <p className="currently-building__copy">{item.description}</p>
          <ul>
            {item.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
