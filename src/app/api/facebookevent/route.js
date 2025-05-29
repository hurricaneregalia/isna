// src/app/api/facebookevent/route.js
export async function POST(req) {
  const headers = req.headers;
  const referrer = headers.get("referer") || null;
  const userAgent = headers.get("user-agent") || null;

  console.log("📎 Referrer:", referrer);
  console.log("🧭 User-Agent:", userAgent);

  // Lanjutkan dengan kirim ke Facebook API, dll
  return Response.json({ status: "ok" });
}
