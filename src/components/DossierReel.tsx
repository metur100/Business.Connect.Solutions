import { useEffect, useRef, useState } from 'react'

type DossierItem = { k: string; v: string; n: string }

const AUTOPLAY_MS = 1600

export default function DossierReel({ items, ariaLabel }: { items: DossierItem[]; ariaLabel: string }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const activeRef = useRef(0)

  function goTo(i: number) {
    const clamped = Math.max(0, Math.min(items.length - 1, i))
    activeRef.current = clamped
    setActive(clamped)
  }

  useEffect(() => {
    const track = trackRef.current
    if (track) track.style.transform = `translateY(-${active * 100}%)`
  }, [active])

  // Auto-advance through the slides on a fixed cadence, looping forever.
  // The section scrolls normally — no wheel/touch/keyboard hijacking — this
  // timer is the only thing that changes slides.
  useEffect(() => {
    if (items.length < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => {
      const next = (activeRef.current + 1) % items.length
      activeRef.current = next
      setActive(next)
    }, AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [items.length])

  return (
    <div className="dossier__wrap">
      <div className="dossier__reel" role="region" aria-label={ariaLabel}>
        <div className="dossier__track" ref={trackRef}>
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
    </div>
  )
}
