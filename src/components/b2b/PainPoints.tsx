export default function PainPoints() {
  const points = [
    { icon: 'schedule', title: 'Slow Shipping', desc: '30-60 day delivery kills your customer satisfaction and repeat rates.' },
    { icon: 'warning', title: 'Bad Suppliers', desc: 'Unverified factories mean wrong sizes, poor quality, and costly returns.' },
    { icon: 'trending_down', title: 'Low Margins', desc: 'Hidden fees, volumetric overcharges, and middlemen eat into your profit.' },
    { icon: 'no_photography', title: 'No QC', desc: 'Shipping without quality checks means chargebacks and angry customers.' },
    { icon: 'shield', title: 'Too Much Risk', desc: 'No tracking, no insurance, no recourse when things go wrong.' },
  ]

  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-container text-xs font-bold tracking-widest uppercase mb-4">
            The Problem
          </span>
          <h2 className="font-headline text-4xl font-black text-on-background tracking-tight">Why Most Sellers Get Stuck</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {points.map((p) => (
            <div key={p.title} className="bg-surface-container-low rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-3xl text-tertiary mb-4 block">{p.icon}</span>
              <h3 className="font-headline font-bold text-on-background mb-2">{p.title}</h3>
              <p className="text-sm text-secondary leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
