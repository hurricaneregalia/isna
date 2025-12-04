import fs from "fs/promises";
import path from "path";
import HeaderFooterSqlite from "./component/global/headerFooterSqlite";
import LayoutLandingPage from "./component/home/layoutLandingPage";
import FacebookPixelServer from "./component/marketingTools/FacebookPixelServer";
import { headers } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

async function loadSiteIdentity() {
  const filePath = path.join(process.cwd(), "src/app/api/datajs/siteidentity/data.json");
  const file = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(file);
  return data?.[0] || null;
}

export async function generateMetadata() {
  try {
    const data = await loadSiteIdentity();

    if (!data) throw new Error("Site identity not found");

    return {
      title: data.siteName,
      description: data.description,
      keywords: Array.isArray(data.keywords) ? data.keywords.join(", ") : "",
      authors: [{ name: data.siteName }],
      applicationName: data.siteName,
      generator: "Next.js",
      metadataBase: new URL(BASE_URL),
      alternates: {
        canonical: BASE_URL,
      },
      openGraph: {
        title: data.siteName,
        description: data.description,
        url: BASE_URL,
        siteName: data.siteName,
        images: [
          {
            url: `${BASE_URL}${data.ogImage}`,
            width: 1200,
            height: 630,
            alt: data.siteName,
          },
        ],
        locale: "id_ID",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: data.siteName,
        description: data.description,
        creator: data.socialLinks?.find((s) => s.platform === "twitter")?.platformUsername || "@kalamanacopy",
        images: [`${BASE_URL}${data.ogImage}`],
      },
      robots: {
        index: true,
        follow: true,
        nocache: false,
      },
      category: "Business",
    };
  } catch (error) {
    console.error("Failed to generate metadata:", error);
    return {
      title: "Website",
      description: "Default description",
      keywords: "",
      authors: [{ name: "Admin" }],
      applicationName: "Website",
      generator: "Next.js",
      metadataBase: new URL(BASE_URL),
      alternates: {
        canonical: BASE_URL,
      },
      openGraph: {
        title: "Website",
        description: "Default description",
        url: BASE_URL,
        siteName: "Website",
        images: [],
        locale: "id_ID",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Website",
        description: "Default description",
        creator: "@username",
        images: [],
      },
      robots: {
        index: true,
        follow: true,
        nocache: false,
      },
      category: "General",
    };
  }
}

export default async function HomePage() {
  const requestHeaders = await headers();
  const referrer = requestHeaders.get("referer") || null;
  const userAgent = requestHeaders.get("user-agent") || null;

  try {
    const siteData = await loadSiteIdentity();

    if (!siteData) throw new Error("Site identity not found");

    return (
      <HeaderFooterSqlite>
        <FacebookPixelServer testEventCode="TEST53289" />
        <main>
          <LayoutLandingPage waNo={siteData.phone} />
        </main>
      </HeaderFooterSqlite>
    );
  } catch (error) {
    console.error("Failed to fetch site identity:", error);
    return <div>Gagal memuat data.</div>;
  }
}
