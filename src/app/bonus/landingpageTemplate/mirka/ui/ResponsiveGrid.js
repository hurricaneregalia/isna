import React from "react";

export default function ResponsiveGrid({ children }) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">{children}</div>;
}
