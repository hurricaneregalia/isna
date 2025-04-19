import React from "react";
import Footer from "./footer";
import Navigation3 from "./navigation3";

export default function HeaderFooterPayment({ children, siteName, footerText }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navigation3 siteName={siteName} bg="bg-transparent" />
        {children}
        <Footer footerText={footerText} siteName={siteName} />
      </div>
    </>
  );
}
