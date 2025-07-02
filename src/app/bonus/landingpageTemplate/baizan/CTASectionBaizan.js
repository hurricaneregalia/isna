import React from "react";
import Link from "next/link";
import CountdownSectionBaizan from "./CountdownSectionBaizan";

export default function CTASectionBaizan({ widthSection, secId, data }) {
  const widthSectionFx = widthSection ? widthSection : "max-w-6xl";

  return (
    <section id={secId}>
      <div className={`${widthSectionFx} mx-auto bg-cover bg-center bg-no-repeat overflow-hidden `} style={{ backgroundImage: `url('${data.backgroundImage}')` }}>
        <div className="bg-slate-800/80 p-12 text-center py-30">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white w-full sm:w-1/2 mx-auto">{data.title}</h2>
          <p className="text-white/60 sm:text-lg md:text-xl mb-8 max-w-xl w-full sm:w-1/2 mx-auto">{data.subtitle}</p>

          <CountdownSectionBaizan durationHours={24} textColor="text-base-100" bgColor="" />

          <Link href="#" className="btn btn-secondary animate-bounce w-fit mx-auto  sm:text-lg px-6 sm:px-10 py-3 shadow-lg transition-all duration-300 hover:scale-105">
            Beli Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
}
