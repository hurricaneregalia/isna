// components/CTAKanzar.js
import React from "react";
import Image from "next/image";
import Headline2 from "./ui/Headline2";
import Subheadline2 from "./ui/Subheadline2";

export default function CTAKanzar() {
  const dataCTAKanzar = {
    title: "💖 Helm Nggak Harus Ngebosenin. Yuk, Ubah Cara Kamu Tampil di Jalan!",
    description: "Cek koleksi Revelyn sekarang dan temukan helm yang kamu banget.",
    buttonText: "Beli Sekarang",
    background: "https://images.pexels.com/photos/9156414/pexels-photo-9156414.jpeg?auto=compress&cs=tinysrgb&w=1200",
  };

  return (
    <div className="w-full space-y-6 text-center py-30 relative ">
      <div className="bg-primary/90 absolute top-0 bottom-0 z-10 object-contain w-full h-full" />
      <Image src={dataCTAKanzar.background} alt={dataCTAKanzar.title} fill className="object-cover absolute" />
      <div className=" relative z-10 max-w-2xl px-5 mx-auto space-y-5">
        <Headline2 text={dataCTAKanzar.title} />
        <Subheadline2 text={dataCTAKanzar.description} />
        <button className="btn btn-accent btn-lg hover:scale-105 transition-transform duration-200">{dataCTAKanzar.buttonText}</button>
      </div>
    </div>
  );
}
