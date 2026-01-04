import React from "react";
import { FaStar, FaRegStar, FaArrowRight, FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { BsFillPatchCheckFill } from "react-icons/bs";
import ExalviaLinkButton from "../../../ui-components/ExalviaLinkButton";

export default function PackageCard({ pkg, isRecommended = false, formatCurrency }) {
  if (!pkg) return null;

  return (
    <div className={`bg-base-200 border-4 ${isRecommended ? "border-primary" : "border-transparent"} rounded-bl-4xl h-full flex flex-col`}>
      <div className={`flex flex-col gap-10 ${isRecommended ? "bg-primary p-8 rounded-bl-4xl" : "p-8"}`}>
        <div className="flex gap-2 flex-col">
          <div className="flex gap-1">
            {Array.from({ length: 5 }, (_, index) => (index < pkg.rating ? <FaStar key={index} className="text-warning" /> : <FaRegStar key={index} className="text-warning" />))}
          </div>
          {isRecommended && <div className="badge badge-secondary badge-soft uppercase text-xs">recommended</div>}
        </div>

        <div className=" flex items-center sm:flex-row flex-col gap-y-10">
          <div className={isRecommended ? "text-white m:w-6/12 w-full" : "my-10 w-6/12"}>
            <h4 className={`md:text-3xl text-2xl font-bold ${isRecommended ? "lg:w-6/12 sm:w-5/12 w-7/12 " : ""} `}>{pkg.name}</h4>
            <div className="text-2xl font-bold text-warning">Rp {formatCurrency(pkg.price)}</div>
          </div>

          {isRecommended && (
            <div className="sm:w-6/12 w-full text-center">
              <ExalviaLinkButton text="Pilih Paket" href="#contact" icon={FaArrowRight} className="sm:w-fit w-full btn-lg animate-pulse btn-warning" />
              <div className="">
                <ExalviaLinkButton
                  text="Konsultasi"
                  href={`https://wa.me/628123456789?text=Assalamualaikum...%0A%0Apesan saya ingin konsultasi data ini.%0A%0A${
                    typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""
                  }`}
                  className="w-full btn-link text-white/50"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="p-8 grow">
        <div className="gap-y-10 flex flex-col">
          <h4 className="font-semibold ">Yang Anda Dapatkan:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-flow-col md:grid-rows-4 gap-y-3 md:gap-x-15">
            {pkg.included?.map((item, index) => (
              <div key={index} className="flex items-center justify-between border-b pb-2">
                <span className="text-sm flex gap-2 text-left">
                  0{index + 1}. {item.title}
                </span>
                {item.status ? <FaCircleCheck className="text-success" /> : <FaCircleXmark className="text-error" />}
              </div>
            ))}
          </div>
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
    </div>
  );
}
