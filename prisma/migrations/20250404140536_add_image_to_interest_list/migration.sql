-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_InterestListItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "icon" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "img" TEXT NOT NULL DEFAULT '',
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL
);
INSERT INTO "new_InterestListItem" ("createDate", "desc", "icon", "id", "title", "updateDate") SELECT "createDate", "desc", "icon", "id", "title", "updateDate" FROM "InterestListItem";
DROP TABLE "InterestListItem";
ALTER TABLE "new_InterestListItem" RENAME TO "InterestListItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
