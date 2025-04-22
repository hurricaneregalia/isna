import { PrismaClient } from "@prisma/client";
import fs from "fs";

const prisma = new PrismaClient();

// Fungsi untuk menghasilkan slug yang unik
async function generateUniqueSlug(slug) {
  let uniqueSlug = slug;
  let count = 1;

  while (await prisma.product.findUnique({ where: { slug: uniqueSlug } })) {
    uniqueSlug = `${slug}-${count}`;
    count++;
  }

  return uniqueSlug;
}

async function importData() {
  const rawData = fs.readFileSync("./exportImportData/product.json", "utf-8");
  const data = JSON.parse(rawData);

  try {
    for (const product of data.product) {
      const productSlug = await generateUniqueSlug(product.slug);

      await prisma.product.upsert({
        where: { id: product.id },
        update: {
          sku: product.sku,
          name: product.name,
          slug: productSlug,
          description: product.description,
          image: product.image,
          gallery: product.gallery,
          price: product.price,
          inStock: product.inStock,
          status: product.status,
          categoryId: product.categoryId,
          keywords: product.keywords,
          quality: product.quality,
          isBest: product.isBest,
          updatedAt: new Date(),
        },
        create: {
          id: product.id,
          sku: product.sku,
          name: product.name,
          slug: productSlug,
          description: product.description,
          image: product.image,
          gallery: product.gallery,
          price: product.price,
          inStock: product.inStock,
          status: product.status,
          categoryId: product.categoryId,
          keywords: product.keywords,
          quality: product.quality,
          isBest: product.isBest,
          createdAt: new Date(product.createdAt),
          updatedAt: new Date(product.updatedAt),
        },
      });
    }

    console.log("Data berhasil diimpor!");
  } catch (error) {
    console.error("Terjadi kesalahan saat mengimpor data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

importData();
