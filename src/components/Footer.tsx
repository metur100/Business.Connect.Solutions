import { Link } from 'react-router-dom'
import { company, services } from '../data/content'

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr__grid">
          <div>
            <h4>Kontakt</h4>
            <ul>
              <li><a href={company.phoneHref}>{company.phone}</a></li>
              <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
              <li><a href={company.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li style={{ marginTop: '0.5rem', lineHeight: 1.5 }}>
                {company.street}<br />{company.city}<br />{company.country}
              </li>
            </ul>
          </div>

          <div>
            <h4>Leistungen</h4>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/leistungen/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Seiten</h4>
            <ul>
              <li><Link to="/leistungen">Leistungen</Link></li>
              <li><Link to="/fahrer">Ihr Fahrer</Link></li>
              <li><Link to="/flotte">Flotte</Link></li>
              <li><Link to="/anlaesse">Anlässe in München</Link></li>
              <li><Link to="/kontakt">Anfrage & Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h4>Folgen</h4>
            <ul>
              <li><a href={company.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href={company.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href={company.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
            <h4 style={{ marginTop: '1.75rem' }}>Rechtliches</h4>
            <ul>
              <li><a href="/impressum">Impressum</a></li>
              <li><a href="/datenschutz">Datenschutz</a></li>
              <li><a href="/agb">AGB</a></li>
            </ul>
          </div>
        </div>

        <div className="ftr__bottom">
          <span>© {new Date().getFullYear()} {company.legal}</span>
          <span>Professionelle Mobilität — Globale Standards</span>
        </div>
      </div>
    </footer>
  )
}
