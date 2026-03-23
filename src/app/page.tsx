import { getRouteData } from '@/lib/notion'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Advantages from '@/components/Advantages'
import RouteSearch from '@/components/RouteSearch'
import Compensation from '@/components/Compensation'
import DecisionGuide from '@/components/DecisionGuide'
import ComparisonTable from '@/components/ComparisonTable'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export const revalidate = 300 // ISR: revalidate every 5 minutes

export default async function Home() {
  const routeData = await getRouteData()

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Advantages />
        <RouteSearch data={routeData} />
        <Compensation />
        <DecisionGuide />
        <ComparisonTable />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
