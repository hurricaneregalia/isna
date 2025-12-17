import React from "react";

export default function HalvoraAccentButton({ children, onClick, className = "" }) {
  return (
    <button onClick={onClick} className={`btn btn-accent border-none transition-all duration-300 shadow-none ${className}`}>
      {children}
    </button>
  );
}
