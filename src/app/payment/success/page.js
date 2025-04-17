"use client";
import { useSearchParams } from "next/navigation";

export default function PaymentSuccessPage() {
  const params = useSearchParams();
  const orderId = params.get("order_id");
  const status = params.get("transaction_status");
  const statusCode = params.get("status_code");

  return (
    <div className="p-2">
      <h1>✅ Pembayaran Berhasil!</h1>
      <p>
        <strong>Order ID:</strong> {orderId}
      </p>
      <p>
        <strong>Status:</strong> {status}
      </p>
      <p>
        <strong>Status Code:</strong> {statusCode}
      </p>
      <p>Terima kasih! Transaksi kamu berhasil diproses.</p>
    </div>
  );
}
