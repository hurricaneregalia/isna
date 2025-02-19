/*
  Warnings:

  - You are about to alter the column `price` on the `ServicesListItem` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Float`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ServicesListItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "desc" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "isBest" BOOLEAN NOT NULL DEFAULT false,
    "category" TEXT NOT NULL DEFAULT '',
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    "landingPageId" INTEGER NOT NULL,
    CONSTRAINT "ServicesListItem_landingPageId_fkey" FOREIGN KEY ("landingPageId") REFERENCES "LandingPage" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ServicesListItem" ("category", "createDate", "desc", "icon", "id", "isBest", "landingPageId", "price", "title", "updateDate") SELECT "category", "createDate", "desc", "icon", "id", "isBest", "landingPageId", "price", "title", "updateDate" FROM "ServicesListItem";
DROP TABLE "ServicesListItem";
ALTER TABLE "new_ServicesListItem" RENAME TO "ServicesListItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
