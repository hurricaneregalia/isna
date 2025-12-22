import React from "react";

const SavheeraPricing = ({ data, secId }) => {
  return (
    <section id={secId} className="py-20 bg-base-100">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          {data.badge && (
            <span className="badge badge-outline badge-lg text-primary border-primary/20 inline-block mb-6" data-aos="fade-down">
              {data.badge}
            </span>
          )}

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-base-content max-w-3xl mx-auto leading-tight mb-8" data-aos="fade-up">
            {data.headline}
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-base-content/80 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up">
            {data.subtitle}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 ">
          {data.tiers.map((tier, index) => (
            <div
              key={tier.id}
              className={`card bg-base-200 border ${tier.featured ? "border-primary shadow-xl " : "border-base-300"} p-8 hover:shadow-lg transition-all duration-300 relative`}
              data-aos="fade-up"
              
            >
              {/* Featured Badge */}
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="badge badge-primary text-primary-content">{tier.featuredBadge}</span>
                </div>
              )}

              <div className="space-y-6">
                {/* Tier Name */}
                <h3 className="text-2xl font-bold text-base-content text-center">{tier.name}</h3>

                {/* Price */}
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary">{tier.price}</div>
                  {tier.priceNote && <p className="text-sm text-base-content/70 mt-2">{tier.priceNote}</p>}
                </div>

                {/* Description */}
                <p className="text-base text-base-content/80 text-center leading-relaxed">{tier.description}</p>

                {/* Features List */}
                <div className="space-y-3 ">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <p className="text-sm text-base-content/70 leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <a
                    href={tier.cta.href}
                    className={`btn w-full ${
                      tier.featured ? "btn-primary text-primary-content" : "btn-outline border-primary text-primary hover:bg-primary hover:text-white"
                    } transition-all duration-300`}
                  >
                    {tier.cta.text}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        {data.additionalInfo && (
          <div className="flex items-end justify-center mt-12" data-aos="fade-up" >
            <div className="text-center max-w-md">
              <p className="text-sm text-base-content/60 mb-4">{data.additionalInfo.title}</p>
              <p className="text-base text-base-content/80 mb-6">{data.additionalInfo.description}</p>
              <a href={data.additionalInfo.cta.href} className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                {data.additionalInfo.cta.text}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SavheeraPricing;
