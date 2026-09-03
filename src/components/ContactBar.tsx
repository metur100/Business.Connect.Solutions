import { Link } from 'react-router-dom'
import { company } from '../data/content'

export default function ContactBar() {
  return (
    <div className="cbar" role="complementary" aria-label="Direkter Kontakt">
      <a href={company.phoneHref}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.8.6 2.8.8a2 2 0 0 1 1.7 2Z" />
        </svg>
        <span className="cbar__label">{company.phone}</span>
      </a>
      <a href={company.whatsapp} target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.6-1.2a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5 5 0 0 0 1.1 2.7 11.5 11.5 0 0 0 4.4 3.9c1.6.6 2.2.7 3 .6a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3Z" />
        </svg>
        <span className="cbar__label">WhatsApp</span>
      </a>
      <a href={`mailto:${company.email}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <rect x="2.5" y="4.5" width="19" height="15" />
          <path d="m3 6 9 6.5L21 6" />
        </svg>
        <span className="cbar__label">E-Mail</span>
      </a>
      <Link className="cbar__book" to="/kontakt">
        Anfragen →
      </Link>
    </div>
  )
}
