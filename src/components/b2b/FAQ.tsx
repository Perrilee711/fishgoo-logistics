export default function FAQ() {
  const faqs = [
    {
      q: 'How do you manage customs clearance for high-tariff goods?',
      a: 'Most of our routes include tax-free or DDP (Delivered Duty Paid) clearance. We handle all customs documentation with a 99%+ clearance rate across all active routes. For sensitive categories like cosmetics and food, we have dedicated compliance channels.',
    },
    {
      q: 'What are your typical Minimum Order Quantities (MOQ)?',
      a: 'No strict MOQ for most routes — you can start from as little as 2kg for air freight. For ocean freight, the minimum is 15kg. We also offer consolidation: store items up to 90 days and ship together to save on costs. Enterprise agreements allow for even more flexible thresholds.',
    },
    {
      q: 'Do you offer insurance for high-value cargo?',
      a: 'Yes, we provide comprehensive shipping insurance coverage. We also offer industry-first delay compensation: 10% refund for 5+ business days late, 30% for 10+ days, and 50% for 15+ days. Damaged or lost items are fully covered under our shipping protection.',
    },
  ]

  return (
    <section id="faq" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-jakarta text-2xl font-extrabold text-[#141b2b]">Frequently Asked Questions</h2>
          <p className="text-slate-500 text-sm mt-2">Expert insights for complex logistics operations.</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <details key={f.q} className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm group" open={i === 0 ? true : undefined}>
              <summary className="flex justify-between items-center p-5 cursor-pointer list-none">
                <span className="font-jakarta font-bold text-[#141b2b] text-sm">{f.q}</span>
                <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform duration-300 flex-shrink-0 ml-4">expand_more</span>
              </summary>
              <div className="px-5 pb-5 pt-0 border-t border-slate-50">
                <p className="text-slate-500 text-xs leading-relaxed pt-4">{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
