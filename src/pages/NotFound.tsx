import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

export default function NotFound() {
  const { t } = useLanguage()
  return (
    <section className="section" style={{ minHeight: '60vh' }}>
      <div className="wrap">
        <p className="eyebrow">{t('notFound.eyebrow')}</p>
        <h1 className="h">{t('notFound.h1')}</h1>
        <p className="muted" style={{ maxWidth: '50ch' }}>
          {t('notFound.text')}
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
          <Link className="btn" to="/">{t('notFound.home')}</Link>
          <Link className="btn btn--ghost" to="/kontakt">{t('notFound.book')}</Link>
        </div>
      </div>
    </section>
  )
}
