import React from "react";

export default function HalvoraFooter({ data }) {
  const { footer, brand, navItems } = data;

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
          <p className="opacity-80 leading-relaxed max-w-sm text-accent-content/80 ">{footer.description}</p>
        </div>

        {/* Navigation */}
        <div className="space-y-6">
          <h4 className="text-lg font-medium uppercase tracking-widest text-primary">Navigasi</h4>
          <ul className="space-y-3 grid grid-cols-2 ">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a href={item.href} className="text-accent-content/80 hover:text-primary transition-colors text-sm">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div className="space-y-6">
          <h4 className="text-lg font-medium uppercase tracking-widest text-primary">Hubungi Kami</h4>
          <ul className="space-y-1">
            {footer.contacts.map((contact, idx) => (
              <li key={idx} className="flex items-center gap-4 text-accent-content hover:text-primary transition-colors cursor-pointer group">
                <span className="p-2 bg-neutral rounded-full group-hover:bg-primary group-hover:text-primary-content transition-all">{contact.icon}</span>
                <span className="text-sm group-hover:translate-x-1 transition-transform">{contact.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-base-content/30 py-8 text-center opacity-50 text-sm">
        <p>{footer.copyright}</p>
      </div>
    </footer>
  );
}
