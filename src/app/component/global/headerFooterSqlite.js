// src/app/component/global/HeaderFooterSqlite.jsx
import Footer from "./footer";
import Navigation2 from "./navigation2";
import landingPageStyle from "../home/landingPage.module.css";
import Loading from "@/app/loading";
import { prisma } from "@/app/lib/prisma";
import HeaderFooterClient from "./HeaderFooterClient";

export default async function HeaderFooterSqlite({ children }) {
  const siteData = await prisma.siteIdentity.findFirst();

  if (!siteData) return <Loading />;

  const currentYear = new Date().getFullYear();
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navigation2 siteName={siteData.siteName} bg={landingPageStyle.bg1} logo={siteData.logoUrl} />
      {children}
      <Footer footerText={currentYear} siteName={siteData.siteName} bg="bg-slate-900 text-slate-600" />
      <HeaderFooterClient />
    </div>
  );
}
