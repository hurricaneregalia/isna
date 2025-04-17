import midtransClient from "midtrans-client";

export async function POST(request) {
  const snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
  });

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: "Invalid request body" }), { status: 400 });
  }

  const parameter = {
    transaction_details: body.transaction_details,
    item_details: body.item_details,
    customer_details: body.customer_details,
    credit_card: {
      secure: true,
    },
    finish_redirect_url: body.finish_redirect_url,
  };

  try {
    const transaction = await snap.createTransaction(parameter);
    return Response.json({ token: transaction.token });
  } catch (error) {
    console.error("Midtrans error detail:", error.response?.data || error.message || error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
