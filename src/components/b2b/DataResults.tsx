'use client'

import { useEffect, useRef, useState } from 'react'

const metrics = [
  { label: 'Shipping Cost', value: 34, suffix: '%', prefix: '-', color: 'text-primary' },
  { label: 'Delivery Time', value: 40, suffix: '%', prefix: '-', color: 'text-primary' },
  { label: 'Return Rate', value: 18, suffix: '%', prefix: '-', color: 'text-primary' },
  { label: 'Profit Margin', value: 22, suffix: '%', prefix: '+', color: 'text-primary-container' },
]

function useCountUp(end: number, visible: boolean, duration = 1500) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!visible) return
    let start = 0
    const step = Math.ceil(end / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [visible, end, duration])
  return count
}

export default function DataResults() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="py-24 bg-surface-container-low" ref={ref}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-black text-on-background tracking-tight mb-4">Data-Driven Results</h2>
          <p className="text-secondary">Average improvement for sellers who switch to Fishgoo.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m) => {
            const count = useCountUp(m.value, visible)
            return (
              <div key={m.label} className="bg-white rounded-xl p-8 text-center shadow-sm">
                <span className={`text-5xl font-black font-headline count-up ${m.color}`}>
                  {m.prefix}{count}{m.suffix}
                </span>
                <p className="text-secondary font-headline font-bold text-sm mt-3 uppercase tracking-wider">{m.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
