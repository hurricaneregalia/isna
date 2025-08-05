import React from "react";

export function CTAButton({ children, onClick }) {
  return (
    <button className="btn btn-primary btn-lg hover:scale-105 transition-transform duration-200" onClick={onClick}>
      {children}
    </button>
  );
}
