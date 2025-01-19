import { NextResponse } from "next/server";

export function middleware(request) {
  const response = NextResponse.next();

  // Cache-Control headers
  response.headers.set("Cache-Control", "public, max-age=31536000, immutable");

  return response;
}

export const config = {
  matcher: ["/static/:path*", "/_next/static/:path*", "/images/:path*"],
};
