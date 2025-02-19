/*
  Warnings:

  - You are about to drop the column `landingPageId` on the `BonusListItem` table. All the data in the column will be lost.
  - You are about to drop the column `landingPageId` on the `InterestListItem` table. All the data in the column will be lost.
  - You are about to drop the column `landingPageId` on the `ServicesListItem` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BonusListItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "icon" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "updateDate" DATETIME NOT NULL
);
INSERT INTO "new_BonusListItem" ("createDate", "icon", "id", "title", "updateDate") SELECT "createDate", "icon", "id", "title", "updateDate" FROM "BonusListItem";
DROP TABLE "BonusListItem";
ALTER TABLE "new_BonusListItem" RENAME TO "BonusListItem";
CREATE TABLE "new_InterestListItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "desc" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL
);
INSERT INTO "new_InterestListItem" ("createDate", "desc", "icon", "id", "title", "updateDate") SELECT "createDate", "desc", "icon", "id", "title", "updateDate" FROM "InterestListItem";
DROP TABLE "InterestListItem";
ALTER TABLE "new_InterestListItem" RENAME TO "InterestListItem";
CREATE TABLE "new_ServicesListItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "desc" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "isBest" BOOLEAN NOT NULL DEFAULT false,
    "category" TEXT NOT NULL DEFAULT '',
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL
);
INSERT INTO "new_ServicesListItem" ("category", "createDate", "desc", "icon", "id", "isBest", "price", "stock", "title", "updateDate") SELECT "category", "createDate", "desc", "icon", "id", "isBest", "price", "stock", "title", "updateDate" FROM "ServicesListItem";
DROP TABLE "ServicesListItem";
ALTER TABLE "new_ServicesListItem" RENAME TO "ServicesListItem";
CREATE TABLE "new_SkillListItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "desc" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    "landingPageId" INTEGER NOT NULL
);
INSERT INTO "new_SkillListItem" ("createDate", "desc", "icon", "id", "landingPageId", "title", "updateDate") SELECT "createDate", "desc", "icon", "id", "landingPageId", "title", "updateDate" FROM "SkillListItem";
DROP TABLE "SkillListItem";
ALTER TABLE "new_SkillListItem" RENAME TO "SkillListItem";
CREATE TABLE "new_SolutionListItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "desc" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    "landingPageId" INTEGER NOT NULL
);
INSERT INTO "new_SolutionListItem" ("createDate", "desc", "icon", "id", "landingPageId", "title", "updateDate") SELECT "createDate", "desc", "icon", "id", "landingPageId", "title", "updateDate" FROM "SolutionListItem";
DROP TABLE "SolutionListItem";
ALTER TABLE "new_SolutionListItem" RENAME TO "SolutionListItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
