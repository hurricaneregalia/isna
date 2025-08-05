"use client";
import React, { useState, useRef, useEffect } from "react";
import Wrapper from "./ui/Wrapper";
import Headline from "./ui/Headline";
import { Minus, Plus } from "lucide-react";

export default function FAQKanzar() {
  const dataFAQKanzar = {
    title: "Pertanyaan Umum Seputar Revelyn",
    faqs: [
      {
        question: "Revelyn cocok untuk wanita berhijab?",
        answer: "Ya, padding helm kami hijab-friendly dan tetap nyaman bahkan untuk pemakaian lama.",
      },
      {
        question: "Bisa dibeli secara COD?",
        answer: "Bisa! Revelyn tersedia di Shopee & Tokopedia dan mendukung opsi pembayaran COD.",
      },
      {
        question: "Berat helmnya gimana?",
        answer: "Super ringan! Sangat cocok untuk penggunaan harian, bahkan saat bawa tas atau riding jauh.",
      },
      {
        question: "Muat di bagasi skuter saya?",
        answer: "Ya! Revelyn didesain compact agar bisa muat di bagasi skuter modern seperti Scoopy, Fazzio, dan Vespa.",
      },
    ],
  };

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <Wrapper className="bg-base-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <Headline text={dataFAQKanzar.title} />
        </div>

        <div className="space-y-4">
          {dataFAQKanzar.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="bg-base-200 rounded-lg shadow-sm border border-base-300 transition-all duration-300">
                <button onClick={() => toggleFAQ(index)} className="w-full cursor-pointer text-left p-4 font-medium text-base-content flex justify-between items-center">
                  {faq.question}
                  <span className="text-primary text-xl">{isOpen ? <Minus /> : <Plus />}</span>
                </button>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out px-4 ${isOpen ? "max-h-40 opacity-100 pb-4" : "max-h-0 opacity-0 pb-0"}`}>
                  <p className="text-base-content/80">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}
