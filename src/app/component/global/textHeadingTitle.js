import React from "react";

export default function TextHeadingTitle({ title, iconTitle, iconPosition, titleCase, h, cssStyle, anime }) {
  // Heading tag dinamis
  const HeadingTag = `h${h >= 1 && h <= 6 ? h : 6}`;

  // Text case utility
  const titleCaseClass = titleCase === 1 ? "uppercase" : titleCase === 2 ? "capitalize" : "normal-case";

  // Text size based on heading level
  const textSizeClass =
    {
      1: "text-4xl",
      2: "text-3xl",
      3: "text-2xl",
      4: "text-xl",
      5: "text-lg",
      6: "text-md",
    }[h] || "text-md";

  // Generate content based on icon position
  const renderContent = () => {
    const icon = iconTitle && <span className={anime}>{iconTitle}</span>;
    if (iconPosition === "left")
      return (
        <>
          {icon} {title}
        </>
      );
    if (iconPosition === "right")
      return (
        <>
          {title} {icon}
        </>
      );
    if (iconPosition === "both")
      return (
        <>
          {icon} {title} {icon}
        </>
      );
    return <>{title}</>; // default
  };

  return (
    <HeadingTag className={`font-bold tracking-tight ${textSizeClass} ${titleCaseClass} ${cssStyle}`}>
      <div className="flex items-center gap-1">{renderContent()}</div>
    </HeadingTag>
  );
}
