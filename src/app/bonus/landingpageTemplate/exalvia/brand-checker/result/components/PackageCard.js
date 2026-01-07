import React from "react";
import { FaStar, FaRegStar, FaArrowRight, FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { BsFillPatchCheckFill, BsHourglassSplit } from "react-icons/bs";
import ExalviaLinkButton from "../../../ui-components/ExalviaLinkButton";

export default function PackageCard({ pkg, isRecommended = false, formatCurrency }) {
  if (!pkg) return null;

  return (
    <div className={`border-4 overflow-hidden ${isRecommended ? "border-primary" : "border-transparent"} rounded-4xl rounded-tr-none h-full flex flex-col`}>
      <div className={`flex flex-col gap-10 ${isRecommended ? "bg-primary p-8 rounded-b-3xl " : "p-8"}`}>
        <div className=" flex items-center sm:flex-row flex-col gap-y-10 ">
          <div className="flex gap-8 flex-col sm:w-6/12 w-full">
            <div className="flex flex-col gap-4 text-center sm:text-left items-center sm:items-start">
              <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, index) => (index < pkg.rating ? <FaStar key={index} className="text-warning" /> : <FaRegStar key={index} className="text-warning" />))}
              </div>
              {isRecommended && <div className="badge mt-2 badge-secondary badge-soft uppercase text-xs">recommended</div>}
              <div>
                <h4 className="md:text-3xl text-4xl text-white font-bold">{pkg.name}</h4>
                <p className="md:text-3xl text-4xl text-white font-bold">Service Pack</p>
              </div>
              <p className="text-xl font-bold text-warning">Rp {formatCurrency(pkg.price)}</p>
            </div>
          </div>
          <div className="sm:w-6/12 w-full">
            {isRecommended && (
              <div className="w-full text-center">
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
      </div>

      <div className="p-8 grow">
        <div className="gap-y-10 flex flex-col">
          <h4 className="font-semibold ">Yang Anda Dapatkan:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-flow-col md:grid-rows-4 gap-y-3 md:gap-x-15">
            {pkg.included?.map((item, index) => (
              <div key={index} className="flex items-center justify-between border-b border-base-300 pb-2">
                <span className="text-sm flex gap-2 text-left">
                  0{index + 1}. {item.title}
                </span>
                {item.status ? <FaCircleCheck className="text-success" /> : <FaCircleXmark className="text-error" />}
              </div>
            ))}
          </div>
          <div className="mt-auto space-y-2">
            <div className="text-sm text-base-content/60 text-left flex gap-2 items-center">
              <BsHourglassSplit /> Pengerjaan: {pkg.turnaround}
            </div>
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
