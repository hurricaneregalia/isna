-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MetaData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "keywords" TEXT NOT NULL,
    "author" TEXT NOT NULL DEFAULT '',
    "ogImage" TEXT,
    "category" TEXT NOT NULL DEFAULT '',
    "index" BOOLEAN NOT NULL DEFAULT false,
    "follow" BOOLEAN NOT NULL DEFAULT false,
    "serviceId" INTEGER,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    CONSTRAINT "MetaData_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "ServicesListItem" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_MetaData" ("createDate", "desc", "id", "keywords", "ogImage", "serviceId", "slug", "title", "updateDate") SELECT "createDate", "desc", "id", "keywords", "ogImage", "serviceId", "slug", "title", "updateDate" FROM "MetaData";
DROP TABLE "MetaData";
ALTER TABLE "new_MetaData" RENAME TO "MetaData";
CREATE UNIQUE INDEX "MetaData_slug_key" ON "MetaData"("slug");
CREATE UNIQUE INDEX "MetaData_serviceId_key" ON "MetaData"("serviceId");
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
    "siteUrl" TEXT NOT NULL DEFAULT '',
    "baseUrl" TEXT NOT NULL DEFAULT '',
    "siteOgImageAltText" TEXT NOT NULL,
    "siteOgImageUrl" TEXT NOT NULL,
    "siteTagline" TEXT NOT NULL
);
INSERT INTO "new_SiteIdentity" ("contactAddress", "contactEmail", "contactPhone", "id", "seoCanonalUrl", "seoMetaDescription", "seoMetaKeywords", "seoMetaTitle", "seoRobots", "siteCopyright", "siteDescription", "siteFaviconAltText", "siteFaviconUrl", "siteLogoAlt", "siteLogoUrl", "siteName", "siteOgImageAltText", "siteOgImageUrl", "siteTagline") SELECT "contactAddress", "contactEmail", "contactPhone", "id", "seoCanonalUrl", "seoMetaDescription", "seoMetaKeywords", "seoMetaTitle", "seoRobots", "siteCopyright", "siteDescription", "siteFaviconAltText", "siteFaviconUrl", "siteLogoAlt", "siteLogoUrl", "siteName", "siteOgImageAltText", "siteOgImageUrl", "siteTagline" FROM "SiteIdentity";
DROP TABLE "SiteIdentity";
ALTER TABLE "new_SiteIdentity" RENAME TO "SiteIdentity";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
