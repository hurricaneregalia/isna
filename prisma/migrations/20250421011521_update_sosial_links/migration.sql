/*
  Warnings:

  - You are about to drop the column `socialId` on the `SiteIdentity` table. All the data in the column will be lost.

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
    "siteLogoUrl" TEXT NOT NULL,
    "siteName" TEXT NOT NULL,
    "siteUrl" TEXT NOT NULL DEFAULT '',
    "siteTagline" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_SiteIdentity" ("contactAddress", "contactEmail", "contactPhone", "createdAt", "id", "siteCopyright", "siteDescription", "siteFaviconAltText", "siteFaviconUrl", "siteLogoAlt", "siteLogoUrl", "siteName", "siteTagline", "siteUrl", "updatedAt") SELECT "contactAddress", "contactEmail", "contactPhone", "createdAt", "id", "siteCopyright", "siteDescription", "siteFaviconAltText", "siteFaviconUrl", "siteLogoAlt", "siteLogoUrl", "siteName", "siteTagline", "siteUrl", "updatedAt" FROM "SiteIdentity";
DROP TABLE "SiteIdentity";
ALTER TABLE "new_SiteIdentity" RENAME TO "SiteIdentity";
CREATE TABLE "new_SocialLinks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "platform" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "siteId" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "SocialLinks_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "SiteIdentity" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_SocialLinks" ("id", "platform", "url", "userName") SELECT "id", "platform", "url", "userName" FROM "SocialLinks";
DROP TABLE "SocialLinks";
ALTER TABLE "new_SocialLinks" RENAME TO "SocialLinks";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
