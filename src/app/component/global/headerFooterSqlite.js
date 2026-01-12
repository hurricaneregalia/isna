// src/app/component/global/HeaderFooterSqlite.jsx
import Footer from "./footer";
import Navigation2 from "./navigation2";
import landingPageStyle from "../home/landingPage.module.css";
import Loading from "@/app/loading";
import HeaderFooterClient from "./HeaderFooterClient";

import fs from "fs/promises";
import path from "path";

// Fungsi util untuk baca file JSON
async function getSiteIdentityFromFile() {
  try {
    const filePath = path.join(process.cwd(), "src/app/api/datajs/siteidentity/data.json");
    const file = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(file);
    return data?.[0] || null;
  } catch (error) {
    console.error("❌ Gagal membaca siteidentity dari file:", error.message);
    return null;
  }
}

export default async function HeaderFooterSqlite({ children }) {
  const siteData = await getSiteIdentityFromFile();

  if (!siteData) return <Loading />;

  const currentYear = new Date().getFullYear();
  return (
    <div className="relative min-h-screen flex flex-col">
      {process.env.NODE_ENV === "development" && <Navigation2 siteName={siteData.siteName} bg={landingPageStyle.bg1} logo={siteData.logoUrl} />}
      {children}
      <HeaderFooterClient />
    </div>
  );
}
