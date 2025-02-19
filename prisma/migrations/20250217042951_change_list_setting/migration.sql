-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ServicesListItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "categories" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "icon" TEXT NOT NULL DEFAULT '',
    "isBest" BOOLEAN NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "price" BIGINT NOT NULL,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    "landingPageId" INTEGER NOT NULL,
    CONSTRAINT "ServicesListItem_landingPageId_fkey" FOREIGN KEY ("landingPageId") REFERENCES "LandingPage" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ServicesListItem" ("categories", "createDate", "description", "icon", "id", "isBest", "landingPageId", "price", "title", "updateDate") SELECT "categories", "createDate", "description", "icon", "id", "isBest", "landingPageId", "price", "title", "updateDate" FROM "ServicesListItem";
DROP TABLE "ServicesListItem";
ALTER TABLE "new_ServicesListItem" RENAME TO "ServicesListItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
