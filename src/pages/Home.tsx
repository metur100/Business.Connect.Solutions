import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Faq from '../components/Faq'
import AnyQuestions from '../components/AnyQuestions'
import { useLanguage } from '../i18n/LanguageContext'
import { fleetImages } from '../data/fleetImages'

export default function Home() {
  const railRef = useRef<HTMLDivElement>(null)
  const heroMediaRef = useRef<HTMLDivElement>(null)
  const { t, content } = useLanguage()
  const { dossier, services, fleet, onDemand, regions, worldwide, events } = content

  function scrollRail(dir: number) {
    const el = railRef.current
    if (!el) return
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 480), behavior: 'smooth' })
  }

  useEffect(() => {
    const media = heroMediaRef.current
    if (!media) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    function onScroll() {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (media) media.style.transform = `translateY(${Math.min(window.scrollY * 0.25, 120)}px)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="hero__media" ref={heroMediaRef}>
          {/* Replace hero.mp4 with the client's own footage */}
          <video autoPlay muted loop playsInline poster={`${import.meta.env.BASE_URL}images/bco-driver-service.png`}>
            <source src={`${import.meta.env.BASE_URL}hero.mp4`} type="video/mp4" />
          </video>
        </div>
        <div className="hero__scrim" />
        <div className="hero__in">
          <p className="eyebrow" style={{ maxWidth: 460 }}>{t('home.heroEyebrow')}</p>
          <h1>
            <span className="hero__h1-w1">{t('home.heroH1Prefix')}</span>{' '}
            <span className="hero__h1-w2"><em>{t('home.heroH1Highlight')}</em></span>{' '}
            <span className="hero__h1-w3">{t('home.heroH1Suffix')}</span>
          </h1>
          <p className="hero__sub">{t('home.heroSub')}</p>
          <nav className="hero__services" aria-label={t('home.heroServices')}>
            <ul>
              {services
                .filter((s) => s.slug !== 'sicherheitsdienst' && s.slug !== 'concierge-und-persoenliche-assistenz')
                .slice(0, 6)
                .map((s) => (
                  <li key={s.slug}>
                    <Link to={`/leistungen/${s.slug}`}>{s.title}</Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* ---------- SIGNATURE: Einsatzprotokoll ---------- */}
      <section className="section--dark dossier">
        <div className="dossier__grid">
          {dossier.map((d) => (
            <Reveal className="dossier__cell" key={d.k}>
              <span className="dossier__k">{d.k}</span>
              <span className="dossier__v">{d.v}</span>
              <span className="dossier__n">{d.n}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- POSITIONING ---------- */}
      <section className="section">
        <div className="wrap split" style={{ alignItems: 'stretch' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className="eyebrow">{t('home.positioningEyebrow')}</p>
            <h2 className="h">{t('home.positioningH2a')}<br />{t('home.positioningH2b')}</h2>
            <img
              src={`${import.meta.env.BASE_URL}images/bco-driver-service.png`}
              alt="Chauffeur der Business Connect Solutions neben einer schwarzen Limousine"
              style={{
                flex: 1,
                minHeight: 0,
                width: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                marginTop: 'clamp(1.5rem, 4vw, 2.5rem)',
              }}
              loading="lazy"
            />
          </div>
          <Reveal>
            <p className="lead">
              {t('home.positioningLead')}
            </p>
            <p className="muted">
              {t('home.positioningMuted1')}
            </p>
            <p className="muted">
              {t('home.positioningMuted2')}
            </p>
            <Link className="btn" to="/fahrer" style={{ marginTop: '1rem' }}>{t('home.ctaQualification')}</Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="section section--band">
        <div className="wrap">
          <p className="eyebrow">{t('home.servicesEyebrow')}</p>
          <h2 className="h">{t('home.servicesH2')}</h2>
          <div className="cards" style={{ background: 'rgba(242,241,237,0.14)', borderColor: 'rgba(242,241,237,0.14)' }}>
            {services.map((s, i) => (
              <Reveal as={Link} to={`/leistungen/${s.slug}`} className="card" key={s.slug} delay={i * 60} style={{ background: 'var(--navy-800)', color: 'var(--paper)' }}>
                <span className="card__code">{s.code}</span>
                <h3 className="h3">{s.title}</h3>
                <span className="card__body" style={{ color: 'rgba(242,241,237,0.72)' }}>{s.teaser}</span>
                <span className="card__more">{t('common.details')}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- REACH ---------- */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">{t('home.reachEyebrow')}</p>
          <h2 className="h">{t('home.reachH2a')}</h2>
          <p className="muted" style={{ maxWidth: '60ch', marginTop: '1rem' }}>
            {t('home.reachText')}
          </p>
          <div className="rail-carousel">
            <button className="rail-nav" aria-label="←" onClick={() => scrollRail(-1)}>‹</button>
            <div className="rail" role="list" ref={railRef}>
              {regions.map((r) => (
                <Link className="rail__item" role="listitem" to={`/anfrage?ziel=${encodeURIComponent(r)}`} key={r}>{r} →</Link>
              ))}
            </div>
            <button className="rail-nav" aria-label="→" onClick={() => scrollRail(1)}>›</button>
          </div>

          <h2 className="h" style={{ marginTop: 'clamp(2rem,5vw,3.5rem)' }}>{t('home.reachH2b')}</h2>
          <div className="rail rail--outline" role="list">
            {worldwide.map((r) => (
              <Link className="rail__item" role="listitem" to={`/anfrage?ziel=${encodeURIComponent(r)}`} key={r}>{r} →</Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FLEET ---------- */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">{t('home.fleetEyebrow')}</p>
          <h2 className="h">{t('home.fleetH2')}</h2>
          <div className="fleet">
            {fleet.map((f, i) => (
              <Reveal className="fleet__card" key={f.name}>
                <div className="fleet__img">
                  {fleetImages[i] ? (
                    <>
                      <img src={fleetImages[i].src} alt={fleetImages[i].alt} style={fleetImages[i].style} loading="lazy" />
                      <span className="fleet__badge">BCO Solutions</span>
                    </>
                  ) : (
                    <div className="fleet__ph">Fahrzeugbild</div>
                  )}
                </div>
                <div className="fleet__body" style={{ background: 'var(--navy-800)', color: 'var(--paper)' }}>
                  <h3 className="h3">{f.name}</h3>
                  <span className="fleet__seats">{f.seats}</span>
                  <p style={{ color: 'rgba(242,241,237,0.72)' }}>{f.text}</p>
                  <Link className="btn btn--ghost" to={`/anfrage?fahrzeug=${encodeURIComponent(f.name)}`}>{t('home.fleetCta')}</Link>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="ondemand" style={{ border: '1px solid rgba(185,148,90,0.4)' }}>
            <p className="eyebrow">{t('home.ondemandEyebrow')}</p>
            <h3 className="h3" style={{ fontSize: 'var(--step-2)', fontWeight: 300 }}>{t('home.ondemandH3')}</h3>
            <p className="muted" style={{ maxWidth: '54ch' }}>
              {t('home.ondemandText')}
            </p>
            <ul className="chips" style={{ listStyle: 'none', padding: 0 }}>
              {onDemand.map((o) => (
                <li className="chip" key={o}>{o}</li>
              ))}
            </ul>
            <Link className="btn btn--brass" to="/anfrage" style={{ marginTop: '1.5rem' }}>{t('home.ondemandCta')}</Link>
          </div>
        </div>
      </section>

      {/* ---------- EVENTS ---------- */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">{t('home.eventsEyebrow')}</p>
          <h2 className="h">{t('home.eventsH2')}<br />{t('home.eventsH2b')}</h2>
          <p className="muted" style={{ maxWidth: '60ch', marginTop: '1rem' }}>
            {t('home.eventsText')}
          </p>
          <div className="events">
            {events.map((e, i) => (
              <Reveal as={Link} to={`/anlaesse/${e.slug}`} className="event event--link" key={e.slug} delay={i * 60}>
                <h3 className="h3">{e.title}</h3>
                <span className="event__date">{e.date}</span>
                <p>{e.text}</p>
                <span className="event__tag">{e.city}</span>
                <span className="event__more">{t('common.details')}</span>
              </Reveal>
            ))}
          </div>
          <Link className="btn" to="/anlaesse" style={{ marginTop: '2rem' }}>{t('home.eventsCta')}</Link>
        </div>
      </section>

      <Faq />
      <AnyQuestions />
    </>
  )
}
