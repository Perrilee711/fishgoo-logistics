'use client'

import { trackCTA } from '@/analytics/events'

export default function CTA() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="primary-gradient rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-headline text-4xl lg:text-5xl font-black text-white mb-6">准备好寄送您的第一个包裹了吗？</h2>
            <p className="text-primary-fixed text-lg mb-10 max-w-2xl mx-auto opacity-90">
              现在注册立享首单运费抵扣券，开启您的无忧跨境集运之旅。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => trackCTA('立即免费注册')}
                className="bg-white text-primary px-10 py-4 rounded-lg font-headline font-black text-lg hover:scale-105 transition-transform"
              >
                立即免费注册
              </button>
              <button
                onClick={() => trackCTA('咨询在线客服')}
                className="bg-on-primary-fixed/20 border border-white/30 text-white px-10 py-4 rounded-lg font-headline font-bold text-lg backdrop-blur-md"
              >
                咨询在线客服
              </button>
            </div>
          </div>
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}
