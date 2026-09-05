import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import AnyQuestions from '../components/AnyQuestions'
import Reveal from '../components/Reveal'

export default function Driver() {
  const { t, content } = useLanguage()
  const { qualifications, dossier } = content

  return (
    <>
      <div className="phead">
        <div className="wrap">
          <p className="eyebrow">{t('driver.eyebrow')}</p>

          <h1>
            {t('driver.h1')}
          </h1>

          <p>
            {t('driver.intro')}
          </p>
        </div>
      </div>

      <section className="section--dark dossier">
        <div className="dossier__grid">
          {dossier.map((item) => (
            <div className="dossier__cell" key={item.k}>
              <span className="dossier__k">{item.k}</span>
              <span className="dossier__v">{item.v}</span>
              <span className="dossier__n">{item.n}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split">
            <div>
              <p className="eyebrow">{t('driver.personEyebrow')}</p>

              <h2 className="h">
                {t('driver.personH2a')}
                <br />
                {t('driver.personH2b')}
              </h2>
            </div>

            <Reveal>
              <p className="lead">
                {t('driver.lead')}
              </p>

              <p className="muted">
                {t('driver.muted1')}
              </p>

              <p className="muted">
                {t('driver.muted2')}
              </p>

              <Link
                className="btn"
                to="/kontakt"
                style={{ marginTop: '1rem' }}
              >
                {t('driver.cta')}
              </Link>
            </Reveal>
          </div>

          <div
            className="driver-image"
            style={{
              marginTop: 'clamp(2.5rem, 6vw, 5rem)',
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/bco-driver-service.png`}
              alt={t('driver.imageAlt')}
              style={{
                width: '100%',
                aspectRatio: '16 / 7',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              loading="lazy"
            />

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '1rem',
                flexWrap: 'wrap',
                paddingTop: '0.8rem',
                borderTop: '1px solid var(--paper-2)',
                marginTop: '0.8rem',
              }}
            >
              <span className="dossier__k">
                {t('driver.personalCare')}
              </span>

              <span className="muted">
                {t('driver.personalCareText')}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="wrap">
          <p className="eyebrow">{t('driver.qualEyebrow')}</p>

          <h2 className="h">{t('driver.qualH2')}</h2>

          <ul
            className="qual"
            style={{ marginTop: '2rem' }}
          >
            {qualifications.map(([label, value]) => (
              <li key={label}>
                <span>{label}</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <AnyQuestions />
    </>
  )
}
