"use client";
import { fetchSiteIdentity } from "@/app/firebase/readData";
import React, { createContext, useContext, useState, useEffect } from "react";

const SiteIdentityContext = createContext();

export const SiteIdentityProvider = ({ children }) => {
  const [siteIdentity, setSiteIdentity] = useState(null);

  useEffect(() => {
    // Fungsi untuk mengambil data hanya sekali ketika komponen pertama kali di-render
    const getSiteIdentity = async () => {
      try {
        const data = await fetchSiteIdentity();
        setSiteIdentity(data);
      } catch (error) {
        console.error("Error fetching site identity:", error);
      }
    };

    // Hanya panggil getSiteIdentity jika siteIdentity masih null
    if (!siteIdentity) {
      getSiteIdentity();
    }
  }, []); // Kosongkan array dependency untuk menjalankan hanya sekali saat mount pertama kali

  return <SiteIdentityContext.Provider value={{ siteIdentity, setSiteIdentity }}>{children}</SiteIdentityContext.Provider>;
};

export const useSiteIdentity = () => useContext(SiteIdentityContext);
