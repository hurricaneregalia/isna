import Link from "next/link";
import React from "react";

export default function LinkButtonWarning({ children, href, css }) {
  return (
    <Link href={href} className={`btn btn-warning btn-lg text-base font-semibold tracking-wide ${css}`}>
      {children}
    </Link>
  );
}
