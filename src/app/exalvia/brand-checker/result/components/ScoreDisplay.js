import React from "react";
import { FaStar, FaRegStar, FaRegClock } from "react-icons/fa6";
import { TbArrowBadgeLeftFilled, TbArrowBadgeRightFilled } from "react-icons/tb";
import { getAllFlags } from "./flagUtils";

export default function ScoreDisplay({ result, myTest, getScoreBgColor, children }) {
  const getStarRating = (score) => {
    let starCount;
    if (score === 100) {
      starCount = 5;
    } else if (score >= 81) {
      starCount = 4;
    } else if (score >= 61) {
      starCount = 3;
    } else if (score >= 41) {
      starCount = 2;
    } else if (score >= 1) {
      starCount = 1;
    } else {
      starCount = 0;
    }

    return Array.from({ length: 5 }, (_, index) => {
      if (index < starCount) {
        return <FaStar key={index} className="text-warning" />;
      } else {
        return <FaRegStar key={index} className="text-warning" />;
      }
    });
  };
  const flagsCount = getAllFlags(result).length;

  const getScoreColor = (score) => {
    if (score <= 50) return "text-error";
    if (score <= 75) return "text-warning";
    return "text-success";
  };

  const getScoreBgWithOpacity = (score) => {
    if (score <= 50) return "bg-error/10";
    if (score <= 75) return "bg-warning/20";
    return "bg-success/20";
  };

  return (
    <>
      <div className="text-center border-2 border-white/50 rounded-3xl rounded-tr-none text-white">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:divide-x-2 divide-x-0 divide-white/50 ">
          <div className="scoring w-full">
            <div className=" w-full  flex flex-col gap-4 py-8">
              <div className=" text-center brand-info" id="rating">
                <span className="flex gap-1 items-center justify-center mb-4 text-warning text-2xl">{getStarRating(result.normalizedScore)}</span>
                <p className="font-bold flex gap-1 items-center justify-center opacity-90">--- Analisa Brand ---</p>

                <p className="text-sm flex gap-1 items-center justify-center opacity-70" id="testTime">
                  <FaRegClock /> {myTest}
                </p>
                <p className="text-sm flex gap-1 items-center justify-center opacity-70">Durasi {result.duration}</p>
              </div>
              <div className={`skor ${getScoreBgWithOpacity(result.normalizedScore || 0)} rounded-full w-fit aspect-square mx-auto`}>
                <div className="relative flex items-center justify-center w-48 aspect-square mx-auto my-2">
                  <div className={`absolute inset-0 m-auto ${getScoreBgColor(result.normalizedScore || 0)} w-30 aspect-square rounded-full animate-pulse blur`} />
                  <div className={`absolute inset-0 m-auto ${getScoreBgColor(result.normalizedScore || 0)} w-25 aspect-square rounded-full  blur`} />

                  {/* Background Ring */}
                  <svg className="absolute w-full h-full transform -rotate-90">
                    <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white/10" />
                    {/* Dynamic Progress Ring */}
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="transparent"
                      strokeDasharray={552.9}
                      strokeDashoffset={552.9 - (552.9 * (result.normalizedScore || 0)) / 100}
                      strokeLinecap="round"
                      className={`${getScoreColor(result.normalizedScore || 0)} transition-all duration-1000 ease-out`}
                    />
                  </svg>
                  <div className="flex flex-col items-center justify-center relative">
                    <span className={`text-6xl font-bold text-white`}>{result.normalizedScore || 0}</span>
                  </div>
                </div>
              </div>
              <div className="deskripsi ">
                <p className="max-w-md mx-auto opacity-90 uppercase"> Level {result.brandName} saat ini</p>
                <h2 className="text-2xl font-bold mb-2 uppercase text-warning flex items-center gap-2 w-full justify-center">
                  <TbArrowBadgeRightFilled />
                  {result.classification || ""}
                  <TbArrowBadgeLeftFilled />
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-2 text-center sumary text-white lg:border-b-0 border-b-2  border-t-2 divide-x-2 divide-white/50 border-white/50 ">
              <div className="py-4">
                <div className="font-bold text-warning">24</div>
                <div className="text-sm opacity-70">Analisa</div>
              </div>
              <div className="py-4">
                <div className="font-bold text-warning">{flagsCount}</div>
                <div className="text-sm opacity-70">Catatan</div>
              </div>
            </div>
          </div>
          <div className="brand-info w-full sm:p-4 p-4 lg:text-start text-center flex justify-center flex-col gap-4">
            <div className=" rounded-3xl rounded-tr-none bg-white/10 p-4">
              <p className=" font-bold">Nama Brand</p>
              <h1 className="text-3xl md:text-4xl font-bold uppercase text-warning">{result.brandName}</h1>
            </div>
            <div className="rounded-3xl rounded-tr-none bg-white/10 p-4">
              <p className=" font-bold">Hasil Analisa</p>
              <p className="lg:w-full sm:w-9/12 mx-auto w-full opacity-70">{result.description || ""}</p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
