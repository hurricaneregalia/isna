// src/app/api/prismapromo/route.js
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const promotions = await prisma.promotion.findMany({
      include: {
        products: true, // hilangkan jika tidak ingin relasi produk
      },
    });

    return NextResponse.json(promotions);
  } catch (error) {
    console.error("Error fetching promotions:", error);
    return NextResponse.json({ error: "Gagal mengambil data promo" }, { status: 500 });
  }
}
