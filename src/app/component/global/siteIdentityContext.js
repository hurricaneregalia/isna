"use client";
import { fetchSiteIdentity } from "@/app/firebase/readData";
import React, { createContext, useContext, useState, useEffect } from "react";

const SiteIdentityContext = createContext();

export const SiteIdentityProvider = ({ children }) => {
  const [siteIdentity, setSiteIdentity] = useState(null);

  useEffect(() => {
    const getSiteIdentity = async () => {
      try {
        const data = await fetchSiteIdentity();
        setSiteIdentity(data);
      } catch (error) {
        console.error("Error fetching site identity:", error);
      }
    };

    if (!siteIdentity) {
      getSiteIdentity();
    }
  }, [siteIdentity]);

  return <SiteIdentityContext.Provider value={{ siteIdentity, setSiteIdentity }}>{children}</SiteIdentityContext.Provider>;
};

export const useSiteIdentity = () => useContext(SiteIdentityContext);
