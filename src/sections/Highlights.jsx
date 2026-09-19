import { highlights } from '../data/portfolio'
import { SectionHeading } from '../components/ui/SectionHeading'
import './Highlights.css'

export function Highlights() {
  return (
    <section id="highlights" className="section highlights">
      <div className="container">
        <SectionHeading
          label="Engineering highlights"
          title="The kind of engineering work I actually do."
          subtitle="Drawn from production work and personal products — APIs, mobile clients, data models and shipping."
        />

        <div className="highlights__grid">
          {highlights.map((item) => (
            <article key={item.id} className="highlights__card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
