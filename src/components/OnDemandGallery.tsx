import { useEffect, useState } from 'react'
import type { OnDemandImage } from '../data/onDemandImages'

const SWITCH_MS = 1700

export default function OnDemandGallery({ images }: { images: OnDemandImage[] }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % images.length)
    }, SWITCH_MS)
    return () => window.clearInterval(id)
  }, [images.length])

  return (
    <div className="ondemand__media" aria-hidden="true">
      {images.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className={`ondemand__img${i === active ? ' is-active' : ''}`}
          loading="lazy"
        />
      ))}
    </div>
  )
}
