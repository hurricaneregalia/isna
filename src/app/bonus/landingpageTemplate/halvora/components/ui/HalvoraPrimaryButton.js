import React from "react";

export default function HalvoraPrimaryButton({ children, onClick, className = "", ...props }) {
  return (
    <button
      onClick={onClick}
      className={`btn bg-emerald-800 hover:bg-emerald-900 text-white border-none rounded-full px-8 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
