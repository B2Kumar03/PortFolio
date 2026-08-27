import './SectionHeading.css'

function HeadingTitle({ text, className = '' }) {
  const lines = text.split(/(?<=[.!?])\s+/).filter(Boolean)
  const headingClass = ['section-heading', lines.length > 1 ? 'section-heading--lines' : '', className]
    .filter(Boolean)
    .join(' ')

  if (lines.length <= 1) {
    return <h2 className={headingClass}>{text}</h2>
  }

  return (
    <h2 className={headingClass}>
      {lines.map((line) => (
        <span key={line} className="section-heading__line">
          {line}
        </span>
      ))}
    </h2>
  )
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
  className = '',
}) {
  return (
    <header className={`section-heading-block section-heading-block--${align} ${className}`.trim()}>
      {label ? <p className="section-label">{label}</p> : null}
      {title ? <HeadingTitle text={title} /> : null}
      {subtitle ? <p className="section-subheading">{subtitle}</p> : null}
    </header>
  )
}
