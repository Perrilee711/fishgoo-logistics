'use client'

import { useState } from 'react'
import type { RouteDataMap } from '@/lib/types'
import { trackCountryTab } from '@/analytics/events'
import RouteCard from './RouteCard'

export default function RouteSearch({ data }: { data: RouteDataMap }) {
  const [activeCountry, setActiveCountry] = useState('uk')

  const countryKeys = Object.keys(data)
  const currentData = data[activeCountry]

  const handleTabClick = (country: string) => {
    setActiveCountry(country)
    trackCountryTab(country)
  }

  // Determine grid cols based on route count
  let cols = 'md:grid-cols-2 lg:grid-cols-3'
  if (currentData && currentData.routes.length <= 2) cols = 'md:grid-cols-2'
  if (currentData && currentData.routes.length === 1) cols = 'md:grid-cols-1 max-w-lg mx-auto'

  return (
    <section className="py-24 bg-surface" id="routes">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-black text-on-background mb-4 tracking-tight">全球线路动态检索</h2>
          <p className="text-secondary">实时查询12国最优物流方案 · 点击国家查看专属线路</p>
        </div>

        {/* Country Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {countryKeys.map((key) => (
            <button
              key={key}
              onClick={() => handleTabClick(key)}
              className={`country-tab px-5 py-2 rounded-full font-bold text-sm ${
                activeCountry === key
                  ? 'active'
                  : 'bg-surface-container-high text-secondary'
              }`}
            >
              {data[key].flag} {data[key].name}
            </button>
          ))}
        </div>

        {/* Route Cards */}
        {currentData && (
          <div className={`grid ${cols} gap-8`}>
            {currentData.routes.map((route, i) => (
              <RouteCard key={i} route={route} country={activeCountry} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
