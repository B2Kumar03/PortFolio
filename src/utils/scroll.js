export function scrollToHash(hash, offset = 80) {
  if (!hash || hash === '#') return
  const id = hash.startsWith('#') ? hash.slice(1) : hash
  const el = document.getElementById(id)
  if (!el) return

  const top = el.getBoundingClientRect().top + window.scrollY - offset
  const lenis = window.__lenis

  if (lenis) {
    lenis.scrollTo(top, { duration: 1.1 })
  } else {
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export function getActiveSection(ids, offset = 120) {
  let active = ids[0]
  for (const id of ids) {
    const el = document.getElementById(id)
    if (!el) continue
    const top = el.getBoundingClientRect().top
    if (top - offset <= 0) active = id
  }
  return active
}
