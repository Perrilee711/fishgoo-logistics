export default function ComparisonTable() {
  const rows = [
    {
      item: '计费规则',
      fishgoo: '鞋包线路按实重计费，可保留鞋盒',
      traditional: '体积重与实重取大值，泡重费高',
    },
    {
      item: '物流时效 (UK)',
      fishgoo: '直飞 6-12 天，超时赔付',
      traditional: '12-25 工作日，无赔付',
    },
    {
      item: '清关费用',
      fishgoo: '双清包税免税专线，零风险',
      traditional: '税费自理，被税概率高',
    },
    {
      item: '美妆品类',
      fishgoo: '液体、膏体、口红、粉状均可寄',
      traditional: '多数不接或限制严格',
    },
    {
      item: '末端派送',
      fishgoo: 'DPD / 皇家邮政 / USPS 本地快递',
      traditional: '邮政小包，时效不稳定',
    },
    {
      item: '赔付保障',
      fishgoo: '丢件全赔 + 延误最高赔50%运费',
      traditional: '赔付流程复杂，理赔周期长',
    },
  ]

  return (
    <section className="py-24 bg-surface-container-low" id="compare">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-black text-on-background mb-4">为什么选择 Fishgoo</h2>
          <p className="text-secondary">打破传统跨境物流的高昂溢价与不透明</p>
        </div>
        <div className="overflow-x-auto rounded-2xl bg-surface-container-lowest shadow-xl">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container text-on-surface">
                <th className="p-6 font-headline font-bold uppercase tracking-widest text-xs">对比项目</th>
                <th className="p-6 font-headline font-black text-primary uppercase tracking-widest text-xs">Fishgoo</th>
                <th className="p-6 font-headline font-bold text-secondary uppercase tracking-widest text-xs">传统转运公司</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-low">
              {rows.map((row, i) => (
                <tr key={i}>
                  <td className="p-6 font-bold text-on-background">{row.item}</td>
                  <td className="p-6 text-primary">
                    <span className="material-symbols-outlined align-middle mr-1">check_circle</span>
                    {row.fishgoo}
                  </td>
                  <td className="p-6 text-secondary">
                    <span className="material-symbols-outlined align-middle mr-1 text-sm">cancel</span>
                    {row.traditional}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
