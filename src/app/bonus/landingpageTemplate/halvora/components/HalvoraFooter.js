import React from "react";

export default function HalvoraFooter({ data }) {
  const { footer, brand } = data;

  return (
    <footer className="bg-accent text-accent-content font-light relative">
      <div
        className="absolute w-full  h-full bg-[length:auto_50px] bg-center opacity-5 "
        style={{
          backgroundImage: `url(${footer.pattern})`,
        }}
      />
      <div className="container mx-auto lg:w-10/12 w-full px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 relative z-1 pt-20">
        {/* Brand Info */}
        <div className="space-y-6">
          <h3 className="text-3xl font-serif font-bold text-white">{brand.name}</h3>
          <p className="opacity-80 leading-relaxed max-w-sm text-secondary">{footer.description}</p>
        </div>

        {/* Contacts */}
        <div className="space-y-6">
          <h4 className="text-lg font-medium uppercase tracking-widest text-primary">Kontak Kami</h4>
          <ul className="space-y-4">
            {footer.contacts.map((contact, idx) => (
              <li key={idx} className="flex items-center gap-4 text-accent-content hover:text-primary transition-colors cursor-pointer group">
                <span className="text-2xl p-2 bg-neutral rounded-full group-hover:bg-primary group-hover:text-primary-content transition-all">{contact.icon}</span>
                <span className="group-hover:translate-x-1 transition-transform">{contact.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter / Extra */}
        <div className="space-y-6">
          <h4 className="text-lg font-medium uppercase tracking-widest text-primary">Berlangganan</h4>
          <p className="opacity-80 text-sm text-secondary">Dapatkan info promo exclusive dan koleksi terbaru.</p>
          <div className="join w-full ">
            <input
              id="subscribe"
              name="susbscribe"
              className="input input-bordered shadow-none join-item w-full  border-none text-accent-content focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Email Address"
            />
            <button className="btn btn-primary border-none join-item px-6 shadow-none">Kirim</button>
          </div>
        </div>
      </div>

      <div className="border-t border-base-content/30 py-8 text-center opacity-50 text-sm">
        <p>{footer.copyright}</p>
      </div>
    </footer>
  );
}
