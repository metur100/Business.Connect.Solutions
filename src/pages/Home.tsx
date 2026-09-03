import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Faq from '../components/Faq'
import AnyQuestions from '../components/AnyQuestions'
import {
  dossier,  services, fleet, onDemand,
  regions, worldwide, events, company,
} from '../data/content'

const fleetImages = [
  {
    src: '/images/bco-fleet-e-class.png',
    alt: 'Schwarze Mercedes-Benz E-Klasse für geschäftliche Chauffeurfahrten in München',
  },
  {
    src: '/images/bco-fleet-s-class.png',
    alt: 'Schwarze Mercedes-Benz S-Klasse vor einem eleganten Münchner Hotel',
  },
  {
    src: '/images/bco-fleet-v-class.png',
    alt: 'Schwarze Mercedes-Benz V-Klasse für Gruppen- und Konferenztransfers',
  },
]

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="hero__media">
          {/* Replace /hero.mp4 with the client's own footage. Poster shows until it loads. */}
          <video autoPlay muted loop playsInline poster="/hero-poster.jpg">
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero__scrim" />
        <div className="hero__in">
          <p className="eyebrow" style={{ maxWidth: 460 }}>München · seit 2006 · 24/7</p>
          <h1>
            Ein Fahrer.<br />Nicht eine <em>Flotte</em>.
          </h1>
          <p className="hero__lede">
            Chauffeur- und Sicherheitsfahrer für Vorstände, Delegationen und internationale Gäste.
            Sie buchen keinen Dienstleister, Sie buchen eine feste Ansprechperson.
          </p>
          <div className="hero__cta">
            <Link className="btn btn--brass" to="/kontakt">Fahrt anfragen →</Link>
            <a className="btn btn--ghost" href={company.whatsapp} target="_blank" rel="noopener noreferrer">
              Per WhatsApp schreiben
            </a>
          </div>
          <ul className="chips" style={{ listStyle: 'none', padding: 0 }}>

          </ul>
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
            <p className="eyebrow">Ihr Vorteil</p>
            <h2 className="h">Eine feste<br />Ansprechperson</h2>
            <img
              src="/images/bco-driver-service.png"
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
              Anstelle einer anonymen Fahrzeugflotte erhalten Sie einen persönlichen, fest zugeordneten
              Fahrer – kurze Wege, klare Absprachen, Vertrauen.
            </p>
            <p className="muted">
              Seit über 20 Jahren betreue ich internationale Kunden mit höchstem Anspruch an Diskretion und
              Sicherheit: Vorstände, Delegationen, Privatpersonen und internationale Gäste – unter anderem
              im Rahmen der Münchner Sicherheitskonferenz sowie bei Einsätzen für Regierungsdelegationen im
              In- und Ausland.
            </p>
            <p className="muted">
              Business Connect Solutions betrachtet Mobilität nicht nur als Transport, sondern als
              Operations-, Zeit- und Erlebnismanagement: deutsche Unternehmensdisziplin, verbunden mit
              internationaler operativer Kompetenz.
            </p>
            <Link className="btn" to="/fahrer" style={{ marginTop: '1rem' }}>Qualifikation ansehen →</Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="section section--band">
        <div className="wrap">
          <p className="eyebrow">Leistungen</p>
          <h2 className="h">Was gebucht werden kann</h2>
          <div className="cards" style={{ background: 'rgba(242,241,237,0.14)', borderColor: 'rgba(242,241,237,0.14)' }}>
            {services.map((s) => (
              <Link className="card" to={`/leistungen/${s.slug}`} key={s.slug} style={{ background: 'var(--navy-800)', color: 'var(--paper)' }}>
                <span className="card__code">{s.code}</span>
                <h3 className="h3">{s.title}</h3>
                <span className="card__body" style={{ color: 'rgba(242,241,237,0.72)' }}>{s.teaser}</span>
                <span className="card__more">Details →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- REACH ---------- */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Einsatzgebiet</p>
          <h2 className="h">In München und Deutschland …</h2>
          <p className="muted" style={{ maxWidth: '60ch', marginTop: '1rem' }}>
            Basis ist München. Von hier aus fahren wir zu Terminen, Messen und Konferenzen im gesamten
            Bundesgebiet – auf Wunsch mehrtägig und mit fester Einsatzleitung.
          </p>
          <div className="rail" role="list">
            {regions.map((r) => (
              <span className="rail__item" role="listitem" key={r}>{r} →</span>
            ))}
          </div>

          <h2 className="h" style={{ marginTop: 'clamp(2rem,5vw,3.5rem)' }}>… und rund um die Welt.</h2>
          <div className="rail rail--outline" role="list">
            {worldwide.map((r) => (
              <span className="rail__item" role="listitem" key={r}>{r} →</span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FLEET ---------- */}
      <section className="section section--dark">
        <div className="wrap">
          <p className="eyebrow">Fuhrpark</p>
          <h2 className="h">Limousine, Van oder Konvoi — je nach Anlass</h2>
          <div className="fleet">
            {fleet.map((f, i) => (
              <Reveal className="fleet__card" key={f.name}>
                <div className="fleet__img">
                  {fleetImages[i] ? (
                    <img src={fleetImages[i].src} alt={fleetImages[i].alt} loading="lazy" />
                  ) : (
                    <div className="fleet__ph">Fahrzeugbild</div>
                  )}
                </div>
                <div className="fleet__body" style={{ background: 'var(--navy-800)', color: 'var(--paper)' }}>
                  <h3 className="h3">{f.name}</h3>
                  <span className="fleet__seats">{f.seats}</span>
                  <p style={{ color: 'rgba(242,241,237,0.72)' }}>{f.text}</p>
                  <Link className="btn btn--ghost" to="/kontakt">Anfragen →</Link>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="ondemand" style={{ border: '1px solid rgba(185,148,90,0.4)' }}>
            <p className="eyebrow">Auf Anfrage</p>
            <h3 className="h3" style={{ fontSize: 'var(--step-2)', fontWeight: 300 }}>On demand</h3>
            <p className="muted" style={{ maxWidth: '54ch' }}>
              Diese Fahrzeuge stelle ich auf Anfrage – bitte mit etwas Vorlauf anfragen, damit Wagen und
              Fahrer sicher verfügbar sind.
            </p>
            <ul className="chips" style={{ listStyle: 'none', padding: 0 }}>
              {onDemand.map((o) => (
                <li className="chip" key={o}>{o}</li>
              ))}
            </ul>
            <Link className="btn btn--brass" to="/kontakt" style={{ marginTop: '1.5rem' }}>Fahrzeug anfragen →</Link>
          </div>
        </div>
      </section>

      {/* ---------- EVENTS ---------- */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Anlässe</p>
          <h2 className="h">München hat einen Kalender.<br />Wir planen danach.</h2>
          <p className="muted" style={{ maxWidth: '60ch', marginTop: '1rem' }}>
            Oktoberfest, Münchner Sicherheitskonferenz und internationale Messen kehren jedes Jahr wieder –
            und mit ihnen Sperrungen, ausgebuchte Hotels und knappe Zeitfenster. Wer früh bucht, fährt ruhig.
          </p>
          <div className="events">
            {events.map((e, i) => (
              <Reveal className="event" key={e.title} delay={i * 60}>
                <h3 className="h3">{e.title}</h3>
                <span className="event__date">{e.date}</span>
                <p>{e.text}</p>
                <span className="event__tag">{e.city}</span>
              </Reveal>
            ))}
          </div>
          <Link className="btn" to="/anlaesse" style={{ marginTop: '2rem' }}>Alle Anlässe →</Link>
        </div>
      </section>

      <Faq />
      <AnyQuestions />
    </>
  )
}
