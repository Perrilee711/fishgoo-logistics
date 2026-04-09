'use client'

import { useState } from 'react'
import type { RouteDataMap } from '@/lib/types'
import { trackCountryTab } from '@/analytics/events'
import B2BRouteCard from './B2BRouteCard'

export default function B2BRouteSearch({ data }: { data: RouteDataMap }) {
  const [activeCountry, setActiveCountry] = useState('uk')

  const countryKeys = Object.keys(data)
  const currentData = data[activeCountry]

  const handleTabClick = (country: string) => {
    setActiveCountry(country)
    trackCountryTab(country)
  }

  let cols = 'md:grid-cols-2 lg:grid-cols-3'
  if (currentData && currentData.routes.length <= 2) cols = 'md:grid-cols-2'
  if (currentData && currentData.routes.length === 1) cols = 'md:grid-cols-1 max-w-lg mx-auto'

  return (
    <section className="py-16 bg-white" id="routes">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header — matching Stitch style */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <p className="text-[#00D084] font-extrabold text-[10px] tracking-[0.2em] uppercase mb-1">Logistics Network</p>
            <h2 className="font-jakarta text-2xl font-extrabold text-[#141b2b]">Global Shipping Coverage</h2>
          </div>
          <p className="text-slate-500 text-sm">Click a country to view available routes.</p>
        </div>

        {/* Country Tabs — compact, squared style */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {countryKeys.map((key) => (
            <button
              key={key}
              onClick={() => handleTabClick(key)}
              className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
                activeCountry === key
                  ? 'bg-[#141b2b] text-white'
                  : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {data[key].flag} {data[key].name}
            </button>
          ))}
        </div>

        {/* Route Cards Grid */}
        {currentData && (
          <div className={`grid ${cols} gap-4`}>
            {currentData.routes.map((route, i) => (
              <B2BRouteCard key={i} route={route} country={activeCountry} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
