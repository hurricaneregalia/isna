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
  const transactionId = params.get("transaction_id");
  const paymentType = params.get("payment_type");
  const bank = params.get("bank");
  const vaNumber = params.get("va_number");
  const service = params.get("service");
  const desc = params.get("desc");
  const waNumber = params.get("waNumber");
  const longTime = params.get("longTime");
  const price = params.get("price");
  const date = params.get("date");
  const orderBy = params.get("orderby");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    query.delete("transaction_id");
    query.delete("longTime");
    query.delete("desc");
    query.delete("waNumber");
    query.delete("payment_type");
    query.delete("bank");
    query.delete("va_number");

    const finalUrl = `${window.location.origin}${window.location.pathname}?${query.toString()}`;
    setUrlWithoutLongTime(finalUrl);
  }, []);

  return (
    <div className="p-4 max-w-xl mx-auto bg-white shadow rounded-md">
      <h1 className={`text-xl font-bold ${longTime ? null : "text-green-600"} mb-4`}>
        {longTime ? "Pembayaran sedang diproses" : "✅ Pembayaran Berhasil!"}
      </h1>
      {longTime ? null : <SuccessInfo orderId={orderId} layanan={service} price={price.toLocaleString("id-ID")} date={date} orderBy={orderBy} />}
      {longTime ? (
        <WhatsappBtn
          waText={"KIRIM PESAN INI\n" + desc + "\n" + "INVOICE\n" + urlWithoutLongTime}
          waBtnText="kirim"
          waNumber={waNumber}
          btnCenter={true}
          isInternalLink={false}
        />
      ) : null}
      test
      {longTime ? <p>long time: {longTime}</p> : null}
    </div>
  );
}
