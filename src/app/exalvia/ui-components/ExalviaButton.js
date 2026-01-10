import React from "react";

export default function ExalviaButton({ text, icon: Icon, onClick, className = "", variant = "primary" }) {
  const variantClass = variant === "primary" ? "btn-warning border-none shadow-none" : "btn-outline";

  return (
    <button onClick={onClick} className={`btn transition-all duration-300 font-montserrat ${variantClass} ${className}`}>
      {Icon && <Icon className="text-xl" />}
      {text}
    </button>
  );
}
