import React from "react";

export default function HalvoraFooter({ data }) {
  const { footer, brand } = data;

  return (
    <footer className="bg-neutral text-neutral-content pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Brand Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-serif font-bold">{brand.name}</h3>
          <p className="opacity-80 leading-relaxed max-w-xs">
            {footer.description}
          </p>
        </div>

        {/* Contacts */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold uppercase tracking-wider text-primary">Kontak Kami</h4>
          <ul className="space-y-3">
            {footer.contacts.map((contact, idx) => (
                <li key={idx} className="flex items-center gap-3 opacity-90 hover:text-primary transition-colors cursor-pointer">
                    <span className="text-xl">{contact.icon}</span>
                    <span>{contact.text}</span>
                </li>
            ))}
          </ul>
        </div>

        {/* Newsletter / Extra */}
        <div className="space-y-4">
           <h4 className="text-lg font-bold uppercase tracking-wider text-primary">Berlangganan</h4>
           <p className="opacity-80 text-sm">Dapatkan info promo terbaru langsung ke inbox Anda.</p>
           <div className="join w-full">
              <input className="input input-bordered join-item w-full text-base-content" placeholder="Email Address" />
              <button className="btn btn-primary join-item">Subscribe</button>
           </div>
        </div>
      </div>

      <div className="border-t border-neutral-content/20 pt-8 text-center opacity-60 text-sm">
        <p>{footer.copyright}</p>
      </div>
    </footer>
  );
}
