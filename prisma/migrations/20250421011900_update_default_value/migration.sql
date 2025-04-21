-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SocialLinks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "platform" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "siteId" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "SocialLinks_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "SiteIdentity" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_SocialLinks" ("id", "platform", "siteId", "url", "userName") SELECT "id", "platform", "siteId", "url", "userName" FROM "SocialLinks";
DROP TABLE "SocialLinks";
ALTER TABLE "new_SocialLinks" RENAME TO "SocialLinks";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
