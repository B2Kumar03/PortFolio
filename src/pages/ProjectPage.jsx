import { lazy, Suspense, useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Download, Images, Play } from 'lucide-react'
import { personal, projects } from '../data/portfolio'
import { ProjectMedia } from '../components/media/ProjectMedia'
import './ProjectPage.css'

const ScreenLightbox = lazy(() =>
  import('../components/projects/ScreenLightbox').then((m) => ({ default: m.ScreenLightbox })),
)

function ExternalLinks({ project }) {
  const links = [
    { label: 'Complete screen gallery', href: project.galleryUrl, icon: Images },
    { label: 'Watch demo', href: project.demoVideoUrl, icon: Play },
    { label: 'Download APK', href: project.apkUrl, icon: Download },
    { label: 'Live', href: project.liveUrl, icon: ArrowUpRight },
    { label: 'GitHub', href: project.githubUrl, icon: ArrowUpRight },
  ].filter((item) => item.href)

  if (!links.length) return null

  return (
    <div className="project-page__links">
      {links.map((item) => {
        const Icon = item.icon
        return (
          <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
            <Icon size={15} aria-hidden="true" />
            {item.label}
          </a>
        )
      })}
    </div>
  )
}

function PortlGallery({ activeRole, onRoleChange }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [screensModule, setScreensModule] = useState(null)
  const [category, setCategory] = useState('All')

  useEffect(() => {
    let alive = true
    import('../data/portlScreens').then((mod) => {
      if (alive) setScreensModule(mod)
    })
    return () => {
      alive = false
    }
  }, [])

  useEffect(() => {
    setCategory('All')
    setLightboxIndex(null)
  }, [activeRole])

  const allScreens = screensModule?.portlScreens?.[activeRole] || []
  const categories = useMemo(() => {
    const groups = screensModule?.portlScreens?.[activeRole] || []
    return ['All', ...Array.from(new Set(groups.map((screen) => screen.group)))]
  }, [screensModule, activeRole])
  const screens = category === 'All' ? allScreens : allScreens.filter((screen) => screen.group === category)
  const stats = screensModule?.portlScreenStats

  return (
    <section className="project-page__gallery project-page__reveal">
      <div className="project-page__gallery-head">
        <h2>Mobile screens</h2>
        <p>
          {screens.length} shown · {allScreens.length} {activeRole} screens
          {stats ? ` · ${stats.total} total across all roles` : ''}
        </p>
      </div>

      <div className="project-page__role-tabs" role="tablist" aria-label="Portl gallery roles">
        {['resident', 'guard', 'admin'].map((role) => (
          <button
            key={role}
            type="button"
            role="tab"
            aria-selected={activeRole === role}
            className={activeRole === role ? 'is-active' : ''}
            onClick={() => onRoleChange(role)}
          >
            {role}
            <span>{screensModule?.portlScreens?.[role]?.length || 0}</span>
          </button>
        ))}
      </div>

      <div className="project-page__filters" role="toolbar" aria-label="Screen categories">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            className={category === item ? 'is-active' : ''}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="project-page__gallery-grid">
        {screens.map((screen) => {
          const absoluteIndex = allScreens.findIndex((item) => item.id === screen.id)
          return (
            <button
              key={screen.id}
              type="button"
              className="project-page__shot"
              onClick={() => setLightboxIndex(absoluteIndex)}
              data-cursor="View"
            >
              <img
                src={screen.thumb}
                alt={screen.alt}
                width={screen.thumbWidth}
                height={screen.thumbHeight}
                loading="lazy"
                decoding="async"
              />
              <span>
                <strong>{screen.name}</strong>
                <em>{screen.group}</em>
              </span>
            </button>
          )
        })}
      </div>

      {lightboxIndex != null && allScreens.length ? (
        <Suspense fallback={null}>
          <ScreenLightbox
            screens={allScreens}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onChange={setLightboxIndex}
          />
        </Suspense>
      ) : null}
    </section>
  )
}

export function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  const [activeRole, setActiveRole] = useState('resident')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    if (!project) return undefined
    const previous = document.title
    document.title = `${project.title} — ${personal.name}`
    return () => {
      document.title = previous
    }
  }, [project])

  const role = useMemo(
    () => project?.roles?.[activeRole],
    [activeRole, project],
  )

  if (!project) return <Navigate to="/#work" replace />

  const isPortl = project.slug === 'portl'

  return (
    <article className="project-page section">
      <div className="container">
        <Link to="/#work" className="project-page__back project-page__reveal">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to work
        </Link>

        <header className="project-page__header project-page__reveal">
          <p className="project-page__category">
            {project.number} / {project.label}
          </p>
          <h1>{project.title}</h1>
          <p className="project-page__lead">{project.headline || project.summary}</p>
          <ExternalLinks project={project} />
        </header>

        <div className="project-page__visual project-page__reveal">
          <ProjectMedia
            project={project}
            activeRole={activeRole}
            onRoleChange={(next) => {
              if (next) setActiveRole(next)
            }}
          />
        </div>

        {isPortl && project.demoVideoUrl ? (
          <section className="project-page__video project-page__reveal">
            <h2>Product demo</h2>
            <div className="project-page__video-frame">
              <iframe
                src={project.demoVideoUrl}
                title="Portl product demo"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>
        ) : null}

        <div className="project-page__grid">
          <section className="project-page__reveal">
            <h2>Project overview</h2>
            <p>{project.overview || project.summary}</p>
          </section>
          <section className="project-page__reveal">
            <h2>Problem</h2>
            <p>{project.problem}</p>
          </section>
          {project.solution ? (
            <section className="project-page__reveal">
              <h2>Solution</h2>
              <p>{project.solution}</p>
            </section>
          ) : null}

          {isPortl && role ? (
            <section className="project-page__reveal">
              <h2>Three-user-role system</h2>
              <div className="project-page__role-tabs" role="tablist" aria-label="Portl roles">
                {Object.entries(project.roles).map(([key, value]) => (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={activeRole === key}
                    className={activeRole === key ? 'is-active' : ''}
                    onClick={() => setActiveRole(key)}
                  >
                    {value.title}
                  </button>
                ))}
              </div>
              <div className="project-page__role-panel" role="tabpanel">
                <p>{role.description}</p>
                <ul>
                  {role.features.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>
          ) : null}

          {isPortl && project.visitorJourney ? (
            <section className="project-page__reveal">
              <h2>End-to-end visitor journey</h2>
              <ol className="project-page__journey">
                {project.visitorJourney.map((step, index) => (
                  <li key={step}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          {isPortl && project.architecture ? (
            <section className="project-page__reveal">
              <h2>Real-time architecture</h2>
              <p>{project.architecture}</p>
            </section>
          ) : null}

          {project.features?.length ? (
            <section className="project-page__reveal">
              <h2>Features</h2>
              <ul>
                {project.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {project.architecture && !isPortl ? (
            <section className="project-page__reveal">
              <h2>Architecture</h2>
              <p>{project.architecture}</p>
            </section>
          ) : null}

          <section className="project-page__reveal">
            <h2>My role</h2>
            {project.contribution ? <p>{project.contribution}</p> : null}
            {project.contributionItems?.length ? (
              <ul>
                {project.contributionItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>

          <section className="project-page__reveal">
            <h2>Challenges</h2>
            <ul>
              {(project.challenges || []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="project-page__reveal">
            <h2>Technology</h2>
            {project.fullTech && !Array.isArray(project.fullTech) ? (
              <div className="project-page__tech-groups">
                <div>
                  <h3>Mobile</h3>
                  <ul className="project-page__tech">
                    {project.fullTech.mobile.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Backend</h3>
                  <ul className="project-page__tech">
                    {project.fullTech.backend.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <ul className="project-page__tech">
                {(project.fullTech || project.primaryTech || []).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>

          <section className="project-page__reveal project-page__outcome">
            <h2>Outcome / functionality</h2>
            <p>{project.outcome}</p>
          </section>
        </div>

        {!isPortl && Array.isArray(project.screenshots) && project.screenshots.length ? (
          <section className="project-page__gallery project-page__reveal">
            <div className="project-page__gallery-head">
              <h2>Screenshots</h2>
            </div>
            <div className="project-page__shot-row">
              {project.screenshots.map((shot) => (
                <figure key={shot.id}>
                  <img
                    src={shot.src}
                    alt={shot.alt || shot.name}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>{shot.name}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        {isPortl ? (
          <PortlGallery activeRole={activeRole} onRoleChange={setActiveRole} />
        ) : null}
      </div>
    </article>
  )
}
