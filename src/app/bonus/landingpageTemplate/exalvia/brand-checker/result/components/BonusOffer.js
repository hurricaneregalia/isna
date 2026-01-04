import React from "react";
import { FaGift } from "react-icons/fa6";
import ExalviaImage from "../../../ui-components/ExalviaImage";
import ExalviaCountDown from "../../../ui-components/ExalviaCountDown";
import ExalviaLinkButton from "../../../ui-components/ExalviaLinkButton";

export default function BonusOffer() {
  return (
    <div>
      <div className="flex items-center justify-between ">
        <h3 className="text-lg font-semibold">BONUS</h3>
        <FaGift className=" text-xl" />
      </div>
      <hr className="my-4" />
      <div className=" flex items-center sm:gap-15 gap-5 sm:flex-row flex-col">
        <div className="relative sm:w-6/12 w-full sm:h-auto h-fit">
          <ExalviaImage
            src="/images/templateLandingPageBonus/Exalvia/sections/ipad-2.webp"
            alt="bonus"
            width={800}
            height={600}
            className="w-full sm:h-auto h-fit object-contain"
            aspectRatio="aspect-4/3"
          />
        </div>
        <div className="w-full sm:w-6/12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Bonus Spesial!</h2>
            <span className="text-lg mb-6">
              Gratis Review Logo senilai Rp.
              <span className=" relative overflow-hidden  px-2">
                <span className=" font-bold">500.000</span>
                <hr className=" border border-red-500 -rotate-6 absolute bg-amber-500  w-full top-2 right-0" />
              </span>{" "}
              dapatkan sebelum waktunya habis.
            </span>

            <div className="mb-8">
              <ExalviaCountDown target="2026-01-25T23:59:59" />
            </div>

            <ExalviaLinkButton text="Dapatkan Bonus" href="#rekomendasi" className="btn-lg btn-warning animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
