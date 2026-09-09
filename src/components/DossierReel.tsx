import { useEffect, useRef, useState } from 'react'

type DossierItem = { k: string; v: string; n: string }

// Wheel/touch step size and cooldown for advancing exactly one slide per
// gesture. Native `overflow-y: auto` + `scroll-snap-type: mandatory` used to
// drive this, but a mandatory snap container can revert an isolated scroll
// gesture (a single mouse-wheel notch, a touch drag with no follow-through)
// back to where it started instead of committing to the next slide — which
// reads as the whole section scrolling far slower than the rest of the page,
// on both desktop and mobile. Driving the step explicitly avoids that: the
// track is never a scrollable box, so at the first/last slide an unclaimed
// wheel/touch gesture just falls through to native page scroll, with full
// native speed and momentum, same as everywhere else on the page.
const WHEEL_THRESHOLD = 12
const SWIPE_THRESHOLD = 50
const NAV_COOLDOWN_MS = 550

export default function DossierReel({ items, ariaLabel }: { items: DossierItem[]; ariaLabel: string }) {
  const reelRef = useRef<HTMLDivElement>(null)
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

  useEffect(() => {
    const reelNode = reelRef.current
    const trackNode = trackRef.current
    if (!reelNode || !trackNode) return
    // Re-bind to non-nullable locals: TS doesn't retain the null-check
    // narrowing above across the closures captured by the listeners below.
    const reel: HTMLDivElement = reelNode
    const track: HTMLDivElement = trackNode

    function normalizeDelta(e: WheelEvent) {
      if (e.deltaMode === 1) return e.deltaY * 16
      if (e.deltaMode === 2) return e.deltaY * window.innerHeight
      return e.deltaY
    }

    let lastNav = 0
    function onWheel(e: WheelEvent) {
      const deltaY = normalizeDelta(e)
      if (Math.abs(deltaY) < WHEEL_THRESHOLD) return
      const next = activeRef.current + (deltaY > 0 ? 1 : -1)
      if (next < 0 || next > items.length - 1) return // let it fall through to page scroll
      e.preventDefault()
      const now = performance.now()
      if (now - lastNav < NAV_COOLDOWN_MS) return
      lastNav = now
      goTo(next)
    }

    let touchStartY = 0
    let dragging = false
    let dragDelta = 0

    function onTouchStart(e: TouchEvent) {
      touchStartY = e.touches[0].clientY
      dragDelta = 0
      dragging = false
    }
    function onTouchMove(e: TouchEvent) {
      const y = e.touches[0].clientY
      const delta = touchStartY - y
      if (!dragging) {
        if (delta === 0) return
        const dir = delta > 0 ? 1 : -1
        const next = activeRef.current + dir
        if (next < 0 || next > items.length - 1) return // let native page scroll take this gesture
        dragging = true
      }
      e.preventDefault()
      dragDelta = Math.max(-reel.clientHeight, Math.min(reel.clientHeight, delta))
      track.style.transition = 'none'
      track.style.transform = `translateY(calc(-${activeRef.current * 100}% - ${dragDelta}px))`
    }
    function onTouchEnd() {
      if (!dragging) return
      track.style.transition = ''
      if (Math.abs(dragDelta) > SWIPE_THRESHOLD) {
        goTo(activeRef.current + (dragDelta > 0 ? 1 : -1))
      } else {
        track.style.transform = `translateY(-${activeRef.current * 100}%)`
      }
      dragging = false
      dragDelta = 0
    }

    reel.addEventListener('wheel', onWheel, { passive: false })
    reel.addEventListener('touchstart', onTouchStart, { passive: true })
    reel.addEventListener('touchmove', onTouchMove, { passive: false })
    reel.addEventListener('touchend', onTouchEnd, { passive: true })
    reel.addEventListener('touchcancel', onTouchEnd, { passive: true })
    return () => {
      reel.removeEventListener('wheel', onWheel)
      reel.removeEventListener('touchstart', onTouchStart)
      reel.removeEventListener('touchmove', onTouchMove)
      reel.removeEventListener('touchend', onTouchEnd)
      reel.removeEventListener('touchcancel', onTouchEnd)
    }
  }, [items.length])

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); goTo(active + 1) }
    else if (e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); goTo(active - 1) }
    else if (e.key === 'Home') { e.preventDefault(); goTo(0) }
    else if (e.key === 'End') { e.preventDefault(); goTo(items.length - 1) }
  }

  return (
    <div className="dossier__wrap">
      <div
        className="dossier__reel"
        ref={reelRef}
        tabIndex={0}
        role="region"
        aria-label={ariaLabel}
        onKeyDown={onKeyDown}
      >
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
      <span className="dossier__count" aria-hidden="true">
        {String(active + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
      </span>
    </div>
  )
}
