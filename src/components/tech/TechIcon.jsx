import { getTechIconUrl } from '../../data/techIcons'
import './TechIcon.css'

export function TechIcon({ name }) {
  const src = getTechIconUrl(name)

  return (
    <span className="tech-icon" aria-hidden="true">
      <img src={src} alt="" width={20} height={20} loading="lazy" decoding="async" />
    </span>
  )
}
