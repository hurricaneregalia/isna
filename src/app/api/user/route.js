import myPrisma from "@/app/lib/myPrisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await myPrisma.user.findMany({
      include: {
        orders: {
          include: {
            products: true,
            voucher: true,
          },
        },
        vouchers: {
          include: {
            voucher: true,
          },
        },
        accounts: true,
        sessions: true,
      },
    });

    return NextResponse.json({
      success: true,
      data: users,
    });
  } catch (error) {
    console.error("❌ Error fetching users:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch users", error }, { status: 500 });
  }
}
