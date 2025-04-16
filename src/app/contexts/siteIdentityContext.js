"use client";
import React, { createContext, useContext } from "react";

const SiteIdentityContext = createContext();

export default function SiteIdentityContextProvider({ value, children }) {
  return <SiteIdentityContext.Provider value={value}>{children}</SiteIdentityContext.Provider>;
}
export function useSiteIdentity() {
  return useContext(SiteIdentityContext);
}
