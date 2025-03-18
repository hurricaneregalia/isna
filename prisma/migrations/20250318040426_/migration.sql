/*
  Warnings:

  - You are about to drop the column `icon` on the `HadistListItem` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_HadistListItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "desc" TEXT NOT NULL DEFAULT '',
    "noHadist" INTEGER NOT NULL DEFAULT 0,
    "sanad" TEXT NOT NULL DEFAULT '',
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL DEFAULT '',
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL
);
INSERT INTO "new_HadistListItem" ("category", "createDate", "desc", "id", "sanad", "title", "updateDate") SELECT "category", "createDate", "desc", "id", "sanad", "title", "updateDate" FROM "HadistListItem";
DROP TABLE "HadistListItem";
ALTER TABLE "new_HadistListItem" RENAME TO "HadistListItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
