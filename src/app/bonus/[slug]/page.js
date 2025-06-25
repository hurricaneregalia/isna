// src/app/bonus/[slug]/page.js
import HeaderFooterSqlite from "@/app/component/global/headerFooterSqlite";
import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Fungsi membaca data JSON lokal
async function loadLandingPages() {
  const filePath = path.join(process.cwd(), "src/app/api/datajs/landingpage/data.json");
  const file = await fs.readFile(filePath, "utf-8");
  return JSON.parse(file);
}

// Metadata dinamis berdasarkan slug
export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const landingPages = await loadLandingPages();
    const landingPage = landingPages.find((item) => item.slug === slug && item.isActive);

    if (!landingPage) return {};

    return {
      title: landingPage.name,
      description: landingPage.description,
      keywords: landingPage.keywords,
      authors: "kalamanacopy",
      applicationName: landingPage.name,
      generator: "Next.js",
      metadataBase: new URL(BASE_URL),
      alternates: {
        canonical: `${BASE_URL}/bonus/${slug}`,
      },
      openGraph: {
        title: landingPage.name,
        description: landingPage.description,
        url: `${BASE_URL}/bonus/${slug}`,
        siteName: landingPage.name,
        images: landingPage.image
          ? [
              {
                url: `${BASE_URL}${landingPage.image}`,
                width: 1200,
                height: 630,
                alt: landingPage.name,
              },
            ]
          : [],
        locale: "id_ID",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: landingPage.name,
        description: landingPage.description,
        creator: Array.isArray(landingPage.socialLinks)
          ? landingPage.socialLinks.find((s) => s.platform === "twitter")?.platformUsername || "@kalamanacopy"
          : "@kalamanacopy",
        images: landingPage.image ? [`${BASE_URL}${landingPage.image}`] : [],
      },
      robots: {
        index: true,
        follow: true,
        nocache: false,
      },
      category: "Business",
    };
  } catch (error) {
    console.error("❌ Gagal membuat metadata dinamis:", error);
    return {
      title: "Website",
      description: "Default description",
    };
  }
}

// Page utama
export default async function ProductPage({ params }) {
  const { slug } = await params;

  const landingPages = await loadLandingPages();
  const landingPage = landingPages.find((item) => item.slug === slug && item.isActive);

  if (!landingPage) return notFound();

  // Import dinamis komponen berdasarkan nama
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
