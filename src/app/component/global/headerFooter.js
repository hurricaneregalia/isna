"use client";
import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { fetchSiteIdentity } from "@/app/firebase/readData";
import Loading from "./loading";
import Head from "next/head";

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

  if (!siteIdentity) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>{siteIdentity?.siteName}</title>
        <meta name="description" content={siteIdentity.description} />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header siteName={siteIdentity?.siteName} />
        {children}
        <Footer footerText={siteIdentity?.footer.copyright} />
      </div>
    </>
  );
}
