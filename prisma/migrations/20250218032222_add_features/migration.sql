-- CreateTable
CREATE TABLE "FeatureServicesListItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    "servicesListItemId" INTEGER NOT NULL,
    CONSTRAINT "FeatureServicesListItem_servicesListItemId_fkey" FOREIGN KEY ("servicesListItemId") REFERENCES "ServicesListItem" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
