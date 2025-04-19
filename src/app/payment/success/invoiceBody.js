import CopyableText from "@/app/component/global/copyableText";
import { FormatTanggal } from "@/app/component/global/formatTanggal";
import WhatsappBtn from "@/app/component/global/whatsappBtn";
import React from "react";

export default function InvoiceBody({ orderId, longTime, orderBy, service, price, desc, urlWithoutLongTime, waNumber, date }) {
  return (
    <div className="lg:px-20 sm:px-10 px-5 mt-5 flex flex-col">
      <div className="p-4 mx-auto w-full">
        <div className=" grid grid-cols-1 w-full">
          <div className="flex justify-between py-4">
            <p>Order ID</p>
            <CopyableText orderId={orderId} cssStyle="bg-base-300 hover:bg-amber-300 hover:text-slate-900" />
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
  );
}
