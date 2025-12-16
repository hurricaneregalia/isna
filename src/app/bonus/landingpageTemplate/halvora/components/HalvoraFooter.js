import React from "react";

export default function HalvoraFooter({ data }) {
  const { footer, brand } = data;

  return (
    <footer className="bg-[#6B4423] text-[#FFF5EA] pt-20 pb-10 font-light ">
      <div className="container mx-auto lg:w-10/12 w-full px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        {/* Brand Info */}
        <div className="space-y-6">
          <h3 className="text-3xl font-serif font-bold text-white">{brand.name}</h3>
          <p className="opacity-80 leading-relaxed max-w-sm text-[#FFDAB9]">{footer.description}</p>
        </div>

        {/* Contacts */}
        <div className="space-y-6">
          <h4 className="text-lg font-medium uppercase tracking-widest text-[#D48F8F]">Kontak Kami</h4>
          <ul className="space-y-4">
            {footer.contacts.map((contact, idx) => (
              <li key={idx} className="flex items-center gap-4 text-[#FFF5EA] hover:text-[#D48F8F] transition-colors cursor-pointer group">
                <span className="text-2xl p-2 bg-[#5A381C] rounded-full group-hover:bg-[#D48F8F] group-hover:text-white transition-all">{contact.icon}</span>
                <span className="group-hover:translate-x-1 transition-transform">{contact.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter / Extra */}
        <div className="space-y-6">
          <h4 className="text-lg font-medium uppercase tracking-widest text-[#D48F8F]">Berlangganan</h4>
          <p className="opacity-80 text-sm text-[#FFDAB9]">Dapatkan info promo exclusive dan koleksi terbaru.</p>
          <div className="join w-full ">
            <input
              id="subscribe"
              name="susbscribe"
              className="input input-bordered join-item w-full bg-[#5A381C] border-none text-[#FFF5EA] placeholder-[#A07050] focus:outline-none focus:ring-1 focus:ring-[#D48F8F]"
              placeholder="Email Address"
            />
            <button className="btn bg-[#D48F8F] hover:bg-[#c07d7d] text-white border-none join-item px-6">Kirim</button>
          </div>
        </div>
      </div>

      <div className="border-t border-[#8B5E3C] pt-8 text-center opacity-50 text-sm">
        <p>{footer.copyright}</p>
      </div>
    </footer>
  );
}
