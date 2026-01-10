"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import ExalviaSectionHeader from "../ui-components/ExalviaSectionHeader";
import ExalviaBodyText from "../ui-components/ExalviaBodyText";

export default function ExalviaFAQ({ data, secId = "faq" }) {
  const [openItem, setOpenItem] = useState(0);

  if (!data) return null;

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? -1 : index);
  };

  return (
    <section id={secId} className="py-20 md:py-32 bg-base-100">
      <div className="lg:w-8/12 sm:w-10/12 w-full mx-auto px-6 md:px-16 lg:px-24">
        <div className="mb-12 md:mb-16">
          <ExalviaSectionHeader badge={data.label} title={data.title} subtitle={data.subtitle} align="center" />
        </div>
        <div className="space-y-4">
          {data.items?.map((item, idx) => (
            <div key={idx} className="bg-base-100 border-3 border-base-content rounded-bl-4xl rounded-none overflow-hidden transition-all duration-500 ease-in-out">
              <button
                onClick={() => toggleItem(idx)}
                className="w-full p-6 text-left font-montserrat font-semibold text-base md:text-lg text-base-content flex items-center justify-between gap-4 hover:bg-base-200/20 transition-colors duration-300 ease-in-out"
              >
                <span className="pr-4">{item.question}</span>
                <FaChevronDown className={`shrink-0 text-base-content/70 transition-all duration-500 ease-in-out ${openItem === idx ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="p-6 pt-0">
                  <ExalviaBodyText text={item.answer} className="text-sm md:text-base mb-0 animate-fadeIn" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}
