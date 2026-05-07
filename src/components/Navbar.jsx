import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const [visible, setVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200)
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { clearTimeout(t); window.removeEventListener('scroll', onScroll) }
  }, [])

  const links = ['About','Products','Services','Portfolio','Industries','Contact']

  return (
    <nav className={`navbar${visible ? ' in' : ''}${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">
          <span className="logo-badge">IW</span>
          <span className="logo-text">INSTABIZ <span>WEB</span></span>
        </a>
        <button className="nav-toggle" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <span style={{ transform: open ? 'rotate(45deg) translate(5px,5px)' : '' }} />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span style={{ transform: open ? 'rotate(-45deg) translate(5px,-5px)' : '' }} />
        </button>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn-nav">Start a Project →</a>
      </div>
    </nav>
  )
}
