import React from "react";
import { FaGift, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

export default function BonusDanGaransiSection({ widthSection, secId, data }) {
  const widthSectionFx = widthSection ? widthSection : "max-w-6xl";
  return (
    <section id={secId} className="bg-base-100 text-base-content py-20 overflow-hidden">
      <div className={`${widthSectionFx} mx-auto px-5`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* BONUS */}
          <div data-aos="fade-right" className="relative bg-primary border text-base-100 border-primary rounded-xl p-6 shadow-lg overflow-hidden">
            {/* Background Icon */}
            <FaGift className="absolute bottom-[-60px] right-[-60px] text-base-100/10 text-[300px] rotate-[15deg] pointer-events-none z-0" />

            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                <FaGift className="text-secondary" /> Bonus Pembelian
              </h3>
              <ul className="space-y-4">
                {data.map((bonus, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="text-secondary text-lg mt-1">
                      <FaCheckCircle />
                    </div>
                    <div>
                      <p className="font-bold">Pembelian ke {index + 1}</p>
                      <p className="opacity-75">Bonus {bonus.label}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* GARANSI */}
          <div data-aos="fade-left" className="relative bg-success text-base-100 border border-success rounded-xl p-6 shadow-lg overflow-hidden">
            <FaShieldAlt className="absolute bottom-[-60px] right-[-60px] text-base-100/10 text-[300px] rotate-[-12deg] pointer-events-none z-0" />

            <div className="relative z-10 justify-end-safe">
              <h3 id="garansiTitle" className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <FaShieldAlt className="text-warning" /> Garansi Aman
              </h3>
              <div id="garansiIcon" className="sm:w-6/12 w-full py-8">
                <div className="bg-warning text-white rounded-4xl w-30 h-30 font-semibold flex justify-center items-center py-6 px-4 shadow">
                  <div className="text-center">
                    <p className="text-4xl m-0">100%</p>
                    <p className="opacity-75 m-0 text-sm">Uang Kembali</p>
                  </div>
                </div>
              </div>
              <p id="garansiDesc" className="mt-4 text-base opacity-75 lg:w-7/12 w-full">
                Kami yakin Anda akan puas. Namun jika tidak, kami berikan garansi uang kembali tanpa syarat dalam 7 hari.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
