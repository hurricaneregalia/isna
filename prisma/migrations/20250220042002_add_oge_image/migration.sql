/*
  Warnings:

  - Added the required column `siteOgImageAltText` to the `SiteIdentity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `siteOgImageUrl` to the `SiteIdentity` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SiteIdentity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "contactAddress" TEXT NOT NULL,
    "contactEmail" TEXT NOT NULL,
    "contactPhone" TEXT NOT NULL,
    "seoCanonalUrl" TEXT NOT NULL,
    "seoMetaDescription" TEXT NOT NULL,
    "seoMetaKeywords" TEXT NOT NULL,
    "seoMetaTitle" TEXT NOT NULL,
    "seoRobots" TEXT NOT NULL,
    "siteCopyright" TEXT NOT NULL,
    "siteDescription" TEXT NOT NULL,
    "siteFaviconAltText" TEXT NOT NULL,
    "siteFaviconUrl" TEXT NOT NULL,
    "siteLogoAlt" TEXT NOT NULL,
    "siteLogoUrl" TEXT NOT NULL,
    "siteName" TEXT NOT NULL,
    "siteOgImageAltText" TEXT NOT NULL,
    "siteOgImageUrl" TEXT NOT NULL,
    "siteTagline" TEXT NOT NULL
);
INSERT INTO "new_SiteIdentity" ("contactAddress", "contactEmail", "contactPhone", "id", "seoCanonalUrl", "seoMetaDescription", "seoMetaKeywords", "seoMetaTitle", "seoRobots", "siteCopyright", "siteDescription", "siteFaviconAltText", "siteFaviconUrl", "siteLogoAlt", "siteLogoUrl", "siteName", "siteTagline") SELECT "contactAddress", "contactEmail", "contactPhone", "id", "seoCanonalUrl", "seoMetaDescription", "seoMetaKeywords", "seoMetaTitle", "seoRobots", "siteCopyright", "siteDescription", "siteFaviconAltText", "siteFaviconUrl", "siteLogoAlt", "siteLogoUrl", "siteName", "siteTagline" FROM "SiteIdentity";
DROP TABLE "SiteIdentity";
ALTER TABLE "new_SiteIdentity" RENAME TO "SiteIdentity";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
