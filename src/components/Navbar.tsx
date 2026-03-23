export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,28,59,0.06)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20 lg:px-4">
        <div className="text-2xl font-black text-slate-900 tracking-tighter font-headline">Fishgoo</div>
        <div className="hidden md:flex items-center space-x-8 font-headline font-semibold text-sm tracking-tight">
          <a className="text-emerald-600 border-b-2 border-emerald-500 pb-1" href="#advantages">核心优势</a>
          <a className="text-slate-600 hover:text-slate-900 transition-colors" href="#routes">线路查询</a>
          <a className="text-slate-600 hover:text-slate-900 transition-colors" href="#guide">发货指南</a>
          <a className="text-slate-600 hover:text-slate-900 transition-colors" href="#compare">对比</a>
          <a className="text-slate-600 hover:text-slate-900 transition-colors" href="#compensation">赔付保障</a>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-slate-600 border-r border-slate-200 pr-4 mr-2">
            <span className="material-symbols-outlined text-lg">support_agent</span>
            <span className="font-headline font-bold text-sm tracking-tight">在线客服</span>
          </div>
          <button className="primary-gradient text-white px-6 py-2.5 rounded-lg font-headline font-bold text-sm tracking-wide active:scale-95 transition-all duration-200 shadow-lg shadow-primary/20">
            立即发货
          </button>
        </div>
      </div>
    </nav>
  )
}
