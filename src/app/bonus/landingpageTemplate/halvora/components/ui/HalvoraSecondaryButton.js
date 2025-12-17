import React from "react";

export default function HalvoraSecondaryButton({ children, onClick, className = "", ...props }) {
  return (
    <button
      onClick={onClick}
      className={`btn bg-white border border-[#D48F8F] text-[#D48F8F] hover:bg-[#FFF0F0] hover:border-[#c07d7d] rounded-full px-8 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
