import React from "react";

export default function FooterZemira({ siteName }) {
  return (
    <footer className="bg-base-300 text-base-content pt-16 pb-8">
      <div className="container mx-auto px-4">{siteName}</div>
    </footer>
  );
}
