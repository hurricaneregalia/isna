import React from "react";

const SavheeraProblemSection = ({ data, secId }) => {
  return (
    <section id={secId} className="py-20 bg-base-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          {data.label && (
            <span className="badge badge-outline badge-lg text-primary border-primary/20 inline-block mb-6" data-aos="fade-down">
              {data.label}
            </span>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-base-content max-w-3xl mx-auto leading-tight mb-8" data-aos="fade-up">
            {data.title}
          </h2>
          <p className="text-lg md:text-xl text-base-content/80 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            {data.items.map((item, index) => (
              <div key={index} className="flex items-start space-x-4" data-aos="fade-up">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-base-content mb-2">{item.title}</h3>
                  <p className="text-base text-base-content/70 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full h-96 bg-base-200 rounded-2xl overflow-hidden" data-aos="fade-left">
            <img src={data.image.src} alt={data.image.alt} className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavheeraProblemSection;
