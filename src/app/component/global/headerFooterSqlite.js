"use client";
import React, { useEffect } from "react";
import Footer from "./footer";
import Navigation2 from "./navigation2";
import Aos from "aos";
import "../../../../node_modules/aos/dist/aos.css";
import landingPageStyle from "../landingPage/landingPage.module.css";
import Loading from "@/app/loading";

export default function HeaderFooterSqlite({ children, siteName, footerText }) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-back",
      duration: 1000,
    });

    // Menunda AOS refresh
    setTimeout(() => {
      Aos.refresh();
    }, 5000);
  }, []);

  // Menangani kondisi loading dan error
  if (siteName.loading) return <Loading />;
  if (siteName.error) return <p>Terjadi kesalahan: {siteName.error}</p>;
  if (!siteName) return <Loading />;
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navigation2 siteName={siteName} bg={landingPageStyle.bg1} />
        {children}
        <Footer footerText={footerText} siteName={siteName} />
      </div>
    </>
  );
}
