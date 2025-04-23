-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SocialLinks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "platform" TEXT,
    "url" TEXT,
    "platformUsername" TEXT,
    "identityId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SocialLinks_identityId_fkey" FOREIGN KEY ("identityId") REFERENCES "SiteIdentity" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_SocialLinks" ("createdAt", "id", "identityId", "platform", "platformUsername", "updatedAt", "url") SELECT "createdAt", "id", "identityId", "platform", "platformUsername", "updatedAt", "url" FROM "SocialLinks";
DROP TABLE "SocialLinks";
ALTER TABLE "new_SocialLinks" RENAME TO "SocialLinks";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
