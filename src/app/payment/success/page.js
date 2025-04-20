"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import WhatsappBtn from "@/app/component/global/whatsappBtn";
import { FormatTanggal } from "@/app/component/global/formatTanggal";
import CanvasCursor from "@/app/component/canvasCursor/CanvasCursor";
import { IoMdCheckmark } from "react-icons/io";
import CopyableText from "@/app/component/global/copyableText";
import axios from "axios";
import Loading from "./loading";

export default function PaymentSuccessPage() {
  const params = useSearchParams();
  const [urlWithoutLongTime, setUrlWithoutLongTime] = useState("");
  const [siteData, setSiteData] = useState(null); // ← Tambah state untuk site identity

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

    // Ambil data dari /api/siteidentity
    const fetchSiteData = async () => {
      try {
        const res = await fetch("https://isnaa.verce.app/api/siteidentity");
        const data = await res.json();
        if (data && data.siteIdentities && data.siteIdentities.length > 0) {
          setSiteData(data.siteIdentities[0]);
        }
      } catch (error) {
        console.error("Gagal fetch site identity:", error);
      }
    };

    fetchSiteData();
  }, []);

  return (
    <div className="min-h-full">
      <div className="w-full h-full grid  place-items-center  p-6 sm:py-32 lg:px-8 ">
        <CanvasCursor />
        <div className="bg-base-100 sm:rounded-bl-4xl rounded-bl-3xl lg:w-10/12 sm:w-8/12 w-full lg:pb-0 sm:pb-10 pb-5 lg:grid-cols-2 grid-cols-1 grid overflow-hidden">
          <div className="lg:p-20 sm:p-10 p-5 bg-slate-900 sm:rounded-bl-4xl rounded-bl-3xl overflow-hidden ">
            <div className="relative text-nowrap">
              <p className="rotate-90 text-slate-800/70 origin-left text-9xl absolute uppercase lg:-ms-8 lg:-mt-38 sm:ms-2 sm:-mt-28 -mt-23 ms-5">
                {longTime ? "PROSES PROSES" : "LUNAS LUNAS"}
              </p>
            </div>

            <div className=" flex justify-between">
              <p className="ps-4 text-slate-400 font-bold relative z-1">{siteData?.siteName || "Brand Name"}</p>
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
              {longTime ? <div className="ini-okeh-paling-tepat tanpa-metadata ">5</div> : <IoMdCheckmark />}
            </div>
            <div className="p-4 max-w-xl mx-auto rounded-md pb-0">
              <div className=" text-center mb-10 border rounded-xl py-5 border-dashed border-slate-400 z-2 relative ">
                <h1 className={`text-4xl font-bold ${longTime ? "text-amber-300" : "text-green-500"} mb-4`}>Rp. {price}</h1>
                <div className=" text-slate-400 ">
                  <CopyableText orderId={orderId} cssStyle="bg-slate-700" />
                  <p className=" text-xs">Waktu pembayaran: {longTime ? "Loading..." : FormatTanggal(date)}</p>
                  <p className=" mt-3">{longTime ? "Pembayaran sedang diproses" : "✅ Pembayaran Berhasil!"}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:px-20 sm:px-10 px-5 mt-5 flex flex-col">
            <div className="p-4 mx-auto w-full">
              <div className=" grid grid-cols-1 w-full">
                <div className="flex justify-between py-4">
                  <p>Order ID</p>
                  <CopyableText orderId={orderId} cssStyle="bg-base-300" />
                </div>
                <div className="flex justify-between border-dashed border-slate-400 border-t py-4">
                  <p>Waktu pembayaran</p>
                  <p className="font-bold capitalize text-end">{longTime ? "Loading..." : FormatTanggal(date)}</p>
                </div>
                <div className="flex justify-between border-dashed border-slate-400 border-t py-4">
                  <p>Klien</p>
                  <p className="font-bold capitalize text-end">{orderBy}</p>
                </div>
                <div className="flex justify-between border-dashed border-slate-400 border-t py-4">
                  <p>Layanan</p>
                  <p className=" font-bold  text-end">{service}</p>
                </div>
                <div className="flex justify-between  border-dashed border-slate-400 border-t py-4">
                  <p>Harga</p>
                  <p className=" font-bold text-end">{price}</p>
                </div>
              </div>
            </div>
            <div className="w-full mt-auto lg:mb-20">
              <p className="bg-base-200/70 p-4 rounded-xl">
                {longTime
                  ? "Pembayaran Anda sedang diproses. Jangan menutup aplikasi!"
                  : "Terima kasih, pembayaran Anda telah selesai. Semoga Allah melimpahkan banyak berkah untuk bisnis Anda, aamiiin."}
              </p>
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
      </div>
    </div>
  );
}
