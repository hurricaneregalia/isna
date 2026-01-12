import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ExalviaLinkButton from "../ui-components/ExalviaLinkButton";
import ExalviaBodyText from "../ui-components/ExalviaBodyText";
import ExalviaScan from "./ExalviaScan";

export default function ExalviaCTA1({ data, secId = "cta1", targetLink = "#" }) {
  if (!data) return null;

  return (
    <section id={secId} className="p-4 bg-base-200 rounded-4xl rounded-t-none ">
      <div
        className="
    relative py-20 md:py-32 overflow-hidden text-white
    rounded-3xl rounded-tr-none
    bg-linear-to-br from-primary to-secondary
  "
      >
        {/* ================= GRID KONTRAS (Centered) ================= */}
        <div
          className="
            absolute inset-0 pointer-events-none
            bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]
            bg-size-[80px_80px] bg-center
          "
        />

        {/* ================= GLOW ================= */}
        <div className="absolute inset-0 pointer-events-none glow-bg" />

        {/* ================= KOTAK OPACITY (Snapped to CENTERED Grid) ================= */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Baris Tengah (n=0) */}
          <div className="absolute top-[calc(50%-40px)] left-[calc(50%-40px+320px)] hidden lg:block w-[80px] h-[80px] bg-white/10 rounded-md" />
          <div className="absolute top-[calc(50%-40px)] left-[calc(50%-40px-400px)] hidden xl:block w-[80px] h-[80px] bg-white/5 rounded-md" />

          {/* Baris Atas (n=-1, -2) */}
          <div className="absolute top-[calc(50%-120px)] left-[calc(50%-40px-160px)] w-[80px] h-[80px] bg-white/20 rounded-md" />
          <div className="absolute top-[calc(50%-280px)] left-[calc(50%-40px+160px)] hidden md:block w-[80px] h-[80px] bg-white/10 rounded-md" />
          <div className="absolute top-[calc(50%-200px)] left-[calc(50%-40px+480px)] hidden xl:block w-[80px] h-[80px] bg-white/5 rounded-md" />

          {/* Baris Bawah (n=1, 2) */}
          <div className="absolute top-[calc(50%+40px)] left-[calc(50%-40px-320px)] hidden md:block w-[80px] h-[80px] bg-white/20 rounded-md" />
          <div className="absolute top-[calc(50%+120px)] left-[calc(50%-40px+240px)] w-[80px] h-[80px] bg-white/10 rounded-md" />
          <div className="absolute top-[calc(50%+200px)] left-[calc(50%-40px-80px)] hidden lg:block w-[80px] h-[80px] bg-white/5 rounded-md" />

          {/* Pojok-pojok Mobile Friendly */}
          <div className="absolute top-0 left-0 w-[80px] h-[80px] bg-white/5 rounded-md opacity-50" />
        </div>

        {/* ================= CONTENT ================= */}
        <div
          className="
      relative 
      lg:w-7/12 sm:w-11/12 w-full mx-auto
      px-6 md:px-16 lg:px-24
      flex flex-col items-center text-center gap-6
    "
        >
          <span className="uppercase tracking-[0.2em] text-warning text-xs md:text-sm font-bold">{data.label}</span>

          <h2 className="text-3xl md:text-5xl leading-tight">{data.title}</h2>

          <div className="w-full">
            <ExalviaScan width="sm:w-8/12 my-10" />
          </div>

          <ExalviaBodyText text={data.description} className="mb-4 text-white/80" />

          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto justify-center">
            <ExalviaLinkButton text="SCAN BRAND" href={targetLink} icon={FaArrowRight} className="w-fit mx-auto sm:w-auto btn-lg btn-warning animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
