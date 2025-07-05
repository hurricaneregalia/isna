import React from "react";
import Link from "next/link";

export default function ButtonSecondaryRihala({ text, href = "#", aos, linkType = "a" }) {
  const aosFX = aos ? { "data-aos": aos } : {};

  const linkTypeFx =
    linkType !== "a" ? (
      <Link
        href={href}
        className="inline-block px-6 py-3 bg-secondary text-secondary-content font-semibold rounded-lg shadow-sm transition-all duration-300 hover:bg-secondary-focus hover:scale-105 active:scale-95 focus:outline-none"
        {...aosFX}
      >
        {text}
      </Link>
    ) : (
      <a
        href={href}
        className="inline-block px-6 py-3 bg-secondary text-secondary-content font-semibold rounded-lg shadow-sm transition-all duration-300 hover:bg-secondary-focus hover:scale-105 active:scale-95 focus:outline-none"
        {...aosFX}
      >
        {text}
      </a>
    );

  return linkTypeFx;
}
