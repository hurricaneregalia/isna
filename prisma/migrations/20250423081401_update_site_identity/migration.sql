-- AlterTable
ALTER TABLE "SiteIdentity" ADD COLUMN "description" TEXT;
ALTER TABLE "SiteIdentity" ADD COLUMN "keywords" JSONB;
ALTER TABLE "SiteIdentity" ADD COLUMN "ogImage" TEXT;
