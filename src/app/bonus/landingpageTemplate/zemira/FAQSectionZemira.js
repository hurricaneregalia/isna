"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

export default function FAQSectionZemira() {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faq = {
    heading: "Pertanyaan yang Sering Diajukan oleh",
    subtitle: "Klien Profesional",
    description: "Temukan jawaban atas pertanyaan umum seputar layanan desain interior premium kami",
    items: [
      {
        question: "Berapa kisaran biaya jasa desain interior profesional?",
        answer:
          "Biaya jasa desain interior kami dimulai dari Rp 300.000/m² untuk paket dasar hingga Rp 1.000.000/m² untuk paket premium lengkap. Biaya akhir disesuaikan dengan kompleksitas proyek, material yang digunakan, dan luas area. Kami memberikan estimasi biaya transparan setelah konsultasi awal tanpa biaya.",
      },
      {
        question: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan proyek desain?",
        answer:
          "Waktu pengerjaan bervariasi berdasarkan skala proyek:\n\n- Desain konsep: 3-7 hari kerja\n- Paket lengkap (desain + implementasi): 3-8 minggu\nUntuk proyek besar (luas >500m²): 8-12 minggu\n\nKami selalu mengutamakan kualitas dan ketepatan waktu untuk profesional seperti Anda.",
      },
      {
        question: "Apakah tim desainer bisa datang ke lokasi saya?",
        answer:
          "Tentu. Tim desainer elite kami akan melakukan kunjungan ke properti Anda untuk:\n1. Pengukuran akurat\n2. Analisis kondisi eksisting\n3. Diskusi kebutuhan spesifik keluarga\n\nKunjungan tersedia untuk area Jabodetabek, Bandung, Surabaya, dan Bali. Untuk wilayah lain, tersedia konsultasi virtual premium.",
      },
      {
        question: "Bagaimana proses pembayarannya?",
        answer:
          "Pembayaran dilakukan dalam 3 tahap:\n\n1. 30% saat penandatanganan kontrak\n2. 40% setelah persetujuan desain konsep\n3. 30% setelah implementasi selesai dan disetujui\n\nKami menerima transfer bank dan kartu kredit. Tidak ada biaya tersembunyi.",
      },
      {
        question: "Apakah saya bisa memilih material sendiri?",
        answer:
          "Anda memiliki fleksibilitas penuh:\n- Kami menyediakan katalog material premium dari supplier terpercaya\n- Anda dapat memilih material sendiri dengan panduan kami\n- Tim kami akan membantu menyesuaikan dengan budget dan gaya yang diinginkan\n\nKami juga menyediakan sample material untuk Anda evaluasi langsung.",
      },
      {
        question: "Bagaimana jika saya tidak puas dengan hasil desain?",
        answer:
          "Kepuasan Anda adalah prioritas utama. Kami menawarkan:\n- Revisi desain tanpa batas hingga Anda 100% puas\n- Garansi kepuasan 30 hari setelah implementasi\n- Dukungan purna jual selama 1 tahun\n\nHanya 0,5% proyek kami yang memerlukan revisi signifikan, menunjukkan kualitas kerja kami.",
      },
    ],
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="w-fit px-4 bg-primary/10 text-primary btn cursor-text shadow-none border-none mb-3" data-aos="fade-up">
            Informasi Penting
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-base-content mb-6" data-aos="fade-up">
            {faq.heading}
            <span className="text-primary"> {faq.subtitle}</span>
          </h2>
          <p className="text-lg opacity-75" data-aos="fade-up">
            {faq.description}
          </p>
        </div>

        {/* FAQ Items dengan Animasi */}
        <div className="max-w-4xl mx-auto">
          {faq.items.map((faqItem, index) => (
            <div
              key={index}
              className={`border border-base-300 rounded-xl mb-4 overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "bg-base-100 shadow-lg border-primary/30" : "bg-base-100 hover:bg-base-200"
              }`}
            >
              <button className="w-full flex justify-between items-center p-6 text-left" onClick={() => toggleFAQ(index)} aria-expanded={activeIndex === index}>
                <h3 className="text-lg md:text-xl font-semibold text-base-content">{faqItem.question}</h3>
                <span className="ml-4 text-primary transition-transform duration-300">
                  {activeIndex === index ? <HiChevronUp className="h-6 w-6 transform rotate-180" /> : <HiChevronDown className="h-6 w-6" />}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
                ref={(el) => (contentRefs.current[index] = el)}
              >
                <div className="p-6 border-t border-base-300/50">
                  <div className="prose prose-lg opacity-75">
                    {faqItem.answer.split("\n\n").map((paragraph, i) => (
                      <p key={i} className="mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* CTA Bottom */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-10 border border-primary/20" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3  text-center sm:text-left">
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-base-content mb-3">Mau dapat diskon?</h3>
              <p className="text-lg opacity-75">Isi formulir untuk mendapatkan diskonya sekarang juga!</p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Link
                href="#formPendaftaran"
                rel="noopener noreferrer"
                className="w-fit btn btn-primary btn-lg px-10 mx-auto font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Isi Formulir
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
