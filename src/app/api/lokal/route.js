import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    // Ambil data dari model LandingPage beserta relasi yang relevan
    const landingPages = await prisma.landingPage.findMany({
      include: {
        bonusListItems: true,
        interestListItems: true,
        skillListItems: true,
        solutionListItems: true,
      },
    });

    // Mengembalikan response dengan status 200 dan data dengan pretty print
    return new Response(
      JSON.stringify(landingPages, null, 2), // null untuk menggunakan default replacer, 2 untuk indentasi
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
