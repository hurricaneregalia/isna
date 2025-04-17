"use client";
import { useSearchParams } from "next/navigation";

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id");
  const status = searchParams.get("transaction_status");

  return (
    <div>
      <h1>🎉 Pembayaran Berhasil!</h1>
      <p>Order ID: {orderId}</p>
      <p>Status: {status}</p>
    </div>
  );
}
