'use client'

import type { Route } from '@/lib/types'
import { trackRouteCard } from '@/analytics/events'

const badgeColorMap: Record<string, string> = {
  'primary-container': 'bg-primary-container text-on-primary-container',
  'tertiary-container': 'bg-tertiary-container text-on-tertiary-container',
}

export default function B2BRouteCard({ route, country }: { route: Route; country: string }) {
  const hl = route.highlight
  const bc = badgeColorMap[route.badgeColor || ''] || 'bg-secondary-container text-on-secondary-container'

  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] ${hl ? 'border-2 border-primary-container' : ''} route-card relative`}>
      {route.badge && (
        <div className="absolute top-4 right-4 z-10">
          <span className={`inline-flex items-center gap-1 ${bc} px-3 py-1 rounded-full text-xs font-black ${hl ? 'animate-pulse' : ''}`}>
            {hl && (
              <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            )}
            {route.badge}
          </span>
        </div>
      )}
      <div className="p-8">
        <div className="pr-20 mb-6">
          <h4 className="font-headline font-bold text-xl text-on-background">{route.name}</h4>
          <p className="text-xs text-secondary font-medium mt-1">{route.subtitle}</p>
        </div>
        <div className="flex items-baseline gap-2 mb-6">
          <span className={`text-3xl font-black ${hl ? 'text-primary' : 'text-on-background'}`}>{route.price}</span>
          {route.unit && <span className="text-xs text-secondary font-medium">{route.unit}</span>}
        </div>
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between text-sm py-2 border-b border-surface-container">
            <span className="text-secondary">Est. Delivery</span>
            <span className="font-bold text-on-background">{route.time}</span>
          </div>
          {route.features.map((f, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <span className="material-symbols-outlined text-primary text-[16px] mt-0.5 flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span className="text-secondary">{f}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5 mb-6">
          {route.tags.map((t, i) => (
            <span key={i} className="tag-pill bg-surface-container text-on-surface-variant">{t}</span>
          ))}
        </div>
        <button
          onClick={() => trackRouteCard(route.name, country)}
          className={`${hl ? 'primary-gradient text-white' : 'bg-surface-container-high text-on-background hover:bg-secondary-container transition-colors'} w-full py-3 rounded-lg font-headline font-bold tracking-tight text-sm`}
        >
          {route.price === 'Contact Us' ? 'Contact Us' : 'Get Quote'}
        </button>
      </div>
    </div>
  )
}
