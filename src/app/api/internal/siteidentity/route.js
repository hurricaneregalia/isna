import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/siteidentity`, {
      headers: {
        Authorization: `Bearer ${process.env.ULTRA_TOKEN}`,
      },
      cache: "no-store", // opsional, jika ingin memaksa fresh data
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch site identity" }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("❌ Internal proxy error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
