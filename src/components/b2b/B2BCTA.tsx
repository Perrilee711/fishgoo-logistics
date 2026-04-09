'use client'

import { trackCTA } from '@/analytics/events'

export default function B2BCTA() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="primary-gradient rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-headline text-4xl lg:text-5xl font-black text-white mb-6">Ready to Optimize Your Supply Chain?</h2>
            <p className="text-primary-fixed text-lg mb-10 max-w-2xl mx-auto opacity-90">
              Get a personalized logistics plan and start shipping smarter. Free consultation, no commitment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#quote"
                onClick={() => trackCTA('Get Free Consultation')}
                className="bg-white text-primary px-10 py-4 rounded-lg font-headline font-black text-lg hover:scale-105 transition-transform"
              >
                Get Free Consultation
              </a>
              <a
                href="https://wa.me/12138814636"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTA('WhatsApp')}
                className="bg-on-primary-fixed/20 border border-white/30 text-white px-10 py-4 rounded-lg font-headline font-bold text-lg backdrop-blur-md"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}
