"use client";
import React from "react";
import { FaArrowRight, FaWhatsapp, FaRocket, FaShieldAlt, FaChartLine } from "react-icons/fa";

// Import Exalvia Atomic Components
import ExalviaHeadline from "./ExalviaHeadline";
import ExalviaSubHeadline from "./ExalviaSubHeadline";
import ExalviaBodyText from "./ExalviaBodyText";
import ExalviaButton from "./ExalviaButton";
import ExalviaLinkButton from "./ExalviaLinkButton";
import ExalviaImage from "./ExalviaImage";
import ExalviaBadge from "./ExalviaBadge";
import ExalviaSectionHeader from "./ExalviaSectionHeader";
import ExalviaCard from "./ExalviaCard";
import ExalviaIconBox from "./ExalviaIconBox";
import ExalviaRating from "./ExalviaRating";

export default function ExalviaUiComponentLibrary() {
  return (
    <div className="container mx-auto p-10 bg-base-100 font-montserrat space-y-20 border-t mt-20">
      <div className="border-b pb-5">
        <h1 className="text-4xl font-bold font-instrument-serif text-warning">Exalvia UI Component Library</h1>
        <p className="opacity-70 mt-2">Daftar komponen atomik dan molekular untuk proyek Exalvia.</p>
      </div>

      {/* 1. Typography & Header */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-l-4 border-warning pl-4">1. Typography & Header</h2>
        <div className="space-y-10 bg-base-200 p-8 rounded-xl">
          <div>
            <span className="text-xs uppercase opacity-50 block mb-4 font-bold tracking-widest text-primary">ExalviaSectionHeader (Molecular)</span>
            <ExalviaSectionHeader
              badge="SOLUSI KAMI"
              title="Copywriting yang Menyentuh Hati & Logika"
              subtitle="Kami membantu brand Anda berbicara lebih persuasif dengan riset mendalam dan narasi yang elegan."
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <span className="text-xs uppercase opacity-50 block mb-2 font-bold tracking-widest text-primary">ExalviaHeadline</span>
              <ExalviaHeadline>Judul Utama Prestigius</ExalviaHeadline>
            </div>
            <div>
              <span className="text-xs uppercase opacity-50 block mb-2 font-bold tracking-widest text-primary">ExalviaBadge</span>
              <ExalviaBadge>LABEL SECTION</ExalviaBadge>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Containers & Elements */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-l-4 border-warning pl-4">2. Containers & Elements</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ExalviaCard className="space-y-4">
            <ExalviaIconBox icon={FaRocket} />
            <h3 className="font-bold text-xl font-instrument-serif">Performa Cepat</h3>
            <ExalviaBodyText>Landing page Anda akan dimuat dalam hitungan detik untuk konversi maksimal.</ExalviaBodyText>
          </ExalviaCard>

          <ExalviaCard className="space-y-4">
            <ExalviaIconBox icon={FaShieldAlt} />
            <h3 className="font-bold text-xl font-instrument-serif">Terpercaya</h3>
            <ExalviaRating />
            <ExalviaBodyText>99% Klien kami puas dengan hasil penulisan persuasif dari tim Exalvia.</ExalviaBodyText>
          </ExalviaCard>

          <ExalviaCard className="space-y-4">
            <ExalviaIconBox icon={FaChartLine} />
            <h3 className="font-bold text-xl font-instrument-serif">Hasil Terukur</h3>
            <ExalviaBodyText>Setiap kata dirancang untuk menggerakkan calon pembeli Anda.</ExalviaBodyText>
          </ExalviaCard>
        </div>
      </section>

      {/* 3. Buttons */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-l-4 border-warning pl-4">3. Buttons & Links</h2>
        <div className="grid md:grid-cols-2 gap-8 bg-base-200 p-8 rounded-xl">
          <div className="space-y-4">
            <span className="text-xs uppercase opacity-50 block mb-2 font-bold tracking-widest text-primary">ExalviaButton (Functional)</span>
            <div className="flex flex-wrap gap-4">
              <ExalviaButton text="Beli Sekarang" icon={FaWhatsapp} />
              <ExalviaButton text="Lihat Detail" variant="secondary" />
            </div>
          </div>
          <div className="space-y-4">
            <span className="text-xs uppercase opacity-50 block mb-2 font-bold tracking-widest text-primary">ExalviaLinkButton (Navigation)</span>
            <div className="flex flex-wrap gap-4">
              <ExalviaLinkButton text="Pelajari Layanan" href="#service" icon={FaArrowRight} />
              <ExalviaLinkButton text="Hubungi Kami" href="#contact" variant="secondary" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Media */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-l-4 border-warning pl-4">4. Media</h2>
        <div className="bg-base-200 p-8 rounded-xl max-w-2xl">
          <ExalviaImage src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Contoh Gambar Exalvia" containerClassName="max-w-md mx-auto" />
        </div>
      </section>
    </div>
  );
}
