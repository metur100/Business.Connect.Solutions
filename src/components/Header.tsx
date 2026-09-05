import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { t, lang, setLang } = useLanguage()

  const links = [
    { to: '/', label: t('nav.start') },
    { to: '/leistungen', label: t('nav.leistungen') },
    { to: '/fahrer', label: t('nav.fahrer') },
    { to: '/flotte', label: t('nav.flotte') },
    { to: '/anlaesse', label: t('nav.anlaesse') },
    { to: '/anfrage', label: t('nav.anfrage') },
    { to: '/kontakt', label: t('nav.kontakt') },
  ]

  return (
    <header className="hdr">
      <div className="hdr__in" style={{ position: 'relative' }}>
        <Link className="logo" to="/" onClick={() => setOpen(false)} aria-label={t('header.logoAria')}>
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
          <div className="hdr__lang">
            <button type="button" aria-pressed={lang === 'de'} onClick={() => setLang('de')}>DE</button>
            <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
          </div>
        </nav>

        <button
          className="burger"
          aria-expanded={open}
          aria-label={open ? t('header.menuClose') : t('header.menuOpen')}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? t('header.menuCloseLabel') : t('header.menuOpenLabel')}
        </button>
      </div>
    </header>
  )
}
