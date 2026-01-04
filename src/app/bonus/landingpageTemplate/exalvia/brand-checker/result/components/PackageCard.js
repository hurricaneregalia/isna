import React from "react";
import { FaStar, FaRegStar, FaArrowRight, FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { BsFillPatchCheckFill } from "react-icons/bs";
import ExalviaLinkButton from "../../../ui-components/ExalviaLinkButton";

export default function PackageCard({ pkg, isRecommended = false, formatCurrency }) {
  if (!pkg) return null;

  return (
    <div className={`bg-base-200 border-4 ${isRecommended ? "border-primary" : "border-transparent"} rounded-bl-4xl h-full flex flex-col`}>
      <div className={`flex flex-col gap-4 ${isRecommended ? "bg-primary p-8 rounded-bl-4xl" : "p-8"}`}>
        <div className="rounded-lg flex justify-between items-center text-warning">
          <div className="flex gap-1">
            {Array.from({ length: 5 }, (_, index) => (index < pkg.rating ? <FaStar key={index} className="text-warning" /> : <FaRegStar key={index} className="text-warning" />))}
          </div>
          {isRecommended && <span className="badge badge-secondary badge-soft uppercase text-sm">recommended</span>}
        </div>

        <div className={isRecommended ? "text-white my-10" : "my-10"}>
          <h4 className={`md:text-3xl text-2xl font-bold ${isRecommended ? "w-6/12" : ""} `}>{pkg.name}</h4>
          <div className="text-2xl font-bold text-warning">Rp {formatCurrency(pkg.price)}</div>
        </div>

        {isRecommended && (
          <>
            <ExalviaLinkButton text="Pilih Paket" href="#contact" icon={FaArrowRight} className="w-full btn-lg animate-pulse btn-warning" />
            <div className="">
              <ExalviaLinkButton
                text="Konsultasi"
                href={`https://wa.me/628123456789?text=Assalamualaikum...%0A%0Apesan saya ingin konsultasi data ini.%0A%0A${
                  typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""
                }`}
                className="w-full btn-link text-white/50"
              />
            </div>
          </>
        )}
      </div>

      <div className="p-8 grow">
        <div>
          <h4 className="font-semibold mb-3">Yang Anda Dapatkan:</h4>
          <div className="space-y-3">
            {pkg.included?.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm flex gap-2 text-left">
                  0{index + 1}. {item.title}
                </span>
                {item.status ? <FaCircleCheck className="text-success" /> : <FaCircleXmark className="text-error" />}
              </div>
            ))}
          </div>
        </div>
        <hr className="my-5" />
        <div className="mt-auto space-y-2">
          <div className="text-sm text-base-content/60 text-left">Waktu pengerjaan: {pkg.turnaround}</div>
          <div className="w-full">
            <div className="h-2 w-full rounded-full bg-base-300 overflow-hidden">
              <div
                className="h-full rounded-full bg-primary/50 transition-all duration-500"
                style={{
                  width: pkg.turnaround.includes("6-7") ? "100%" : pkg.turnaround.includes("2-4") ? "70%" : pkg.turnaround.includes("1-2") ? "40%" : "20%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
