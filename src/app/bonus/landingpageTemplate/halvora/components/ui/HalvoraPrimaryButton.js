import React from "react";

export default function HalvoraPrimaryButton({ children, onClick, className = "", ...props }) {
  return (
    <button 
      onClick={onClick}
      className={`btn bg-[#D48F8F] hover:bg-[#c07d7d] text-white border-none rounded-full px-8 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
