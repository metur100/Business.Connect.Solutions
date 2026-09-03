import { Link } from 'react-router-dom'
import { services, solutions } from '../data/content'
import AnyQuestions from '../components/AnyQuestions'
import Reveal from '../components/Reveal'

export default function Services() {
  return (
    <>
      <div className="phead">
        <div className="wrap">
          <p className="eyebrow">Leistungen</p>
          <h1>Sieben Leistungen, ein Ansprechpartner</h1>
          <p>
            Jede Leistung lässt sich einzeln buchen oder als Teil einer durchgeplanten Reise kombinieren.
            Die Koordination bleibt in einer Hand.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="cards" style={{ marginTop: 0 }}>
            {services.map((s) => (
              <Link className="card" to={`/leistungen/${s.slug}`} key={s.slug}>
                <span className="card__code">{s.code}</span>
                <h2 className="h3">{s.title}</h2>
                <span className="card__body">{s.teaser}</span>
                <span className="card__more">Details →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--band">
        <div className="wrap">
          <p className="eyebrow">Lösungen</p>
          <h2 className="h">Für wiederkehrende Anforderungen</h2>
          <div className="cards" style={{ background: 'rgba(242,241,237,0.14)', borderColor: 'rgba(242,241,237,0.14)' }}>
            {solutions.map((s) => (
              <Reveal className="card" key={s.title}>
                <h3 className="h3">{s.title}</h3>
                <p className="muted" style={{ marginTop: '0.6rem' }}>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnyQuestions />
    </>
  )
}
