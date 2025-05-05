import prisma from "@/app/database/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // ✅ Validasi token terlebih dahulu
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized - token missing" }, { status: 401 });
    }

    const token = authHeader.replace("Bearer ", "").trim();
    if (token !== process.env.ULTRA_TOKEN) {
      return NextResponse.json({ error: "Unauthorized - token invalid" }, { status: 401 });
    }

    // ✅ Akses database hanya jika token valid
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
