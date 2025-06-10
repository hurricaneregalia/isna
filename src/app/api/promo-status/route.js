import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "src/app/api/datajs/promo/data.json");
    const file = await fs.readFile(filePath, "utf-8");
    const promo = JSON.parse(file)?.[0];

    const now = new Date();
    const isPromoActive = promo && promo.isActive === true && new Date(promo.startDate) <= now && new Date(promo.endDate) > now;

    return NextResponse.json({ isActive: isPromoActive });
  } catch (error) {
    console.error("❌ Gagal membaca promo:", error.message);
    return NextResponse.json({ isActive: false });
  }
}
