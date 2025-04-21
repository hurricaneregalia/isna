-- CreateTable
CREATE TABLE "SocialLinks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "platform" TEXT,
    "url" TEXT,
    "platformUsername" TEXT,
    "siteId" INTEGER DEFAULT 1,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SocialLinks_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "SiteIdentity" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SiteIdentity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "contactAddress" TEXT,
    "contactEmail" TEXT,
    "contactPhone" TEXT,
    "siteCopyright" TEXT,
    "siteDescription" TEXT,
    "siteFaviconAltText" TEXT,
    "siteFaviconUrl" TEXT,
    "siteLogoAltText" TEXT,
    "siteLogoUrl" TEXT,
    "siteName" TEXT,
    "siteUrl" TEXT DEFAULT '',
    "siteTagline" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
