import { Link } from 'react-router-dom'
import { fleet, onDemand } from '../data/content'
import AnyQuestions from '../components/AnyQuestions'
import Reveal from '../components/Reveal'

const fleetImages = [
  {
    src: `${import.meta.env.BASE_URL}images/bco-fleet-e-class.png`,
    alt: 'Schwarze Mercedes-Benz E-Klasse für geschäftliche Chauffeurfahrten in München',
  },
  {
    src: `${import.meta.env.BASE_URL}images/bco-fleet-s-class.png`,
    alt: 'Schwarze Mercedes-Benz S-Klasse vor einem eleganten Münchner Hotel',
  },
  {
    src: `${import.meta.env.BASE_URL}images/bco-fleet-v-class.png`,
    alt: 'Schwarze Mercedes-Benz V-Klasse für Gruppen- und Konferenztransfers',
  },
]

export default function Fleet() {
  return (
    <>
      <div className="phead">
        <div className="wrap">
          <p className="eyebrow">Fuhrpark</p>

          <h1>Limousine, Van oder Konvoi</h1>

          <p>
            Die Standardfahrzeuge stehen bereit. Alles darüber hinaus – vom Maybach bis zum Reisebus –
            beschaffe ich auf Anfrage.
          </p>
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
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                      />
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

                    <Link className="btn" to="/kontakt">
                      Fahrzeug anfragen →
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
            <p className="eyebrow">Auf Anfrage</p>

            <h2
              className="h3"
              style={{
                fontSize: 'var(--step-2)',
                fontWeight: 300,
              }}
            >
              On demand
            </h2>

            <p className="muted" style={{ maxWidth: '54ch' }}>
              Diese Fahrzeuge stelle ich auf Anfrage bereit. Bitte planen Sie etwas Vorlauf ein,
              damit Fahrzeug und Fahrer sicher verfügbar sind.
            </p>

            <ul
              className="chips"
              style={{
                listStyle: 'none',
                padding: 0,
              }}
            >
              {onDemand.map((vehicle) => (
                <li className="chip" key={vehicle}>
                  {vehicle}
                </li>
              ))}
            </ul>

            <Link
              className="btn btn--brass"
              to="/kontakt"
              style={{ marginTop: '1.5rem' }}
            >
              Fahrzeug anfragen →
            </Link>
          </div>
        </div>
      </section>

      <AnyQuestions />
    </>
  )
}