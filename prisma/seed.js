// addSeedData.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function addSeedData() {
  try {
    const data = [
      {
        description: "Menjual produk secara langsung.",
      },
      {
        description: "Menjual jasa secara langsung.",
      },
      {
        description: "Mengajak pengunjung untuk mendaftar kursus.",
      },
      {
        description: "Mengajak pengunjung untuk mendaftar acara.",
      },
      {
        description: "Mengumpulkan informasi pengunjung untuk prospek.",
      },
      {
        description: "Mendorong pengunjung untuk donwload aplikasi.",
      },
      {
        description: "Meningkatkan pemesanan atau reservasi kamar.",
      },
    ];

    const result = await prisma.lpFor.createMany({
      data: data,
    });

    console.log(`${result.count} design styles added successfully!`);
  } catch (error) {
    console.error("Error adding design styles:", error);
  } finally {
    await prisma.$disconnect();
  }
}

addSeedData();
