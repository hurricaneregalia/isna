// src/app/api/landingpage/route.js
import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

// Handler untuk GET request
export async function GET() {
  try {
    const landingPages = await prisma.landingPage.findMany({
      where: {
        isActive: true, // Filter untuk hanya mengambil landing page yang aktif
      },
      include: {
        lpFor: true,
        lpContentTypes: true,
        lpDesignStyle: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(landingPages, { status: 200 });
  } catch (error) {
    console.error("Error fetching landing pages:", error);
    return NextResponse.json({ error: "Failed to fetch landing pages" }, { status: 500 });
  }
}
