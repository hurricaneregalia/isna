import Link from "next/link";
import React from "react";

export default function LinkButton({ children, href, css, linkType }) {
  const linktypeFx = linkType ? linkType : "primary";
  return (
    <Link href={href} className={`btn btn-${linktypeFx} btn-lg text-base font-semibold tracking-wide ${css}`}>
      {children}
    </Link>
  );
}
