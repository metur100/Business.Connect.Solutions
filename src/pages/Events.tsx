import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import AnyQuestions from '../components/AnyQuestions'
import Reveal from '../components/Reveal'

export default function Events() {
  const { t, content } = useLanguage()
  const { events } = content
  return (
    <>
      <div className="phead">
        <div className="wrap">
          <p className="eyebrow">{t('events.eyebrow')}</p>
          <h1>{t('events.h1')}</h1>
          <p>{t('events.intro')}</p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="events" style={{ marginTop: 0 }}>
            {events.map((e, i) => (
              <Reveal as={Link} to={`/anlaesse/${e.slug}`} className="event event--link" key={e.slug} delay={i * 60}>
                <h2 className="h3">{e.title}</h2>
                <span className="event__date">{e.date}</span>
                <p>{e.text}</p>
                <span className="event__tag">{e.city}</span>
                <span className="event__more">{t('common.details')}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnyQuestions />
    </>
  )
}
