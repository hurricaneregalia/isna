import React from "react";

const SavheeraProof = ({ data, secId }) => {
  // Render rating stars
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => <div key={i} className={`w-4 h-4 ${i < rating ? "bg-primary" : "bg-base-300"} rounded-full`} aria-label={`${i < rating ? "Filled" : "Empty"} star`} />);
  };

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

        {/* Stats Section */}
        {data.stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" data-aos="fade-up">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{data.stats.customersCount}</div>
              <div className="text-base text-base-content/70">Pelanggan Puas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{data.stats.satisfactionRate}</div>
              <div className="text-base text-base-content/70">Tingkat Kepuasan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{data.stats.countriesServed}</div>
              <div className="text-base text-base-content/70">Negara Dilayani</div>
            </div>
          </div>
        )}

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((testimonial, index) => (
            <div key={testimonial.id} className="card bg-base-200 border border-base-300 p-6 hover:shadow-lg transition-shadow duration-300" data-aos="fade-up" >
              <div className="space-y-4">
                {/* Customer Info */}
                <div className="flex items-center space-x-4">
                  {/* Customer Photo */}
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-base-300">
                    <img src={testimonial.customer.photo} alt={`Photo of ${testimonial.customer.name}`} className="w-full h-full object-cover" loading="lazy" />
                  </div>

                  {/* Customer Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-base-content">{testimonial.customer.name}</h3>
                    <p className="text-sm text-base-content/70">{testimonial.customer.location}</p>
                    {testimonial.customer.product && <p className="text-xs text-primary mt-1">{testimonial.customer.product}</p>}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex space-x-1" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Quote */}
                <blockquote className="text-base text-base-content/80 italic leading-relaxed">"{testimonial.quote}"</blockquote>

                {/* Date */}
                {testimonial.date && (
                  <p className="text-xs text-base-content/60">
                    {new Date(testimonial.date).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        {data.cta && (
          <div className="text-center mt-16" data-aos="fade-up" >
            <a href={data.cta.href} className="btn btn-outline btn-lg border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
              {data.cta.text}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default SavheeraProof;
