"use client";
import LinkAuto from "@/app/component/global/linkAuto";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SuccessInfo from "./successInfo";
import WhatsappBtn from "@/app/component/global/whatsappBtn";
import HeaderFooterPayment from "@/app/component/global/headerPayment";
import { FormatTanggal } from "@/app/component/global/formatTanggal";
import CanvasCursor from "@/app/component/canvasCursor/CanvasCursor";
import { IoMdCheckmark } from "react-icons/io";
import { LuTimerReset } from "react-icons/lu";

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
    <div className="min-h-full">
      <div className="w-full h-full grid  place-items-center  px-6 py-24 sm:py-32 lg:px-8 ">
        <CanvasCursor />
        <div className="bg-base-100 sm:rounded-bl-4xl rounded-bl-3xl lg:w-1/3 sm:w-1/2 w-full lg:pb-20 sm:pb-10 pb-5 ">
          <div className="lg:p-20 sm:p-10 p-5 bg-slate-900 sm:rounded-bl-4xl rounded-bl-3xl">
            <div className=" flex justify-between">
              <p className="ps-4 text-slate-400 font-bold">Brand Name</p>
              <p>
                <span className={`p-2 py-1 rounded-sm inline font-bold ${longTime ? "bg-amber-200 text-amber-600" : "bg-green-100 text-green-500"}`}>
                  {longTime ? "Proses" : "LUNAS"}
                </span>
              </p>
            </div>
            <div
              className={`text-8xl text-center flex justify-center items-center mx-auto rounded-full border-5 w-30 h-30 my-10 ${
                longTime ? "text-slate-400 border-slate-400" : "text-green-500 border-green-500"
              }`}
            >
              {longTime ? <div className=" ">5</div> : <IoMdCheckmark />}
            </div>
            <div className="p-4 max-w-xl mx-auto rounded-md pb-0">
              <div className=" text-center mb-10 border rounded-xl py-5 border-dashed border-slate-400  ">
                <h1 className={`text-4xl font-bold ${longTime ? "text-amber-300" : "text-green-500"} mb-4`}>Rp. {price}</h1>
                <div className=" text-slate-400">
                  <p className=" text-xs">Order ID: {orderId}</p>
                  <p className=" text-xs">Waktu pembayaran: {longTime ? "Loading..." : date}</p>
                  <p className=" mt-3">{longTime ? "Pembayaran sedang diproses" : "✅ Pembayaran Berhasil!"}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:px-20 sm:px-10 px-5 mt-5">
            <div className="p-4 max-w-xl mx-auto">
              <div className=" grid grid-cols-1 w-full">
                <div className="grid grid-cols-2 gap-3 py-4">
                  <p>Klien</p>
                  <p className="font-bold capitalize text-end">{orderBy}</p>
                </div>
                <div className="grid grid-cols-2 border-dashed border-slate-400 border-t py-4">
                  <p>Layanan</p>
                  <p className=" font-bold  text-end">{service}</p>
                </div>
                <div className="grid grid-cols-2  border-dashed border-slate-400 border-t py-4">
                  <p>Harga</p>
                  <p className=" font-bold text-end">{price}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:px-20 sm:px-10 px-5 mt-5">
            <p className="bg-base-200/70 p-4 rounded-xl">
              {longTime
                ? "Mohon tunggu sejenak, transaksi sedang di proses."
                : "Terimakasih telah melakukan pemesanan, semoga Allah membuat bisnis anda semakin berkah."}
            </p>
          </div>
          {longTime ? (
            <WhatsappBtn
              waText={"KIRIM PESAN INI\n" + desc + "\n\n" + "INVOICE\n" + urlWithoutLongTime}
              waBtnText="kirim"
              waNumber={waNumber}
              btnCenter={true}
              isInternalLink={false}
            />
          ) : null}

          {longTime ? <p>long time: {longTime}</p> : null}
        </div>
      </div>
    </div>
  );
}
