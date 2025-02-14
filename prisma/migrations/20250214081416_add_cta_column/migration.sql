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
    "ctaBuyTitle" TEXT NOT NULL DEFAULT '',
    "ctaBuyDesc" TEXT NOT NULL DEFAULT '',
    "ctaBuyImg" TEXT NOT NULL DEFAULT '',
    "ctaAltTitle" TEXT NOT NULL DEFAULT '',
    "ctaAltDesc" TEXT NOT NULL DEFAULT '',
    "ctaAltImg" TEXT NOT NULL DEFAULT '',
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL
);
INSERT INTO "new_LandingPage" ("bonusBtnTxt", "bonusDesc", "bonusTitle", "createDate", "id", "updateDate") SELECT "bonusBtnTxt", "bonusDesc", "bonusTitle", "createDate", "id", "updateDate" FROM "LandingPage";
DROP TABLE "LandingPage";
ALTER TABLE "new_LandingPage" RENAME TO "LandingPage";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
