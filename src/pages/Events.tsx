import { events } from '../data/content'
import AnyQuestions from '../components/AnyQuestions'
import Reveal from '../components/Reveal'

export default function Events() {
  return (
    <>
      <div className="phead">
        <div className="wrap">
          <p className="eyebrow">Anlässe</p>
          <h1>München hat einen Kalender. Wir planen danach.</h1>
          <p>
            Oktoberfest, Münchner Sicherheitskonferenz und internationale Messen kehren jedes Jahr wieder.
            Für diese Wochen reservieren wir Fahrzeuge und Fahrer im Voraus.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="events" style={{ marginTop: 0 }}>
            {events.map((e, i) => (
              <Reveal className="event" key={e.title} delay={i * 60}>
                <h2 className="h3">{e.title}</h2>
                <span className="event__date">{e.date}</span>
                <p>{e.text}</p>
                <span className="event__tag">{e.city}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnyQuestions />
    </>
  )
}
