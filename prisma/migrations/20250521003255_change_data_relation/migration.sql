/*
  Warnings:

  - You are about to drop the `LpBenefit` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `templateId` on the `LpContentType` table. All the data in the column will be lost.
  - You are about to drop the column `templateId` on the `LpFor` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "LpBenefit";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_LandingPageLpFor" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_LandingPageLpFor_A_fkey" FOREIGN KEY ("A") REFERENCES "LandingPage" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_LandingPageLpFor_B_fkey" FOREIGN KEY ("B") REFERENCES "LpFor" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_LandingPageLpContentType" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_LandingPageLpContentType_A_fkey" FOREIGN KEY ("A") REFERENCES "LandingPage" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_LandingPageLpContentType_B_fkey" FOREIGN KEY ("B") REFERENCES "LpContentType" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LpContentType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL
);
INSERT INTO "new_LpContentType" ("id", "type") SELECT "id", "type" FROM "LpContentType";
DROP TABLE "LpContentType";
ALTER TABLE "new_LpContentType" RENAME TO "LpContentType";
CREATE TABLE "new_LpFor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT
);
INSERT INTO "new_LpFor" ("description", "id") SELECT "description", "id" FROM "LpFor";
DROP TABLE "LpFor";
ALTER TABLE "new_LpFor" RENAME TO "LpFor";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_LandingPageLpFor_AB_unique" ON "_LandingPageLpFor"("A", "B");

-- CreateIndex
CREATE INDEX "_LandingPageLpFor_B_index" ON "_LandingPageLpFor"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LandingPageLpContentType_AB_unique" ON "_LandingPageLpContentType"("A", "B");

-- CreateIndex
CREATE INDEX "_LandingPageLpContentType_B_index" ON "_LandingPageLpContentType"("B");
