import prisma from "@/app/database/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
        tags: true,
        gallery: {
          orderBy: { order: "asc" },
        },
        benefits: {
          include: {
            benefit: true,
          },
        },
        benefitPoints: {
          orderBy: { order: "asc" },
        },
        promotions: true,
        vouchers: true,
        orders: true,
      },
    });

    return NextResponse.json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch products", error }, { status: 500 });
  }
}
