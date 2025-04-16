-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MetaData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "keywords" TEXT NOT NULL,
    "ogImage" TEXT,
    "serviceId" INTEGER,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    CONSTRAINT "MetaData_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "ServicesListItem" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_MetaData" ("createDate", "desc", "id", "keywords", "ogImage", "slug", "title", "updateDate") SELECT "createDate", "desc", "id", "keywords", "ogImage", "slug", "title", "updateDate" FROM "MetaData";
DROP TABLE "MetaData";
ALTER TABLE "new_MetaData" RENAME TO "MetaData";
CREATE UNIQUE INDEX "MetaData_slug_key" ON "MetaData"("slug");
CREATE UNIQUE INDEX "MetaData_serviceId_key" ON "MetaData"("serviceId");
CREATE TABLE "new_ServicesListItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "sku" TEXT NOT NULL DEFAULT '',
    "icon" TEXT NOT NULL,
    "img" TEXT NOT NULL DEFAULT '',
    "slug" TEXT,
    "price" REAL NOT NULL,
    "quality" INTEGER NOT NULL DEFAULT 0,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "isBest" BOOLEAN NOT NULL DEFAULT false,
    "category" INTEGER NOT NULL DEFAULT 0,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL
);
INSERT INTO "new_ServicesListItem" ("category", "createDate", "desc", "icon", "id", "img", "isBest", "price", "quality", "sku", "slug", "stock", "title", "updateDate") SELECT "category", "createDate", "desc", "icon", "id", "img", "isBest", "price", "quality", "sku", "slug", "stock", "title", "updateDate" FROM "ServicesListItem";
DROP TABLE "ServicesListItem";
ALTER TABLE "new_ServicesListItem" RENAME TO "ServicesListItem";
CREATE UNIQUE INDEX "ServicesListItem_slug_key" ON "ServicesListItem"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
