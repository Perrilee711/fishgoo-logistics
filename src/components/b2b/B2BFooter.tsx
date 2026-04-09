export default function B2BFooter() {
  return (
    <footer className="py-10 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <span className="text-lg font-extrabold text-[#141b2b] font-jakarta">Fishgoo</span>
          <p className="text-slate-500 mt-3 text-xs max-w-xs leading-relaxed">B2B precision logistics. Optimized source-to-door solutions for global e-commerce sellers.</p>
          <div className="flex gap-4 mt-6">
            <span className="material-symbols-outlined text-slate-400 text-lg hover:text-[#00D084] cursor-pointer transition-colors">language</span>
            <span className="material-symbols-outlined text-slate-400 text-lg hover:text-[#00D084] cursor-pointer transition-colors">verified_user</span>
            <span className="material-symbols-outlined text-slate-400 text-lg hover:text-[#00D084] cursor-pointer transition-colors">public</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#141b2b] font-extrabold text-[10px] font-jakarta mb-1 uppercase tracking-[0.15em]">Services</p>
          <a className="text-slate-500 text-xs hover:text-[#00D084] font-medium" href="#solutions">Integrated Operations</a>
          <a className="text-slate-500 text-xs hover:text-[#00D084] font-medium" href="#routes">Shipping Routes</a>
          <a className="text-slate-500 text-xs hover:text-[#00D084] font-medium" href="#quote">Get Quote</a>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#141b2b] font-extrabold text-[10px] font-jakarta mb-1 uppercase tracking-[0.15em]">Legal</p>
          <a className="text-slate-500 text-xs hover:text-[#00D084] font-medium" href="#">Privacy Policy</a>
          <a className="text-slate-500 text-xs hover:text-[#00D084] font-medium" href="#">Terms of Service</a>
          <a className="text-slate-500 text-xs hover:text-[#00D084] font-medium" href="#faq">FAQ</a>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[#141b2b] font-extrabold text-[10px] font-jakarta uppercase tracking-[0.15em]">Contact</p>
          <p className="text-slate-500 text-xs">B2B@fishgoo.com</p>
          <p className="text-slate-500 text-xs">WhatsApp: +1 213 881 4636</p>
          <p className="text-slate-500 text-xs">www.fishgoo.com</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-slate-400 text-[10px] font-medium">&copy; 2026 Fishgoo Global Logistics. Precision in Motion.</p>
        <span className="text-slate-300 text-[9px] font-bold">FG_B2B_V2.0</span>
      </div>
    </footer>
  )
}
