import prisma from "@/app/database/prisma";
import { NextResponse } from "next/server";

export async function GET(request, props) {
  const params = await props.params;
  const { id } = params;

  try {
    const page = await prisma.page.findUnique({
      where: { id },
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
    });

    if (!page) {
      return NextResponse.json({ error: "Page not found" }, { status: 404 });
    }

    return NextResponse.json(page);
  } catch (error) {
    console.error("❌ Failed to fetch page data:", error);
    return NextResponse.json({ error: "Failed to fetch page data" }, { status: 500 });
  }
}
