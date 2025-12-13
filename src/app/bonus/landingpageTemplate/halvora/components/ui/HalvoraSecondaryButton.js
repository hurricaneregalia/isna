import React from "react";

export default function HalvoraSecondaryButton({ children, onClick, className = "", ...props }) {
  return (
    <button
      className={`btn bg-white border border-emerald-800 text-emerald-900 hover:bg-emerald-50 hover:border-emerald-900 rounded-full px-8 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
