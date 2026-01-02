import React from "react";
import { FaStar, FaRegStar, FaRegClock } from "react-icons/fa6";
import { TbArrowBadgeLeftFilled, TbArrowBadgeRightFilled } from "react-icons/tb";

export default function ScoreDisplay({ result, myTest, getScoreBgColor }) {
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

  return (
    <div className="text-center border-4 border-white/50 border-b-0 sm:p-8 p-5 text-white">
      <div className="gap-5 grid grid-cols-1 ">
        <div className=" text-center brand-info" id="rating">
          <span className="flex gap-1 items-center justify-center mb-4 text-warning text-2xl">{getStarRating(result.normalizedScore)}</span>
          <p className="text-sm flex gap-1 items-center justify-center opacity-70">--- Analisa Brand ---</p>
          <h1 className="text-3xl md:text-4xl font-bold uppercase">{result.brandName}</h1>

          <p className="text-sm flex gap-1 items-center justify-center opacity-70" id="testTime">
            <FaRegClock /> {myTest}
          </p>
        </div>

        <div className=" skor">
          <div className={`flex flex-col mx-auto my-10 items-center ${getScoreBgColor(result.normalizedScore || 0)} justify-center w-30 aspect-square rounded-bl-4xl`}>
            <p className="text-lg ">SKOR</p>
            <span className="text-6xl font-bold">{result.normalizedScore || 0}</span>
          </div>
        </div>
        <div className="deskripsi ">
          <p className="max-w-md mx-auto"> Level saat ini: </p>
          <h2 className="text-2xl font-bold mb-2 uppercase text-warning flex items-center gap-2 w-full justify-center">
            <TbArrowBadgeRightFilled />
            {result.classification || ""}
            <TbArrowBadgeLeftFilled />
          </h2>
          <p className="max-w-md mx-auto opacity-70">{result.description || ""}</p>
        </div>
      </div>
    </div>
  );
}
