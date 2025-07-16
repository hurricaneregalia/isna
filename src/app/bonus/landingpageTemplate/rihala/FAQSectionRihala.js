// src/app/bonus/landingpageTemplate/rihala/FAQSectionRihala.js
import React from "react";

export default function FAQSectionRihala({ secId, data }) {
  return (
    <section id={secId} className="py-32 bg-base-100 mx-auto w-full flex justify-center flex-col">
      <div className="text-center mb-12 px-10">
        <h2 className="text-4xl font-bold text-primary">{data.title}</h2>
        <p className="mt-2 text-base-content/70">{data.description}</p>
      </div>
      <div className="join join-vertical w-full max-w-2xl mx-auto  sm:px-0 px-5">
        {data.faqItems.map((item, index) => {
          const inputId = `faq-radio-${index}`;
          return (
            <div key={index} className="collapse collapse-arrow join-item border border-base-300 group">
              <input type="radio" name="faq-accordion" id={inputId} defaultChecked={index === 0} />
              <label htmlFor={inputId} className="collapse-title font-semibold flex items-start gap-5 cursor-pointer">
                <span className="text-5xl text-primary group-hover:text-secondary transition-all duration-100">0{index + 1}</span>
                <span className="group-hover:text-secondary sm:w-6/12 w-full">{item.question}</span>
              </label>
              <div className="collapse-content text-sm opacity-75">{item.answer}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
