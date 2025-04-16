-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MetaData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "keywords" TEXT NOT NULL,
    "author" TEXT NOT NULL DEFAULT '',
    "ogImage" TEXT,
    "category" TEXT NOT NULL DEFAULT '',
    "index" BOOLEAN NOT NULL DEFAULT false,
    "follow" BOOLEAN NOT NULL DEFAULT false,
    "serviceId" INTEGER,
    "pageId" INTEGER,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    CONSTRAINT "MetaData_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "ServicesListItem" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "MetaData_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "LandingPage" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_MetaData" ("author", "category", "createDate", "desc", "follow", "id", "index", "keywords", "ogImage", "serviceId", "slug", "title", "updateDate") SELECT "author", "category", "createDate", "desc", "follow", "id", "index", "keywords", "ogImage", "serviceId", "slug", "title", "updateDate" FROM "MetaData";
DROP TABLE "MetaData";
ALTER TABLE "new_MetaData" RENAME TO "MetaData";
CREATE UNIQUE INDEX "MetaData_slug_key" ON "MetaData"("slug");
CREATE UNIQUE INDEX "MetaData_serviceId_key" ON "MetaData"("serviceId");
CREATE UNIQUE INDEX "MetaData_pageId_key" ON "MetaData"("pageId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
