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
      <section id="quote" className="py-24 bg-surface">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <span className="material-symbols-outlined text-6xl text-primary-container mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          <h2 className="font-headline text-3xl font-black text-on-background mb-4">Thank You!</h2>
          <p className="text-secondary mb-8">We received your request and will get back to you within 24 hours.</p>
          <button onClick={() => setStatus('idle')} className="text-primary font-headline font-bold underline">Submit another request</button>
        </div>
      </section>
    )
  }

  return (
    <section id="quote" className="py-24 bg-surface">
      <div className="max-w-2xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-black text-on-background tracking-tight mb-4">Get Your Custom Quote</h2>
          <p className="text-secondary">Tell us about your business and we&apos;ll prepare a tailored logistics plan.</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-sm border border-surface-container space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-on-background mb-2">Full Name *</label>
              <input name="name" required className="w-full border border-surface-container-high rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-container" placeholder="John Smith" />
            </div>
            <div>
              <label className="block text-sm font-bold text-on-background mb-2">Business Email *</label>
              <input name="email" type="email" required className="w-full border border-surface-container-high rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-container" placeholder="john@company.com" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-on-background mb-2">Company Name</label>
              <input name="company" className="w-full border border-surface-container-high rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-container" placeholder="Company Ltd." />
            </div>
            <div>
              <label className="block text-sm font-bold text-on-background mb-2">Monthly Shipping Volume</label>
              <select name="volume" className="w-full border border-surface-container-high rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-container bg-white">
                <option value="">Select...</option>
                <option value="1-50">1-50 parcels/month</option>
                <option value="50-200">50-200 parcels/month</option>
                <option value="200-500">200-500 parcels/month</option>
                <option value="500+">500+ parcels/month</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-on-background mb-2">Tell us about your needs</label>
            <textarea name="message" rows={4} className="w-full border border-surface-container-high rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-container resize-none" placeholder="Products you ship, destination countries, current challenges..." />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="primary-gradient text-white w-full py-4 rounded-lg font-headline font-bold text-lg shadow-lg shadow-primary/20 disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending...' : 'Request Free Quote'}
          </button>
          {status === 'error' && <p className="text-error text-sm text-center">Something went wrong. Please try again or email B2B@fishgoo.com directly.</p>}
        </form>
      </div>
    </section>
  )
}
