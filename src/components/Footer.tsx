export default function Footer() {
  return (
    <footer className="bg-slate-50 w-full pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12 font-body text-sm leading-relaxed">
        <div className="col-span-2 md:col-span-1">
          <div className="text-xl font-bold text-slate-900 mb-6 font-headline">Fishgoo</div>
          <p className="text-slate-500 mb-6">Precision in Motion.<br />全球跨境集运领跑者。</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-6">服务</h4>
          <ul className="space-y-4">
            <li><a className="text-slate-500 hover:text-emerald-500 transition-colors" href="#">全球线路</a></li>
            <li><a className="text-slate-500 hover:text-emerald-500 transition-colors" href="#">运费查询</a></li>
            <li><a className="text-slate-500 hover:text-emerald-500 transition-colors" href="#">发货指南</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-6">支持</h4>
          <ul className="space-y-4">
            <li><a className="text-slate-500 hover:text-emerald-500 transition-colors" href="#">运费对比</a></li>
            <li><a className="text-slate-500 hover:text-emerald-500 transition-colors" href="#">服务条款</a></li>
            <li><a className="text-slate-500 hover:text-emerald-500 transition-colors" href="#">隐私政策</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-6">联系</h4>
          <p className="text-slate-500 mb-2">support@fishgoo.com</p>
          <p className="text-slate-500">www.fishgoo.com</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-20 pt-10 border-t border-slate-200 text-center text-slate-400">
        &copy; 2025 Fishgoo Logistics. Precision in Motion.
      </div>
    </footer>
  )
}
