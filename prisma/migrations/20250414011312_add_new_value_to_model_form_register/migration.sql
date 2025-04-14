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
    "updateDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_RegisterForm" ("id", "name", "placeholder", "row", "type") SELECT "id", "name", "placeholder", "row", "type" FROM "RegisterForm";
DROP TABLE "RegisterForm";
ALTER TABLE "new_RegisterForm" RENAME TO "RegisterForm";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
