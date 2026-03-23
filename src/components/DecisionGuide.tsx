export default function DecisionGuide() {
  return (
    <section className="py-24 bg-surface" id="guide">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-headline text-4xl font-black text-on-background mb-4">发货决策指南</h2>
            <p className="text-secondary max-w-md">根据您的物品类别，为您匹配最优运输路径</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          <div className="md:col-span-5 bg-surface-container-lowest rounded-2xl p-10 group overflow-hidden relative">
            <span className="tag-pill bg-primary-container/20 text-primary mb-6">MOST POPULAR</span>
            <h3 className="font-headline text-2xl font-black text-on-background mb-3 mt-4">品牌服饰 / 鞋包</h3>
            <p className="text-sm text-secondary leading-relaxed mb-4">品牌衣物、鞋靴箱包首选。服装快线专属通道，鞋包按实重计费。</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="tag-pill bg-surface-container text-on-surface">服装快线 8-13天</span>
              <span className="tag-pill bg-surface-container text-on-surface">鞋包专线 计实重</span>
              <span className="tag-pill bg-surface-container text-on-surface">免税清关</span>
            </div>
            <button className="primary-gradient text-white px-6 py-3 rounded-lg font-bold text-sm">查看线路</button>
          </div>

          <div className="md:col-span-4 bg-tertiary-container text-on-tertiary-container rounded-2xl p-10">
            <h3 className="font-headline text-2xl font-black mb-3">美妆护肤品</h3>
            <p className="text-on-tertiary-container/80 text-sm mb-4">液体、膏体、粉状、口红、眼影全品类支持。免税清关通关率 99%+。</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="tag-pill bg-black/10 text-on-tertiary-container">美妆专线 8-16天</span>
              <span className="tag-pill bg-black/10 text-on-tertiary-container">液体膏体可走</span>
            </div>
            <button className="bg-on-tertiary-container text-white px-6 py-3 rounded-lg font-bold text-sm w-full">查看专线</button>
          </div>

          <div className="md:col-span-3 bg-primary-container rounded-2xl p-10 text-on-primary-container">
            <h3 className="font-headline text-2xl font-black mb-3">急件直飞</h3>
            <p className="text-on-primary-container/70 text-sm mb-4">直飞限时达，6-12天签收。超时即赔，最高退50%运费。</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="tag-pill bg-black/10">超时赔付</span>
              <span className="tag-pill bg-black/10">DPD派送</span>
            </div>
            <button className="bg-on-primary-container text-white px-6 py-3 rounded-lg font-bold text-sm w-full">立即发送</button>
          </div>

          <div className="md:col-span-4 bg-surface-container-high rounded-2xl p-10">
            <h3 className="font-headline text-2xl font-black text-on-background mb-3">食品 / 保健品</h3>
            <p className="text-secondary text-sm mb-4">真空肉类、药品、保健品、书籍杂志等。全能专线通道，免税清关。</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="tag-pill bg-surface-container text-on-surface">全能专线</span>
              <span className="tag-pill bg-surface-container text-on-surface">DPD/皇邮派送</span>
            </div>
            <button className="bg-surface-container-lowest text-on-surface px-6 py-3 rounded-lg font-bold text-sm">查看线路</button>
          </div>

          <div className="md:col-span-4 bg-on-background text-white rounded-2xl p-10">
            <h3 className="font-headline text-2xl font-black mb-3">大件 / 批量商业</h3>
            <p className="text-secondary-fixed-dim text-sm mb-4">5kg起批量发货，家具家电等超大件。商业大货专线 + 海运经济方案。</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="tag-pill bg-white/10">商业大货 7-12天</span>
              <span className="tag-pill bg-white/10">海运 45-70天</span>
            </div>
            <button className="bg-white/10 hover:bg-white/20 transition-colors px-6 py-3 rounded-lg font-bold text-sm w-full backdrop-blur-sm">申请报价</button>
          </div>

          <div className="md:col-span-4 bg-surface-container-lowest rounded-2xl p-10 border border-surface-container">
            <h3 className="font-headline text-2xl font-black text-on-background mb-3">带电产品</h3>
            <p className="text-secondary text-sm mb-4">手机配件、充电宝、电子设备等带电商品专属通道，安全合规运输。</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="tag-pill bg-surface-container text-on-surface">带电专线</span>
              <span className="tag-pill bg-surface-container text-on-surface">多国覆盖</span>
            </div>
            <button className="bg-surface-container-high text-on-background px-6 py-3 rounded-lg font-bold text-sm">查看线路</button>
          </div>

        </div>
      </div>
    </section>
  )
}
