import React from "react";

export default function HalvoraPrimaryButton({ children, onClick, className = "", ...props }) {
  return (
    <button onClick={onClick} className={`btn btn-primary border-none px-8 shadow-none ransition-all duration-300 ${className}`} {...props}>
      {children}
    </button>
  );
}
