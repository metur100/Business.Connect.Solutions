import { Link, useParams } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import AnyQuestions from '../components/AnyQuestions'
import Seo, { SITE_URL } from '../components/Seo'

export default function EventDetail() {
  const { slug } = useParams()
  const { t, content } = useLanguage()
  const event = content.events.find((e) => e.slug === slug)

  if (!event) {
    return (
      <section className="section">
        <Seo title={t('seo.notFound.title')} description={t('seo.notFound.description')} path={`/anlaesse/${slug ?? ''}`} noindex />
        <div className="wrap">
          <h1 className="h">{t('eventDetail.notFoundH1')}</h1>
          <p className="muted">{t('eventDetail.notFoundText')}</p>
          <Link className="btn" to="/anlaesse">{t('eventDetail.backCta')}</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <Seo
        title={`${event.title}${t('seo.eventSuffix')}`}
        description={event.text}
        path={`/anlaesse/${event.slug}`}
        image={`${SITE_URL}/${event.image}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'BCO Solutions', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: t('events.eyebrow'), item: `${SITE_URL}/anlaesse` },
            { '@type': 'ListItem', position: 3, name: event.title, item: `${SITE_URL}/anlaesse/${event.slug}` },
          ],
        }}
      />

      <div className="phead">
        <div className="wrap">
          <p className="eyebrow">{event.date} · {event.city}</p>
          <h1>{event.title}</h1>
          <p>{event.text}</p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <img
            src={`${import.meta.env.BASE_URL}${event.image}`}
            alt={event.title}
            style={{
              width: '100%',
              aspectRatio: '16 / 8',
              objectFit: 'cover',
              objectPosition: 'center',
              marginBottom: 'clamp(2rem, 5vw, 3.5rem)',
            }}
            loading="lazy"
          />

          <div className="split">
            <div>
              <p className="eyebrow">{t('eventDetail.scheduleEyebrow')}</p>
              <ul className="qual">
                <li><span>{t('eventDetail.dateLabel')}</span><span>{event.date}</span></li>
                <li><span>{t('eventDetail.cityLabel')}</span><span>{event.city}</span></li>
              </ul>
            </div>
            <div>
              {event.body.map((b, i) => (
                <p className={i === 0 ? 'lead' : 'muted'} key={b}>{b}</p>
              ))}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                <Link className="btn" to="/anfrage">{t('eventDetail.cta')}</Link>
                <Link className="btn btn--ghost" to="/anlaesse">{t('eventDetail.allEvents')}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnyQuestions />
    </>
  )
}
