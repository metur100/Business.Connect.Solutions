import { Link, useParams } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import AnyQuestions from '../components/AnyQuestions'

export default function ServiceDetail() {
  const { slug } = useParams()
  const { t, content } = useLanguage()
  const service = content.services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <section className="section">
        <div className="wrap">
          <h1 className="h">{t('serviceDetail.notFoundH1')}</h1>
          <p className="muted">{t('serviceDetail.notFoundText')}</p>
          <Link className="btn" to="/leistungen">{t('serviceDetail.backCta')}</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <div className="phead">
        <div className="wrap">
          <p className="eyebrow">{service.code} · {t('services.eyebrow')}</p>
          <h1>{service.title}</h1>
          <p>{service.teaser}</p>
        </div>
      </div>

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">{t('serviceDetail.scopeEyebrow')}</p>
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
              <Link className="btn" to="/anfrage">{t('serviceDetail.cta')}</Link>
              <Link className="btn btn--ghost" to="/leistungen">{t('serviceDetail.allServices')}</Link>
            </div>
          </div>
        </div>
      </section>

      <AnyQuestions />
    </>
  )
}
