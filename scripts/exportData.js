// scripts/exportData.js
import prisma from "../src/app/lib/prisma.js";
import { writeFile } from "fs/promises";
import { join } from "path";

// Eksport SiteIdentity
async function exportSiteIdentity() {
  const data = await prisma.siteIdentity.findMany();
  const filePath = join(process.cwd(), "src/app/api/datajs/siteIdentity/data.json");

  await writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
  console.log("✅ Data SiteIdentity berhasil diekspor ke siteIdentity/data.json");
}

// Eksport LandingPage
async function exportLandingPages() {
  const data = await prisma.landingPage.findMany({
    include: {
      lpFor: true,
      lpContentTypes: true,
      lpDesignStyle: true,
      ctas: true,
    },
  });

  const filePath = join(process.cwd(), "src/app/api/datajs/landingpage/data.json");

  await writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
  console.log("✅ Data LandingPage berhasil diekspor ke landingpage/data.json");
}

// Eksport Page
async function exportPages() {
  const data = await prisma.page.findMany({
    include: {
      sections: {
        include: {
          listItems: {
            include: {
              entries: true,
            },
          },
        },
      },
    },
  });

  const filePath = join(process.cwd(), "src/app/api/datajs/page/data.json");

  await writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
  console.log("✅ Data Page berhasil diekspor ke page/data.json");
}
// Ekspor Product
async function exportProducts() {
  const data = await prisma.product.findMany({
    include: {
      category: true,
      tags: true,
      gallery: true,
      benefits: {
        include: {
          benefit: true,
        },
      },
      benefitPoints: true,
      promotions: true,
      vouchers: true,
    },
  });

  const filePath = join(process.cwd(), "src/app/api/datajs/product/data.json");

  await writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
  console.log("✅ Data Product berhasil diekspor ke product/data.json");
}

// Ekspor RegisterForm
async function exportRegisterForms() {
  const data = await prisma.registerForm.findMany();

  const filePath = join(process.cwd(), "src/app/api/datajs/registerform/data.json");

  await writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
  console.log("✅ Data RegisterForm berhasil diekspor ke registerform/data.json");
}

// Ekspor User
async function exportUsers() {
  const data = await prisma.user.findMany({
    include: {
      orders: true,
      accounts: true,
      sessions: true,
      vouchers: true,
      Authenticator: true,
    },
  });

  const filePath = join(process.cwd(), "src/app/api/datajs/user/data.json");

  await writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
  console.log("✅ Data User berhasil diekspor ke user/data.json");
}
// Ekspor Promotions
async function exportPromotions() {
  const data = await prisma.promotion.findMany({
    include: {
      products: true,
    },
  });

  const filePath = join(process.cwd(), "src/app/api/datajs/promo/data.json");

  await writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
  console.log("✅ Data Promotion berhasil diekspor ke promotion/data.json");
}

// Eksekusi semua ekspor
async function main() {
  await exportSiteIdentity();
  await exportLandingPages();
  await exportPages();
  await exportProducts();
  await exportRegisterForms();
  await exportUsers();
  await exportPromotions();
}

main()
  .catch((e) => {
    console.error("❌ Gagal mengekspor data:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
// node scripts/exportData.js
