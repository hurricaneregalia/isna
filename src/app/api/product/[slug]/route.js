import { NextResponse } from "next/server";
import prisma from "@/app/database/prisma";

export async function GET(req, { params }) {
  const { slug } = params;

  try {
    const product = await prisma.product.findUnique({
      where: { slug },
      include: {
        category: true,
        tags: true,
        gallery: true,
        benefits: {
          include: {
            benefit: true,
          },
        },
        benefitPoints: true,
        promotions: true,
        vouchers: true,
      },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("❌ Failed to fetch product:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
