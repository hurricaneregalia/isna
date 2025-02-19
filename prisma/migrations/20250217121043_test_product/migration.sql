-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" BIGINT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "inStock" BOOLEAN NOT NULL,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    "landingPageId" INTEGER NOT NULL,
    CONSTRAINT "Product_landingPageId_fkey" FOREIGN KEY ("landingPageId") REFERENCES "LandingPage" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
