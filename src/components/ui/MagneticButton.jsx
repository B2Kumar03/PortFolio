import { useRef } from 'react'
import { isTouchDevice } from '../../utils/media'
import './MagneticButton.css'

export function MagneticButton({
  as: Comp = 'button',
  className = '',
  children,
  strength = 0.35,
  ...props
}) {
  const ref = useRef(null)

  const onMove = (e) => {
    if (isTouchDevice() || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }

  const onLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = 'translate(0, 0)'
  }

  return (
    <Comp
      ref={ref}
      className={`magnetic-btn ${className}`.trim()}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...props}
    >
      {children}
    </Comp>
  )
}
