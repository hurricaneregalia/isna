/*
  Warnings:

  - You are about to drop the `LpFeature` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `label` on the `LpFor` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "LpFeature";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LpFor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT,
    "templateId" TEXT,
    CONSTRAINT "LpFor_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "LandingPage" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_LpFor" ("id", "templateId") SELECT "id", "templateId" FROM "LpFor";
DROP TABLE "LpFor";
ALTER TABLE "new_LpFor" RENAME TO "LpFor";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
