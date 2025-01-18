import React from "react";
import Navigation from "./navigation";

export default function Header({ siteName }) {
  return (
    <div>
      <Navigation siteName={siteName} />
    </div>
  );
}
