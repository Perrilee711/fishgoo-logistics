'use client'

import { useState } from 'react'

export default function B2BNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,28,59,0.06)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20 lg:px-4">
        <a href="/b2b" className="text-2xl font-black text-slate-900 tracking-tighter font-headline">Fishgoo</a>

        <div className="hidden md:flex items-center space-x-8 font-headline font-semibold text-sm tracking-tight">
          <a className="text-slate-600 hover:text-slate-900 transition-colors" href="#services">Services</a>
          <a className="text-slate-600 hover:text-slate-900 transition-colors" href="#how-it-works">How It Works</a>
          <a className="text-slate-600 hover:text-slate-900 transition-colors" href="#routes">Routes</a>
          <a className="text-slate-600 hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-slate-600 border-r border-slate-200 pr-4 mr-2">
            <span className="material-symbols-outlined text-lg">mail</span>
            <span className="font-headline font-bold text-sm tracking-tight">B2B@fishgoo.com</span>
          </div>
          <a href="#quote" className="primary-gradient text-white px-6 py-2.5 rounded-lg font-headline font-bold text-sm tracking-wide active:scale-95 transition-all duration-200 shadow-lg shadow-primary/20">
            Get Free Quote
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden flex items-center text-slate-700">
            <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-8 py-4 space-y-3 font-headline font-semibold text-sm">
          <a className="block text-slate-600" href="#services" onClick={() => setOpen(false)}>Services</a>
          <a className="block text-slate-600" href="#how-it-works" onClick={() => setOpen(false)}>How It Works</a>
          <a className="block text-slate-600" href="#routes" onClick={() => setOpen(false)}>Routes</a>
          <a className="block text-slate-600" href="#faq" onClick={() => setOpen(false)}>FAQ</a>
        </div>
      )}
    </nav>
  )
}
