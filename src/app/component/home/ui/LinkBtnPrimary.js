import Link from "next/link";
import React from "react";

export default function LinkBtnPrimary({ href, linkText = "masih kosong", icon, linkType, css, btnSm }) {
  const className = "btn btn-warning rounded-full capitalize shadow-none flex gap-2";
  const btnSmFx = btnSm ? "" : " btn-lg ";

  if (linkType) {
    return (
      <a href={href} className={className + btnSmFx + css} target="_blank" rel="noopener noreferrer">
        {linkText} {icon}
      </a>
    );
  }
  return (
    <Link href={href} className={className + btnSmFx + css}>
      {linkText} {icon}
    </Link>
  );
}
