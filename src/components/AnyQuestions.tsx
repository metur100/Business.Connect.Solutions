import { Link } from 'react-router-dom'
import { company } from '../data/company'
import { useLanguage } from '../i18n/LanguageContext'

export default function AnyQuestions() {
  const { t } = useLanguage()
  return (
    <section className="section section--tight">
      <div className="wrap">
        <div className="anyq">
          <p className="eyebrow" style={{ width: '100%' }}>{t('anyQuestions.eyebrow')}</p>
          <h2>{t('anyQuestions.heading')}</h2>
          <p className="muted" style={{ maxWidth: '52ch', margin: 0 }}>
            {t('anyQuestions.text')}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <Link className="btn btn--brass" to="/anfrage">{t('anyQuestions.cta')}</Link>
            <a className="btn btn--ghost" href={company.phoneHref}>{company.phone}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
