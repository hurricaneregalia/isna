"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ExalviaHeadline from "../ui-components/ExalviaHeadline";
import ExalviaButton from "../ui-components/ExalviaButton";

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
    router.push("/bonus/landingpageTemplate/exalvia/brand-checker/questions");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-primary/10 to-secondary/10 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          <ExalviaHeadline className="text-3xl md:text-4xl lg:text-5xl text-center mb-4">Cek Kualitas Brand Anda</ExalviaHeadline>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Analisis positioning brand dalam 3 menit</p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-primary mb-2">17</div>
            <div className="text-sm text-gray-600">Pertanyaan Terstruktur</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-primary mb-2">6</div>
            <div className="text-sm text-gray-600">Kategori Evaluasi</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-gray-600">Hasil Instan</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-primary mb-2">FREE</div>
            <div className="text-sm text-gray-600">Tanpa Registrasi</div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
          <div className="mb-6">
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
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">Evaluasi mencakup: Product Info, Target Market, Harga, Cara Menjual, Reflektif, dan Identitas Visual</p>
        </div>
      </div>
    </div>
  );
}
