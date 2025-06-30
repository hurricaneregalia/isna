import React from "react";
import { HiOutlineGift, HiOutlineClock, HiOutlineShieldCheck } from "react-icons/hi";
import FormSectionZemira from "./FormSectionZemira";

const offerContent = {
  badgeLabel: "Promo Spesial",
  titleStart: "Konsultasi Gratis + ",
  highlight: "Diskon 15%",
  titleEnd: " Paket Lengkap",
  description: "Khusus untuk 20 pendaftar pertama bulan ini. Dapatkan penawaran eksklusif untuk transformasi rumah impian Anda!",
  listItems: ["Konsultasi Gratis dengan Desainer Elite", "Diskon 15% Paket Desain Lengkap", "Free 3D Rendering + Swatch Material Eksklusif"],
  quotaLabel: "Kuota Terbatas!",
  quotaInfo: "Hanya tersisa 8 slot dari 20 kuota penawaran spesial",
  privacyTitle: "Privasi Terjamin",
  privacySubtitle: "Data Anda aman dan hanya digunakan untuk layanan premium",
  successTitle: "Terima Kasih Atas Minat Anda!",
  successMessage: "Penawaran spesial telah dikirim ke email Anda. Tim konsultan kami akan menghubungi Anda dalam 1x24 jam.",
  submitButton: "Kirim",
  submitAnother: "Kirim Pesan Lain",
  formTitle: "Dapatkan Diskon 15%",
  formDescription: "Isi formulir berikut untuk mengklaim penawaran spesial dan konsultasi gratis",
  legalNote: "Dengan mengisi formulir, Anda menyetujui kebijakan privasi kami",
};

const listIcons = [HiOutlineGift, HiOutlineClock, HiOutlineShieldCheck];

export default function SpecialOfferZemira() {
  return (
    <section id="penawaran" className="py-16 md:py-24 bg-gradient-to-br from-base-200 to-base-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Konten Penawaran */}
          <div className="lg:w-1/2">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-base-100 relative overflow-hidden" data-aos="fade-up">
              {/* Dekorasi */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-base-100/20"></div>
              <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-base-100/20"></div>

              <div className="relative z-10">
                <span className="inline-flex gap-2 items-center px-4 py-1 bg-secondary/50 text-base-100 btn cursor-text border-none shadow-none mb-6">
                  <HiOutlineGift />
                  {offerContent.badgeLabel}
                </span>

                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                  {offerContent.titleStart}
                  <span className="text-base-100">{offerContent.highlight}</span>
                  {offerContent.titleEnd}
                </h2>

                <p className="text-lg mb-8 opacity-75">{offerContent.description}</p>

                <div className="space-y-4 mb-8">
                  {offerContent.listItems.map((item, index) => {
                    const Icon = listIcons[index];
                    return (
                      <div key={index} className="flex items-center">
                        <Icon className="h-6 w-6 mr-3 text-base-100" />
                        <span>{item}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-base-100/20 p-4 rounded-xl backdrop-blur-sm" data-aos="flip-left">
                  <div className="flex items-center opacity-75">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-base-100 text-primary w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl">20</div>
                    </div>
                    <p className="text-base-100">
                      <span className="font-bold">{offerContent.quotaLabel}</span> {offerContent.quotaInfo}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Badge Privasi */}
            <div className="mt-8 flex items-center justify-center lg:justify-start" data-aos="fade-up">
              <div className="bg-base-100 p-4 rounded-xl shadow-lg flex items-center">
                <HiOutlineShieldCheck className="h-8 w-8 text-primary mr-3" />
                <div>
                  <p className="font-semibold text-base-content">{offerContent.privacyTitle}</p>
                  <p className="text-sm text-base-content/70">{offerContent.privacySubtitle}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form yang sudah dipisahkan */}
          <FormSectionZemira offerContent={offerContent} />
        </div>
      </div>
    </section>
  );
}
