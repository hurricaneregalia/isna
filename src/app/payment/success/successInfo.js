import { FormatTanggal } from "@/app/component/global/formatTanggal";
import React from "react";

export default function SuccessInfo({ orderId, layanan, price, date, orderBy }) {
  return (
    <>
      <p>
        <strong>Order ID:</strong> {orderId}
      </p>

      <p>
        <strong>Layanan:</strong> {layanan}
      </p>

      <p>
        <strong>price:</strong> Rp. {price}
      </p>
      <p>
        <strong>date:</strong> {FormatTanggal(date)}
      </p>
      <p>
        <strong>order by:</strong> {orderBy}
      </p>
    </>
  );
}
