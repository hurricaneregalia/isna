import React from "react";

export default function HalvoraAccentButton({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`btn bg-[#6B4423] hover:bg-[#5A381C] text-[#FFF5EA] border-none rounded-full transition-all duration-300 shadow-md hover:shadow-lg ${className}`}
    >
      {children}
    </button>
  );
}
