import midtransClient from "midtrans-client";

const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
});

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const orderId = searchParams.get("order_id");

  if (!orderId) {
    return new Response(JSON.stringify({ error: "Order ID is required" }), { status: 400 });
  }

  try {
    const statusResponse = await snap.transaction.status(orderId);
    return Response.json(statusResponse);
  } catch (error) {
    console.error("Midtrans status error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function POST(request) {
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
