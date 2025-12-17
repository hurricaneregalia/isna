import React from "react";

export default function KanzarFooter({ secId = "footer", data }) {
  const { brandName, description, quickLinks, contact, socials, bgImage } = data.footer;

  return (
    <footer
      id={secId}
      className="bg-slate-900 text-slate-400 relative pt-24 pb-16 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage}), url(${bgImage})`,
        backgroundPosition: "0 0, 80px 80px",
        backgroundSize: "160px 160px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 to-transparent"></div>

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Brand Info */}
          <div className="md:w-1/3">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl font-serif font-bold text-white tracking-wider">{brandName}</h3>
            </div>
            <p className="leading-relaxed mb-6 text-sm">{description}</p>
            <div className="flex gap-4">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 card bg-slate-800 flex items-center justify-center hover:bg-warning hover:text-white transition-all border border-slate-700"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/3">
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm border-b border-slate-800 pb-2 inline-block">Menu</h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-warning transition-colors flex items-center gap-2">
                    <span className="text-warning">›</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:w-1/3">
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm border-b border-slate-800 pb-2 inline-block">Kontak</h4>
            <div className="space-y-3 text-sm">
              {contact.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="shrink-0 text-warning">{item.icon}</div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-xs tracking-wider flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            &copy; {new Date().getFullYear()} {brandName}. All Rights Reserved.
          </p>
          <p className="text-slate-600">Designed with Barakah</p>
        </div>
      </div>
    </footer>
  );
}
