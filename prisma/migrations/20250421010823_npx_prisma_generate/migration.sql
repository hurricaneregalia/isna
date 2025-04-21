/*
  Warnings:

  - You are about to drop the column `baseUrl` on the `SiteIdentity` table. All the data in the column will be lost.
  - You are about to drop the column `seoCanonalUrl` on the `SiteIdentity` table. All the data in the column will be lost.
  - You are about to drop the column `seoMetaDescription` on the `SiteIdentity` table. All the data in the column will be lost.
  - You are about to drop the column `seoMetaKeywords` on the `SiteIdentity` table. All the data in the column will be lost.
  - You are about to drop the column `seoMetaTitle` on the `SiteIdentity` table. All the data in the column will be lost.
  - You are about to drop the column `seoRobots` on the `SiteIdentity` table. All the data in the column will be lost.
  - You are about to drop the column `siteOgImageAltText` on the `SiteIdentity` table. All the data in the column will be lost.
  - You are about to drop the column `siteOgImageUrl` on the `SiteIdentity` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SiteIdentity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "contactAddress" TEXT NOT NULL,
    "contactEmail" TEXT NOT NULL,
    "contactPhone" TEXT NOT NULL,
    "siteCopyright" TEXT NOT NULL,
    "siteDescription" TEXT NOT NULL,
    "siteFaviconAltText" TEXT NOT NULL,
    "siteFaviconUrl" TEXT NOT NULL,
    "siteLogoAlt" TEXT NOT NULL,
    "socialId" INTEGER NOT NULL DEFAULT 0,
    "siteLogoUrl" TEXT NOT NULL,
    "siteName" TEXT NOT NULL,
    "siteUrl" TEXT NOT NULL DEFAULT '',
    "siteTagline" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SiteIdentity_socialId_fkey" FOREIGN KEY ("socialId") REFERENCES "SocialLinks" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SiteIdentity" ("contactAddress", "contactEmail", "contactPhone", "id", "siteCopyright", "siteDescription", "siteFaviconAltText", "siteFaviconUrl", "siteLogoAlt", "siteLogoUrl", "siteName", "siteTagline", "siteUrl") SELECT "contactAddress", "contactEmail", "contactPhone", "id", "siteCopyright", "siteDescription", "siteFaviconAltText", "siteFaviconUrl", "siteLogoAlt", "siteLogoUrl", "siteName", "siteTagline", "siteUrl" FROM "SiteIdentity";
DROP TABLE "SiteIdentity";
ALTER TABLE "new_SiteIdentity" RENAME TO "SiteIdentity";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
