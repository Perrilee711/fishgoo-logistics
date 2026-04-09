import type { Metadata } from 'next'
import { getRouteDataEN } from '@/lib/notion'
import B2BNavbar from '@/components/b2b/B2BNavbar'
import B2BHero from '@/components/b2b/B2BHero'
import IntegratedOps from '@/components/b2b/IntegratedOps'
import DataMetrics from '@/components/b2b/DataMetrics'
import B2BRouteSearch from '@/components/b2b/B2BRouteSearch'
import StrategicPartners from '@/components/b2b/StrategicPartners'
import FAQ from '@/components/b2b/FAQ'
import QuoteForm from '@/components/b2b/QuoteForm'
import B2BFooter from '@/components/b2b/B2BFooter'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Fishgoo B2B | Global Supply Chain with Precision',
  description: 'Scalable B2B logistics from sourcing to delivery. 50+ routes across 12 countries. Quality inspection, consolidation, and global shipping for e-commerce sellers.',
}

export const revalidate = 300

export default async function B2BPage() {
  const routeData = await getRouteDataEN()

  return (
    <>
      <B2BNavbar />
      <main className="pt-[52px]">
        <B2BHero />
        <IntegratedOps />
        <DataMetrics />
        <B2BRouteSearch data={routeData} />
        <StrategicPartners />
        <FAQ />
        <QuoteForm />
      </main>
      <B2BFooter />
      <BackToTop />
    </>
  )
}
