import prisma from "@/app/database/prisma";

export async function GET(request) {
  try {
    const product = await prisma.product.findMany();
    const category = await prisma.category.findMany();

    const responseData = {
      product,
      category,
    };

    // Mengembalikan data dalam format JSON dengan pretty-print
    return new Response(JSON.stringify(responseData, null, 2), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", {
      status: 500,
    });
  }
}
