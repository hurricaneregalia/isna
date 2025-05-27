// src/app/product/[slug]/page.js
import HeaderFooterSqlite from "@/app/component/global/headerFooterSqlite";
import LandingPageDetail from "@/app/component/landingPage/LandingPageDetail";
import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";

async function loadLandingPages() {
  const filePath = path.join(process.cwd(), "src/app/api/datajs/landingpage/data.json");
  const file = await fs.readFile(filePath, "utf-8");
  return JSON.parse(file);
}

export default async function ProductPage({ params }) {
  const { slug } = params;

  const landingPages = await loadLandingPages();

  const landingPage = landingPages.find((item) => item.slug === slug && item.isActive);

  if (!landingPage) return notFound();

  return (
    <HeaderFooterSqlite>
      <LandingPageDetail landingPage={landingPage} />
    </HeaderFooterSqlite>
  );
}
