import { Link } from 'react-router-dom'
import { ArrowUpRight, Download, Images, Play } from 'lucide-react'
import './WorkCard.css'

function ExtensionVisual() {
  return (
    <div className="work-card__extension" aria-hidden="true">
      <div className="work-card__extension-chrome">
        <span />
        <span />
        <span />
        <p>chrome-extension://tools</p>
      </div>
      <div className="work-card__extension-body">
        <div>
          <strong>QR Wave</strong>
          <p>QR for the current tab</p>
        </div>
        <div className="work-card__qr" />
        <div>
          <strong>Type Anywhere</strong>
          <p>Practice typing in the browser</p>
        </div>
      </div>
    </div>
  )
}

export function WorkCard({ project, featured = false, priority = false }) {
  const links = [
    { label: 'Live Demo', href: project.liveUrl, icon: ArrowUpRight },
    { label: 'GitHub', href: project.githubUrl, icon: ArrowUpRight },
    { label: 'Watch demo', href: project.demoVideoUrl, icon: Play },
    { label: 'Screen gallery', href: project.galleryUrl, icon: Images },
    { label: 'Download APK', href: project.apkUrl, icon: Download },
  ].filter((item) => item.href)

  return (
    <article className={`work-card ${featured ? 'is-featured' : ''}`}>
      <Link to={`/projects/${project.slug}`} className="work-card__media" tabIndex={-1}>
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={project.coverAlt || `${project.title} preview`}
            width={720}
            height={900}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
          />
        ) : (
          <ExtensionVisual />
        )}
      </Link>

      <div className="work-card__body">
        <p className="work-card__category">{project.categories?.join(' · ') || project.category}</p>
        <h3 className="work-card__title">
          <Link to={`/projects/${project.slug}`}>
            {project.title}
            <ArrowUpRight className="work-card__arrow" size={18} aria-hidden="true" />
          </Link>
        </h3>
        <p className="work-card__summary">{project.shortDescription || project.summary}</p>

        {project.contributionItems?.length ? (
          <div className="work-card__contrib">
            <p>My contribution</p>
            <ul>
              {project.contributionItems.slice(0, featured ? 6 : 4).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <ul className="work-card__tech">
          {project.primaryTech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="work-card__actions">
          <Link to={`/projects/${project.slug}`} className="work-card__case">
            Case Study
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
          {links.map((item) => {
            const Icon = item.icon
            return (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                <Icon size={14} aria-hidden="true" />
                {item.label}
              </a>
            )
          })}
        </div>
      </div>
    </article>
  )
}
