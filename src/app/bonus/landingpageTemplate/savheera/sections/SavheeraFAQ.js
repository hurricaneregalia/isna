"use client";
import React, { useState } from "react";

const SavheeraFAQ = ({ data, secId }) => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <section id={secId} className="py-20 bg-base-100">
      <div className="container mx-auto px-4 lg:w-6/12 sm:w-10/12 w-full">
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

        {/* FAQ Items Grid */}
        <div className="grid grid-cols-1  gap-3 mb-12">
          {data.items.map((item, index) => (
            <div key={item.id} className="bg-base-200 border border-base-300 rounded-xl overflow-hidden" data-aos="fade-up">
              {/* Question */}
              <button onClick={() => toggleItem(item.id)} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-base-300/50 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-base-content pr-4 leading-tight">{item.question}</h3>
                <div className={`text-primary transition-transform duration-300 ${activeItem === item.id ? "rotate-45" : ""}`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div className={`overflow-hidden transition-all duration-300 ${activeItem === item.id ? "max-h-96" : "max-h-0"}`}>
                <div className="px-6 pb-4">
                  <div className="text-base text-base-content/70 leading-relaxed">{item.answer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SavheeraFAQ;
