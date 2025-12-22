import React from "react";

const SavheeraCTA = ({ data, secId }) => {
  return (
    <section id={secId} className="py-20 bg-linear-to-b from-primary/5 to-base-100">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Content */}
        <div className="text-center space-y-8">
          {/* Badge */}
          {data.badge && (
            <span className="badge badge-outline badge-lg text-primary border-primary/20 inline-block" data-aos="fade-down">
              {data.badge}
            </span>
          )}

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-base-content leading-tight" data-aos="fade-up">
            {data.headline}
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-base-content/80 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up">
            {data.subtitle}
          </p>

          {/* Trust Indicators */}
          {data.trustIndicators && (
            <div className="flex flex-wrap justify-center gap-8" data-aos="fade-up">
              {data.trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-base-content/70">{indicator}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up">
            {/* Primary CTA */}
            <a href={data.primaryCta.href} className="btn btn-primary btn-lg text-primary-content hover:scale-105 transition-transform duration-300" data-aos="fade-up">
              {data.primaryCta.text}
            </a>

            {/* Secondary CTA */}
            {data.secondaryCta && (
              <a
                href={data.secondaryCta.href}
                className="btn btn-outline btn-lg border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                data-aos="fade-up"
               
              >
                {data.secondaryCta.text}
              </a>
            )}
          </div>

          {/* Social Proof Counter */}
          {data.socialProof && (
            <div className="text-center" data-aos="fade-up">
              <p className="text-lg font-semibold text-primary mb-2">{data.socialProof.count}</p>
              <p className="text-sm text-base-content/60">{data.socialProof.message}</p>
            </div>
          )}

          {/* Contact Information */}
          {data.contact && (
            <div className="mt-8 text-sm text-base-content/60" data-aos="fade-up">
              <p>
                {data.contact.prefix}{" "}
                <a href={`tel:${data.contact.phone}`} className="text-primary hover:underline">
                  {data.contact.phone}
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SavheeraCTA;
