"use client";
import React, { useState } from "react";

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-base-300 rounded-lg p-4 mb-3 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <h4 className="text-base font-semibold text-base-content flex justify-between items-center">
        {question}
        <span>{isOpen ? "−" : "+"}</span>
      </h4>
      {isOpen && <p className="mt-2 text-base text-base-content">{answer}</p>}
    </div>
  );
}
