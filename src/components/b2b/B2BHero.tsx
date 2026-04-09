export default function B2BHero() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6">
              Sourcing + QC + Shipping — All in One
            </span>
            <h1 className="font-headline text-5xl lg:text-7xl font-extrabold text-on-background leading-[1.1] mb-8 tracking-tighter">
              Fix Your <br />Supply Chain.{' '}
              <span className="text-primary-container">Scale Faster.</span>
            </h1>
            <p className="text-lg text-secondary mb-10 max-w-lg leading-relaxed">
              Professional door-to-door delivery, full quality inspections, and lower overheads for serious e-commerce sellers importing from China.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#quote" className="primary-gradient text-white px-8 py-4 rounded-lg font-headline font-bold flex items-center gap-2 shadow-lg shadow-primary/20">
                Get Free Consultation
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <a href="#how-it-works" className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-lg font-headline font-bold hover:bg-secondary-container transition-colors">
                See How It Works
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between aspect-square">
              <span className="text-4xl font-black font-headline text-primary">12+</span>
              <span className="text-secondary font-bold text-sm uppercase tracking-wider">Countries</span>
            </div>
            <div className="bg-primary-container p-8 rounded-xl flex flex-col justify-between aspect-square mt-8">
              <span className="text-4xl font-black font-headline text-on-primary-container">50+</span>
              <span className="text-on-primary-container font-bold text-sm uppercase tracking-wider">Shipping Routes</span>
            </div>
            <div className="bg-on-background p-8 rounded-xl flex flex-col justify-between aspect-square -mt-8">
              <span className="text-4xl font-black font-headline text-primary-fixed">7-12d</span>
              <span className="text-primary-fixed font-bold text-sm uppercase tracking-wider">Avg Delivery</span>
            </div>
            <div className="bg-surface-container-high p-8 rounded-xl flex flex-col justify-between aspect-square">
              <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span className="text-secondary font-bold text-sm uppercase tracking-wider">QC Included</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary-container/10 rounded-full blur-[120px] -z-10"></div>
    </section>
  )
}
