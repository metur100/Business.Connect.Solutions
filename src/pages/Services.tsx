import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import AnyQuestions from '../components/AnyQuestions'
import Reveal from '../components/Reveal'

export default function Services() {
  const { t, content } = useLanguage()
  const { services, solutions } = content
  return (
    <>
      <div className="phead">
        <div className="wrap">
          <p className="eyebrow">{t('services.eyebrow')}</p>
          <h1>{t('services.h1')}</h1>
          <p>{t('services.intro')}</p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="cards" style={{ marginTop: 0 }}>
            {services.map((s, i) => (
              <Reveal as={Link} to={`/leistungen/${s.slug}`} className="card" key={s.slug} delay={i * 60}>
                <span className="card__code">{s.code}</span>
                <h2 className="h3">{s.title}</h2>
                <span className="card__body">{s.teaser}</span>
                <span className="card__more">{t('common.details')}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--band">
        <div className="wrap">
          <p className="eyebrow">{t('services.solutionsEyebrow')}</p>
          <h2 className="h">{t('services.solutionsH2')}</h2>
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
