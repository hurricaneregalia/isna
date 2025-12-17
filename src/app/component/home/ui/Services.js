import React from "react";
import { FaArrowRight, FaCheck, FaStar, FaXmark } from "react-icons/fa6";
import { PiSealCheckFill } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import LinkBtnOutlinePrimary from "./LinkBtnOutlinePrimary";
import LinkBtnPrimary from "./LinkBtnPrimary";

const dataLayanan = {
  title: "Paket Persuasive Copywriting",
  description: "Klik tombol di bawah sebelum waktu Anda berakhir.",
  background: "/images/landingPage/bgShine.webp",
  image: "/images/uploads/pages/section-5.webp",
  pesanWa: "saya ingin konsultasi",
  item: [
    {
      title: "Qolilan copy",
      slug: "qolilan-copy",
      price: 199000,
      bestFor: "Untuk memulai bisnis online",
      fitur: [
        { label: "1 set copywriting", active: true },
        { label: "SEO/ SEM friendly", active: true },
        { label: "Static landing page (LP)", active: true },
        { label: "LP di kelola admin", active: true },
        { label: "Analisis produk", active: false },
        { label: "Analisis target pasar", active: false },
        { label: "Consumer insight", active: false },
        { label: "Branding tips", active: false },
      ],
      proses: 2,
      rating: 2,
      isBest: false,
    },
    {
      title: "Mumtazan copy",
      slug: "mumtazan-copy",
      price: 275900,
      bestFor: "Untuk kembangkan bisnis online",
      fitur: [
        { label: "1 set copywriting", active: true },
        { label: "SEO/ SEM friendly", active: true },
        { label: "Static landing page (LP)", active: true },
        { label: "LP di kelola admin", active: true },
        { label: "Analisis produk", active: true },
        { label: "Analisis target pasar", active: true },
        { label: "Consumer insight", active: false },
        { label: "Branding tips", active: false },
      ],
      proses: 3,
      rating: 3,
      isBest: false,
    },
    {
      title: "Kamilan copy",
      slug: "kamilan-copy",
      price: 290000,
      bestFor: "Untuk branding bisnis online",
      fitur: [
        { label: "1 set copywriting", active: true },
        { label: "SEO/ SEM friendly", active: true },
        { label: "Static landing page (LP)", active: true },
        { label: "LP di kelola admin", active: true },
        { label: "Analisis produk", active: true },
        { label: "Analisis target pasar", active: true },
        { label: "Consumer insight", active: true },
        { label: "Branding tips", active: true },
      ],
      proses: 6,
      rating: 5,
      isBest: true,
    },
  ],
};

export default function Services() {
  return (
    <div id="productWrapper" className="grid gap-5 md:grid-cols-3 w-full">
      {dataLayanan.item.map((item, index) => {
        return (
          <div
            key={index}
            id={`product-${index}`}
            className={`bg-base-100 rounded-none rounded-bl-3xl ${item.isBest === true ? "border border-amber-300 shadow-xl shadow-amber-300/50" : ""}`}
            data-aos="fade-up"
          >
            <div className="card-body p-0 flex h-full">
              <div className="bg-gray-900 text-gray-300 rounded-bl-3xl p-8 overflow-hidden">
                <div className="text-2xl mb-5 flex gap-1 text-amber-300">
                  {Array.from({ length: item.rating }, (_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
                <p className="font-normal">{item.title}</p>
                <p className="text-3xl font-bold my-2">{item.price.toLocaleString("id-ID")}</p>
                <p className="font-normal flex items-start gap-1">
                  <PiSealCheckFill className="text-success mt-1 shrink-0" />
                  <span>{item.bestFor}</span>
                </p>

                <div className="card-actions w-full mx-auto mt-5">
                  {item.isBest ? (
                    <LinkBtnPrimary btnSm="y" href={`/services/package/${item.slug}`} linkText="Pilih" icon={<FaArrowRight />} css=" btn-block" />
                  ) : (
                    <LinkBtnOutlinePrimary btnSm="y" href={`/services/package/${item.slug}`} linkText="Pilih" icon={<FaArrowRight />} css=" btn-block" />
                  )}
                </div>
              </div>

              <div className="space-y-2 my-5 px-8 text-base-content">
                <ul className="space-y-2">
                  {item.fitur.map((fiturItem, fiturIndex) => (
                    <li key={fiturIndex} className="flex items-center gap-1">
                      {fiturItem.active ? <FaCheck className="text-green-500" /> : <FaXmark className="text-red-500" />}
                      <span className={fiturItem.active ? "" : "opacity-50 line-through"}>{fiturItem.label}</span>
                    </li>
                  ))}
                </ul>
                <hr className="my-8 border-b-base-content border-dashed" />

                <div className="mb-5 opacity-50 items-start flex gap-1">
                  <IoMdTime className="mt-1 shrink-0" />
                  <p>
                    <span>Proses pembuatan</span>
                    <span className="font-bold"> {item.proses}</span> <span>hari kerja.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
