"use client";
import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { fetchSiteIdentity } from "@/app/firebase/readData";

export default function HeaderFooter({ children }) {
  const [siteIdentity, setSiteIdentity] = useState(null);

  useEffect(() => {
    const getSiteIdentity = async () => {
      try {
        const data = await fetchSiteIdentity();
        console.log("Data Site Identity:", data);
        setSiteIdentity(data);
      } catch (error) {
        console.error("Error fetching site identity:", error);
      }
    };

    getSiteIdentity();
  }, []);

  return (
    <div>
      <Header siteName={siteIdentity?.siteName} />
      {children}
      <Footer />
    </div>
  );
}
