import { Link } from 'react-router-dom'
import { company } from '../data/company'
import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t, content } = useLanguage()
  const { services } = content
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr__grid">
          <div>
            <h4>{t('footer.contact')}</h4>
            <ul>
              <li><a href={company.phoneHref}>{company.phone}</a></li>
              <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
              <li><a href={company.whatsapp} target="_blank" rel="noopener noreferrer">{t('footer.whatsapp')}</a></li>
              <li style={{ marginTop: '0.5rem', lineHeight: 1.5 }}>
                {company.street}<br />{company.city}<br />{company.country}
              </li>
            </ul>
          </div>

          <div>
            <h4>{t('footer.services')}</h4>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/leistungen/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{t('footer.pages')}</h4>
            <ul>
              <li><Link to="/leistungen">{t('footer.services')}</Link></li>
              <li><Link to="/fahrer">{t('footer.driverPage')}</Link></li>
              <li><Link to="/flotte">{t('footer.fleetPage')}</Link></li>
              <li><Link to="/anlaesse">{t('footer.eventsPage')}</Link></li>
              <li><Link to="/anfrage">{t('footer.bookingPage')}</Link></li>
              <li><Link to="/kontakt">{t('footer.contactPage')}</Link></li>
            </ul>
          </div>

          <div>
            <h4>{t('footer.follow')}</h4>
            <ul>
              <li><a href={company.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href={company.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href={company.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
            <h4 style={{ marginTop: '1.75rem' }}>{t('footer.legal')}</h4>
            <ul>
              <li><Link to="/impressum">{t('footer.impressum')}</Link></li>
              <li><Link to="/datenschutz">{t('footer.datenschutz')}</Link></li>
              <li><Link to="/agb">{t('footer.agb')}</Link></li>
              <li><Link to="/cookie-richtlinie">{t('footer.cookies')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="ftr__bottom">
          <span>© {new Date().getFullYear()} {company.legal}</span>
          <span>{t('footer.tagline')}</span>
        </div>
      </div>
    </footer>
  )
}
