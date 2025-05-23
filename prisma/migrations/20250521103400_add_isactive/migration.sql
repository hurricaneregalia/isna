-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LandingPage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "lpDesignStyleId" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "LandingPage_lpDesignStyleId_fkey" FOREIGN KEY ("lpDesignStyleId") REFERENCES "LpDesignStyle" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_LandingPage" ("createdAt", "description", "id", "image", "lpDesignStyleId", "name", "slug", "updatedAt") SELECT "createdAt", "description", "id", "image", "lpDesignStyleId", "name", "slug", "updatedAt" FROM "LandingPage";
DROP TABLE "LandingPage";
ALTER TABLE "new_LandingPage" RENAME TO "LandingPage";
CREATE UNIQUE INDEX "LandingPage_slug_key" ON "LandingPage"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
