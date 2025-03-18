-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_HadistListItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "icon" TEXT NOT NULL,
    "desc" TEXT NOT NULL DEFAULT '',
    "sanad" TEXT NOT NULL DEFAULT '',
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL DEFAULT '',
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL
);
INSERT INTO "new_HadistListItem" ("createDate", "desc", "icon", "id", "title", "updateDate") SELECT "createDate", "desc", "icon", "id", "title", "updateDate" FROM "HadistListItem";
DROP TABLE "HadistListItem";
ALTER TABLE "new_HadistListItem" RENAME TO "HadistListItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
