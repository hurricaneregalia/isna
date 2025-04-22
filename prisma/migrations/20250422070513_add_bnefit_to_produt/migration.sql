/*
  Warnings:

  - You are about to drop the `_ProductBenefits` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `gallery` on the `Product` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "_ProductBenefits_B_index";

-- DropIndex
DROP INDEX "_ProductBenefits_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_ProductBenefits";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "ProductGallery" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ProductGallery_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProductBenefit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "benefitId" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "ProductBenefit_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProductBenefit_benefitId_fkey" FOREIGN KEY ("benefitId") REFERENCES "Benefit" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sku" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
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
INSERT INTO "new_Product" ("categoryId", "createdAt", "description", "id", "image", "inStock", "isBest", "keywords", "name", "price", "quality", "sku", "slug", "status", "updatedAt") SELECT "categoryId", "createdAt", "description", "id", "image", "inStock", "isBest", "keywords", "name", "price", "quality", "sku", "slug", "status", "updatedAt" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_sku_key" ON "Product"("sku");
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
