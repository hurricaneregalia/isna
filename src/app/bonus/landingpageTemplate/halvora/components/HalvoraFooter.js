import React from "react";

export default function HalvoraFooter({ data }) {
  const { footer, brand } = data;

  return (
    <footer className="bg-[#1a1c1a] text-stone-300 pt-20 pb-10 font-light border-t-4 border-emerald-900">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        {/* Brand Info */}
        <div className="space-y-6">
          <h3 className="text-3xl font-serif font-bold text-white">{brand.name}</h3>
          <p className="opacity-80 leading-relaxed max-w-sm text-stone-400">
            {footer.description}
          </p>
        </div>

        {/* Contacts */}
        <div className="space-y-6">
          <h4 className="text-lg font-medium uppercase tracking-widest text-emerald-500">Kontak Kami</h4>
          <ul className="space-y-4">
            {footer.contacts.map((contact, idx) => (
                <li key={idx} className="flex items-center gap-4 text-stone-300 hover:text-emerald-400 transition-colors cursor-pointer group">
                    <span className="text-2xl p-2 bg-stone-800 rounded-full group-hover:bg-emerald-800 group-hover:text-white transition-all">{contact.icon}</span>
                    <span className="group-hover:translate-x-1 transition-transform">{contact.text}</span>
                </li>
            ))}
          </ul>
        </div>

        {/* Newsletter / Extra */}
        <div className="space-y-6">
           <h4 className="text-lg font-medium uppercase tracking-widest text-emerald-500">Berlangganan</h4>
           <p className="opacity-80 text-sm text-stone-400">Dapatkan info promo exclusive dan koleksi terbaru.</p>
           <div className="join w-full ">
              <input className="input input-bordered join-item w-full bg-stone-800 border-none text-stone-200 placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="Email Address" />
              <button className="btn bg-emerald-800 hover:bg-emerald-900 text-white border-none join-item px-6">Kirim</button>
           </div>
        </div>
      </div>

      <div className="border-t border-stone-800 pt-8 text-center opacity-50 text-sm">
        <p>{footer.copyright}</p>
      </div>
    </footer>
  );
}
