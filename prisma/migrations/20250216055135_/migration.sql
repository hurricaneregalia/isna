/*
  Warnings:

  - You are about to alter the column `landingPageId` on the `BonusListItem` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `landingPageId` on the `InterestListItem` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `LandingPage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `LandingPage` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `landingPageId` on the `ServicesListItem` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `landingPageId` on the `SkillListItem` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `landingPageId` on the `SolutionListItem` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BonusListItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "icon" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "updateDate" DATETIME NOT NULL,
    "landingPageId" INTEGER NOT NULL,
    CONSTRAINT "BonusListItem_landingPageId_fkey" FOREIGN KEY ("landingPageId") REFERENCES "LandingPage" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_BonusListItem" ("createDate", "icon", "id", "landingPageId", "title", "updateDate") SELECT "createDate", "icon", "id", "landingPageId", "title", "updateDate" FROM "BonusListItem";
DROP TABLE "BonusListItem";
ALTER TABLE "new_BonusListItem" RENAME TO "BonusListItem";
CREATE TABLE "new_InterestListItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "desc" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    "landingPageId" INTEGER NOT NULL,
    CONSTRAINT "InterestListItem_landingPageId_fkey" FOREIGN KEY ("landingPageId") REFERENCES "LandingPage" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_InterestListItem" ("createDate", "desc", "icon", "id", "landingPageId", "title", "updateDate") SELECT "createDate", "desc", "icon", "id", "landingPageId", "title", "updateDate" FROM "InterestListItem";
DROP TABLE "InterestListItem";
ALTER TABLE "new_InterestListItem" RENAME TO "InterestListItem";
CREATE TABLE "new_LandingPage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bonusBtnTxt" TEXT NOT NULL DEFAULT '',
    "bonusDesc" TEXT NOT NULL DEFAULT '',
    "bonusTitle" TEXT NOT NULL,
    "cta1BtnTxt" TEXT NOT NULL DEFAULT '',
    "cta1Desc" TEXT NOT NULL DEFAULT '',
    "cta1Img" TEXT NOT NULL DEFAULT '',
    "cta1Title" TEXT NOT NULL DEFAULT '',
    "cta2BtnTxt" TEXT NOT NULL DEFAULT '',
    "cta2Desc" TEXT NOT NULL DEFAULT '',
    "cta2Img" TEXT NOT NULL DEFAULT '',
    "cta2Title" TEXT NOT NULL DEFAULT '',
    "cta3BtnTxt" TEXT NOT NULL DEFAULT '',
    "cta3Desc" TEXT NOT NULL DEFAULT '',
    "cta3Img" TEXT NOT NULL DEFAULT '',
    "cta3Title" TEXT NOT NULL DEFAULT '',
    "heroBtnTxt" TEXT NOT NULL DEFAULT '',
    "heroDesc" TEXT NOT NULL DEFAULT '',
    "heroImg" TEXT NOT NULL DEFAULT '',
    "heroTitle" TEXT NOT NULL DEFAULT '',
    "interestBtnTxt" TEXT NOT NULL DEFAULT '',
    "interestDesc" TEXT NOT NULL DEFAULT '',
    "interestImg" TEXT NOT NULL DEFAULT '',
    "interestTitle" TEXT NOT NULL DEFAULT '',
    "scoreBtnTxt" TEXT NOT NULL DEFAULT '',
    "scoreDesc" TEXT NOT NULL DEFAULT '',
    "scoreImg" TEXT NOT NULL DEFAULT '',
    "scoreTitle" TEXT NOT NULL DEFAULT '',
    "servicesBtnTxt" TEXT NOT NULL DEFAULT '',
    "servicesDesc" TEXT NOT NULL DEFAULT '',
    "servicesImg" TEXT NOT NULL DEFAULT '',
    "servicesTitle" TEXT NOT NULL DEFAULT '',
    "skillBtnTxt" TEXT NOT NULL DEFAULT '',
    "skillDesc" TEXT NOT NULL DEFAULT '',
    "skillImg" TEXT NOT NULL DEFAULT '',
    "skillTitle" TEXT NOT NULL DEFAULT '',
    "solutionBtnTxt" TEXT NOT NULL DEFAULT '',
    "solutionDesc" TEXT NOT NULL DEFAULT '',
    "solutionImg" TEXT NOT NULL DEFAULT '',
    "solutionTitle" TEXT NOT NULL DEFAULT '',
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL
);
INSERT INTO "new_LandingPage" ("bonusBtnTxt", "bonusDesc", "bonusTitle", "createDate", "cta1BtnTxt", "cta1Desc", "cta1Img", "cta1Title", "cta2BtnTxt", "cta2Desc", "cta2Img", "cta2Title", "cta3BtnTxt", "cta3Desc", "cta3Img", "cta3Title", "heroBtnTxt", "heroDesc", "heroImg", "heroTitle", "id", "interestBtnTxt", "interestDesc", "interestImg", "interestTitle", "scoreBtnTxt", "scoreDesc", "scoreImg", "scoreTitle", "servicesBtnTxt", "servicesDesc", "servicesImg", "servicesTitle", "skillBtnTxt", "skillDesc", "skillImg", "skillTitle", "solutionBtnTxt", "solutionDesc", "solutionImg", "solutionTitle", "updateDate") SELECT "bonusBtnTxt", "bonusDesc", "bonusTitle", "createDate", "cta1BtnTxt", "cta1Desc", "cta1Img", "cta1Title", "cta2BtnTxt", "cta2Desc", "cta2Img", "cta2Title", "cta3BtnTxt", "cta3Desc", "cta3Img", "cta3Title", "heroBtnTxt", "heroDesc", "heroImg", "heroTitle", "id", "interestBtnTxt", "interestDesc", "interestImg", "interestTitle", "scoreBtnTxt", "scoreDesc", "scoreImg", "scoreTitle", "servicesBtnTxt", "servicesDesc", "servicesImg", "servicesTitle", "skillBtnTxt", "skillDesc", "skillImg", "skillTitle", "solutionBtnTxt", "solutionDesc", "solutionImg", "solutionTitle", "updateDate" FROM "LandingPage";
DROP TABLE "LandingPage";
ALTER TABLE "new_LandingPage" RENAME TO "LandingPage";
CREATE TABLE "new_ServicesListItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "isBest" BOOLEAN NOT NULL,
    "title" TEXT NOT NULL,
    "price" BIGINT NOT NULL,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    "landingPageId" INTEGER NOT NULL,
    CONSTRAINT "ServicesListItem_landingPageId_fkey" FOREIGN KEY ("landingPageId") REFERENCES "LandingPage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ServicesListItem" ("createDate", "description", "icon", "id", "isBest", "landingPageId", "price", "title", "updateDate") SELECT "createDate", "description", "icon", "id", "isBest", "landingPageId", "price", "title", "updateDate" FROM "ServicesListItem";
DROP TABLE "ServicesListItem";
ALTER TABLE "new_ServicesListItem" RENAME TO "ServicesListItem";
CREATE TABLE "new_SkillListItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "desc" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    "landingPageId" INTEGER NOT NULL,
    CONSTRAINT "SkillListItem_landingPageId_fkey" FOREIGN KEY ("landingPageId") REFERENCES "LandingPage" ("id") ON DELETE CASCADE ON UPDATE CASCADE
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
    "landingPageId" INTEGER NOT NULL,
    CONSTRAINT "SolutionListItem_landingPageId_fkey" FOREIGN KEY ("landingPageId") REFERENCES "LandingPage" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_SolutionListItem" ("createDate", "desc", "icon", "id", "landingPageId", "title", "updateDate") SELECT "createDate", "desc", "icon", "id", "landingPageId", "title", "updateDate" FROM "SolutionListItem";
DROP TABLE "SolutionListItem";
ALTER TABLE "new_SolutionListItem" RENAME TO "SolutionListItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
