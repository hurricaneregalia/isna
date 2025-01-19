import React from "react";
import Navigation2 from "./navigation2";

export default function Header({ siteName }) {
  return (
    <div className="sticky top-0 z-10">
      <Navigation2 siteName={siteName} />
    </div>
  );
}
