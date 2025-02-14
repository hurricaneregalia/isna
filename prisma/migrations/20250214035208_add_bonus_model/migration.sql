-- CreateTable
CREATE TABLE "BonusListItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    "landingPageId" TEXT NOT NULL,
    CONSTRAINT "BonusListItem_landingPageId_fkey" FOREIGN KEY ("landingPageId") REFERENCES "LandingPage" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LandingPage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bonusTitle" TEXT NOT NULL,
    "bonusDesc" TEXT NOT NULL,
    "bonusBtnTxt" TEXT NOT NULL,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL
);
