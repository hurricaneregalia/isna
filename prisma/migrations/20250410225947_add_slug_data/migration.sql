-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ServicesListItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "desc" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL DEFAULT '',
    "price" REAL NOT NULL,
    "quality" INTEGER NOT NULL DEFAULT 0,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "isBest" BOOLEAN NOT NULL DEFAULT false,
    "category" TEXT NOT NULL DEFAULT '',
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL
);
INSERT INTO "new_ServicesListItem" ("category", "createDate", "desc", "icon", "id", "isBest", "price", "quality", "stock", "title", "updateDate") SELECT "category", "createDate", "desc", "icon", "id", "isBest", "price", "quality", "stock", "title", "updateDate" FROM "ServicesListItem";
DROP TABLE "ServicesListItem";
ALTER TABLE "new_ServicesListItem" RENAME TO "ServicesListItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
