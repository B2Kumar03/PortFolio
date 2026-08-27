import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Download, Images, Play } from 'lucide-react'
import { ProjectMedia } from '../media/ProjectMedia'
import './ProjectCard.css'

export function ProjectCard({ project }) {
  const [activeRole, setActiveRole] = useState('resident')
  const isFeatured = project.layout === 'featured'
  const mediaLeft = project.layout === 'media-left'
  const role = project.roles?.[activeRole]

  return (
    <article
      className={`project-card project-card--${project.layout || 'text-left'} ${mediaLeft ? 'is-reverse' : ''} ${isFeatured ? 'is-featured' : ''}`}
      data-cursor="View case"
    >
      <div className="project-card__content">
        <p className="project-card__number">
          <span>{project.number}</span>
          <span>/</span>
          <span>{project.title}</span>
        </p>
        <p className="project-card__label">{project.label}</p>
        <h3 className="project-card__title">
          <Link to={`/projects/${project.slug}`}>{project.headline || project.title}</Link>
        </h3>
        <p className="project-card__summary">{project.summary}</p>

        {isFeatured && role ? (
          <p className="project-card__role-copy">
            <strong>{role.title}: </strong>
            {role.description}
            <span className="project-card__count"> · {role.count} screens</span>
          </p>
        ) : null}

        <dl className="project-card__meta">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Challenge</dt>
            <dd>{project.challenge}</dd>
          </div>
        </dl>

        <ul className="project-card__tech">
          {(isFeatured && role?.features?.length
            ? role.features.slice(0, 6)
            : project.primaryTech
          ).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {project.extensions?.length ? (
          <ul className="project-card__extensions">
            {project.extensions.map((ext) => (
              <li key={ext.id}>
                <strong>{ext.title}</strong>
                <p>{ext.description}</p>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="project-card__actions">
          <Link to={`/projects/${project.slug}`} className="project-card__link">
            View case study
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          {project.galleryUrl ? (
            <a href={project.galleryUrl} target="_blank" rel="noopener noreferrer">
              <Images size={15} aria-hidden="true" />
              Screen gallery
            </a>
          ) : null}
          {project.demoVideoUrl ? (
            <a href={project.demoVideoUrl} target="_blank" rel="noopener noreferrer">
              <Play size={15} aria-hidden="true" />
              Watch demo
            </a>
          ) : null}
          {project.apkUrl ? (
            <a href={project.apkUrl} target="_blank" rel="noopener noreferrer">
              <Download size={15} aria-hidden="true" />
              Download APK
            </a>
          ) : null}
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live
            </a>
          ) : null}
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          ) : null}
        </div>
      </div>

      <div className="project-card__media">
        <ProjectMedia
          project={project}
          activeRole={activeRole}
          onRoleChange={(roleId) => {
            if (roleId) setActiveRole(roleId)
          }}
        />
      </div>
    </article>
  )
}
