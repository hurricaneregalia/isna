"use client";
import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Loading from "./loading";
import { useSiteIdentity } from "./siteIdentityContext";

export default function HeaderFooter({ children }) {
  const { siteIdentity } = useSiteIdentity();
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  // Gunakan useEffect untuk menunggu data siteIdentity
  useEffect(() => {
    // Cek jika siteIdentity sudah terisi
    if (siteIdentity) {
      console.log("Data siteIdentity sudah tersedia:", siteIdentity);
      setIsDataLoaded(true); // Tandai bahwa data sudah terisi
    } else {
      console.log("siteIdentity belum tersedia, menunggu...");
    }
  }, [siteIdentity]); // Dependensi ke siteIdentity agar effect berjalan saat data tersedia

  // Jika data belum ada, tampilkan Loading
  if (!isDataLoaded) {
    console.log("Menunggu siteIdentity untuk memuat...");
    return <Loading />;
  }

  // Pastikan Head hanya di-render setelah data siteIdentity tersedia
  console.log("Rendering HeaderFooter dengan siteIdentity:", siteIdentity);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header siteName={siteIdentity?.siteName} />
        {children}
        <Footer footerText={siteIdentity?.footer?.copyright} />
      </div>
    </>
  );
}
