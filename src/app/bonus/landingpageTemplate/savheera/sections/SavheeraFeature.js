import React from "react";

const SavheeraFeature = ({ data, secId }) => {
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

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {data.items.map((feature, index) => (
            <div key={feature.id} className="card bg-base-200 border border-base-300 p-6 hover:shadow-lg transition-all duration-300" data-aos="fade-up" >
              <div className="space-y-4">
                {/* Feature Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>

                {/* Feature Title */}
                <h3 className="text-lg font-semibold text-base-content">{feature.title}</h3>

                {/* Feature Description */}
                <p className="text-sm text-base-content/70 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        {data.cta && (
          <div className="text-center" data-aos="fade-up" >
            <a href={data.cta.href} className="btn btn-outline btn-lg border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
              {data.cta.text}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default SavheeraFeature;
