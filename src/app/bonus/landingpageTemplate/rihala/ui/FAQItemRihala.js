"use client";

import React, { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

export default function FAQItemRihala({ question, answer, aos }) {
  const [isOpen, setIsOpen] = useState(false);
  const aosFX = aos ? { "data-aos": aos } : {};

  return (
    <div
      className="border border-base-300 rounded-md p-4 mb-4 cursor-pointer"
      {...aosFX}
      onClick={() => setIsOpen(!isOpen)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setIsOpen(!isOpen);
      }}
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${question}`}
    >
      <div className="flex justify-between items-center">
        <h6 className="text-base-content font-semibold">{question}</h6>
        {isOpen ? <HiChevronUp className="text-primary w-6 h-6" /> : <HiChevronDown className="text-primary w-6 h-6" />}
      </div>
      {isOpen && (
        <p id={`faq-answer-${question}`} className="mt-2 text-base text-base-content/90">
          {answer}
        </p>
      )}
    </div>
  );
}
