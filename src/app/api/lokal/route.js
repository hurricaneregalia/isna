import prisma from "@/app/database/prisma";

export async function GET(request) {
  try {
    const landingPage = await prisma.landingPage.findMany();
    const users = await prisma.users.findMany();
    const bonusListItems = await prisma.bonusListItem.findMany();
    const interestListItems = await prisma.interestListItem.findMany();
    const skillListItems = await prisma.skillListItem.findMany();
    const solutionListItems = await prisma.solutionListItem.findMany();
    const featureServicesListItems = await prisma.featureServicesListItem.findMany();
    const servicesListItems = await prisma.servicesListItem.findMany();
    const servicesCategories = await prisma.servicesCategory.findMany();
    const siteIdentities = await prisma.siteIdentity.findMany();
    const hadistListItem = await prisma.hadistListItem.findMany();
    const benefitListItem = await prisma.benefitListItem.findMany();

    const responseData = {
      landingPage,
      users,
      bonusListItems,
      interestListItems,
      skillListItems,
      solutionListItems,
      featureServicesListItems,
      servicesListItems,
      servicesCategories,
      siteIdentities,
      hadistListItem,
      benefitListItem,
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
