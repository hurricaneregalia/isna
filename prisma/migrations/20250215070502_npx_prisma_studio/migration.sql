/*
  Warnings:

  - You are about to drop the column `ctaAltBtnTxt` on the `LandingPage` table. All the data in the column will be lost.
  - You are about to drop the column `ctaAltDesc` on the `LandingPage` table. All the data in the column will be lost.
  - You are about to drop the column `ctaAltImg` on the `LandingPage` table. All the data in the column will be lost.
  - You are about to drop the column `ctaAltTitle` on the `LandingPage` table. All the data in the column will be lost.
  - You are about to drop the column `ctaBuyBtnTxt` on the `LandingPage` table. All the data in the column will be lost.
  - You are about to drop the column `ctaBuyDesc` on the `LandingPage` table. All the data in the column will be lost.
  - You are about to drop the column `ctaBuyImg` on the `LandingPage` table. All the data in the column will be lost.
  - You are about to drop the column `ctaBuyTitle` on the `LandingPage` table. All the data in the column will be lost.
  - You are about to drop the column `ctaServicesBtnTxt` on the `LandingPage` table. All the data in the column will be lost.
  - You are about to drop the column `ctaServicesDesc` on the `LandingPage` table. All the data in the column will be lost.
  - You are about to drop the column `ctaServicesImg` on the `LandingPage` table. All the data in the column will be lost.
  - You are about to drop the column `ctaServicesTitle` on the `LandingPage` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LandingPage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bonusTitle" TEXT NOT NULL,
    "bonusDesc" TEXT NOT NULL,
    "bonusBtnTxt" TEXT NOT NULL,
    "cta1Title" TEXT NOT NULL DEFAULT '',
    "cta1Desc" TEXT NOT NULL DEFAULT '',
    "cta1Img" TEXT NOT NULL DEFAULT '',
    "cta1BtnTxt" TEXT NOT NULL DEFAULT '',
    "cta2Title" TEXT NOT NULL DEFAULT '',
    "cta2Desc" TEXT NOT NULL DEFAULT '',
    "cta2Img" TEXT NOT NULL DEFAULT '',
    "cta2BtnTxt" TEXT NOT NULL DEFAULT '',
    "cta3Title" TEXT NOT NULL DEFAULT '',
    "cta3Desc" TEXT NOT NULL DEFAULT '',
    "cta3Img" TEXT NOT NULL DEFAULT '',
    "cta3BtnTxt" TEXT NOT NULL DEFAULT '',
    "heroBtnTxt" TEXT NOT NULL DEFAULT '',
    "heroDesc" TEXT NOT NULL DEFAULT '',
    "heroImg" TEXT NOT NULL DEFAULT '',
    "heroTitle" TEXT NOT NULL DEFAULT '',
    "interestBtnTxt" TEXT NOT NULL DEFAULT '',
    "interestDesc" TEXT NOT NULL DEFAULT '',
    "interestImg" TEXT NOT NULL DEFAULT '',
    "interestTitle" TEXT NOT NULL DEFAULT '',
    "skillBtnTxt" TEXT NOT NULL DEFAULT '',
    "skillDesc" TEXT NOT NULL DEFAULT '',
    "skillImg" TEXT NOT NULL DEFAULT '',
    "skillTitle" TEXT NOT NULL DEFAULT '',
    "scoreBtnTxt" TEXT NOT NULL DEFAULT '',
    "scoreDesc" TEXT NOT NULL DEFAULT '',
    "scoreImg" TEXT NOT NULL DEFAULT '',
    "scoreTitle" TEXT NOT NULL DEFAULT '',
    "solutionBtnTxt" TEXT NOT NULL DEFAULT '',
    "solutionDesc" TEXT NOT NULL DEFAULT '',
    "solutionImg" TEXT NOT NULL DEFAULT '',
    "solutionTitle" TEXT NOT NULL DEFAULT '',
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL
);
INSERT INTO "new_LandingPage" ("bonusBtnTxt", "bonusDesc", "bonusTitle", "createDate", "heroBtnTxt", "heroDesc", "heroImg", "heroTitle", "id", "interestBtnTxt", "interestDesc", "interestImg", "interestTitle", "scoreBtnTxt", "scoreDesc", "scoreImg", "scoreTitle", "skillBtnTxt", "skillDesc", "skillImg", "skillTitle", "solutionBtnTxt", "solutionDesc", "solutionImg", "solutionTitle", "updateDate") SELECT "bonusBtnTxt", "bonusDesc", "bonusTitle", "createDate", "heroBtnTxt", "heroDesc", "heroImg", "heroTitle", "id", "interestBtnTxt", "interestDesc", "interestImg", "interestTitle", "scoreBtnTxt", "scoreDesc", "scoreImg", "scoreTitle", "skillBtnTxt", "skillDesc", "skillImg", "skillTitle", "solutionBtnTxt", "solutionDesc", "solutionImg", "solutionTitle", "updateDate" FROM "LandingPage";
DROP TABLE "LandingPage";
ALTER TABLE "new_LandingPage" RENAME TO "LandingPage";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
