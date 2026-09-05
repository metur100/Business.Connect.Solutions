import { useState, useRef, useEffect, type FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { company } from '../data/company'
import { useLanguage } from '../i18n/LanguageContext'
import { fleetImages } from '../data/fleetImages'
import AnyQuestions from '../components/AnyQuestions'

const emptyForm = {
  occasion: '', date: '', from: '', to: '', passengers: '',
  name: '', email: '', phone: '', message: '',
}

export default function Booking() {
  const { t, content } = useLanguage()
  const { fleet, onDemand, services } = content
  const [searchParams] = useSearchParams()

  const initialVehicle = searchParams.get('fahrzeug')
  const [step, setStep] = useState(() => (initialVehicle ? 2 : 1))
  const [vehicle, setVehicle] = useState<string | null>(initialVehicle)
  const [form, setForm] = useState({ ...emptyForm, to: searchParams.get('ziel') ?? '' })
  const [sent, setSent] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)
  const isInitialMount = useRef(true)

  useEffect(() => {
    const f = searchParams.get('fahrzeug')
    if (f) {
      setVehicle(f)
      setStep(2)
    }
  }, [searchParams])

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      if (initialVehicle && sectionRef.current) {
        const topOffset = sectionRef.current.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top: Math.max(0, topOffset), behavior: 'smooth' })
      }
      return
    }
    if (sectionRef.current) {
      const topOffset = sectionRef.current.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: Math.max(0, topOffset), behavior: 'smooth' })
    }
  }, [step])

  const stepLabels = [t('booking.stepVehicle'), t('booking.stepTrip'), t('booking.stepContact')]

  function update(key: keyof typeof emptyForm, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function choose(name: string) {
    setVehicle(name)
    setStep(2)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const body = [
      `${t('booking.mailVehicle')}: ${vehicle ?? t('booking.noVehicle')}`,
      `${t('booking.mailOccasion')}: ${form.occasion || '-'}`,
      `${t('contact.mailDate')}: ${form.date ? form.date.replace('T', ' ') : '-'}`,
      `${t('contact.mailFrom')}: ${form.from || '-'}`,
      `${t('contact.mailTo')}: ${form.to || '-'}`,
      `${t('booking.mailPassengers')}: ${form.passengers || '-'}`,
      '',
      `${t('contact.mailName')}: ${form.name}`,
      `${t('contact.mailEmail')}: ${form.email}`,
      `${t('contact.mailPhone')}: ${form.phone || '-'}`,
      '',
      `${t('contact.mailMessage')}: ${form.message || '-'}`,
    ].join('\r\n')

    const mailtoUrl =
      `mailto:${company.email}` +
      `?subject=${encodeURIComponent(t('contact.mailSubject'))}` +
      `&body=${encodeURIComponent(body)}`

    const a = document.createElement('a')
    a.href = mailtoUrl
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)

    setSent(true)
  }

  return (
    <>
      <div className="phead">
        <div className="wrap">
          <p className="eyebrow">{t('booking.eyebrow')}</p>
          <h1>{t('booking.h1')}</h1>
          <p>{t('booking.intro')}</p>
        </div>
      </div>

      <section className="section" ref={sectionRef}>
        <div className="wrap">
          <ol className="steps">
            {stepLabels.map((label, i) => {
              const n = i + 1
              const state = n === step ? 'is-current' : n < step ? 'is-done' : ''
              return (
                <li className={`step ${state}`} key={label}>
                  <button type="button" onClick={() => n < step && setStep(n)} disabled={n > step}>
                    <span className="step__n">{String(n).padStart(2, '0')}</span>
                    <span className="step__label">{label}</span>
                  </button>
                </li>
              )
            })}
          </ol>

          {step === 1 && (
            <div className="booking__panel">
              <h2 className="h3">{t('booking.vehicleTitle')}</h2>
              <p className="muted">{t('booking.vehicleHint')}</p>

              <div className="veh-grid">
                {fleet.map((v, i) => (
                  <button
                    type="button"
                    className={`veh ${vehicle === v.name ? 'is-selected' : ''}`}
                    key={v.name}
                    onClick={() => choose(v.name)}
                    aria-pressed={vehicle === v.name}
                  >
                    <span className="veh__img">
                      <img src={fleetImages[i].src} alt="" style={fleetImages[i].style} loading="lazy" />
                    </span>
                    <span className="veh__body">
                      <span className="h3">{v.name}</span>
                      <span className="veh__seats">{v.seats}</span>
                      <span className="veh__text">{v.text}</span>
                      <span className="veh__pick">
                        {vehicle === v.name ? t('booking.selected') : t('booking.select')}
                      </span>
                    </span>
                  </button>
                ))}
              </div>

              <div className="ondemand" style={{ marginTop: '2rem' }}>
                <p className="eyebrow">{t('booking.onDemandTitle')}</p>
                <p className="muted" style={{ maxWidth: '54ch' }}>{t('booking.onDemandHint')}</p>
                <ul className="chips" style={{ listStyle: 'none', padding: 0 }}>
                  {onDemand.map((o) => (
                    <li key={o}>
                      <button
                        type="button"
                        className={`chip chip--pick ${vehicle === o ? 'is-selected' : ''}`}
                        onClick={() => choose(o)}
                        aria-pressed={vehicle === o}
                      >
                        {o}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="booking__nav">
                <button type="button" className="btn btn--ghost" onClick={() => choose(t('booking.undecided'))}>
                  {t('booking.undecided')}
                </button>
                <button type="button" className="btn btn--brass" onClick={() => setStep(2)} disabled={!vehicle}>
                  {t('booking.next')}
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="booking__panel">
              <h2 className="h3">{t('booking.tripTitle')}</h2>

              <div className="form form--wide">
                <div className="field">
                  <label htmlFor="occasion">{t('booking.labelOccasion')}</label>
                  <input
                    id="occasion"
                    list="occasions"
                    value={form.occasion}
                    onChange={(e) => update('occasion', e.target.value)}
                    placeholder={t('booking.occasionPlaceholder')}
                  />
                  <datalist id="occasions">
                    {services.map((s) => <option value={s.title} key={s.slug} />)}
                  </datalist>
                </div>

                <div className="field">
                  <label htmlFor="date">{t('contact.labelDate')}</label>
                  <input id="date" type="datetime-local" value={form.date} onChange={(e) => update('date', e.target.value)} />
                </div>

                <div className="field">
                  <label htmlFor="from">{t('contact.labelFrom')}</label>
                  <input id="from" value={form.from} onChange={(e) => update('from', e.target.value)} placeholder={t('contact.fromPlaceholder')} />
                </div>

                <div className="field">
                  <label htmlFor="to">{t('contact.labelTo')}</label>
                  <input id="to" value={form.to} onChange={(e) => update('to', e.target.value)} placeholder={t('contact.toPlaceholder')} />
                </div>

                <div className="field">
                  <label htmlFor="passengers">{t('booking.labelPassengers')}</label>
                  <input id="passengers" type="number" min="1" max="60" value={form.passengers} onChange={(e) => update('passengers', e.target.value)} />
                </div>
              </div>

              <div className="booking__nav">
                <button type="button" className="btn btn--ghost" onClick={() => setStep(1)}>{t('booking.back')}</button>
                <button type="button" className="btn btn--brass" onClick={() => setStep(3)}>{t('booking.next')}</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="booking__panel">
              <h2 className="h3">{t('booking.contactTitle')}</h2>

              {sent && <p className="lead" style={{ color: 'var(--brass)' }}>{t('contact.sentMessage')}</p>}

              <div className="booking__summary">
                <p className="eyebrow">{t('booking.summary')}</p>
                <ul className="qual">
                  <li><span>{t('booking.summaryVehicle')}</span><span>{vehicle ?? t('booking.noVehicle')}</span></li>
                  {form.occasion && <li><span>{t('booking.labelOccasion')}</span><span>{form.occasion}</span></li>}
                  {form.date && <li><span>{t('contact.labelDate')}</span><span>{form.date.replace('T', ' · ')}</span></li>}
                  {(form.from || form.to) && <li><span>{t('contact.labelFrom')}</span><span>{form.from} → {form.to}</span></li>}
                  {form.passengers && <li><span>{t('booking.labelPassengers')}</span><span>{form.passengers}</span></li>}
                </ul>
              </div>

              <form className="form form--wide" onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="name">{t('contact.labelName')}</label>
                  <input id="name" required autoComplete="name" value={form.name} onChange={(e) => update('name', e.target.value)} />
                </div>

                <div className="field">
                  <label htmlFor="email">{t('contact.labelEmail')}</label>
                  <input id="email" type="email" required autoComplete="email" value={form.email} onChange={(e) => update('email', e.target.value)} />
                </div>

                <div className="field">
                  <label htmlFor="phone">{t('contact.labelPhone')}</label>
                  <input id="phone" type="tel" autoComplete="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} />
                </div>

                <div className="field field--full">
                  <label htmlFor="message">{t('contact.labelMessage')}</label>
                  <textarea id="message" rows={5} value={form.message} onChange={(e) => update('message', e.target.value)} placeholder={t('contact.messagePlaceholder')} />
                </div>

                <div className="booking__nav field--full">
                  <button type="button" className="btn btn--ghost" onClick={() => setStep(2)}>{t('booking.back')}</button>
                  <button type="submit" className="btn btn--brass">{t('contact.submitCta')}</button>
                </div>

                <p className="form__note field--full">{t('contact.formNote')}</p>
              </form>
            </div>
          )}

          <p className="muted" style={{ marginTop: '2.5rem' }}>
            <Link to="/kontakt">{t('nav.kontakt')} →</Link>
          </p>
        </div>
      </section>

      <AnyQuestions />
    </>
  )
}
