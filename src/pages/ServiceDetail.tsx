import { Link, useParams } from 'react-router-dom'
import { services } from '../data/content'
import AnyQuestions from '../components/AnyQuestions'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <section className="section">
        <div className="wrap">
          <h1 className="h">Diese Leistung gibt es nicht</h1>
          <p className="muted">Der Link führt ins Leere. Zurück zur Übersicht aller Leistungen.</p>
          <Link className="btn" to="/leistungen">Alle Leistungen →</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <div className="phead">
        <div className="wrap">
          <p className="eyebrow">{service.code} · Leistung</p>
          <h1>{service.title}</h1>
          <p>{service.teaser}</p>
        </div>
      </div>

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Umfang</p>
            <ul className="qual">
              {service.points.map((p) => (
                <li key={p}>
                  <span>—</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {service.body.map((b) => (
              <p className={b === service.body[0] ? 'lead' : 'muted'} key={b}>{b}</p>
            ))}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              <Link className="btn" to="/kontakt">Diese Leistung anfragen →</Link>
              <Link className="btn btn--ghost" to="/leistungen">Alle Leistungen</Link>
            </div>
          </div>
        </div>
      </section>

      <AnyQuestions />
    </>
  )
}
