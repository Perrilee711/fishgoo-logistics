'use client'

import { useState } from 'react'

export default function B2BNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-slate-200">
      <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
        <div className="flex items-center gap-10">
          <a href="/b2b" className="text-xl font-extrabold text-[#141b2b] font-jakarta tracking-tight">Fishgoo</a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a className="text-[#00D084] font-bold font-jakarta" href="#solutions">Solutions</a>
            <a className="text-slate-600 font-semibold font-jakarta hover:text-[#00D084] transition-colors" href="#routes">Routes</a>
            <a className="text-slate-600 font-semibold font-jakarta hover:text-[#00D084] transition-colors" href="#partners">Partners</a>
            <a className="text-slate-600 font-semibold font-jakarta hover:text-[#00D084] transition-colors" href="#faq">FAQ</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.fishgoo.com" target="_blank" rel="noopener noreferrer" className="hidden lg:block text-slate-600 text-sm font-bold font-jakarta hover:text-[#00D084] transition-colors">
            Business Login
          </a>
          <a href="#quote" className="bg-[#00D084] text-white px-5 py-2 rounded font-bold font-jakarta text-sm shadow-sm hover:brightness-105 active:scale-95 transition-all">
            Get Quote
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden text-slate-700">
            <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3 font-jakarta font-semibold text-sm">
          <a className="block text-slate-600" href="#solutions" onClick={() => setOpen(false)}>Solutions</a>
          <a className="block text-slate-600" href="#routes" onClick={() => setOpen(false)}>Routes</a>
          <a className="block text-slate-600" href="#partners" onClick={() => setOpen(false)}>Partners</a>
          <a className="block text-slate-600" href="#faq" onClick={() => setOpen(false)}>FAQ</a>
        </div>
      )}
    </nav>
  )
}
