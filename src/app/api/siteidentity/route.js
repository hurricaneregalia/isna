import prisma from "@/app/database/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  // Ambil Authorization header
  const authHeader = request.headers.get("authorization");
  const token = authHeader?.replace("Bearer ", "");

  // Validasi token
  if (token !== process.env.ULTRA_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

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
    console.error("❌ Error fetching site identity:", error);
    return NextResponse.json({ error: "Failed to fetch site identity" }, { status: 500 });
  }
}
