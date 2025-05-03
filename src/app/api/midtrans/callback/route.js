export async function POST(request) {
  const body = await request.json();

  // Di sini kamu bisa update database sesuai status pembayaran
  return new Response("OK", { status: 200 });
}
