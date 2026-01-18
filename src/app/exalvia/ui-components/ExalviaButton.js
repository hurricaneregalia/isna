import React from "react";

export default function ExalviaButton({ text, icon: Icon, onClick, className = "", variant = "primary", iconPosition = "left", ...props }) {
  const variantClass = variant === "primary" ? "btn-warning border-none shadow-none" : "btn-outline";

  return (
    <button onClick={onClick} className={`btn transition-all duration-300 font-montserrat flex items-center gap-2 ${variantClass} ${className}`} {...props}>
      {Icon && iconPosition === "left" && <Icon />}
      {text}
      {Icon && iconPosition === "right" && <Icon />}
    </button>
  );
}
