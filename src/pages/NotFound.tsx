import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: '60vh' }}>
      <div className="wrap">
        <p className="eyebrow">Fehler 404</p>
        <h1 className="h">Diese Seite gibt es nicht</h1>
        <p className="muted" style={{ maxWidth: '50ch' }}>
          Der Link führt ins Leere. Zurück zur Startseite oder direkt zur Anfrage.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
          <Link className="btn" to="/">Zur Startseite</Link>
          <Link className="btn btn--ghost" to="/kontakt">Fahrt anfragen</Link>
        </div>
      </div>
    </section>
  )
}
