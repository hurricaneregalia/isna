/*
  Warnings:

  - You are about to drop the column `icon` on the `ListItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ListEntry" ADD COLUMN "icon" TEXT;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ListItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sectionId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    CONSTRAINT "ListItem_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ListItem" ("description", "id", "sectionId", "title", "type") SELECT "description", "id", "sectionId", "title", "type" FROM "ListItem";
DROP TABLE "ListItem";
ALTER TABLE "new_ListItem" RENAME TO "ListItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
