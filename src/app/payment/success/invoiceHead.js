import CopyableText from "@/app/component/global/copyableText";
import { FormatTanggal } from "@/app/component/global/formatTanggal";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";

export default function InvoiceHead({ longTime, siteLogo, siteName, price, orderId, date, counter }) {
  return (
    <div className={`lg:p-20 sm:p-10 p-5 ${longTime ? "bg-slate-900 " : "bg-green-300 "} sm:rounded-bl-4xl rounded-bl-3xl overflow-hidden`}>
      <div className="relative text-nowrap">
        <p className="rotate-90 text-slate-800/70 origin-left text-9xl absolute uppercase ">{longTime ? "PROSES PROSES" : "LUNAS LUNAS"}</p>
      </div>

      <div className=" flex justify-between  relative z-1">
        <div className="">
          <Link href="/" className=" flex gap-1 ps-4  items-center text-slate-400">
            {siteLogo ? <Image src={siteLogo} alt="logo" width={20} height={20} className="w-5 h-5" /> : null}
            <span className="font-bold capitalize hover:text-amber-300">{siteName}</span>
          </Link>
        </div>
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
        <div className=" text-center mb-10 border rounded-xl py-5 border-dashed border-slate-400 z-2 relative ">
          <h1 className={`text-4xl font-bold ${longTime ? "text-amber-300" : "text-green-500"} mb-4`}>Rp. {price}</h1>
          <div className=" text-slate-400 ">
            <CopyableText orderId={orderId} cssStyle="bg-slate-700 hover:bg-amber-300 hover:text-slate-900" />
            <p className=" text-xs">Waktu pembayaran: {longTime ? "Loading..." : FormatTanggal(date)}</p>
            <p className=" mt-3">{longTime ? "Pembayaran sedang diproses" : "✅ Pembayaran Berhasil!"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
