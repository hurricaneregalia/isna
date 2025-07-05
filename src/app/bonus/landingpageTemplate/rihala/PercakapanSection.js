// FAQSectionRihala.js
import { title } from "process";
import React from "react";
import { GrCircleQuestion } from "react-icons/gr";
const faqData = {
  title: "Pertanyaan Pelanggan",
  description: "Temukan jawaban dari pertanyaan yang paling sering ditanyakan.",
  faqItems: [
    {
      question: "Apa saja yang termasuk dalam paket pendakian?",
      answer: "Paket pendakian mencakup guide profesional, porter, tenda, makan 3x sehari, tiket masuk, dan dokumentasi.",
    },
    {
      question: "Apakah pemula bisa ikut pendakian?",
      answer: "Tentu! Kami menyediakan jalur dan pendampingan khusus untuk pemula yang belum pernah mendaki sebelumnya.",
    },
    {
      question: "Bagaimana jika cuaca buruk saat hari pendakian?",
      answer: "Jika cuaca ekstrem, pendakian akan dijadwalkan ulang atau dibatalkan dengan pengembalian biaya sesuai ketentuan.",
    },
    {
      question: "Apakah perlengkapan mendaki disediakan?",
      answer: "Kami menyediakan perlengkapan dasar seperti tenda dan sleeping bag. Peralatan pribadi seperti sepatu dan jaket wajib dibawa sendiri.",
    },
    {
      question: "Bagaimana cara melakukan pembayaran dan booking?",
      answer: "Anda dapat booking melalui website kami dan melakukan pembayaran via transfer bank atau dompet digital.",
    },
  ],
};

export default function FAQSectionRihala() {
  return (
    <section className="py-32 bg-base-100 mx-auto w-full flex justify-center flex-col">
      <div className="text-center mb-12 px-10">
        <h2 className="text-4xl font-bold text-primary">{faqData.title}</h2>
        <p className="mt-2 text-base-content/70">{faqData.description}</p>
      </div>
      <div className="join join-vertical w-full max-w-2xl mx-auto  sm:px-0 px-5">
        {faqData.faqItems.map((item, index) => (
          <div key={index} className="collapse collapse-arrow join-item border border-base-300 group">
            <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
            <div className="collapse-title font-semibold flex items-start gap-5">
              <span className=" text-5xl text-primary group-hover:text-secondary transition-all duration-100">0{index + 1}</span>
              <span className=" group-hover:text-secondary sm:w-6/12 w-full">{item.question}</span>
            </div>
            <div className="collapse-content text-sm opacity-75">{item.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
