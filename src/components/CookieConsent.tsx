import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { grantAnalyticsConsent, denyAnalyticsConsent } from '../lib/analytics'

const STORAGE_KEY = 'bco-cookie-consent'

type Consent = 'granted' | 'denied'

function getStoredConsent(): Consent | null {
  if (typeof window === 'undefined') return null
  const value = window.localStorage.getItem(STORAGE_KEY)
  return value === 'granted' || value === 'denied' ? value : null
}

export default function CookieConsent() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = getStoredConsent()
    // Consent Mode defaults are re-applied by index.html on every load, so a
    // returning visitor's earlier "granted" choice needs to be reapplied here.
    if (stored === 'granted') grantAnalyticsConsent()
    else if (stored === null) setVisible(true)
  }, [])

  function choose(consent: Consent) {
    window.localStorage.setItem(STORAGE_KEY, consent)
    if (consent === 'granted') grantAnalyticsConsent()
    else denyAnalyticsConsent()
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-consent" role="region" aria-label={t('cookieConsent.aria')}>
      <div className="cookie-consent__in">
        <p className="cookie-consent__text">
          {t('cookieConsent.text')}{' '}
          <Link to="/cookie-richtlinie">{t('cookieConsent.link')}</Link>.
        </p>
        <div className="cookie-consent__actions">
          <button type="button" className="btn btn--ghost" onClick={() => choose('denied')}>
            {t('cookieConsent.decline')}
          </button>
          <button type="button" className="btn btn--brass" onClick={() => choose('granted')}>
            {t('cookieConsent.accept')}
          </button>
        </div>
      </div>
    </div>
  )
}
