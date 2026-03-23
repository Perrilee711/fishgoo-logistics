export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6">
              Precision Logistics
            </span>
            <h1 className="font-headline text-5xl lg:text-7xl font-extrabold text-on-background leading-[1.1] mb-8 tracking-tighter">
              全球12国专线 <br />
              <span className="text-primary-container">&amp; 跨境集运平台</span>
            </h1>
            <p className="text-lg text-secondary mb-10 max-w-lg leading-relaxed">
              覆盖英美加澳及欧洲8国，50+条专属物流线路。从品牌服饰到美妆食品，从直飞极速到海运经济——为每一件包裹匹配最优方案。
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="primary-gradient text-white px-8 py-4 rounded-lg font-headline font-bold flex items-center gap-2 shadow-lg shadow-primary/20">
                立即开始集运
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-lg font-headline font-bold hover:bg-secondary-container transition-colors">
                查看运费表
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between aspect-square">
              <span className="text-4xl font-black font-headline text-primary">12+</span>
              <span className="text-secondary font-bold text-sm uppercase tracking-wider">覆盖国家</span>
            </div>
            <div className="bg-primary-container p-8 rounded-xl flex flex-col justify-between aspect-square mt-8">
              <span className="text-4xl font-black font-headline text-on-primary-container">50+</span>
              <span className="text-on-primary-container font-bold text-sm uppercase tracking-wider">专线线路</span>
            </div>
            <div className="bg-on-background p-8 rounded-xl flex flex-col justify-between aspect-square -mt-8">
              <span className="text-4xl font-black font-headline text-primary-fixed">99%</span>
              <span className="text-primary-fixed font-bold text-sm uppercase tracking-wider">清关通过率</span>
            </div>
            <div className="bg-surface-container-high p-8 rounded-xl flex flex-col justify-between aspect-square">
              <span className="text-4xl font-black font-headline text-secondary">6天</span>
              <span className="text-secondary font-bold text-sm uppercase tracking-wider">最快签收</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary-container/10 rounded-full blur-[120px] -z-10"></div>
    </section>
  )
}
