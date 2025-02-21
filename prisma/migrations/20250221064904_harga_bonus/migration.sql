-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LandingPage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bonusBtnTxt" TEXT NOT NULL DEFAULT '',
    "bonusCounter" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "bonusDesc" TEXT NOT NULL DEFAULT '',
    "bonusPrice" REAL NOT NULL DEFAULT 0,
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
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
