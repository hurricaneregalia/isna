import prisma from "@/app/database/prisma";

export async function GET(request) {
  try {
    const servicesListItems = await prisma.servicesListItem.findMany();
    const metaData = await prisma.metaData.findMany();

    const responseData = {
      servicesListItems,
      metaData,
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
