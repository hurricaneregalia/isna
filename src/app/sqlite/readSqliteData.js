import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const fetchLandingPage = async () => {
  try {
    const landingPage = await prisma.landingPage.findMany(); // Mengambil semua data dari model Page
    if (landingPage.length === 0) {
      return {}; // Jika tidak ada data
    }
    return landingPage; // Mengembalikan data yang ditemukan
  } catch (error) {
    console.error("Error fetching pages:", error);
    throw error; // Lempar ulang error jika terjadi
  }
};
