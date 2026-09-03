import { useState } from 'react'
import { faqs } from '../data/content'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section" id="faq">
      <div className="wrap">
        <p className="eyebrow">Häufige Fragen</p>
        <h2 className="h">Was Kunden vor der ersten Fahrt wissen wollen</h2>

        <div className="faq">
          {faqs.map((f, i) => (
            <div className="faq__item" key={f.q}>
              <h3 style={{ margin: 0 }}>
                <button
                  className="faq__q"
                  aria-expanded={open === i}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  {f.q}
                </button>
              </h3>
              {open === i && (
                <div className="faq__a" id={`faq-a-${i}`}>
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
