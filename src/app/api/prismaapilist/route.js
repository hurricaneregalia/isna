import prisma from "@/app/lib/prisma";

export async function GET(request) {
  try {
    const apilists = await prisma.apiList.findMany();

    const responseData = {
      apilists,
    };

    return new Response(JSON.stringify(responseData), {
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
