export default function CaseStudies() {
  const cases = [
    {
      region: 'Germany', category: 'Streetwear',
      name: 'Michael T.',
      quote: 'We cut our defect rate to 0.5% and saved 15 hours per week on logistics coordination.',
      metrics: ['0.5% Defect Rate', '15h Saved/Week', '8-Day Avg Delivery'],
      details: [
        { label: 'Products', value: 'Branded streetwear, sneakers' },
        { label: 'Monthly Orders', value: '200-300' },
        { label: 'Route', value: 'Express Direct to Germany' },
      ],
    },
    {
      region: 'United Kingdom', category: 'Fashion',
      name: 'Sophie M.',
      quote: 'QC reports reduced our defect rate from 12% to 2%. Returns dropped dramatically.',
      metrics: ['98% QC Pass', '12% → 2% Defects', 'Royal Mail 48h'],
      details: [
        { label: 'Products', value: 'Women\'s fashion, accessories' },
        { label: 'Monthly Orders', value: '500+' },
        { label: 'Route', value: 'Apparel Express UK' },
      ],
    },
    {
      region: 'United States', category: 'High-Ticket',
      name: 'Alex R.',
      quote: 'Zero chargebacks since switching. The QC photos give our customers confidence.',
      metrics: ['$3k-$8k AOV', '0 Chargebacks', 'UPS Delivery'],
      details: [
        { label: 'Products', value: 'Designer bags, luxury items' },
        { label: 'Monthly Orders', value: '50-80' },
        { label: 'Route', value: 'UPS Tax-Inclusive US' },
      ],
    },
    {
      region: 'Canada', category: 'Multi-Category',
      name: 'Jessica L.',
      quote: 'Consolidating 4 product categories into one shipment saved us 20+ hours monthly.',
      metrics: ['4 Categories', '20h+ Saved/Month', '12-Day Delivery'],
      details: [
        { label: 'Products', value: 'Apparel, cosmetics, supplements, electronics' },
        { label: 'Monthly Orders', value: '150+' },
        { label: 'Route', value: 'CA All-Category Line' },
      ],
    },
  ]

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-black text-on-background tracking-tight mb-4">Real Seller Results</h2>
          <p className="text-secondary">See how e-commerce sellers improved their operations with Fishgoo.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((c) => (
            <div key={c.name} className="bg-white rounded-xl p-8 shadow-sm border border-surface-container relative">
              <span className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Demo
              </span>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">{c.region}</span>
                <span className="text-xs text-secondary">·</span>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">{c.category}</span>
              </div>
              <h3 className="font-headline font-bold text-lg text-on-background mb-2">{c.name}</h3>
              <p className="text-sm text-secondary italic mb-6 leading-relaxed">&ldquo;{c.quote}&rdquo;</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {c.metrics.map((m) => (
                  <span key={m} className="bg-surface-container-low text-on-surface text-xs font-bold px-3 py-1.5 rounded-full">{m}</span>
                ))}
              </div>
              <div className="space-y-2 text-sm">
                {c.details.map((d) => (
                  <div key={d.label} className="flex justify-between">
                    <span className="text-secondary">{d.label}</span>
                    <span className="font-bold text-on-background">{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
