import prisma from "@/app/database/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const identity = await prisma.siteIdentity.findFirst({
      include: {
        socialLinks: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!identity) {
      return NextResponse.json({ error: "Site identity not found" }, { status: 404 });
    }

    return NextResponse.json(identity);
  } catch (error) {
    console.error("❌ Failed to fetch site identity (internal):", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
