export default function Advantages() {
  return (
    <section className="bg-surface-container-low py-24" id="advantages">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="font-headline text-3xl font-black text-on-background mb-4">核心优势</h2>
          <p className="text-secondary font-medium">Precision engineered for global commerce</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>flight</span>
            </div>
            <h3 className="font-headline font-bold text-xl mb-3 text-on-background">直飞极速</h3>
            <p className="text-sm text-secondary leading-relaxed">香港直飞目的国，最快6天签收。优先直飞航班+本地快递派送，时效行业领先。</p>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            </div>
            <h3 className="font-headline font-bold text-xl mb-3 text-on-background">延误必赔</h3>
            <p className="text-sm text-secondary leading-relaxed">行业首家超时赔付承诺。超5天赔10%，超10天赔30%，超15天赔50%运费。</p>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>scale</span>
            </div>
            <h3 className="font-headline font-bold text-xl mb-3 text-on-background">实重计费</h3>
            <p className="text-sm text-secondary leading-relaxed">鞋包专线按实际重量计费，可保留鞋盒。体积大的商品省30%以上运费。</p>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
            </div>
            <h3 className="font-headline font-bold text-xl mb-3 text-on-background">全品类覆盖</h3>
            <p className="text-sm text-secondary leading-relaxed">品牌服饰、美妆护肤、食品保健品、带电产品……美妆专线连液体膏体都能走。</p>
          </div>
        </div>
      </div>
    </section>
  )
}
