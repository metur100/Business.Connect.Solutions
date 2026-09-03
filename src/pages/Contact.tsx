import { useState, type FormEvent } from 'react'
import { company, services } from '../data/content'
import Faq from '../components/Faq'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const body = [
      `Name: ${formData.get('name')}`,
      `E-Mail: ${formData.get('email')}`,
      `Telefon: ${formData.get('phone')}`,
      `Leistung: ${formData.get('service')}`,
      `Datum und Uhrzeit: ${formData.get('date')}`,
      `Abholort: ${formData.get('from')}`,
      `Ziel: ${formData.get('to')}`,
      '',
      `Nachricht: ${formData.get('message')}`,
    ].join('\n')

    const mailtoUrl =
      `mailto:${company.email}` +
      `?subject=${encodeURIComponent(
        'Fahrtanfrage über bcosolution.com',
      )}` +
      `&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl
    setSent(true)
  }

  return (
    <>
      <div className="phead">
        <div className="wrap">
          <p className="eyebrow">Kontakt</p>

          <h1>Fahrt anfragen</h1>

          <p>
            Sagen Sie, wann und wohin. Sie bekommen eine verbindliche
            Bestätigung mit Fahrer, Fahrzeug und Zeitfenster – bei kurzfristigen
            Anfragen am schnellsten per Telefon oder WhatsApp.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Direkt erreichbar</p>

            <ul className="qual">
              <li>
                <span>Telefon</span>
                <span>
                  <a href={company.phoneHref}>{company.phone}</a>
                </span>
              </li>

              <li>
                <span>WhatsApp</span>
                <span>
                  <a
                    href={company.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat öffnen
                  </a>
                </span>
              </li>

              <li>
                <span>E-Mail</span>
                <span>
                  <a href={`mailto:${company.email}`}>
                    {company.email}
                  </a>
                </span>
              </li>

              <li>
                <span>Adresse</span>
                <span>
                  {company.street}, {company.city}
                </span>
              </li>

              <li>
                <span>Zeiten</span>
                <span>24 Stunden, 7 Tage die Woche</span>
              </li>

              <li>
                <span>Sprachen</span>
                <span>Deutsch, Englisch, Türkisch</span>
              </li>
            </ul>

            <div
              className="anyq"
              style={{
                marginTop: '2rem',
                padding: '1.75rem',
              }}
            >
              <p className="eyebrow" style={{ width: '100%' }}>
                Persönlich erreichbar
              </p>

              <h2
                style={{
                  fontFamily: 'var(--ff-display)',
                  fontSize: 'var(--step-2)',
                  fontWeight: 300,
                  lineHeight: 1.05,
                  margin: 0,
                }}
              >
                Keine anonyme Zentrale.
              </h2>

              <p
                className="muted"
                style={{
                  margin: 0,
                  maxWidth: '42ch',
                }}
              >
                Ihre Anfrage landet direkt bei der Person, die den Einsatz
                plant und begleitet. Dadurch bleiben Wege kurz und Absprachen
                klar – auch wenn sich der Termin kurzfristig ändert.
              </p>

              <a
                className="btn btn--brass"
                href={company.phoneHref}
              >
                Jetzt anrufen →
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow">Standort</p>

            <div
              style={{
                background: 'var(--white)',
                border: '1px solid var(--paper-2)',
              }}
            >
              <iframe
                title="Standort von BCO Solutions in Neubiberg bei München"
                src="https://www.google.com/maps?q=Professor-Messerschmitt-Stra%C3%9Fe%203a%2C%2085579%20Neubiberg%20bei%20M%C3%BCnchen&output=embed"
                style={{
                  display: 'block',
                  width: '100%',
                  minHeight: '360px',
                  border: 0,
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <p
                    className="dossier__k"
                    style={{ margin: 0 }}
                  >
                    Büro bei München
                  </p>

                  <p
                    style={{
                      margin: '0.5rem 0 0',
                      lineHeight: 1.45,
                    }}
                  >
                    {company.street}
                    <br />
                    {company.city}
                    <br />
                    {company.country}
                  </p>
                </div>

                <a
                  className="btn btn--ghost"
                  href="https://www.google.com/maps/search/?api=1&query=Professor-Messerschmitt-Stra%C3%9Fe%203a%2C%2085579%20Neubiberg%20bei%20M%C3%BCnchen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Route öffnen →
                </a>
              </div>
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <p className="eyebrow">Anfrageformular</p>

              {sent && (
                <p
                  className="lead"
                  style={{ color: 'var(--brass)' }}
                >
                  Ihr E-Mail-Programm hat sich geöffnet. Bitte senden Sie die
                  vorbereitete Nachricht ab.
                </p>
              )}

              <form
                className="form"
                onSubmit={handleSubmit}
              >
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                  />
                </div>

                <div className="field">
                  <label htmlFor="email">E-Mail</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="field">
                  <label htmlFor="phone">Telefon</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                  />
                </div>

                <div className="field">
                  <label htmlFor="service">Leistung</label>

                  <select
                    id="service"
                    name="service"
                    defaultValue={services[0].title}
                  >
                    {services.map((service) => (
                      <option
                        key={service.slug}
                        value={service.title}
                      >
                        {service.title}
                      </option>
                    ))}

                    <option value="Etwas anderes">
                      Etwas anderes
                    </option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="date">
                    Datum und Uhrzeit
                  </label>

                  <input
                    id="date"
                    name="date"
                    type="datetime-local"
                  />
                </div>

                <div className="field">
                  <label htmlFor="from">Abholort</label>

                  <input
                    id="from"
                    name="from"
                    placeholder="z. B. Flughafen München, Terminal 2"
                  />
                </div>

                <div className="field">
                  <label htmlFor="to">Ziel</label>

                  <input
                    id="to"
                    name="to"
                    placeholder="z. B. Hotel Bayerischer Hof"
                  />
                </div>

                <div className="field">
                  <label htmlFor="message">Nachricht</label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Anzahl Gäste, Gepäck, besondere Anforderungen"
                  />
                </div>

                <button
                  className="btn btn--brass"
                  type="submit"
                >
                  Anfrage senden →
                </button>

                <p className="form__note">
                  Ihre Angaben werden ausschliesslich zur Bearbeitung dieser
                  Anfrage verwendet.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Faq />
    </>
  )
}