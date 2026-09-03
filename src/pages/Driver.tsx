import { Link } from 'react-router-dom'
import { qualifications, dossier } from '../data/content'
import AnyQuestions from '../components/AnyQuestions'
import Reveal from '../components/Reveal'

export default function Driver() {
  return (
    <>
      <div className="phead">
        <div className="wrap">
          <p className="eyebrow">Chauffeur- und Sicherheitsfahrer</p>

          <h1>
            Ihr persönlicher Fahrer für höchste Sicherheitsansprüche
          </h1>

          <p>
            Seit 2006 als Chauffeur tätig, seit 2012 zusätzlich als
            ausgebildeter Sicherheitsfahrer.
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
              <p className="eyebrow">Zur Person</p>

              <h2 className="h">
                20 Jahre Erfahrung,
                <br />
                persönlich im Einsatz
              </h2>
            </div>

            <Reveal>
              <p className="lead">
                Meine Ausbildung umfasst mehrtägige Fahrsicherheitstrainings
                am Fahrsicherheitszentrum Sachsenring – inklusive Training für
                Sonderschutzfahrzeuge – sowie das Mercedes Guard Programm.
              </p>

              <p className="muted">
                Ich habe über viele Jahre Vorstände, Delegationen,
                Privatpersonen und internationale Gäste sicher begleitet –
                unter anderem im Rahmen der Münchner Sicherheitskonferenz sowie
                bei Einsätzen für Regierungsdelegationen im In- und Ausland.
              </p>

              <p className="muted">
                Seit über 20 Jahren betreue ich internationale Kunden mit
                höchstem Anspruch an Diskretion, Sicherheit und klare
                Kommunikation.
              </p>

              <Link
                className="btn"
                to="/kontakt"
                style={{ marginTop: '1rem' }}
              >
                Gespräch vereinbaren →
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
              src="/images/bco-driver-service.png"
              alt="Professioneller Chauffeur neben einer schwarzen Limousine"
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
                Persönliche Betreuung
              </span>

              <span className="muted">
                Ein Fahrer. Klare Absprachen. Diskretion.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="wrap">
          <p className="eyebrow">Qualifikation</p>

          <h2 className="h">Nachweise und Einsätze</h2>

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