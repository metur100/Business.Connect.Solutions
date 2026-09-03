import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Start' },
  { to: '/leistungen', label: 'Leistungen' },
  { to: '/fahrer', label: 'Ihr Fahrer' },
  { to: '/flotte', label: 'Flotte' },
  { to: '/anlaesse', label: 'Anlässe' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="hdr">
      <div className="hdr__in" style={{ position: 'relative' }}>
        <Link className="logo" to="/" onClick={() => setOpen(false)} aria-label="BCO Solutions – Startseite">
          <span className="logo__mark" aria-hidden="true">
            <span>BUSINESS</span>
            <span>CONNECT</span>
          </span>
          <span className="logo__word">Solutions</span>
        </Link>

        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Hauptnavigation">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => (isActive ? 'is-active' : '')}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="burger"
          aria-expanded={open}
          aria-label={open ? 'Menü schliessen' : 'Menü öffnen'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Schliessen' : 'Menü'}
        </button>
      </div>
    </header>
  )
}
