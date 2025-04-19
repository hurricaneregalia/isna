"use client";
import LinkAuto from "@/app/component/global/linkAuto";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SuccessInfo from "./successInfo";
import WhatsappBtn from "@/app/component/global/whatsappBtn";

export default function PaymentSuccessPage() {
  const params = useSearchParams();
  const [urlWithoutLongTime, setUrlWithoutLongTime] = useState("");

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const orderId = params.get("order_id");
  const grossAmount = params.get("gross_amount");
  const layanan = params.get("layanan");
  const desc = params.get("desc");
  const waNumber = params.get("waNumber");
  const longTime = params.get("longTime");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    // Hapus longTime dari URL
    query.delete("longTime");
    query.delete("desc");
    query.delete("waNumber");

    // Bangun ulang URL tanpa longTime
    const finalUrl = `${window.location.origin}${window.location.pathname}?${query.toString()}`;
    setUrlWithoutLongTime(finalUrl);
  }, []);

  return (
    <div className="p-4 max-w-xl mx-auto bg-white shadow rounded-md">
      <h1 className={`text-xl font-bold ${longTime ? null : "text-green-600"} mb-4`}>
        {longTime ? "Pembayaran sedang diproses" : "✅ Pembayaran Berhasil!"}
      </h1>
      {longTime ? null : <SuccessInfo orderId={orderId} grossAmount={grossAmount.toLocaleString("id-ID")} layanan={layanan} />}
      {urlWithoutLongTime !== "" ? (
        <WhatsappBtn waText={desc + " " + urlWithoutLongTime} waBtnText="kirim" waNumber={waNumber} btnCenter={true} isInternalLink={false} />
      ) : (
        <p>Loading tombol WhatsApp...</p>
      )}

      {longTime ? <p>long time: {longTime}</p> : null}
      <p className="mt-4 text-sm text-gray-600">Terima kasih! Transaksi kamu berhasil diproses.</p>

      <a href={desc} className="text-blue-600 underline mt-2 block">
        Link yang sama tanpa longTime
      </a>
      <p>{urlWithoutLongTime}</p>
    </div>
  );
}
