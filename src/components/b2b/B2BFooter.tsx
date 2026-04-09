export default function B2BFooter() {
  return (
    <footer className="bg-slate-50 w-full pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12 font-body text-sm leading-relaxed">
        <div className="col-span-2 md:col-span-1">
          <div className="text-xl font-bold text-slate-900 mb-6 font-headline">Fishgoo</div>
          <p className="text-slate-500 mb-6">Precision in Motion.<br />Bridging Asian manufacturing<br />to global consumers.</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-6">Company</h4>
          <ul className="space-y-4">
            <li><a className="text-slate-500 hover:text-emerald-500 transition-colors" href="#services">Services</a></li>
            <li><a className="text-slate-500 hover:text-emerald-500 transition-colors" href="#how-it-works">How It Works</a></li>
            <li><a className="text-slate-500 hover:text-emerald-500 transition-colors" href="#routes">Shipping Routes</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
          <ul className="space-y-4">
            <li><a className="text-slate-500 hover:text-emerald-500 transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="text-slate-500 hover:text-emerald-500 transition-colors" href="#">Terms of Service</a></li>
            <li><a className="text-slate-500 hover:text-emerald-500 transition-colors" href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-6">Contact</h4>
          <p className="text-slate-500 mb-2">B2B@fishgoo.com</p>
          <p className="text-slate-500 mb-2">WhatsApp: +1 213 881 4636</p>
          <p className="text-slate-500">www.fishgoo.com</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-20 pt-10 border-t border-slate-200 text-center text-slate-400">
        &copy; 2026 Fishgoo Logistics. Precision in Motion.
      </div>
    </footer>
  )
}
