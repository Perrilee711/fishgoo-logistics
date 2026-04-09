export default function HowItWorks() {
  const steps = [
    { num: '01', icon: 'link', title: 'Send Product Link', desc: 'Share a Taobao, 1688, or Weidian link. We handle the rest.' },
    { num: '02', icon: 'verified', title: 'We Source & Verify', desc: 'Our team contacts factories, negotiates pricing, and verifies product quality.' },
    { num: '03', icon: 'photo_camera', title: 'QC & Storage', desc: 'HD quality inspection photos within 24h. Free storage up to 90 days for consolidation.' },
    { num: '04', icon: 'flight_takeoff', title: 'Ship Worldwide', desc: '50+ dedicated routes across 12 countries. Air express, standard, or ocean freight.' },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-on-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-container text-on-primary-container text-xs font-bold tracking-widest uppercase mb-4">
            Simple Process
          </span>
          <h2 className="font-headline text-4xl font-black text-white tracking-tight">How It Works</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.num} className="relative">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl font-black font-headline text-primary-container/30">{s.num}</span>
                  <span className="material-symbols-outlined text-2xl text-primary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
                </div>
                <h3 className="font-headline font-bold text-lg text-white mb-3">{s.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 text-white/20">
                  <span className="material-symbols-outlined">chevron_right</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
