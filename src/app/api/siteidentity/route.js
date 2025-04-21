import prisma from "@/app/database/prisma";

export async function GET(request) {
  try {
    const siteIdentities = await prisma.siteIdentity.findMany();
    const socialLinks = await prisma.socialLinks.findMany();

    const responseData = {
      siteIdentities,
      socialLinks,
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
