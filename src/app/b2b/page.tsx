import type { Metadata } from 'next'
import { getRouteDataEN } from '@/lib/notion'
import B2BNavbar from '@/components/b2b/B2BNavbar'
import B2BHero from '@/components/b2b/B2BHero'
import SocialProofBar from '@/components/b2b/SocialProofBar'
import PainPoints from '@/components/b2b/PainPoints'
import HowItWorks from '@/components/b2b/HowItWorks'
import B2BRouteSearch from '@/components/b2b/B2BRouteSearch'
import DataResults from '@/components/b2b/DataResults'
import CaseStudies from '@/components/b2b/CaseStudies'
import FAQ from '@/components/b2b/FAQ'
import QuoteForm from '@/components/b2b/QuoteForm'
import B2BCTA from '@/components/b2b/B2BCTA'
import B2BFooter from '@/components/b2b/B2BFooter'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Fishgoo B2B | Sourcing + QC + Shipping for Cross-Border E-Commerce',
  description: 'Professional China sourcing, quality inspection, and global shipping for Shopify sellers, dropshippers, and wholesalers. 50+ routes across 12 countries. Get a free quote.',
}

export const revalidate = 300

export default async function B2BPage() {
  const routeData = await getRouteDataEN()

  return (
    <>
      <B2BNavbar />
      <main className="pt-20">
        <B2BHero />
        <SocialProofBar />
        <PainPoints />
        <HowItWorks />
        <B2BRouteSearch data={routeData} />
        <DataResults />
        <CaseStudies />
        <FAQ />
        <QuoteForm />
        <B2BCTA />
      </main>
      <B2BFooter />
      <BackToTop />
    </>
  )
}
