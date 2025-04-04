import React from "react";

export default function TextHeadingTitle({ title, iconTitle, titleCase, h }) {
  // Menentukan iconTitleFX jika ada
  const iconTitleFX = iconTitle ? <span className="text-4xl fa-beat-fade-zoom mx-2">{iconTitle}</span> : null;

  // Menentukan titleCaseFX berdasarkan nilai titleCase
  const titleCaseFX = titleCase === 1 ? "uppercase" : titleCase === 2 ? "capitalize" : "normal-case";

  let HeadingTag;
  switch (h) {
    case 1:
      HeadingTag = "h1";
      break;
    case 2:
      HeadingTag = "h2";
      break;
    case 3:
      HeadingTag = "h3";
      break;
    case 4:
      HeadingTag = "h4";
      break;
    case 5:
      HeadingTag = "h5";
      break;
    default:
      HeadingTag = "h6";
  }

  return (
    <HeadingTag
      className={`font-bold tracking-tight ${
        h === 1 ? "text-4xl" : h === 2 ? "text-3xl" : h === 3 ? "text-2xl" : h === 4 ? "text-xl" : h === 5 ? "text-lg" : "text-md"
      } ${titleCaseFX}`}
    >
      {iconTitleFX}
      {title}
      {iconTitleFX}
    </HeadingTag>
  );
}
