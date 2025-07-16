import Link from "next/link";
import React from "react";

export default function LinkButtonWarning({ children, href }) {
  return (
    <Link href={href} className="btn btn-warning text-base font-semibold tracking-wide">
      {children}
    </Link>
  );
}
