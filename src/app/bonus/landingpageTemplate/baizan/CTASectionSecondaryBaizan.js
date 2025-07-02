import React from "react";
import Link from "next/link";

export default function CTASectionSecondaryBaizan({ widthSection, secId, data }) {
  const widthSectionFx = widthSection ? widthSection : "max-w-6xl";

  return (
    <section id={secId}>
      <div className={`${widthSectionFx} mx-auto px-5 py-20`}>
        <div className={`bg-cover bg-center bg-no-repeat overflow-hidden rounded-xl shadow-lg`} style={{ backgroundImage: `url('${data.backgroundImage}')` }}>
          <div className="bg-slate-800/80 py-20 px-6 sm:px-10">
            <div className="flex flex-col md:flex-row justify-between items-stretch gap-6">
              {/* Text */}
              <div className="text-center md:text-left w-full md:w-1/2 flex flex-col justify-center">
                <div className="w-full sm:w-10/12 mx-auto md:mx-0">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white">{data.title}</h2>
                  <p className="text-white/75 sm:text-lg md:text-xl mb-6 max-w-xl">{data.subtitle}</p>
                </div>
              </div>

              {/* Button */}
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <Link href="#" className="btn btn-secondary w-fit mx-auto  sm:text-lg px-6 sm:px-10 py-3 shadow-lg transition-all duration-300 hover:scale-105">
                  Beli Sekarang
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
