export default function Compensation() {
  return (
    <section className="py-24 bg-surface-container-low" id="compensation">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container text-xs font-black tracking-widest uppercase mb-6">
            行业首家 · 服务承诺
          </span>
          <h2 className="font-headline text-4xl font-black text-on-background mb-4 tracking-tight">超时赔付保障</h2>
          <p className="text-secondary max-w-xl mx-auto">适用于「直飞限时达」及「直飞极速」线路，自发货次日起算</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-surface-container-lowest p-10 rounded-2xl text-center compensation-glow border border-primary-container/20">
            <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
            </div>
            <div className="text-5xl font-black font-headline text-primary mb-2">10%</div>
            <div className="text-sm text-secondary font-bold">超出 5 个工作日</div>
            <div className="text-xs text-secondary mt-2">退还实际运费的 10%</div>
          </div>
          <div className="bg-surface-container-lowest p-10 rounded-2xl text-center compensation-glow border border-primary-container/30 scale-105">
            <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>alarm</span>
            </div>
            <div className="text-5xl font-black font-headline text-primary mb-2">30%</div>
            <div className="text-sm text-secondary font-bold">超出 5-10 个工作日</div>
            <div className="text-xs text-secondary mt-2">退还实际运费的 30%</div>
          </div>
          <div className="bg-on-background p-10 rounded-2xl text-center">
            <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-primary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
            </div>
            <div className="text-5xl font-black font-headline text-primary-container mb-2">50%</div>
            <div className="text-sm text-primary-fixed font-bold">超出 10 个工作日以上</div>
            <div className="text-xs text-primary-fixed/60 mt-2">退还实际运费的 50%</div>
          </div>
        </div>
      </div>
    </section>
  )
}
