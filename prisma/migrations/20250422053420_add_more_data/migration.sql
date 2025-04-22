/*
  Warnings:

  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - The primary key for the `SiteIdentity` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `contactAddress` on the `SiteIdentity` table. All the data in the column will be lost.
  - You are about to drop the column `contactEmail` on the `SiteIdentity` table. All the data in the column will be lost.
  - You are about to drop the column `contactPhone` on the `SiteIdentity` table. All the data in the column will be lost.
  - You are about to drop the column `siteCopyright` on the `SiteIdentity` table. All the data in the column will be lost.
  - You are about to drop the column `siteDescription` on the `SiteIdentity` table. All the data in the column will be lost.
  - You are about to drop the column `siteFaviconAltText` on the `SiteIdentity` table. All the data in the column will be lost.
  - You are about to drop the column `siteFaviconUrl` on the `SiteIdentity` table. All the data in the column will be lost.
  - You are about to drop the column `siteLogoAltText` on the `SiteIdentity` table. All the data in the column will be lost.
  - You are about to drop the column `siteLogoUrl` on the `SiteIdentity` table. All the data in the column will be lost.
  - You are about to drop the column `siteTagline` on the `SiteIdentity` table. All the data in the column will be lost.
  - You are about to drop the column `siteUrl` on the `SiteIdentity` table. All the data in the column will be lost.
  - The primary key for the `SocialLinks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `siteId` on the `SocialLinks` table. All the data in the column will be lost.
  - Made the column `siteName` on table `SiteIdentity` required. This step will fail if there are existing NULL values in that column.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Users";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Page" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "keywords" JSONB,
    "ogTitle" TEXT,
    "ogDescription" TEXT,
    "ogImage" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Section" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pageId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subTitle" TEXT,
    "description" TEXT,
    "image" TEXT,
    "video" TEXT,
    "icon" TEXT,
    "order" INTEGER NOT NULL,
    CONSTRAINT "Section_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ListItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sectionId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "icon" TEXT,
    CONSTRAINT "ListItem_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ListEntry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "listItemId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    CONSTRAINT "ListEntry_listItemId_fkey" FOREIGN KEY ("listItemId") REFERENCES "ListItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sku" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "gallery" JSONB,
    "price" REAL NOT NULL,
    "inStock" BOOLEAN NOT NULL DEFAULT true,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "categoryId" TEXT NOT NULL,
    "keywords" JSONB,
    "quality" INTEGER NOT NULL,
    "isBest" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Menu" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "icon" TEXT,
    "parentId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Menu_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Menu" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FooterInfo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "icon" TEXT,
    "order" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Benefit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "icon" TEXT
);

-- CreateTable
CREATE TABLE "ProductBenefitPoint" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "icon" TEXT,
    CONSTRAINT "ProductBenefitPoint_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Promotion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "type" TEXT NOT NULL,
    "value" REAL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Voucher" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "type" TEXT NOT NULL,
    "value" REAL NOT NULL,
    "usageLimit" INTEGER,
    "usedCount" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "VoucherUsage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "voucherId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "usedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "VoucherUsage_voucherId_fkey" FOREIGN KEY ("voucherId") REFERENCES "Voucher" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "VoucherUsage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT,
    "role" TEXT NOT NULL DEFAULT 'CUSTOMER',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" DATETIME NOT NULL,
    CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "userId" TEXT,
    "voucherId" TEXT,
    "totalPrice" REAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Order_voucherId_fkey" FOREIGN KEY ("voucherId") REFERENCES "Voucher" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_TagsOnProducts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_TagsOnProducts_A_fkey" FOREIGN KEY ("A") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_TagsOnProducts_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ProductPromotions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ProductPromotions_A_fkey" FOREIGN KEY ("A") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ProductPromotions_B_fkey" FOREIGN KEY ("B") REFERENCES "Promotion" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_VoucherProducts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_VoucherProducts_A_fkey" FOREIGN KEY ("A") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_VoucherProducts_B_fkey" FOREIGN KEY ("B") REFERENCES "Voucher" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ProductBenefits" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ProductBenefits_A_fkey" FOREIGN KEY ("A") REFERENCES "Benefit" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ProductBenefits_B_fkey" FOREIGN KEY ("B") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_OrderProducts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_OrderProducts_A_fkey" FOREIGN KEY ("A") REFERENCES "Order" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_OrderProducts_B_fkey" FOREIGN KEY ("B") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SiteIdentity" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "siteName" TEXT NOT NULL,
    "tagline" TEXT,
    "logoUrl" TEXT NOT NULL DEFAULT '',
    "faviconUrl" TEXT NOT NULL DEFAULT '/favicon.ico',
    "email" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_SiteIdentity" ("createdAt", "id", "siteName", "updatedAt") SELECT "createdAt", "id", "siteName", "updatedAt" FROM "SiteIdentity";
DROP TABLE "SiteIdentity";
ALTER TABLE "new_SiteIdentity" RENAME TO "SiteIdentity";
CREATE TABLE "new_SocialLinks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "platform" TEXT,
    "url" TEXT,
    "platformUsername" TEXT,
    "identityId" TEXT NOT NULL DEFAULT '',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SocialLinks_identityId_fkey" FOREIGN KEY ("identityId") REFERENCES "SiteIdentity" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SocialLinks" ("createdAt", "id", "platform", "platformUsername", "updatedAt", "url") SELECT "createdAt", "id", "platform", "platformUsername", "updatedAt", "url" FROM "SocialLinks";
DROP TABLE "SocialLinks";
ALTER TABLE "new_SocialLinks" RENAME TO "SocialLinks";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Page_slug_key" ON "Page"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Product_sku_key" ON "Product"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_slug_key" ON "Tag"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Voucher_code_key" ON "Voucher"("code");

-- CreateIndex
CREATE UNIQUE INDEX "VoucherUsage_voucherId_userId_key" ON "VoucherUsage"("voucherId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "_TagsOnProducts_AB_unique" ON "_TagsOnProducts"("A", "B");

-- CreateIndex
CREATE INDEX "_TagsOnProducts_B_index" ON "_TagsOnProducts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductPromotions_AB_unique" ON "_ProductPromotions"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductPromotions_B_index" ON "_ProductPromotions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_VoucherProducts_AB_unique" ON "_VoucherProducts"("A", "B");

-- CreateIndex
CREATE INDEX "_VoucherProducts_B_index" ON "_VoucherProducts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductBenefits_AB_unique" ON "_ProductBenefits"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductBenefits_B_index" ON "_ProductBenefits"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrderProducts_AB_unique" ON "_OrderProducts"("A", "B");

-- CreateIndex
CREATE INDEX "_OrderProducts_B_index" ON "_OrderProducts"("B");
