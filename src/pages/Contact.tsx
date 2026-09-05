import { useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { company } from '../data/company'
import { useLanguage } from '../i18n/LanguageContext'
import Faq from '../components/Faq'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [searchParams] = useSearchParams()
  const ziel = searchParams.get('ziel') ?? ''
  const { t, content } = useLanguage()
  const { services } = content

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const body = [
      `${t('contact.mailName')}: ${formData.get('name')}`,
      `${t('contact.mailEmail')}: ${formData.get('email')}`,
      `${t('contact.mailPhone')}: ${formData.get('phone')}`,
      `${t('contact.mailService')}: ${formData.get('service')}`,
      `${t('contact.mailDate')}: ${formData.get('date')}`,
      `${t('contact.mailFrom')}: ${formData.get('from')}`,
      `${t('contact.mailTo')}: ${formData.get('to')}`,
      '',
      `${t('contact.mailMessage')}: ${formData.get('message')}`,
    ].join('\n')

    const mailtoUrl =
      `mailto:${company.email}` +
      `?subject=${encodeURIComponent(t('contact.mailSubject'))}` +
      `&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl
    setSent(true)
  }

  return (
    <>
      <div className="phead">
        <div className="wrap">
          <p className="eyebrow">{t('contact.eyebrow')}</p>

          <h1>{t('contact.h1')}</h1>

          <p>
            {t('contact.intro')}
          </p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="split" style={{ alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p className="eyebrow">{t('contact.directEyebrow')}</p>

              <ul className="qual">
                <li>
                  <span>{t('contact.phone')}</span>
                  <span>
                    <a href={company.phoneHref}>{company.phone}</a>
                  </span>
                </li>

                <li>
                  <span>{t('contact.whatsapp')}</span>
                  <span>
                    <a
                      href={company.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('contact.whatsappCta')}
                    </a>
                  </span>
                </li>

                <li>
                  <span>{t('contact.email')}</span>
                  <span>
                    <a href={`mailto:${company.email}`}>
                      {company.email}
                    </a>
                  </span>
                </li>

                <li>
                  <span>{t('contact.address')}</span>
                  <span>
                    {company.street}, {company.city}
                  </span>
                </li>

                <li>
                  <span>{t('contact.hours')}</span>
                  <span>{t('contact.hoursValue')}</span>
                </li>

                <li>
                  <span>{t('contact.languages')}</span>
                  <span>{t('contact.languagesValue')}</span>
                </li>
              </ul>

              <div
                className="anyq"
                style={{
                  marginTop: '2rem',
                  padding: '1.75rem',
                  flex: 1,
                  alignContent: 'space-between',
                }}
              >
                <div style={{ display: 'grid', gap: '1.25rem' }}>
                  <p className="eyebrow" style={{ width: '100%' }}>
                    {t('contact.personalEyebrow')}
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
                    {t('contact.personalH2')}
                  </h2>

                  <p
                    className="muted"
                    style={{
                      margin: 0,
                      maxWidth: '42ch',
                    }}
                  >
                    {t('contact.personalText')}
                  </p>
                </div>

                <a
                  className="btn btn--brass"
                  href={company.phoneHref}
                >
                  {t('contact.callCta')}
                </a>
              </div>
            </div>

            <div>
              <p className="eyebrow">{t('contact.formEyebrow')}</p>

              {sent && (
                <p
                  className="lead"
                  style={{ color: 'var(--brass)' }}
                >
                  {t('contact.sentMessage')}
                </p>
              )}

              <form
                className="form"
                onSubmit={handleSubmit}
              >
                <div className="field">
                  <label htmlFor="name">{t('contact.labelName')}</label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                  />
                </div>

                <div className="field">
                  <label htmlFor="email">{t('contact.labelEmail')}</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="field">
                  <label htmlFor="phone">{t('contact.labelPhone')}</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                  />
                </div>

                <div className="field">
                  <label htmlFor="service">{t('contact.labelService')}</label>

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

                    <option value={t('contact.otherOption')}>
                      {t('contact.otherOption')}
                    </option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="date">
                    {t('contact.labelDate')}
                  </label>

                  <input
                    id="date"
                    name="date"
                    type="datetime-local"
                  />
                </div>

                <div className="field">
                  <label htmlFor="from">{t('contact.labelFrom')}</label>

                  <input
                    id="from"
                    name="from"
                    placeholder={t('contact.fromPlaceholder')}
                  />
                </div>

                <div className="field">
                  <label htmlFor="to">{t('contact.labelTo')}</label>

                  <input
                    id="to"
                    name="to"
                    placeholder={t('contact.toPlaceholder')}
                    defaultValue={ziel}
                  />
                </div>

                <div className="field">
                  <label htmlFor="message">{t('contact.labelMessage')}</label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder={t('contact.messagePlaceholder')}
                  />
                </div>

                <button
                  className="btn btn--brass"
                  type="submit"
                >
                  {t('contact.submitCta')}
                </button>

                <p className="form__note">
                  {t('contact.formNote')}
                </p>
              </form>
            </div>
          </div>

          <div style={{ marginTop: 'clamp(3rem, 6vw, 5rem)' }}>
            <p className="eyebrow">{t('contact.locationEyebrow')}</p>

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
                  alignItems: 'flex-end',
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
                    {t('contact.officeLabel')}
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
                  style={{ marginLeft: 'auto' }}
                >
                  {t('contact.routeCta')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq />
    </>
  )
}
