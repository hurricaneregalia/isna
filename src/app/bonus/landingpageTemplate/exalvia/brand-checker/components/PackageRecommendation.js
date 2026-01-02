import React from "react";
import { FaStar, FaRegStar, FaArrowRight } from "react-icons/fa6";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { HiOutlineTrophy } from "react-icons/hi2";
import ExalviaLinkButton from "../../ui-components/ExalviaLinkButton";
import ExalviaImage from "../../ui-components/ExalviaImage";
import { getStarRating, formatCurrency, getRecommendedPackage } from "./ResultUtils";

export default function PackageRecommendation({ result }) {
  const recommendedPkg = getRecommendedPackage(result.normalizedScore);

  // Show motivational message for perfect score
  if (result.normalizedScore === 100) {
    return (
      <div className="flex items-center gap-15">
        <div className="relative w-6/12 h-auto md:block hidden">
          <ExalviaImage
            src="/images/templateLandingPageBonus/Exalvia/sections/ipad-2.webp"
            alt={`Rekomendasi untuk brand ${result.brandName}`}
            width={800}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="sm:w-6/12 w-full">
          <div className="border-4 border-primary rounded-bl-4xl p-8">
            <div className="text-center">
              <HiOutlineTrophy className="text-6xl mb-4 text-warning mx-auto" />
              <h3 className="text-2xl font-bold text-success mb-4">Brand Sempurna!</h3>
              <p className="text-lg mb-6">Selamat! Brand Anda telah mencapai level tertinggi di semua aspek. Pertahankan konsistensi ini dan terus berinovasi untuk memimpin pasar.</p>
              <div className="bg-success/10 rounded-bl-2xl p-4 mb-6">
                <p className="font-semibold text-success">💡 Tips: Fokus pada scaling dan market expansion untuk pertumbuhan berikutnya!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!recommendedPkg) return null;

  return (
    <div className="flex items-center gap-15">
      <div className="relative w-6/12 h-auto md:block hidden">
        <ExalviaImage
          src="/images/templateLandingPageBonus/Exalvia/sections/ipad-2.webp"
          alt={`Rekomendasi untuk brand ${result.brandName}`}
          width={800}
          height={600}
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="sm:w-6/12 w-full">
        <div className="bg-base-200 border-4 border-primary rounded-bl-4xl">
          <div className="flex items-start justify-between gap-4 bg-primary rounded-bl-4xl p-8">
            <div className="w-full grid grid-cols-1 gap-5">
              <div className="rounded-lg flex justify-between items-center text-warning">
                <p id="recommendedRating" className="flex gap-1">
                  {getStarRating(result.normalizedScore)}
                </p>
                <span className="badge badge-secondary badge-soft uppercase text-sm">recommended</span>
              </div>
              <div className="text-white">
                <h4 className="md:text-3xl text-2xl font-bold w-6/12 mb-2">{recommendedPkg.name}</h4>
                <div className="mt-5 flex flex-col gap-3">
                  <p className="opacity-70 flex gap-2 items-start shrink">
                    <BsFillPatchCheckFill className="text-lg shrink-0" /> {"Cocok untuk "} {recommendedPkg.description}
                  </p>
                  <p className="opacity-70 flex gap-2 items-start shrink">
                    <BsFillPatchCheckFill className="text-lg shrink-0" /> {"Output "} {recommendedPkg.output}
                  </p>
                </div>
              </div>
              <div className="text-2xl font-bold text-warning mb-2">Rp {formatCurrency(recommendedPkg.price)}</div>
              <ExalviaLinkButton text="Pilih Paket" href="#contact" icon={FaArrowRight} className="w-full btn-lg animate-pulse btn-warning" />
              <div className="">
                <ExalviaLinkButton
                  text="Konsultasi"
                  href={`https://wa.me/628123456789?text=Assalamualaikum...%0A%0Apesan saya ingin konsultasi data ini.%0A%0A${encodeURIComponent(window.location.href)}`}
                  className="w-full btn-link text-white/50"
                />
              </div>
            </div>
          </div>

          <div className="p-8">
            <div>
              <h4 className="font-semibold mb-3">Yang Anda Dapatkan:</h4>
              <div className="space-y-3">
                {recommendedPkg.included?.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm flex gap-2">
                      0{index + 1}. {item.title}
                    </span>
                    {item.status ? <div className="text-success">✓</div> : <div className="text-error">✗</div>}
                  </div>
                ))}
              </div>
            </div>
            <hr className="my-5" />
            <div className="mt-auto space-y-2" id="recommendedTurnaround">
              <div className="text-sm text-base-content/60">Waktu pengerjaan: {recommendedPkg.turnaround}</div>
              <div className="w-full">
                <div className="h-2 w-full rounded-full bg-base-300 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary/50 transition-all duration-500"
                    style={{
                      width: recommendedPkg.turnaround.includes("6-7") ? "100%" : recommendedPkg.turnaround.includes("2-4") ? "70%" : recommendedPkg.turnaround.includes("1-2") ? "40%" : "20%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
