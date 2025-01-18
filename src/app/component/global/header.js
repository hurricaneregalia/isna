import React from "react";
import Navigation2 from "./navigation2";

export default function Header({ siteName }) {
  return (
    <div>
      <Navigation2 siteName={siteName} />
    </div>
  );
}
