import React from "react";
import { HiOutlineGift, HiOutlineShieldCheck } from "react-icons/hi";
import FormSectionZemira from "./FormSectionZemira";
import Loading from "../loading";
import fs from "fs/promises";
import path from "path";

async function getSiteIdentityFromFile() {
  try {
    const filePath = path.join(process.cwd(), "src/app/api/datajs/siteidentity/data.json");
    const file = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(file);
    return data?.[0] || null;
  } catch (error) {
    console.error("❌ Gagal membaca siteidentity dari file:", error.message);
    return null;
  }
}

export default async function SpecialOfferZemira({ secId, data = offerContent }) {
  const siteData = await getSiteIdentityFromFile();

  if (!siteData) return <Loading />;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-base-200 to-base-300">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Konten Penawaran */}
          <div className="lg:w-1/2">
            <div className="bg-gradient-to-r from-primary to-secondary card p-8 text-base-100 relative overflow-hidden  shadow-lg" data-aos="fade-up">
              {/* Dekorasi */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-base-100/20"></div>
              <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-base-100/20"></div>

              <div className="relative z-10">
                <div className="w-fit px-4 py-2 bg-secondary/50 text-base-100 text-xs card mb-3 capitalize">
                  <span className="flex items-center gap-1">
                    <HiOutlineGift />
                    <span>{data.badgeLabel}</span>
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                  {data.titleStart}
                  <span className="text-base-100">{data.highlight}</span>
                  {data.titleEnd}
                </h2>

                <p className="text-lg mb-8 opacity-75">{data.description}</p>

                {/* ✅ Fitur-fitur Penawaran */}
                <div className="space-y-4 mb-8">
                  {data.listFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      {feature.icon}
                      <span className="ml-3">{feature.label}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-base-100/20 p-4 card" data-aos="flip-left">
                  <div className="flex items-center opacity-75">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-base-100 text-primary w-16 h-16 card flex items-center justify-center font-bold text-xl">20</div>
                    </div>
                    <p className="text-base-100">
                      <span className="font-bold">{data.quotaLabel}</span> {data.quotaInfo}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Badge Privasi */}
            <div className="mt-8 flex items-center justify-center" data-aos="fade-up">
              <div className="bg-base-100 p-4 card shadow-lg ">
                <div className="flex items-center">
                  <HiOutlineShieldCheck className="h-8 w-8 text-primary mr-3" />
                  <div>
                    <p className="font-semibold text-base-content">{data.privacyTitle}</p>
                    <p className="text-sm text-base-content/70">{data.privacySubtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form yang sudah dipisahkan */}
          <FormSectionZemira offerContent={data} waNumber={siteData.phone} secId={secId} />
        </div>
      </div>
    </section>
  );
}
