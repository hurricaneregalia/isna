import HeaderFooterSqlite from "@/app/component/global/headerFooterSqlite";
import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";

// Fungsi membaca data JSON lokal
async function loadLandingPages() {
  const filePath = path.join(process.cwd(), "src/app/api/datajs/landingpage/data.json");
  const file = await fs.readFile(filePath, "utf-8");
  return JSON.parse(file);
}

// Page utama
export default async function ProductPage({ params }) {
  const { slug } = await params;

  const landingPages = await loadLandingPages();

  // Temukan landing page yang sesuai
  const landingPage = landingPages.find((item) => item.slug === slug && item.isActive);

  if (!landingPage) return notFound();

  // Import dinamis komponen berdasarkan nama yang tersimpan di JSON
  let TemplateComponent;
  try {
    TemplateComponent = (await import(`@/app/bonus/landingpageTemplate/${landingPage.component}`)).default;
  } catch (err) {
    console.error("❌ Gagal memuat template:", err);
    return notFound();
  }

  return (
    <HeaderFooterSqlite>
      <TemplateComponent landingPage={landingPage} />
    </HeaderFooterSqlite>
  );
}
