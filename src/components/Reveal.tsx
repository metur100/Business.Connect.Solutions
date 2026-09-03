import { useEffect, useRef, type ReactNode } from 'react'

export default function Reveal({ children, as: Tag = 'div', className = '', delay = 0 }: {
  children: ReactNode
  as?: any
  className?: string
  delay?: number
}) {
  const ref = useRef<any>(null)

  useEffect(() => {
    const el = ref.current as HTMLElement | null
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`
          el.classList.add('is-in')
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delay])

  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  )
}
