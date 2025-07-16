"use client";

import { useState } from "react";
import SectionWrapper from "./ui/SectionWrapper";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Heading from "./ui/Heading";

export default function FAQSectionMirka({ data, secId }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="sm:px-5 px-3" id={secId}>
      <div className="bg-slate-900  lg:px-20 py-32">
        <SectionWrapper css="sm:px-20 space-y-10 container mx-auto px-4 sm:flex flex-col sm:flex-row-reverse gap-10">
          <div className="lg:w-4/12 sm:w-1/2 text-white sm:text-right text-center">
            <Heading>{data.title}</Heading>
            <hr className="lg:my-8 my-4 opacity-0" />
          </div>
          <div className="lg:w-8/12 sm:w-1/2 w-full">
            <div className="join join-vertical w-full ">
              {data.faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`collapse join-item border-base-100/10 border-t rounded-none text-white transition-all duration-300 ${activeIndex === index ? "collapse-open" : "collapse-close"}`}
                >
                  <button onClick={() => toggleAccordion(index)} className="collapse-title px-0 text-md font-semibold text-left w-full flex justify-between items-center">
                    <span>{faq.question}</span>
                    <span className="text-xl">{activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}</span>
                  </button>
                  <div className="collapse-content text-sm opacity-75 px-0">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
