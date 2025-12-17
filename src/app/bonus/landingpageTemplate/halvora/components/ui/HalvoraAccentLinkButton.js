import Link from "next/link";
import React from "react";

export default function HalvoraAccentLinkButton({ children, className = "", href }) {
  return (
    <Link href={`#${href}`} className={`btn btn-accent border-none transition-all duration-300 shadow-none ${className}`}>
      {children}
    </Link>
  );
}
