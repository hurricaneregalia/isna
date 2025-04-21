/*
  Warnings:

  - You are about to drop the `SiteIdentity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SocialLinks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "SiteIdentity";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "SocialLinks";
PRAGMA foreign_keys=on;
