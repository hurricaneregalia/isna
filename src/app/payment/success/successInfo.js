import React from "react";

export default function SuccessInfo({ orderId, grossAmount, layanan }) {
  return (
    <>
      <p>
        <strong>Order ID:</strong> {orderId}
      </p>

      <p>
        <strong>Layanan:</strong> {layanan}
      </p>
      <p>
        <strong>Jumlah Bayar:</strong> Rp{grossAmount}
      </p>
    </>
  );
}
