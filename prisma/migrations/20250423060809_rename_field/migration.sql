/*
  Warnings:

  - You are about to drop the column `aditionalText` on the `Section` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Section" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "pageId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subTitle" TEXT,
    "description" TEXT,
    "additionalText" TEXT,
    "image" TEXT,
    "video" TEXT,
    "icon" TEXT,
    "order" INTEGER NOT NULL,
    CONSTRAINT "Section_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Section" ("description", "icon", "id", "image", "name", "order", "pageId", "subTitle", "title", "type", "video") SELECT "description", "icon", "id", "image", "name", "order", "pageId", "subTitle", "title", "type", "video" FROM "Section";
DROP TABLE "Section";
ALTER TABLE "new_Section" RENAME TO "Section";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
