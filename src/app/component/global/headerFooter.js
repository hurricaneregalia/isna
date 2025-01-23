import React from "react";
import Header from "./header";
import Footer from "./footer";
export default function HeaderFooter({ children, siteName, copyright }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header siteName={siteName} />
        {children}
        <Footer footerText={copyright} />
      </div>
    </>
  );
}
