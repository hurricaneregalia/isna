import React from "react";

const SavheeraHeroSection = ({ data, secId }) => {
  return (
    <section id={secId} className="min-h-screen flex items-center justify-center bg-base-100 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge / Eyebrow */}
          {data.label && <span className="badge badge-outline badge-lg text-primary border-primary/20">{data.label}</span>}

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-base-content max-w-4xl leading-tight">{data.title}</h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-base-content/80 max-w-2xl leading-relaxed">{data.subtitle}</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            {data.ctaPrimary && (
              <a href={data.ctaPrimary.href} className="btn btn-primary btn-lg text-primary-content hover:scale-105 transition-transform duration-300">
                {data.ctaPrimary.label}
              </a>
            )}

            {data.ctaSecondary && (
              <a href={data.ctaSecondary.href} className="btn btn-outline btn-lg border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                {data.ctaSecondary.label}
              </a>
            )}
          </div>

          {/* Hero Image */}
          <div className="w-full max-w-3xl mx-auto">
            <img src={data.image.src} alt={data.image.alt} className="w-full h-full object-cover rounded-2xl shadow-2xl" loading="lazy" />
          </div>

          {/* Trust Snippet */}
          {data.trustNote && <p className="text-sm text-base-content/60 italic">{data.trustNote}</p>}
        </div>
      </div>
    </section>
  );
};

export default SavheeraHeroSection;
