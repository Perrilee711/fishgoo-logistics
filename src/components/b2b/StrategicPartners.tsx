export default function StrategicPartners() {
  const partners = [
    {
      tags: ['E-Commerce', 'Dropshipping'],
      quote: 'Transitioning our entire logistics chain to Fishgoo reduced our shipping friction by half. Their QC team catches defects before they reach our customers.',
      name: 'Marcus T.',
      title: 'COO, VoltEdge Commerce',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcJCwXFRNNtTzRElxDKK_J1ByovkM-oju510qUaDwO7hxdy4ASVKsueWVTAf1IUZ6Z050U-k-j6HF_9QkGCru2gOeKuAWsf6NadNxIKgp0rNKpHNE9I_uhgqxAdgFffG8mnK_AGOcgTpQ0Y8j_FUYY9Pu1pg7kacygqsrZ1vosD6kd6jvc0VHq0JHheRpKzCKIUU1SuSNiZ9gIGUIUoMREDMAUKJj29LJvbTpWXIA9wjFIaiWnJZxwZ2fHtGvdT5Cjk08pSrrEPnY',
    },
    {
      tags: ['Fashion', 'D2C'],
      quote: 'The real-time tracking accuracy allowed us to lower our safety stock levels, freeing up significant working capital within the first quarter.',
      name: 'Sarah J.',
      title: 'Supply Chain Director',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXj7V8oqq4kPzlkM0vDkh3XwNFGArVfSwrgHDo9WaSZAvYXWvvfJvrz9OaNtTPDTBp1P7mUDP_sGiqmVZjsXiE-R809RP9_U8xEPg4Sl8K_hn0OTatKhukJ6CcNLZ-gjfSu2htBtuf0cdIcIXOUfpwGvNkj5L5L76fLftKxRP62vkwr_4jWMG8ADU8FM5HLBZRjGX9xMAe_kP8KflANn0O-ruw9UOSD7wFa-Io-2wgw1vfQXcGrrc7aiN-OxLPj3B98DWkm7RzQac',
    },
    {
      tags: ['Wholesale', 'Multi-Category'],
      quote: 'Fishgoo\'s MOQ management simplified our complex part-sourcing from multiple Chinese platforms. They are more than a vendor — they\'re a partner.',
      name: 'David C.',
      title: 'Global Logistics Lead',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbCvMawEaDL5C8yAoNMUTR3bkSub2lICplPwwzOuOXqsT0CrZLQYUyZSuQQkeF5NXAcCU1id74OMDbCjLJm6ynVFJ6Rqo6sxbqI7AMwdUXJ27jJ7mQgknzQ1sSmDQ5-nHJqQQ6NVThWYKzQ2m90P5DKIoifssolmTZNBnsqc5h60FtX2_hnnv8HuSkZJXZfgFx6ky8fZelNU4uvvBK_9pniXzJkYbqqe2rC0w9Ndc-fsohmpIFElsN4kLNtFbqkoKh3XjaCJWSIMA',
    },
  ]

  return (
    <section id="partners" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-[#00D084] font-extrabold text-[10px] tracking-[0.2em] uppercase mb-2">Trusted Globally</p>
        <h2 className="font-jakarta text-3xl font-extrabold text-[#141b2b] mb-4">Strategic Partners</h2>
        <p className="text-slate-500 text-sm max-w-2xl mx-auto mb-10">From emerging Shopify stores to established wholesale operations, we power the engines of cross-border commerce.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {partners.map((p) => (
            <div key={p.name} className="bg-white p-7 rounded-lg border border-slate-100 shadow-sm flex flex-col min-h-[280px] custom-shadow-hover transition-all duration-300">
              <div className="flex gap-2 mb-6">
                {p.tags.map((tag) => (
                  <span key={tag} className="bg-slate-50 text-slate-500 text-[9px] font-extrabold px-2 py-0.5 rounded border border-slate-100 uppercase">{tag}</span>
                ))}
              </div>
              <p className="text-[#141b2b] font-medium text-sm leading-relaxed mb-8 flex-grow italic">
                &ldquo;{p.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                <img alt={p.name} className="w-10 h-10 rounded object-cover" src={p.avatar} />
                <div>
                  <p className="font-jakarta font-extrabold text-sm">{p.name}</p>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-tighter">{p.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
