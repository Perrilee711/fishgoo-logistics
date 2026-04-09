'use client'

const faqs = [
  {
    q: 'How do you verify suppliers and product quality?',
    a: 'We work directly with verified factories on Taobao, 1688, and Weidian. Every order receives HD quality inspection photos within 24 hours of arriving at our Guangzhou warehouse. You review and approve before we ship.',
  },
  {
    q: 'What are the typical lead times from order to delivery?',
    a: 'Air express routes deliver in 6-15 days depending on the destination. Standard lines take 8-18 days. Ocean freight is 25-70 days. We provide tracking throughout the entire journey.',
  },
  {
    q: 'Do you handle customs clearance and duties?',
    a: 'Yes. Most of our routes include tax-free or DDP (Delivered Duty Paid) clearance. We handle all customs documentation. Our clearance rate is 99%+ across all active routes.',
  },
  {
    q: 'Is there a minimum order quantity (MOQ)?',
    a: 'No strict MOQ for most routes — you can start from as little as 2kg. For ocean freight, the minimum is 15kg. We also offer consolidation: store items up to 90 days and ship together to save on costs.',
  },
  {
    q: 'What happens if items are damaged or delayed?',
    a: 'We offer industry-first delay compensation: 10% refund for 5+ business days late, 30% for 10+ days, and 50% for 15+ days. Damaged or lost items are fully covered under our shipping insurance.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-surface-container-low">
      <div className="max-w-3xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-black text-on-background tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-secondary">Everything you need to know before getting started.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="faq-details bg-white rounded-xl shadow-sm border border-surface-container group">
              <summary className="flex items-center justify-between p-6 font-headline font-bold text-on-background text-sm md:text-base">
                {f.q}
                <span className="material-symbols-outlined text-secondary faq-icon flex-shrink-0 ml-4">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-sm text-secondary leading-relaxed">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
