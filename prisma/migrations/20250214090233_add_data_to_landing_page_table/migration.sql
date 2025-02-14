-- CreateTable
CREATE TABLE "InterestListItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    "landingPageId" TEXT NOT NULL,
    CONSTRAINT "InterestListItem_landingPageId_fkey" FOREIGN KEY ("landingPageId") REFERENCES "LandingPage" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SkillListItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    "landingPageId" TEXT NOT NULL,
    CONSTRAINT "SkillListItem_landingPageId_fkey" FOREIGN KEY ("landingPageId") REFERENCES "LandingPage" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SolutionListItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    "landingPageId" TEXT NOT NULL,
    CONSTRAINT "SolutionListItem_landingPageId_fkey" FOREIGN KEY ("landingPageId") REFERENCES "LandingPage" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LandingPage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bonusTitle" TEXT NOT NULL,
    "bonusDesc" TEXT NOT NULL,
    "bonusBtnTxt" TEXT NOT NULL,
    "ctaServicesTitle" TEXT NOT NULL DEFAULT '',
    "ctaServicesDesc" TEXT NOT NULL DEFAULT '',
    "ctaServicesImg" TEXT NOT NULL DEFAULT '',
    "ctaServicesBtnTxt" TEXT NOT NULL DEFAULT '',
    "ctaBuyTitle" TEXT NOT NULL DEFAULT '',
    "ctaBuyDesc" TEXT NOT NULL DEFAULT '',
    "ctaBuyImg" TEXT NOT NULL DEFAULT '',
    "ctaBuyBtnTxt" TEXT NOT NULL DEFAULT '',
    "ctaAltTitle" TEXT NOT NULL DEFAULT '',
    "ctaAltDesc" TEXT NOT NULL DEFAULT '',
    "ctaAltImg" TEXT NOT NULL DEFAULT '',
    "ctaAltBtnTxt" TEXT NOT NULL DEFAULT '',
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
INSERT INTO "new_LandingPage" ("bonusBtnTxt", "bonusDesc", "bonusTitle", "createDate", "ctaAltBtnTxt", "ctaAltDesc", "ctaAltImg", "ctaAltTitle", "ctaBuyBtnTxt", "ctaBuyDesc", "ctaBuyImg", "ctaBuyTitle", "ctaServicesBtnTxt", "ctaServicesDesc", "ctaServicesImg", "ctaServicesTitle", "id", "updateDate") SELECT "bonusBtnTxt", "bonusDesc", "bonusTitle", "createDate", "ctaAltBtnTxt", "ctaAltDesc", "ctaAltImg", "ctaAltTitle", "ctaBuyBtnTxt", "ctaBuyDesc", "ctaBuyImg", "ctaBuyTitle", "ctaServicesBtnTxt", "ctaServicesDesc", "ctaServicesImg", "ctaServicesTitle", "id", "updateDate" FROM "LandingPage";
DROP TABLE "LandingPage";
ALTER TABLE "new_LandingPage" RENAME TO "LandingPage";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
