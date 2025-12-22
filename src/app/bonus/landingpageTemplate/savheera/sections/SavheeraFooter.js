import React from "react";

const SavheeraFooter = ({ data, secId }) => {
  return (
    <footer id={secId} className="bg-base-200 border-t border-base-300">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              {/* Logo */}
              <div className="text-2xl font-serif text-primary font-bold">{data.brand.name}</div>

              {/* Tagline */}
              <p className="text-base text-base-content/70 leading-relaxed">{data.brand.tagline}</p>

              {/* Description */}
              <p className="text-sm text-base-content/60 leading-relaxed">{data.brand.description}</p>

              {/* Social Media */}
              <div className="flex space-x-4">
                {data.social.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-content transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-base-content">Quick Links</h3>
              <ul className="space-y-2">
                {data.quickLinks.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-base text-base-content/70 hover:text-primary transition-colors duration-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold text-base-content mb-4">{data.categories.title}</h3>
              <ul className="space-y-2">
                {data.categories.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm text-base-content/70 hover:text-primary transition-colors duration-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-base-content">Customer Service</h3>
              <ul className="space-y-2">
                {data.customerService.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-base text-base-content/70 hover:text-primary transition-colors duration-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-base-300 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-base-content/60">&copy;{data.copyright}</p>

            {/* Legal Links */}
            <div className="flex space-x-6">
              {data.legal.map((link, index) => (
                <a key={index} href={link.href} className="text-sm text-base-content/60 hover:text-primary transition-colors duration-300">
                  {link.label}
                </a>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="flex space-x-3">
              {data.paymentMethods.map((method, index) => (
                <div key={index} className="w-8 h-5 bg-base-100 rounded flex items-center justify-center" title={method.name}>
                  <span className="text-base">{method.icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SavheeraFooter;
