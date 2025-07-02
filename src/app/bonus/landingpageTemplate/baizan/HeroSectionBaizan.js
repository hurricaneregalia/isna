import React from "react";

export default function HeroSectionBaizan({ children, secId, data }) {
  return (
    <div
      style={{
        backgroundImage: `url('${data.backgroundImageUrl}')`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
      className="relative min-h-screen bg-cover bg-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/50"></div>

      {/* Navbar */}
      <div>{children}</div>

      {/* Hero Content */}
      <div className="relative flex items-center justify-center min-h-screen px-4 text-center text-white" id={secId}>
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">{data.headline}</h1>
          <p className="text-lg md:text-xl mb-8">{data.subHeadline}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn btn-primary text-white">Beli Sekarang</button>
            <button className="btn btn-outline btn-secondary">Konsultasi</button>
          </div>
        </div>
      </div>
    </div>
  );
}
