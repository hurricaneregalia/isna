// src/app/draft/[slug]/page.js

import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";
import ThemeWrapper from "@/app/bonus/[slug]/ThemeWrapper";
import HeaderFooterSqlite from "@/app/component/global/headerFooterSqlite";
import HeaderFooterLandingPageOnly from "@/app/bonus/[slug]/HeaderFooterLandingPageOnly";
import Loading from "@/app/loading";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Fungsi membaca data JSON lokal
async function loadLandingPages() {
  const filePath = path.join(process.cwd(), "src/app/api/datajs/landingpage/data.json");
  const file = await fs.readFile(filePath, "utf-8");
  return JSON.parse(file);
}

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

// Metadata dinamis berdasarkan slug
export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const landingPages = await loadLandingPages();
    const landingPage = landingPages.find((item) => item.slug === slug && !item.isActive);

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
        creator: Array.isArray(landingPage.socialLinks) ? landingPage.socialLinks.find((s) => s.platform === "twitter")?.platformUsername || "@kalamanacopy" : "@kalamanacopy",
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
  const siteData = await getSiteIdentityFromFile();
  if (!siteData) return <Loading />;

  const landingPages = await loadLandingPages();
  const landingPage = landingPages.find((item) => item.slug === slug && !item.isActive);

  if (!landingPage) return notFound();

  // Import dinamis komponen berdasarkan nama
  if (!landingPage.component) return notFound();

  let TemplateComponent;
  try {
    switch (landingPage.component) {
      case "Nurbaz":
        TemplateComponent = (await import("@/app/bonus/landingpageTemplate/Nurbaz")).default;
        break;
      case "Halvora":
        TemplateComponent = (await import("@/app/bonus/landingpageTemplate/Halvora")).default;
        break;
      case "Baizan":
        TemplateComponent = (await import("@/app/bonus/landingpageTemplate/Baizan")).default;
        break;
      case "Rihala":
        TemplateComponent = (await import("@/app/bonus/landingpageTemplate/Rihala")).default;
        break;
      case "Zaffra":
        TemplateComponent = (await import("@/app/bonus/landingpageTemplate/Zaffra")).default;
        break;
      case "Mirka":
        TemplateComponent = (await import("@/app/bonus/landingpageTemplate/Mirka")).default;
        break;
      case "Safna":
        TemplateComponent = (await import("@/app/bonus/landingpageTemplate/Safna")).default;
        break;
      case "Zemira":
        TemplateComponent = (await import("@/app/bonus/landingpageTemplate/Zemira")).default;
        break;
      case "Hyzaa":
        TemplateComponent = (await import("@/app/bonus/landingpageTemplate/Hyzaa")).default;
        break;
      case "Kanzar":
        TemplateComponent = (await import("@/app/bonus/landingpageTemplate/Kanzar")).default;
        break;
      default:
        throw new Error(`Component ${landingPage.component} not found`);
    }
  } catch (err) {
    console.error("❌ Gagal memuat template:", err);
    return notFound();
  }

  // Tema DaisyUI dari data
  const theme = landingPage.theme?.name || "light";

  return (
    <ThemeWrapper defaultTheme={theme}>
      <HeaderFooterSqlite>
        <TemplateComponent landingPage={landingPage} siteData={siteData} siteName={landingPage.name} />
      </HeaderFooterSqlite>
    </ThemeWrapper>
  );
}
