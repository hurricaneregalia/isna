export async function POST(request) {
  const body = await request.json();
  console.log("📦 Callback dari Midtrans:", body);

  // Di sini kamu bisa update database sesuai status pembayaran
  return new Response("OK", { status: 200 });
}
