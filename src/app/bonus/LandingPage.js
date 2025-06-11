// src/app/bonus/LandingPage.js
import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { formatTanggal } from "../component/global/formatTanggal";
import { MdEditNote } from "react-icons/md";
import { FaCheck, FaPalette, FaWhatsapp } from "react-icons/fa6";
import BtnLinkPrimary from "../component/global/btnLinkPrimary";

function getLandingPages() {
  const filePath = path.join(process.cwd(), "src/app/api/datajs/landingpage/data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);
  return data;
}

export default async function LandingPage() {
  const landingPages = getLandingPages()
    .filter((page) => page.isActive)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  if (!landingPages || landingPages.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        <p className="text-xl">Tidak ada data landing page aktif.</p>
      </div>
    );
  }

  return (
    <section className="p-5 py-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {landingPages.map((page) => (
          <div key={page.id} className="bg-base-100 shadow-md hover:shadow-xl transition duration-300 rounded-bl-3xl overflow-hidden flex flex-col">
            <figure>
              <Image src={page.image} alt={page.name} width={300} height={300} className="w-full h-48 object-cover" />
            </figure>
            <div className="p-10 flex flex-col h-full text-sm">
              <div className=" flex justify-between w-full mb-5">
                <h2 className="card-title capitalize m-0">{page.name}</h2>
                <p className="flex items-center gap-1 text-slate-400">
                  <MdEditNote className="text-xl" /> {formatTanggal(page.createdAt)}
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <strong>Desain:</strong>
                <div className=" flex gap-1">
                  <div className="border border-base-content rounded-md px-1 flex gap-1 text-sm items-center">
                    <FaPalette />
                    {page.lpDesignStyle.name}
                  </div>
                  <div className="border border-base-content rounded-md px-1 flex gap-1 text-sm items-center">
                    <FaPalette />
                    Responsif
                  </div>
                </div>
                <hr className="mt-3 mb-2" />
                <strong>Media:</strong>
                <div className=" flex gap-1 flex-wrap capitalize">
                  {page.lpContentTypes.map((content) => (
                    <span key={content.id} className="border border-base-content rounded-md px-1 flex gap-1 text-sm items-center">
                      <FaCheck />
                      {content.type}
                    </span>
                  ))}
                </div>
                <hr className="mt-3 mb-2" />
              </div>

              <div className="mt-2 mb-5">
                {page.ctas.map((item) => (
                  <div key={item.id} className="border border-base-content rounded-md px-1 flex gap-1 text-sm items-center w-fit">
                    CTA {item.description || "(tidak ada deskripsi)"}
                  </div>
                ))}
              </div>
              <div className="mb-10">
                <div className="opacity-75 ">
                  <strong>Cocok untuk:</strong>
                  {page.lpFor.map((item) => (
                    <p key={item.id} className="flex items-start gap-1 capitalize">
                      <FaCheck className="text-green-500 mt-1" />
                      <span className="opacity-75">{item.description || "(tidak ada deskripsi)"}</span>
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-auto">
                <BtnLinkPrimary btnUrl={`/bonus/${page.slug}`} btnTxt=" Lihat Demo" btnFull={true} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
