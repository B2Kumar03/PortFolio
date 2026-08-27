import './DeviceFrame.css'

export function DeviceFrame({
  children,
  src,
  alt = '',
  platform = 'ios',
  priority = false,
  className = '',
  screenLabel,
  theme,
  orientation = 'portrait',
  size = 'md',
  glow = false,
}) {
  const variant = platform === 'android' ? 'android' : 'ios'

  return (
    <div
      className={`device-frame device-frame--${variant} device-frame--${size} device-frame--${orientation} ${glow ? 'device-frame--glow' : ''} ${className}`.trim()}
      style={theme ? { '--device-theme': theme } : undefined}
      role={screenLabel || alt ? 'img' : undefined}
      aria-label={screenLabel || alt || undefined}
      aria-hidden={!screenLabel && !alt ? true : undefined}
    >
      <div className="device-frame__shell">
        <span className="device-frame__btn device-frame__btn--silent" />
        <span className="device-frame__btn device-frame__btn--vol-up" />
        <span className="device-frame__btn device-frame__btn--vol-down" />
        <span className="device-frame__btn device-frame__btn--power" />
        <div className="device-frame__bezel">
          {variant === 'ios' ? <div className="device-frame__island" /> : <div className="device-frame__camera" />}
          <div className="device-frame__screen">
            <div className="device-frame__content">
              {src ? (
                <img
                  src={src}
                  alt={alt}
                  width={1080}
                  height={2412}
                  loading={priority ? 'eager' : 'lazy'}
                  decoding={priority ? 'sync' : 'async'}
                  fetchPriority={priority ? 'high' : 'auto'}
                  className="device-frame__image"
                />
              ) : (
                children
              )}
            </div>
            <div className="device-frame__reflection" />
          </div>
        </div>
      </div>
      {screenLabel ? <p className="device-frame__caption">{screenLabel}</p> : null}
    </div>
  )
}
