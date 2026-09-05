import type { ReactNode } from 'react'
import { legalDocs, type LegalBlock } from '../data/legal'
import { useLanguage } from '../i18n/LanguageContext'

function render(blocks: LegalBlock[]) {
  const out: ReactNode[] = []
  let list: string[] = []

  const flush = () => {
    if (!list.length) return
    out.push(
      <ul key={`ul-${out.length}`}>
        {list.map((text, n) => <li key={n}>{text}</li>)}
      </ul>,
    )
    list = []
  }

  blocks.forEach((block, i) => {
    if (block.type === 'li') { list.push(block.text); return }
    flush()
    if (block.type === 'h') out.push(<h2 key={i}>{block.text}</h2>)
    else if (block.type === 'addr') out.push(<p className="legal__addr" key={i}>{block.text}</p>)
    else out.push(<p key={i}>{block.text}</p>)
  })
  flush()
  return out
}

export default function Legal({ docKey }: { docKey: keyof typeof legalDocs }) {
  const { t, lang } = useLanguage()
  const doc = legalDocs[docKey]
  const note = lang === 'en' ? t('legal.note') : ''

  return (
    <>
      <div className="phead">
        <div className="wrap">
          <p className="eyebrow">{t('legal.eyebrow')}</p>
          <h1>{doc.title}</h1>
          {note && <p>{note}</p>}
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <article className="legal">{render(doc.blocks)}</article>

          <a
            className="btn btn--ghost"
            href={`${import.meta.env.BASE_URL}${doc.pdf}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: '2.5rem' }}
          >
            {t('legal.pdfLink')}
          </a>
        </div>
      </section>
    </>
  )
}
