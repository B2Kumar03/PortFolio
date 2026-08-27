import { DeviceFrame } from './DeviceFrame'
import { BrowserFrame } from './BrowserFrame'
import { PhoneStack } from './PhoneStack'
import { BrowserToolsScreen } from './screens/ProjectScreens'
import './ProjectMedia.css'

export function ProjectMedia({ project, onRoleChange, activeRole }) {
  if (!project) return null

  if (project.mediaType === 'mobile-stack') {
    return (
      <div className="project-media project-media--stack">
        <PhoneStack
          activeRole={activeRole}
          onRoleChange={onRoleChange}
          roleMeta={project.roles}
        />
      </div>
    )
  }

  if (project.mediaType === 'extension') {
    return (
      <div className="project-media project-media--web">
        <BrowserFrame url="chrome-extension://tools">
          <BrowserToolsScreen extensions={project.extensions} />
        </BrowserFrame>
      </div>
    )
  }

  const shots = project.screenshots || []
  const primary = shots[0]
  const secondary = shots[1] || shots[0]
  const tertiary = shots[2]

  if (!primary?.src) {
    return null
  }

  return (
    <div className={`project-media project-media--phone-pair ${tertiary ? 'has-three' : ''}`}>
      <DeviceFrame
        platform="ios"
        size="md"
        glow
        theme={project.theme}
        src={primary.src}
        alt={primary.alt}
        screenLabel={primary.name}
      />
      {secondary ? (
        <DeviceFrame
          platform="ios"
          size="sm"
          src={secondary.src}
          alt={secondary.alt}
          screenLabel={secondary.name}
        />
      ) : null}
      {tertiary ? (
        <DeviceFrame
          platform="ios"
          size="sm"
          className="project-media__third"
          src={tertiary.src}
          alt={tertiary.alt}
          screenLabel={tertiary.name}
        />
      ) : null}
    </div>
  )
}
