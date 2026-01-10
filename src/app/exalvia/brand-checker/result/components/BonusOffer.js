import React from "react";
import ExalviaImage from "../../../ui-components/ExalviaImage";
import ExalviaCountDown from "../../../ui-components/ExalviaCountDown";
import ExalviaLinkButton from "../../../ui-components/ExalviaLinkButton";

export default function BonusOffer({ data }) {
  return (
    <div>
      <div className=" flex items-center sm:gap-15 gap-5 sm:flex-row flex-col">
        <div className="relative sm:w-6/12 w-full sm:h-auto h-fit" data-aos="flip-left">
          <ExalviaImage src={data.image} alt="bonus" width={800} height={600} className="w-full sm:h-auto h-fit object-contain" aspectRatio="aspect-4/3" />
        </div>
        <div className="w-full sm:w-6/12">
          <div className="max-w-4xl mx-auto text-center flex flex-col gap-4">
            <h2 className="text-3xl font-bold">{data.title}</h2>
            <span className="text-lg">
              Gratis Review Logo senilai <span className=" font-bold">Rp.</span>
              <span className=" relative overflow-hidden  px-2">
                <span className=" font-bold">500.000,</span>
                <hr className=" border border-red-500 -rotate-6 absolute bg-amber-500  w-full top-2 right-0" />
              </span>
              dapatkan sebelum waktunya habis.
            </span>

            <div>
              <ExalviaCountDown target={data.countdownTarget} />
            </div>

            <ExalviaLinkButton text="Dapatkan Bonus" href="#rekomendasi" className="btn-lg mt-4 btn-warning w-fit mx-auto animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
