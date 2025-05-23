-- CreateTable
CREATE TABLE "LandingPage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "lpDesignStyleId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "LandingPage_lpDesignStyleId_fkey" FOREIGN KEY ("lpDesignStyleId") REFERENCES "LpDesignStyle" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LpFor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    CONSTRAINT "LpFor_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "LandingPage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LpFeature" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    CONSTRAINT "LpFeature_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "LandingPage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LpBenefit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    CONSTRAINT "LpBenefit_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "LandingPage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LpContentType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    CONSTRAINT "LpContentType_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "LandingPage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LpDesignStyle" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "LandingPage_slug_key" ON "LandingPage"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "LpDesignStyle_name_key" ON "LpDesignStyle"("name");
