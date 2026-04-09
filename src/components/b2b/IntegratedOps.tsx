export default function IntegratedOps() {
  return (
    <section id="solutions" className="py-8 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:mb-8 gap-2 md:gap-4">
          <div>
            <p className="text-[#00D084] font-extrabold text-[10px] tracking-[0.2em] uppercase mb-1">Infrastructure</p>
            <h2 className="font-jakarta text-xl md:text-2xl font-extrabold text-[#141b2b]">Integrated Operations</h2>
          </div>
          <a href="#routes" className="text-[#00D084] text-sm font-extrabold font-jakarta flex items-center gap-1 hover:gap-2 transition-all">
            View All Routes
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {/* Column 1: Hub Status */}
          <div className="bg-slate-50 border border-slate-100 p-4 md:p-5 rounded-lg flex flex-col justify-between custom-shadow-hover">
            <div>
              <div className="w-7 h-7 md:w-8 md:h-8 rounded bg-[#00D084]/10 text-[#00D084] flex items-center justify-center mb-3 md:mb-4">
                <span className="material-symbols-outlined text-base md:text-lg">hub</span>
              </div>
              <h3 className="font-jakarta font-bold text-xs md:text-sm mb-1 md:mb-2">The Precision Hub</h3>
              <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed hidden md:block">End-to-end management with real-time CBM optimization and AI route efficiency.</p>
            </div>
            <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-slate-200">
              <div className="flex flex-col md:flex-row justify-between text-[9px] md:text-[10px] font-extrabold gap-0.5">
                <span className="text-slate-400">NETWORK</span>
                <span className="text-[#00D084]">98.2%</span>
              </div>
            </div>
          </div>

          {/* Column 2: Active Routes - Dark */}
          <div className="bg-[#141b2b] p-4 md:p-5 rounded-lg text-white flex flex-col justify-between custom-shadow-hover">
            <div>
              <div className="flex justify-between items-start mb-3 md:mb-4">
                <h3 className="font-jakarta font-bold text-xs md:text-sm">Active Routes</h3>
                <span className="text-[8px] md:text-[9px] bg-[#00D084] text-white px-1.5 py-0.5 rounded font-extrabold">LIVE</span>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div className="flex gap-2 md:gap-3 relative">
                  <div className="z-10 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-[#00D084] flex items-center justify-center">
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white animate-pulse"></div>
                  </div>
                  <div className="absolute left-[7px] md:left-2 top-2 w-[1px] h-5 md:h-6 bg-white/20"></div>
                  <div>
                    <p className="text-[9px] md:text-[10px] font-bold">Guangzhou Hub</p>
                    <p className="text-[8px] md:text-[9px] text-white/50">Departed 12:40 PM</p>
                  </div>
                </div>
                <div className="flex gap-2 md:gap-3">
                  <div className="z-10 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border border-white/20 bg-transparent"></div>
                  <div>
                    <p className="text-[9px] md:text-[10px] font-bold text-white/40">London Terminal</p>
                    <p className="text-[8px] md:text-[9px] text-white/30">ETA: 7-12 days</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-white/10 flex justify-between items-end">
              <div>
                <p className="text-lg md:text-xl font-extrabold font-jakarta text-[#00D084]">99.8%</p>
                <p className="text-[8px] md:text-[9px] font-extrabold uppercase tracking-widest text-white/40">On-Time</p>
              </div>
              <div className="flex gap-0.5 md:gap-1 items-end h-5 md:h-6">
                <div className="w-1 bg-[#00D084]/20 h-1.5 md:h-2"></div>
                <div className="w-1 bg-[#00D084]/40 h-3 md:h-4"></div>
                <div className="w-1 bg-[#00D084] h-5 md:h-6"></div>
              </div>
            </div>
          </div>

          {/* Column 3: Warehouse */}
          <div className="bg-slate-50 border border-slate-100 rounded-lg overflow-hidden flex flex-col custom-shadow-hover">
            <div className="h-20 md:h-24 overflow-hidden">
              <img
                alt="Modern warehouse"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr9SE0Og_tK3AHSgMlru0ie8gfDCtLDIjGWfHbF9FP54jD4eL-S7CRFQVaXjKPVTtyJnVAs0GRrKtmhBhmXrA1b75cjd23pV1IG_miIjgq0wVXHBsbxNhM0w1wtXFb4CxVaadWHLJFZaD8mvtSWHNaWaPVP0dz78P0oRDMJd8kL4M91Q5lYaTZ_Wy_b2Zu06CUgZ5vqVK0tKDuZI_JHS1i2Ke_JduDHwE7lQe972HMrWODmX4gw53zndIh10hix_HBYNlt-FDEjnc"
              />
            </div>
            <div className="p-3 md:p-4">
              <h3 className="font-jakarta font-bold text-xs md:text-sm mb-0.5 md:mb-1">Guangzhou Warehouse</h3>
              <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed">QC inspection, 90-day storage, consolidation.</p>
            </div>
          </div>

          {/* Column 4: Security */}
          <div className="bg-slate-50 border border-slate-100 p-4 md:p-5 rounded-lg flex flex-col justify-between custom-shadow-hover">
            <div>
              <div className="w-7 h-7 md:w-8 md:h-8 rounded bg-slate-200 text-[#141b2b] flex items-center justify-center mb-3 md:mb-4">
                <span className="material-symbols-outlined text-base md:text-lg">verified</span>
              </div>
              <h3 className="font-jakarta font-bold text-xs md:text-sm mb-1 md:mb-2">Security &amp; QC</h3>
              <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed hidden md:block">HD quality inspection photos within 24h. Full tracking with insurance coverage.</p>
            </div>
            <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-1.5 md:gap-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#00D084] animate-pulse"></div>
                <span className="text-[9px] md:text-[10px] font-extrabold text-slate-600">99%+ QC</span>
              </div>
              <span className="text-[8px] md:text-[9px] font-bold text-slate-400 hidden md:inline">24H</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
