import './LaptopFrame.css'

export function LaptopFrame({ children, className = '' }) {
  return (
    <div className={`laptop-frame ${className}`.trim()}>
      <div className="laptop-frame__screen">
        <div className="laptop-frame__camera" aria-hidden="true" />
        <div className="laptop-frame__viewport">{children}</div>
      </div>
      <div className="laptop-frame__base" aria-hidden="true">
        <div className="laptop-frame__notch" />
      </div>
    </div>
  )
}
