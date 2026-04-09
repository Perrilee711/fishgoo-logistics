export default function DataMetrics() {
  const metrics = [
    { value: '$0.85', label: 'Avg. Rate / KG', sub: 'SEA FREIGHT - GLOBAL' },
    { value: '4.2h', label: 'Turnaround Time', sub: 'AVG TERMINAL DWELL' },
    { value: '100%', label: 'Transparency', sub: 'FULL TRACKING ACCESS' },
  ]

  return (
    <section className="py-4 md:py-6 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4 bg-white px-3 md:px-5 py-3 md:py-4 rounded border border-slate-200">
              <div className="text-[#00D084] font-extrabold text-lg md:text-2xl tracking-tighter">{m.value}</div>
              <div className="text-[10px] md:text-xs">
                <p className="font-extrabold text-slate-900 leading-tight">{m.label}</p>
                <p className="text-slate-400 font-bold tracking-tight uppercase text-[8px] md:text-[9px] hidden md:block">{m.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
