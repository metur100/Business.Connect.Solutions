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

  // Native overscroll-chaining (handing scroll off to the page once this
  // panel's own scroll is exhausted) is unreliable across browsers once a
  // mandatory scroll-snap container is involved — it can silently swallow
  // the scroll depending on exactly where the pointer is. Handle the
  // boundary handoff explicitly instead, so it always works the same way.
  useEffect(() => {
    const reel = reelRef.current
    if (!reel) return

    function atBoundary(deltaY: number) {
      const el = reel!
      const atTop = el.scrollTop <= 1
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1
      return (deltaY < 0 && atTop) || (deltaY > 0 && atBottom)
    }

    function onWheel(e: WheelEvent) {
      if (atBoundary(e.deltaY)) {
        e.preventDefault()
        window.scrollBy({ top: e.deltaY, behavior: 'auto' })
      }
    }

    let touchY = 0
    function onTouchStart(e: TouchEvent) {
      touchY = e.touches[0].clientY
    }
    function onTouchMove(e: TouchEvent) {
      const currentY = e.touches[0].clientY
      const deltaY = touchY - currentY
      if (atBoundary(deltaY)) {
        e.preventDefault()
        window.scrollBy({ top: deltaY, behavior: 'auto' })
      }
      touchY = currentY
    }

    reel.addEventListener('wheel', onWheel, { passive: false })
    reel.addEventListener('touchstart', onTouchStart, { passive: true })
    reel.addEventListener('touchmove', onTouchMove, { passive: false })
    return () => {
      reel.removeEventListener('wheel', onWheel)
      reel.removeEventListener('touchstart', onTouchStart)
      reel.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

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
