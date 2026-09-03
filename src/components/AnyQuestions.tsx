import { Link } from 'react-router-dom'
import { company } from '../data/content'

export default function AnyQuestions() {
  return (
    <section className="section section--tight">
      <div className="wrap">
        <div className="anyq">
          <p className="eyebrow" style={{ width: '100%' }}>Rund um die Uhr</p>
          <h2>Noch Fragen?</h2>
          <p className="muted" style={{ maxWidth: '52ch', margin: 0 }}>
            Kurzfristige Änderung, zusätzlicher Gast, anderer Flughafen: Sie erreichen direkt die Person,
            die auch fährt. Keine Warteschleife, keine Zentrale.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <Link className="btn btn--brass" to="/kontakt">Anfrage senden →</Link>
            <a className="btn btn--ghost" href={company.phoneHref}>{company.phone}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
