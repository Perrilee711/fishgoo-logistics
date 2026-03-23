export interface Route {
  name: string
  badge: string
  badgeColor?: string
  subtitle: string
  time: string
  price: string
  unit: string
  features: string[]
  tags: string[]
  highlight?: boolean
}

export interface CountryRoute {
  name: string
  flag: string
  routes: Route[]
}

export type RouteDataMap = Record<string, CountryRoute>
