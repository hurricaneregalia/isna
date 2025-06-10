// middleware.js
import { NextResponse } from "next/server";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Cek hanya URL yang mengarah ke /bonus atau turunannya
  if (pathname.startsWith("/bonus")) {
    try {
      const res = await fetch(`${request.nextUrl.origin}/api/promo-status`, {
        // Agar tidak menggunakan cache
        headers: {
          "cache-control": "no-cache",
        },
      });

      const data = await res.json();

      if (!data.isActive) {
        const url = request.nextUrl.clone();
        url.pathname = "/redirected";
        url.searchParams.set("reason", "expired");
        return NextResponse.redirect(url);
      }
    } catch (e) {
      console.error("❌ Middleware fetch error:", e.message);

      const url = request.nextUrl.clone();
      url.pathname = "/redirected";
      url.searchParams.set("reason", "expired");
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/bonus/:path*", "/bonus"], // Tangani semua path /bonus dan turunannya
};
