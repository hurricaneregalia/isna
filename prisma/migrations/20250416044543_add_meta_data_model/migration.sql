-- CreateTable
CREATE TABLE "MetaData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "keywords" TEXT NOT NULL,
    "ogImage" TEXT,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ServicesListItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "sku" TEXT NOT NULL DEFAULT '',
    "icon" TEXT NOT NULL,
    "img" TEXT NOT NULL DEFAULT '',
    "slug" TEXT NOT NULL DEFAULT '',
    "price" REAL NOT NULL,
    "quality" INTEGER NOT NULL DEFAULT 0,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "isBest" BOOLEAN NOT NULL DEFAULT false,
    "category" INTEGER NOT NULL DEFAULT 0,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL
);
INSERT INTO "new_ServicesListItem" ("category", "createDate", "desc", "icon", "id", "img", "isBest", "price", "quality", "slug", "stock", "title", "updateDate") SELECT "category", "createDate", "desc", "icon", "id", "img", "isBest", "price", "quality", "slug", "stock", "title", "updateDate" FROM "ServicesListItem";
DROP TABLE "ServicesListItem";
ALTER TABLE "new_ServicesListItem" RENAME TO "ServicesListItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "MetaData_slug_key" ON "MetaData"("slug");
