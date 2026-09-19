import { education, personal } from '../data/portfolio'
import './About.css'

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
            <p className="about__role">{personal.role}</p>
            <dl className="about__meta">
              <div>
                <dt>Location</dt>
                <dd>{personal.location}</dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>
                  {education.degree}
                  <span>
                    {education.college} · {education.session}
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="about__copy">
          <header className="section-heading-block about__heading-block">
            <p className="section-label">About</p>
            <h2 className="section-heading about__heading">{about.heading}</h2>
          </header>

          <div className="about__paragraphs">
            <p>{about.who}</p>
            <p>{about.work}</p>
            <p>{about.enjoy}</p>
            <p>{about.learning}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
