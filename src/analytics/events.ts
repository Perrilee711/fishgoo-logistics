'use client'
import { track } from '@vercel/analytics'

export function trackCountryTab(country: string) {
  track('country_tab_click', { country })
}

export function trackRouteCard(route: string, country: string) {
  track('route_card_click', { route, country })
}

export function trackCTA(label: string) {
  track('cta_click', { label })
}
