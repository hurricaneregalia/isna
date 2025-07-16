import React from "react";

export default function SectionWrapper({ children, css }) {
  return <div className={`max-w-7xl mx-auto px-4 ${css}`}>{children}</div>;
}
