-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_HadistListItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "noHadist" INTEGER NOT NULL DEFAULT 0,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL DEFAULT '',
    "sanad" TEXT NOT NULL DEFAULT '',
    "category" TEXT NOT NULL DEFAULT '',
    "quotes" TEXT NOT NULL DEFAULT '',
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL
);
INSERT INTO "new_HadistListItem" ("category", "createDate", "desc", "id", "noHadist", "sanad", "title", "updateDate") SELECT "category", "createDate", "desc", "id", "noHadist", "sanad", "title", "updateDate" FROM "HadistListItem";
DROP TABLE "HadistListItem";
ALTER TABLE "new_HadistListItem" RENAME TO "HadistListItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
