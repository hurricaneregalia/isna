"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

export default function FAQSectionBaizan({ children, secId, data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id={secId} className="py-20 bg-base-100 text-base-content">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">{data.headline}</h2>
          <p className="text-xl text-base-content/80">{data.subtitle}</p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          {data.items.map((item, index) => (
            <div key={index} className="border border-base-300 rounded-xl overflow-hidden transition-colors duration-300">
              <button
                className={`group w-full flex justify-between items-center cursor-pointer hover:text-secondary p-6 text-left transition-all duration-300 ${
                  activeIndex === index ? "bg-base-200 text-primary" : "bg-base-100"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-lg">{item.question}</h3>
                {activeIndex === index ? <ChevronUp className="w-5 h-5 text-primary group-hover:text-secondary" /> : <ChevronDown className="w-5 h-5 text-primary group-hover:text-secondary" />}
              </button>

              <div className={`transition-all duration-300 overflow-hidden ${activeIndex === index ? "max-h-96 p-6" : "max-h-0 p-0"}`}>
                <p className="opacity-75">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {children}
    </section>
  );
}
