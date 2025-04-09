-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BonusListItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "icon" TEXT NOT NULL,
    "img" TEXT NOT NULL DEFAULT '',
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL DEFAULT '',
    "price" REAL NOT NULL DEFAULT 0,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL
);
INSERT INTO "new_BonusListItem" ("createDate", "desc", "icon", "id", "price", "title", "updateDate") SELECT "createDate", "desc", "icon", "id", "price", "title", "updateDate" FROM "BonusListItem";
DROP TABLE "BonusListItem";
ALTER TABLE "new_BonusListItem" RENAME TO "BonusListItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
