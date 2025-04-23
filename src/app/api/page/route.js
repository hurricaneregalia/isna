import prisma from "@/app/database/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const pages = await prisma.page.findMany({
      include: {
        sections: {
          orderBy: { order: "asc" },
          include: {
            listItems: {
              include: {
                entries: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return NextResponse.json(pages);
  } catch (error) {
    console.error("❌ Failed to fetch page data:", error);
    return NextResponse.json({ error: "Failed to fetch page data" }, { status: 500 });
  }
}
