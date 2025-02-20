/*
  Warnings:

  - You are about to drop the column `address` on the `SiteIdentity` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `SiteIdentity` table. All the data in the column will be lost.
  - Added the required column `contactAddress` to the `SiteIdentity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactEmail` to the `SiteIdentity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactPhone` to the `SiteIdentity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seoCanonalUrl` to the `SiteIdentity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seoMetaDescription` to the `SiteIdentity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seoMetaKeywords` to the `SiteIdentity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seoMetaTitle` to the `SiteIdentity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seoRobots` to the `SiteIdentity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `siteCopyright` to the `SiteIdentity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `siteDescription` to the `SiteIdentity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `siteFaviconAltText` to the `SiteIdentity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `siteFaviconUrl` to the `SiteIdentity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `siteLogoAlt` to the `SiteIdentity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `siteLogoUrl` to the `SiteIdentity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `siteName` to the `SiteIdentity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `siteTagline` to the `SiteIdentity` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "SocialLinks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "platform" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "userName" TEXT NOT NULL
);

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
    "siteTagline" TEXT NOT NULL
);
INSERT INTO "new_SiteIdentity" ("id") SELECT "id" FROM "SiteIdentity";
DROP TABLE "SiteIdentity";
ALTER TABLE "new_SiteIdentity" RENAME TO "SiteIdentity";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
