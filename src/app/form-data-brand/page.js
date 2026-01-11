"use client";

import React, { useState } from "react";
import ExalviaNavbar from "../exalvia/sections/ExalviaNavbar";
import ExalviaFooter from "../exalvia/sections/ExalviaFooter";
import data from "../exalvia/database/ExalviaDatabase";
import HeaderFooterClient from "../component/global/HeaderFooterClient";
import HeroBrandChecker from "../exalvia/brand-checker/HeroBrandChecker";
import ExalviaButton from "../exalvia/ui-components/ExalviaButton";
import { IoSendOutline, IoRocketOutline, IoSparklesOutline, IoBusinessOutline, IoPeopleOutline, IoChatboxEllipsesOutline } from "react-icons/io5";

export default function FormDataBrandPage() {
  const [formData, setFormData] = useState({
    brandName: "",
    industry: "",
    targetAudience: "",
    mainProduct: "",
    uniqueSellingPoint: "",
    toneOfVoice: "professional",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Terima kasih! Data brand Anda telah kami terima.");
  };

  const InputWrapper = ({ label, icon, children }) => (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-bold uppercase tracking-widest opacity-50 flex items-center gap-2">
        {icon} {label}
      </label>
      {children}
    </div>
  );

  return (
    <div className="bg-base-100 min-h-screen flex flex-col font-montserrat overflow-hidden">
      <ExalviaNavbar data={data.navbar} bgCustom="bg-transparent" />

      <HeroBrandChecker headline="Lengkapi Data Brand" secId="form-hero" backgroundImage={data.pagesResult.heroImage}>
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center gap-4 py-10">
          <IoSparklesOutline className="text-6xl text-warning animate-pulse" />
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">Rumusan Kreatif</h1>
          <p className="text-white/60 max-w-lg">Bantu kami memahami visi brand Anda untuk hasil copy yang lebih menjual dan otentik.</p>
        </div>
      </HeroBrandChecker>

      <main className="flex-1 py-20 px-5 bg-base-100">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="border-2 border-base-300 rounded-4xl rounded-tr-none p-8 md:p-12 flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputWrapper label="Nama Brand" icon={<IoRocketOutline />}>
                <input
                  type="text"
                  name="brandName"
                  placeholder="Contoh: Exalvia"
                  className="input input-bordered w-full rounded-2xl bg-base-200 border-base-300 focus:border-primary focus:outline-none h-14"
                  onChange={handleChange}
                  required
                />
              </InputWrapper>

              <InputWrapper label="Industri / Niche" icon={<IoBusinessOutline />}>
                <input
                  type="text"
                  name="industry"
                  placeholder="Contoh: Digital Agency"
                  className="input input-bordered w-full rounded-2xl bg-base-200 border-base-300 focus:border-primary focus:outline-none h-14"
                  onChange={handleChange}
                  required
                />
              </InputWrapper>
            </div>

            <InputWrapper label="Siapa Target Audiens Anda?" icon={<IoPeopleOutline />}>
              <textarea
                name="targetAudience"
                placeholder="Jelaskan karakteristik pembeli ideal Anda..."
                className="textarea textarea-bordered w-full rounded-2xl bg-base-200 border-base-300 focus:border-primary focus:outline-none min-h-[100px] pt-4"
                onChange={handleChange}
                required
              />
            </InputWrapper>

            <InputWrapper label="Apa Produk Utama Anda?" icon={<IoSparklesOutline />}>
              <input
                type="text"
                name="mainProduct"
                placeholder="Layanan atau produk yang ingin dipromosikan"
                className="input input-bordered w-full rounded-2xl bg-base-200 border-base-300 focus:border-primary focus:outline-none h-14"
                onChange={handleChange}
                required
              />
            </InputWrapper>

            <InputWrapper label="Keunggulan Utama (USP)" icon={<IoRocketOutline />}>
              <textarea
                name="uniqueSellingPoint"
                placeholder="Apa yang membedakan Anda dari kompetitor?"
                className="textarea textarea-bordered w-full rounded-2xl bg-base-200 border-base-300 focus:border-primary focus:outline-none min-h-[100px] pt-4"
                onChange={handleChange}
                required
              />
            </InputWrapper>

            <InputWrapper label="Gaya Bahasa (Tone of Voice)" icon={<IoChatboxEllipsesOutline />}>
              <select name="toneOfVoice" className="select select-bordered w-full rounded-2xl bg-base-200 border-base-300 focus:border-primary focus:outline-none h-14" onChange={handleChange}>
                <option value="professional">Profesional & Terpercaya</option>
                <option value="casual">Santai & Enerjik</option>
                <option value="elegant">Elegan & Mewah</option>
                <option value="persuasive">Agresif & Persuasif</option>
              </select>
            </InputWrapper>

            <div className="pt-6 border-t border-base-300 border-dashed">
              <ExalviaButton text="Kirim Data Brand" type="submit" icon={IoSendOutline} className="btn-warning btn-lg w-full md:w-fit" />
            </div>
          </form>
        </div>
      </main>

      <ExalviaFooter data={data.footer} secId="footer" />
      <HeaderFooterClient />
    </div>
  );
}
