import React from "react";

export default function FooterLandingPageOnly({ siteName, bgColor, textColor }) {
  const bgColorFx = bgColor ? bgColor : "bg-neutral";
  const textColorFx = textColor ? textColor : "text-base-content";
  return (
    <footer className={`w-full text-center py-5 ${bgColorFx} ${textColorFx}`}>
      <span className=" opacity-50 capitalize">{siteName}</span>
    </footer>
  );
}
