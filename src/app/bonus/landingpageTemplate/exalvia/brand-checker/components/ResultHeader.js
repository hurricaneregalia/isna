import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { getStarRating, getScoreBgColor } from "./ResultUtils";
import ExalviaLinkButton from "../../ui-components/ExalviaLinkButton";
import { ArrowRight } from "lucide-react";

export default function ResultHeader({ result, myTest }) {
  return (
    <>
      <div className="text-center border-4 border-white/50 border-b-0 sm:p-8 p-5 text-white">
        <div className="gap-5 grid grid-cols-1">
          <div className="text-center brand-info" id="rating">
            <span className="flex gap-1 items-center justify-center mb-4 text-warning text-2xl">{getStarRating(result.normalizedScore)}</span>
            <p className="text-sm flex gap-1 items-center justify-center opacity-70">--- Kualitas Brand ---</p>
            <h1 className="text-3xl md:text-4xl font-bold uppercase">{result.brandName}</h1>

            <p className="text-sm flex gap-1 items-center justify-center opacity-70" id="testTime">
              <FaRegClock /> {myTest}
            </p>
          </div>

          <div className="skor">
            <div className={`flex flex-col mx-auto my-10 items-center ${getScoreBgColor(result.normalizedScore || 0)} justify-center w-30 aspect-square rounded-bl-4xl`}>
              <p className="text-lg">SKOR</p>
              <span className="text-6xl font-bold">{result.normalizedScore || 0}</span>
            </div>
          </div>

          <div className="deskripsi">
            <p className="max-w-md mx-auto">Level saat ini:</p>
            <h2 className="text-2xl font-bold mb-2 uppercase text-warning">{result.classification || ""}</h2>
            <p className="max-w-md mx-auto opacity-70">{result.description || ""}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 text-center sumary text-white border-4 border-white/50 rounded-bl-4xl">
        <div className="py-4">
          <div className="font-bold text-warning">24</div>
          <div className="text-sm opacity-70">Soal</div>
        </div>
        <div className="border-x-4 border-white/50 py-4" id="durasiPengerjaanSoal">
          <div className="font-bold text-warning">{result.duration}</div>
          <div className="text-sm opacity-70">Durasi</div>
        </div>
        <div className="py-4">
          <div className="font-bold text-warning">{result.redFlags?.length || 0}</div>
          <div className="text-sm opacity-70">Catatan</div>
        </div>
      </div>

      <div className="w-full justify-center flex">
        <ExalviaLinkButton text="Rekomendasi" href="#rekomendasi" icon={ArrowRight} className="mt-10 w-fit mx-auto btn-lg animate-pulse btn-warning" />
      </div>
    </>
  );
}
