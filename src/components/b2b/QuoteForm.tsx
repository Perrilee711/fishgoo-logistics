'use client'

import { useState } from 'react'

export default function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/xqeyokgl', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <section id="quote" className="py-10 md:py-16 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">
          <span className="material-symbols-outlined text-5xl text-[#00D084] mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          <h2 className="font-jakarta text-2xl font-extrabold text-[#141b2b] mb-3">Thank You!</h2>
          <p className="text-slate-500 text-sm mb-6">We received your request and will get back to you within 24 hours.</p>
          <button onClick={() => setStatus('idle')} className="text-[#00D084] font-jakarta font-bold text-sm underline">Submit another request</button>
        </div>
      </section>
    )
  }

  return (
    <section id="quote" className="py-10 md:py-16 bg-slate-50">
      <div className="max-w-2xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-10">
          <p className="text-[#00D084] font-extrabold text-[10px] tracking-[0.2em] uppercase mb-1">Get Started</p>
          <h2 className="font-jakarta text-2xl font-extrabold text-[#141b2b] mb-2">Get Your Custom Quote</h2>
          <p className="text-slate-500 text-sm">Tell us about your business and we&apos;ll prepare a tailored logistics plan.</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-5 md:p-8 shadow-sm border border-slate-200 space-y-4 md:space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-400 mb-1.5">Full Name *</label>
              <input name="name" required className="w-full bg-slate-50 border border-slate-200 rounded text-sm px-3 md:px-4 py-2.5 focus:ring-[#00D084] focus:border-[#00D084] focus:outline-none" placeholder="John Smith" />
            </div>
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-400 mb-1.5">Business Email *</label>
              <input name="email" type="email" required className="w-full bg-slate-50 border border-slate-200 rounded text-sm px-3 md:px-4 py-2.5 focus:ring-[#00D084] focus:border-[#00D084] focus:outline-none" placeholder="john@company.com" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-400 mb-1.5">Company Name</label>
              <input name="company" className="w-full bg-slate-50 border border-slate-200 rounded text-sm px-3 md:px-4 py-2.5 focus:ring-[#00D084] focus:border-[#00D084] focus:outline-none" placeholder="Company Ltd." />
            </div>
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-400 mb-1.5">Monthly Shipping Volume</label>
              <select name="volume" className="w-full bg-slate-50 border border-slate-200 rounded text-sm px-3 md:px-4 py-2.5 focus:ring-[#00D084] focus:border-[#00D084] focus:outline-none">
                <option value="">Select...</option>
                <option value="1-50">1-50 parcels/month</option>
                <option value="50-200">50-200 parcels/month</option>
                <option value="200-500">200-500 parcels/month</option>
                <option value="500+">500+ parcels/month</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-extrabold uppercase text-slate-400 mb-1.5">Tell us about your needs</label>
            <textarea name="message" rows={3} className="w-full bg-slate-50 border border-slate-200 rounded text-sm px-3 md:px-4 py-2.5 focus:ring-[#00D084] focus:border-[#00D084] focus:outline-none resize-none" placeholder="Products you ship, destination countries, current challenges..." />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-[#00D084] text-white w-full py-3 rounded font-bold text-sm shadow-sm hover:brightness-105 active:scale-[0.99] transition-all disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending...' : 'Request Free Quote'}
          </button>
          {status === 'error' && <p className="text-red-500 text-xs text-center">Something went wrong. Please try again or email B2B@fishgoo.com directly.</p>}
        </form>
      </div>
    </section>
  )
}
