/*
  Warnings:

  - You are about to drop the column `desc` on the `BonusListItem` table. All the data in the column will be lost.
  - Added the required column `icon` to the `BonusListItem` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BonusListItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    "landingPageId" TEXT NOT NULL,
    CONSTRAINT "BonusListItem_landingPageId_fkey" FOREIGN KEY ("landingPageId") REFERENCES "LandingPage" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_BonusListItem" ("createDate", "id", "landingPageId", "title", "updateDate") SELECT "createDate", "id", "landingPageId", "title", "updateDate" FROM "BonusListItem";
DROP TABLE "BonusListItem";
ALTER TABLE "new_BonusListItem" RENAME TO "BonusListItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
