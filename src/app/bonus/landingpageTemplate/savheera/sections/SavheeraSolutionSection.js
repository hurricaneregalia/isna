import React from "react";

const SavheeraSolutionSection = ({ data, secId }) => {
  return (
    <section id={secId} className="py-20 bg-base-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Visual Section - Left Side */}
          <div className="flex-1" data-aos="fade-up">
            {data.image && (
              <div className="relative">
                <img src={data.image.src} alt={data.image.alt} className="w-full h-auto rounded-2xl shadow-xl" loading="lazy" />
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
              </div>
            )}
          </div>

          {/* Content Section - Right Side */}
          <div className="flex-1 space-y-8">
            {/* Badge */}
            {data.label && (
              <span className="badge badge-outline badge-lg text-primary border-primary/20 inline-block" data-aos="fade-down">
                {data.label}
              </span>
            )}

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-base-content leading-tight" data-aos="fade-up">
              {data.title}
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-base-content/80 leading-relaxed" data-aos="fade-up">
              {data.subtitle}
            </p>

            {/* Supporting Points */}
            <div className="space-y-6">
              {data.points.map((point, index) => (
                <div key={index} className="flex items-start space-x-4" data-aos="fade-up">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-base-content mb-2">{point.title}</h3>
                    <p className="text-base text-base-content/70 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4" data-aos="fade-up">
              <a href={data.cta.href} className="btn btn-primary btn-lg text-primary-content hover:scale-105 transition-transform duration-300">
                {data.cta.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavheeraSolutionSection;
