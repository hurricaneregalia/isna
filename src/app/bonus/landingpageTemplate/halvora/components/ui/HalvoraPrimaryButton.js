import React from "react";

export default function HalvoraPrimaryButton({ children, onClick, className = "", ...props }) {
  return (
    <button
      className={`btn btn-primary ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
