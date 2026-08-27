import './BrowserFrame.css'

export function BrowserFrame({ children, className = '', url = 'app.example.com/dashboard' }) {
  return (
    <div className={`browser-frame ${className}`.trim()}>
      <div className="browser-frame__chrome">
        <div className="browser-frame__dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="browser-frame__url">{url}</div>
      </div>
      <div className="browser-frame__viewport">{children}</div>
    </div>
  )
}
