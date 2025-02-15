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
    "solutionDesc" TEXT NOT NULL DEFAULT 'Solusinya Anda harus membuat copywriting yang tepat sasaran. Copywriting harus dibuat berdasarkan analisa produk dan Analisa target pasar yang akurat, kombo tersebut akan menjadi senjata penawaran yang sangat kuat. Copywriting yang dibuat akan menggambarkan nilai produk Anda secara detail, mendalam dan sesuai dengan keinginan target pasar.',
    "solutionImg" TEXT NOT NULL DEFAULT '/images/landingPage/LPlakiLakiBatik.webp',
    "solutionTitle" TEXT NOT NULL DEFAULT 'Solusi tepat untuk meningkatkan penjualan.',
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL
);
INSERT INTO "new_LandingPage" ("bonusBtnTxt", "bonusDesc", "bonusTitle", "createDate", "cta1BtnTxt", "cta1Desc", "cta1Img", "cta1Title", "cta2BtnTxt", "cta2Desc", "cta2Img", "cta2Title", "cta3BtnTxt", "cta3Desc", "cta3Img", "cta3Title", "heroBtnTxt", "heroDesc", "heroImg", "heroTitle", "id", "interestBtnTxt", "interestDesc", "interestImg", "interestTitle", "scoreBtnTxt", "scoreDesc", "scoreImg", "scoreTitle", "skillBtnTxt", "skillDesc", "skillImg", "skillTitle", "solutionBtnTxt", "solutionDesc", "solutionImg", "solutionTitle", "updateDate") SELECT "bonusBtnTxt", "bonusDesc", "bonusTitle", "createDate", "cta1BtnTxt", "cta1Desc", "cta1Img", "cta1Title", "cta2BtnTxt", "cta2Desc", "cta2Img", "cta2Title", "cta3BtnTxt", "cta3Desc", "cta3Img", "cta3Title", "heroBtnTxt", "heroDesc", "heroImg", "heroTitle", "id", "interestBtnTxt", "interestDesc", "interestImg", "interestTitle", "scoreBtnTxt", "scoreDesc", "scoreImg", "scoreTitle", "skillBtnTxt", "skillDesc", "skillImg", "skillTitle", "solutionBtnTxt", "solutionDesc", "solutionImg", "solutionTitle", "updateDate" FROM "LandingPage";
DROP TABLE "LandingPage";
ALTER TABLE "new_LandingPage" RENAME TO "LandingPage";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
