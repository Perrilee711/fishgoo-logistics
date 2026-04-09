export default function SocialProofBar() {
  const items = [
    { icon: 'local_shipping', text: '7-12 Day Delivery' },
    { icon: 'verified_user', text: 'Verified Suppliers' },
    { icon: 'photo_camera', text: 'QC Before Shipping' },
    { icon: 'language', text: '200+ Countries' },
  ]

  return (
    <section className="bg-surface-container-high py-5">
      <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-center gap-8 md:gap-16">
        {items.map((item) => (
          <div key={item.text} className="flex items-center gap-2 text-on-surface">
            <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
            <span className="font-headline font-bold text-sm tracking-tight">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
