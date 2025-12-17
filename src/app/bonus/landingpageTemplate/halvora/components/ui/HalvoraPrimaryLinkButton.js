import Link from "next/link";
import React from "react";

export default function HalvoraPrimaryLinkButton({ children, className = "", href = "#" }) {
  return (
    <Link href={`#${href}`} className={`btn btn-primary border-none px-8 shadow-none transition-all duration-300 ${className}`}>
      {children}
    </Link>
  );
}
