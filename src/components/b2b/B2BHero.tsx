'use client'

export default function B2BHero() {
  return (
    <section className="relative min-h-[460px] flex items-center overflow-hidden border-b border-slate-200">
      {/* Background image + gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Global logistics container port"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOWsvq0nRsyPxfIJwwer-w37PoaCu_sI3nWaajTUilTwjmMAbGeQYRjg1nROIRGp8d76IamPux-PGV2sogIa0Dv18-XPUS_GsejHHMCH3aDrIzjIAOmB8blQtDCQfZlS3V4g89MoayVJYCRik2SJdMlIzo3Zq1t-tttC_-SdjZn2b9vtmaiJyKcLhDqHC-_kv0KmC7nxtN_WX880Tjl2tkF7HMkh0mdS4NvYdOIMaAhdxseRfM6pGhXVt2G3mnDyEOdZenhek8HDo"
        />
        <div className="absolute inset-0 hero-gradient-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-[#00D084]/20 backdrop-blur-sm px-2.5 py-1 rounded mb-4 border border-[#00D084]/30">
              <span className="material-symbols-outlined text-[#00D084] text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
              <span className="text-white text-[10px] font-extrabold tracking-widest uppercase">Global B2B Logistics</span>
            </div>
            <h1 className="font-jakarta text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4 drop-shadow-sm">
              Global Supply Chain<br />with Precision.
            </h1>
            <p className="text-lg text-white/90 leading-snug mb-8 max-w-xl">
              Scalable B2B logistics from sourcing to delivery. AI-driven optimization for reliable global hub networking.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="bg-white/5 border border-white/10 p-3 rounded flex flex-col min-w-[100px]">
                <span className="text-[#00D084] font-extrabold text-2xl">12+</span>
                <span className="text-white/50 text-[10px] uppercase font-bold tracking-tighter">Countries</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-3 rounded flex flex-col min-w-[100px]">
                <span className="text-[#00D084] font-extrabold text-2xl">50+</span>
                <span className="text-white/50 text-[10px] uppercase font-bold tracking-tighter">Routes</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-3 rounded flex flex-col min-w-[100px]">
                <span className="text-[#00D084] font-extrabold text-2xl">7-12d</span>
                <span className="text-white/50 text-[10px] uppercase font-bold tracking-tighter">Avg Delivery</span>
              </div>
            </div>
          </div>

          {/* Right: Tracking / Rates Tool */}
          <div className="lg:col-span-5 bg-white rounded-lg shadow-2xl p-6">
            <div className="flex gap-4 border-b border-slate-100 mb-6">
              <span className="pb-3 text-sm font-extrabold border-b-2 border-[#00D084] text-[#00D084]">Track Shipment</span>
              <a href="#routes" className="pb-3 text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors">Estimate Rate</a>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-400 mb-1.5">Enter Tracking ID</label>
                <div className="flex gap-2">
                  <input
                    className="flex-1 bg-slate-50 border border-slate-200 rounded text-sm px-4 py-2.5 focus:ring-[#00D084] focus:border-[#00D084] focus:outline-none"
                    placeholder="FG-98234-X"
                    type="text"
                  />
                  <button className="bg-[#00D084] text-white px-5 py-2.5 rounded font-bold text-sm hover:brightness-105 transition-all">Track</button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a href="#quote" className="border border-slate-200 py-2.5 rounded text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors text-center">Instant Quote</a>
                <a href="#routes" className="border border-slate-200 py-2.5 rounded text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors text-center">Global Routes</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
