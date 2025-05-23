-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LpBenefit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "templateId" TEXT,
    CONSTRAINT "LpBenefit_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "LandingPage" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_LpBenefit" ("description", "id", "templateId") SELECT "description", "id", "templateId" FROM "LpBenefit";
DROP TABLE "LpBenefit";
ALTER TABLE "new_LpBenefit" RENAME TO "LpBenefit";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
