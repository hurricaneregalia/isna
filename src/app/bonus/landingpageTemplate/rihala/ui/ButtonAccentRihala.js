import React from "react";
import Link from "next/link";

export default function ButtonAccentRihala({ text, href = "#", aos, linkType = "a" }) {
  const aosFX = aos ? { "data-aos": aos } : {};

  const linkTypeFx =
    linkType !== "a" ? (
      <Link
        href={href}
        className="inline-block px-6 py-3 bg-accent text-accent-content font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-accent-focus hover:scale-105 active:scale-95 focus:outline-none"
        {...aosFX}
      >
        {text}
      </Link>
    ) : (
      <a
        href={href}
        className="inline-block px-6 py-3 bg-accent text-accent-content font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-accent-focus hover:scale-105 active:scale-95 focus:outline-none"
        {...aosFX}
      >
        {text}
      </a>
    );

  return linkTypeFx;
}
