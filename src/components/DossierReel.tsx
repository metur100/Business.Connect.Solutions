import { useEffect, useRef, useState } from 'react'

type DossierItem = { k: string; v: string; n: string }

export default function DossierReel({ items, ariaLabel }: { items: DossierItem[]; ariaLabel: string }) {
  const reelRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const reel = reelRef.current
    if (!reel) return
    const slides = Array.from(reel.querySelectorAll<HTMLElement>('.dossier__slide'))
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = slides.indexOf(entry.target as HTMLElement)
            if (idx !== -1) setActive(idx)
          }
        })
      },
      { root: reel, threshold: 0.6 },
    )
    slides.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [items.length])

  function goTo(i: number) {
    const reel = reelRef.current
    if (!reel) return
    const slide = reel.querySelectorAll<HTMLElement>('.dossier__slide')[i]
    if (!slide) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    slide.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
  }

  return (
    <div className="dossier__wrap">
      <div className="dossier__reel" ref={reelRef} tabIndex={0} role="region" aria-label={ariaLabel}>
        {items.map((d) => (
          <div className="dossier__slide" key={d.k}>
            <span className="dossier__k">{d.k}</span>
            <span className="dossier__v">{d.v}</span>
            <span className="dossier__caption">
              <span className="dossier__bar" aria-hidden="true" />
              <span className="dossier__n">{d.n}</span>
            </span>
          </div>
        ))}
      </div>
      <div className="dossier__ticks">
        {items.map((d, i) => (
          <button
            key={d.k}
            type="button"
            className={`dossier__tick ${i === active ? 'is-active' : ''}`}
            aria-label={`${d.k} ${d.v}`}
            aria-current={i === active}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
      <span className="dossier__count" aria-hidden="true">
        {String(active + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
      </span>
    </div>
  )
}
