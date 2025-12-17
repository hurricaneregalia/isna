// src/app/bonus/LandingPage.js
import fs from "fs";
import path from "path";
import Image from "next/image";
import { formatTanggal } from "../component/global/formatTanggal";
import { MdEditNote } from "react-icons/md";
import { FaCheck, FaPalette, FaWhatsapp } from "react-icons/fa6";
import BtnLinkPrimary from "../component/global/btnLinkPrimary";
import { PiRadioButtonLight } from "react-icons/pi";

function getLandingPages() {
  const filePath = path.join(process.cwd(), "src/app/api/datajs/landingpage/data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
}

export default async function LandingPage() {
  const landingPages = getLandingPages()
    .filter((page) => page.isActive)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  if (!landingPages || landingPages.length === 0) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center p-8 bg-base-200 rounded-xl max-w-md">
          <p className="text-xl font-medium">Tidak ada data landing page aktif.</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {landingPages.map((page) => (
          <div key={page.id} className="group bg-base-100 rounded-bl-3xl hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col  hover:-translate-y-1">
            <div className="relative h-56 overflow-hidden">
              <Image
                src={page.image}
                alt={page.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
              <span className="group-hover:rotate-6 absolute top-5 right-5 bg-slate-700 rounded-md text-white group-hover:text-amber-300 px-2 py-1 text-xs flex items-center gap-1 transition-all duration-300 ease-in-out">
                <FaPalette /> {page.lpDesignStyle.name}
              </span>
            </div>

            <div className="p-6 flex flex-col grow">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold capitalize line-clamp-2">{page.name}</h2>
                <div className="flex items-center gap-1 text-sm whitespace-nowrap opacity-50">
                  <MdEditNote className="text-lg" />
                  {formatTanggal(page.createdAt)}
                </div>
              </div>

              <hr className="my-5 opacity-0" />

              <div>
                <h3 className="text-sm font-semibold mb-2">Fitur</h3>
                <div className="flex flex-wrap gap-1">
                  {[...page.lpContentTypes]
                    .sort((a, b) => a.order - b.order)
                    .map((content) => (
                      <span key={content.id} className="bg-base-300/40 rounded-sm px-2 py-0.5 text-xs opacity-75 ">
                        {content.type}
                      </span>
                    ))}
                </div>
              </div>

              <hr className="my-5" />
              {/* 
              <div>
                <h3 className="text-sm font-semibold mb-2">Marketing Tools</h3>
                <ul className="space-y-2 text-sm capitalize">
                  <li className="flex items-start gap-2">
                    <PiRadioButtonLight className=" mt-0.5 shrink-0" />
                    <span className="opacity-75">Facebook Conversion API</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <PiRadioButtonLight className=" mt-0.5 shrink-0" />
                    <span className="opacity-75">Tik-tok Ads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <PiRadioButtonLight className=" mt-0.5 shrink-0" />
                    <span className="opacity-75">Google Tag Manager</span>
                  </li>
                </ul>
              </div>
              <hr className="my-5" /> */}

              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-2">Cocok Untuk</h3>
                <ul className="space-y-2 text-sm capitalize">
                  {page.lpFor.map((item) => (
                    <li key={item.id} className="flex items-start gap-2">
                      <FaCheck className="text-green-500 mt-0.5 shrink-0" />
                      <span className="opacity-75">{item.description || "(tidak ada deskripsi)"}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <div className="mt-auto pt-4">
                <BtnLinkPrimary btnUrl={`/bonus/${page.slug}`} btnTxt="Lihat Demo" btnFull={true} className="group-hover:bg-primary/90 transition-colors" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
