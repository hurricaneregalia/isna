import React from "react";
import Image from "next/image";
import { LuClock4 } from "react-icons/lu";

const dataDocumentation = {
  title: "Destinasi Gunung di Indonesia",
  description: "Jelajahi keindahan alam Indonesia melalui rute pendakian epik!",
  photos: [
    {
      title: "Rinjani",
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      alt: "Puncak Gunung Rinjani dengan danau kawah",
      jarakRute: "26 km",
      waktuTempuh: "3 Hari",
      className: "row-span-2",
    },
    {
      title: "Batur",
      src: "https://images.pexels.com/photos/2082949/pexels-photo-2082949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "Jalur pendakian Gunung Batur",
      jarakRute: "4 km",
      waktuTempuh: "1/2 Hari",
      className: "",
    },
    {
      title: "Prau",
      src: "https://images.unsplash.com/photo-1435732960391-11053ee5e6b6?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Pendaki di Gunung Prau Dieng",
      jarakRute: "6 km",
      waktuTempuh: "1 Hari",
      className: "col-span-2",
    },
    {
      title: "Pangrango",
      src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
      alt: "Taman Nasional Gede Pangrango",
      jarakRute: "18 km",
      waktuTempuh: "2 Hari",
      className: "",
    },
    {
      title: "Ijen",
      src: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Kawah Ijen di malam hari",
      jarakRute: "6 km",
      waktuTempuh: "1 Hari",
      className: "",
    },
    {
      title: "Dieng",
      src: "https://images.unsplash.com/photo-1490682143684-14369e18dce8?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Jalur pegunungan di Dataran Tinggi Dieng",
      jarakRute: "2 km",
      waktuTempuh: "1/2 Hari",
      className: "",
    },
  ],
};

export default function TripSectionRihala({ secId }) {
  return (
    <section className="py-16 px-4 bg-base-100 text-base-content" id={secId}>
      <div className="container max-w-6xl mx-auto">
        <div className="mb-12 mx-auto text-center capitalize">
          <p className="text-base font-semibold text-primary">{secId}</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl" data-aos="fade-up">
            {dataDocumentation.title}
          </h2>
          <p className="mt-4 text-lg opacity-75" data-aos="fade-up">
            {dataDocumentation.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[200px] sm:gap-4 space-y-4 sm:space-y-0">
          {dataDocumentation.photos.map((photo, idx) => (
            <div key={idx} className={`relative overflow-hidden rounded-xl group ${photo.className}`} data-aos="flip-left">
              <Image src={photo.src} alt={photo.alt} fill className="object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110" />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-neutral-900/80 to-transparent text-white px-4 py-3">
                <h3 className="font-semibold text-lg">{photo.title}</h3>
                <div className=" flex justify-between w-full">
                  <span className="text-sm opacity-75">{photo.jarakRute}</span>{" "}
                  <span className="text-sm opacity-75 flex items-center gap-1">
                    <LuClock4 /> {photo.waktuTempuh}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
