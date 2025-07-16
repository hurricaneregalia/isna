import React from "react";

export default function TagBadge({ children }) {
  return <span className="inline-block bg-primary text-primary-content px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 select-none">{children}</span>;
}
