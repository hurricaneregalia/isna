import fs from "fs";
import prisma from "../prisma";

// Gantilah path absolut dengan path relatif untuk file JSON
const siteData = JSON.parse(fs.readFileSync("./importSiteIdentity.js", "utf-8"));

async function importSiteIdentityData() {
  try {
    for (const site of siteData) {
      await prisma.siteIdentity.create({
        data: {
          contactAddress: site.contactAddress,
          contactEmail: site.contactEmail,
          contactPhone: site.contactPhone,
          seoCanonalUrl: site.seoCanonalUrl,
          seoMetaDescription: site.seoMetaDescription,
          seoMetaKeywords: site.seoMetaKeywords,
          seoMetaTitle: site.seoMetaTitle,
          seoRobots: site.seoRobots,
          siteCopyright: site.siteCopyright,
          siteDescription: site.siteDescription,
          siteFaviconAltText: site.siteFaviconAltText,
          siteFaviconUrl: site.siteFaviconUrl,
          siteLogoAlt: site.siteLogoAlt,
          siteLogoUrl: site.siteLogoUrl,
          siteName: site.siteName,
          siteOgImageAltText: site.siteOgImageAltText,
          siteOgImageUrl: site.siteOgImageUrl,
          siteTagline: site.siteTagline,
        },
      });
    }
    console.log("Data SiteIdentity berhasil diimpor!");
  } catch (error) {
    console.error("Gagal mengimpor data SiteIdentity:", error);
  } finally {
    await prisma.$disconnect();
  }
}

importSiteIdentityData();
