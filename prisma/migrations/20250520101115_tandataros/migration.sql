-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LpContentType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "templateId" TEXT,
    CONSTRAINT "LpContentType_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "LandingPage" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_LpContentType" ("id", "templateId", "type") SELECT "id", "templateId", "type" FROM "LpContentType";
DROP TABLE "LpContentType";
ALTER TABLE "new_LpContentType" RENAME TO "LpContentType";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
