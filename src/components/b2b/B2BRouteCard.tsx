'use client'

import type { Route } from '@/lib/types'
import { trackRouteCard } from '@/analytics/events'

export default function B2BRouteCard({ route, country }: { route: Route; country: string }) {
  const hl = route.highlight

  return (
    <div className={`bg-slate-50 border ${hl ? 'border-[#00D084]' : 'border-slate-100'} rounded-lg p-5 flex flex-col justify-between custom-shadow-hover transition-all duration-300`}>
      {/* Top: Name + Badge */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-3">
          <h4 className="font-jakarta font-bold text-sm text-[#141b2b] leading-tight">{route.name}</h4>
          {route.badge && (
            <span className={`flex-shrink-0 text-[9px] font-extrabold px-1.5 py-0.5 rounded ${
              hl ? 'bg-[#00D084] text-white' : 'bg-slate-200 text-slate-600'
            }`}>
              {route.badge}
            </span>
          )}
        </div>
        <p className="text-slate-500 text-xs leading-relaxed mb-4">{route.subtitle}</p>

        {/* Key metrics row */}
        <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-200">
          <div>
            <p className="text-[#00D084] font-extrabold text-lg tracking-tighter">{route.price}</p>
            {route.unit && <p className="text-slate-400 text-[9px] font-bold uppercase">{route.unit}</p>}
          </div>
          <div className="border-l border-slate-200 pl-4">
            <p className="text-[#141b2b] font-extrabold text-sm">{route.time}</p>
            <p className="text-slate-400 text-[9px] font-bold uppercase">Est. Delivery</p>
          </div>
        </div>

        {/* Features — compact */}
        <div className="space-y-1.5 mb-4">
          {route.features.map((f, i) => (
            <div key={i} className="flex items-start gap-1.5 text-xs text-slate-500">
              <span className="material-symbols-outlined text-[#00D084] text-[12px] mt-0.5 flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
              <span>{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: Button */}
      <button
        onClick={() => trackRouteCard(route.name, country)}
        className={`${
          hl
            ? 'bg-[#00D084] text-white hover:brightness-105'
            : 'border border-slate-200 text-slate-600 hover:bg-slate-100'
        } w-full py-2 rounded font-bold text-xs transition-all`}
      >
        {route.price === 'Contact Us' ? 'Contact Us' : 'Get Quote'}
      </button>
    </div>
  )
}
