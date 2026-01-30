"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ExalviaHeadline from "../ui-components/ExalviaHeadline";
import ExalviaButton from "../ui-components/ExalviaButton";
import { IoSearch } from "react-icons/io5";
import { PiLightningFill } from "react-icons/pi";

import data from "../database/ExalviaDatabase";
import ExalviaNavbar from "../sections/ExalviaNavbar";
import ExalviaFooter from "../sections/ExalviaFooter";

export default function BrandCheckerIntro() {
  const [brandName, setBrandName] = useState("");
  const router = useRouter();

  const handleStart = () => {
    if (brandName.trim().length < 3) {
      return;
    }

    // Store brand name in sessionStorage
    if (typeof window !== "undefined") {
      sessionStorage.setItem("brandName", brandName.trim());
      sessionStorage.removeItem("brandCheckerAnswers");
      sessionStorage.removeItem("brandCheckerCompleted"); // Reset completion flag
      sessionStorage.removeItem("brandCheckerStartTime"); // Reset timer
    }

    // Navigate to questions page
    router.push("/exalvia/brand-checker/questions");
  };

  return (
    <div className="bg-base-100 w-full min-h-screen">
      <ExalviaNavbar data={data.navbar} bgCustom="bg-primary/90" />
      <div className="min-h-screen pt-32 p-5 flex items-center justify-center">
        <div className=" lg:w-7/12 mx-auto border-3 border-primary rounded-4xl rounded-tr-none  overflow-hidden h-full flex items-center lg:flex-row flex-col">
          {/* Hero Section */}
          <div className="text-center sm:p-8 p-5  bg-primary lg:w-6/12 w-full rounded-3xl rounded-tr-none text-white">
            <div className="mb-6">
              <div className="w-20 aspect-square bg-white/20 rounded-full rounded-tr-none  flex items-center justify-center mx-auto mb-4">
                <IoSearch className=" text-4xl text-primary" />
              </div>
            </div>

            <ExalviaHeadline className="text-3xl md:text-4xl lg:text-5xl text-center mb-4 text-white">Scan Brand</ExalviaHeadline>

            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-70">Ketahui performa brand Anda dalam waktu singkat</p>
            <div className="grid sm:grid-cols-3 grid-cols-3  text-center w-full mx-auto rounded-3xl rounded-tr-none  border-2 divide-x-2 divide-white border-white text-white">
              <div className="h-full py-4">
                <div className="sm:text-3xl text-xl font-bold flex flex-col justify-between h-full">
                  <p className=" text-warning">{data.brandChecker.questions.length}</p>
                  <div className="text-sm opacity-70">Analisa</div>
                </div>
              </div>
              <div className="h-full py-4">
                <div className="sm:text-3xl text-xl font-bold flex flex-col justify-between h-full">
                  <p className="text-warning">{data.brandChecker.categories.length}</p>
                  <div className="text-sm opacity-70">Kategori</div>
                </div>
              </div>
              <div className="h-full py-4">
                <div className="sm:text-3xl text-xl font-bold flex flex-col justify-between h-full">
                  <p className="text-warning">
                    <PiLightningFill className="text-warning mx-auto" />
                  </p>
                  <div className="text-sm opacity-70">Cepat</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}

          {/* Form Section */}
          <div className="lg:w-6/12 sm:px-8 px-5 grid grid-cols-1 gap-10 sm:my-15 my-10 mx-auto">
            <div className="">
              <div className="mb-6 ">
                <label htmlFor="brandName" className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Brand
                </label>
                <input
                  id="brandName"
                  type="text"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleStart();
                    }
                  }}
                  placeholder="Masukkan nama brand Anda"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  minLength={3}
                />
                {brandName.length > 0 && brandName.length < 3 && <p className="text-sm text-red-500 mt-2">Nama brand minimal 3 karakter</p>}
              </div>

              <ExalviaButton
                onClick={handleStart}
                disabled={brandName.trim().length < 3}
                className={`w-full py-3 btn-lg btn ${brandName.trim().length < 3 ? "btn-disabled cursor-not-allowed" : "btn-primary "}`}
                text="Mulai Cek Brand"
              />
            </div>

            {/* Additional Info */}
            <div className="text-start  opacity-70">
              <p className="font-semibold">Catatan:</p>
              <p className="text-sm">Pilih sesuai kondisi saat ini untuk merekomendasikan strategi pemasaran yang tepat.</p>
            </div>
          </div>
        </div>
      </div>
      <ExalviaFooter data={data.footer} secId="footer" />
    </div>
  );
}
