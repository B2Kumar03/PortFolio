import { useMemo, useState } from 'react'
import { projectFilters, projects } from '../data/portfolio'
import { WorkCard } from '../components/projects/WorkCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import './SelectedWork.css'

export function SelectedWork() {
  const [filter, setFilter] = useState('All')

  const visible = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((project) => project.categories?.includes(filter))
  }, [filter])

  return (
    <section id="work" className="section selected-work">
      <div className="container">
        <SectionHeading
          label="Selected work"
          title="A selection of products, systems and applications I've built."
        />

        <div className="filter-bar" role="toolbar" aria-label="Filter projects">
          {projectFilters.map((item) => (
            <button
              key={item}
              type="button"
              className={filter === item ? 'is-active' : ''}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="selected-work__grid">
          {visible.map((project, index) => (
            <WorkCard
              key={project.id}
              project={project}
              featured={(filter === 'All' && index === 0) || visible.length === 1}
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
