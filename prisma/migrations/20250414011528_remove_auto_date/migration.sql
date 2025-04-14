-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RegisterForm" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "placeholder" TEXT NOT NULL,
    "row" INTEGER NOT NULL DEFAULT 0,
    "options" TEXT,
    "required" BOOLEAN NOT NULL DEFAULT false,
    "hint" TEXT,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL
);
INSERT INTO "new_RegisterForm" ("createDate", "hint", "id", "name", "options", "placeholder", "required", "row", "type", "updateDate") SELECT "createDate", "hint", "id", "name", "options", "placeholder", "required", "row", "type", "updateDate" FROM "RegisterForm";
DROP TABLE "RegisterForm";
ALTER TABLE "new_RegisterForm" RENAME TO "RegisterForm";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
