import React from "react";

export default function HalvoraSecondaryButton({ children, onClick, className = "", ...props }) {
  return (
    <button
      className={`btn btn-secondary ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
