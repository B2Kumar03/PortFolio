import { education, personal } from '../data/portfolio'
import '../components/ui/SectionHeading.css'
import './About.css'

function AboutHeading({ text }) {
  const lines = text.split(/(?<=[.!?])\s+/).filter(Boolean)

  return (
    <header className="section-heading-block about__heading-block">
      <p className="section-label">About</p>
      <h2 className="section-heading about__heading">
        {lines.map((line) => (
          <span key={line} className="about__heading-line">
            {line}
          </span>
        ))}
      </h2>
    </header>
  )
}

export function About() {
  const { about } = personal
  const photo = personal.photo

  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        <div className="about__portrait-col">
          <figure className="about__portrait">
            <div className="about__mask">
              {photo ? (
                <img
                  src={photo}
                  alt={`Portrait of ${personal.name}`}
                  className="about__photo"
                  width={640}
                  height={800}
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="about__monogram" aria-hidden="true">
                  {personal.monogram}
                </div>
              )}
            </div>
          </figure>

          <div className="about__details">
            <p className="about__caption">{personal.name}</p>
            <dl className="about__meta">
              <div>
                <dt>Location</dt>
                <dd>{personal.location}</dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>
                  {education.degree}
                  <span>{education.college}</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="about__copy">
          <AboutHeading text={about.heading} />
          <div className="about__paragraphs">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <ul className="about__values">
            {about.values.map((value) => (
              <li key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
