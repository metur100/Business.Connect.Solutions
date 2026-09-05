import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { fleetImages } from '../data/fleetImages'
import AnyQuestions from '../components/AnyQuestions'
import Reveal from '../components/Reveal'

export default function Fleet() {
  const { t, content } = useLanguage()
  const { fleet, onDemand } = content
  return (
    <>
      <div className="phead">
        <div className="wrap">
          <p className="eyebrow">{t('fleet.eyebrow')}</p>

          <h1>{t('fleet.h1')}</h1>

          <p>{t('fleet.intro')}</p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="fleet" style={{ marginTop: 0 }}>
            {fleet.map((vehicle, index) => {
              const image = fleetImages[index]

              return (
                <Reveal className="fleet__card" key={vehicle.name}>
                  <div className="fleet__img">
                    {image ? (
                      <>
                        <img
                          src={image.src}
                          alt={image.alt}
                          style={image.style}
                          loading="lazy"
                        />
                        <span className="fleet__badge">BCO Solutions</span>
                      </>
                    ) : (
                      <div className="fleet__ph">Fahrzeugbild</div>
                    )}
                  </div>

                  <div className="fleet__body">
                    <h2 className="h3">{vehicle.name}</h2>

                    <span className="fleet__seats">
                      {vehicle.seats}
                    </span>

                    <p>{vehicle.text}</p>

                    <Link className="btn" to={`/anfrage?fahrzeug=${encodeURIComponent(vehicle.name)}`}>
                      {t('fleet.cta')}
                    </Link>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <div
            className="ondemand"
            style={{
              marginTop: '2rem',
              border: '1px solid rgba(185, 148, 90, 0.4)',
            }}
          >
            <p className="eyebrow">{t('fleet.ondemandEyebrow')}</p>

            <h2
              className="h3"
              style={{
                fontSize: 'var(--step-2)',
                fontWeight: 300,
              }}
            >
              {t('fleet.ondemandH2')}
            </h2>

            <p className="muted" style={{ maxWidth: '54ch' }}>
              {t('fleet.ondemandText')}
            </p>

            <ul
              className="chips"
              style={{
                listStyle: 'none',
                padding: 0,
              }}
            >
              {onDemand.map((vehicle) => (
                <li key={vehicle}>
                  <Link
                    className="chip"
                    to={`/anfrage?fahrzeug=${encodeURIComponent(vehicle)}`}
                  >
                    {vehicle}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              className="btn btn--brass"
              to="/anfrage"
              style={{ marginTop: '1.5rem' }}
            >
              {t('fleet.cta')}
            </Link>
          </div>
        </div>
      </section>

      <AnyQuestions />
    </>
  )
}