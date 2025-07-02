import React from "react";
import Image from "next/image";

export default function HowToUseSection({ widthSection, secId, data }) {
  const widthSectionFx = widthSection ? widthSection : "max-w-6xl";

  return (
    <section id={secId} className="bg-base-100 text-base-content py-20">
      <div className={`${widthSectionFx} mx-auto flex flex-col md:flex-row items-start gap-10 px-5`}>
        {/* Timeline / Text Side */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-left">{data.title}</h2>
          <p className="description mb-8 text-base-content/80 text-left">{data.description}</p>

          {/* Timeline */}
          <ul className="relative  space-y-10">
            {data.steps.map((step, index) => (
              <li key={index} className="relative mb-0 border-l-4 border-primary py-2" data-aos="fade-up">
                {/* Lingkaran nomor di tengah garis */}
                <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary text-white flex items-center justify-center rounded-full shadow-md font-semibold text-sm">{index + 1}</div>

                {/* Konten langkah */}
                <div className="ml-2 bg-base-200 rounded-lg p-4 shadow">
                  <h4 className="font-semibold text-primary">{step.title}</h4>
                  <p className="text-sm text-base-content/80 mt-1">{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Side */}
        <div className="w-full md:w-1/2 flex sm:justify-end justify-center relative" data-aos="flip-left">
          <div className=" relative">
            <Image src={data.image} alt="Ilustrasi Penggunaan MONARA" width={500} height={600} className="rounded-xl shadow-lg object-cover w-full max-w-md" />
            <div className="absolute top-4 left-4 max-w-[90%]">
              <span className="badge bg-white/20 border-none text-white text-sm font-medium">By Monara</span>
            </div>

            <div className="absolute bottom-4 left-4 w-1/2">
              <h4 className="text-lg font-bold text-white">Kulit Cerah Optimal</h4>
              <p className="text-sm text-white/75">Dapatkan hasilnya dalam waktu singkat.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
