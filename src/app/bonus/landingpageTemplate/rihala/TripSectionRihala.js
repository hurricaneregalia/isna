import React from "react";
import Image from "next/image";
import { LuClock4 } from "react-icons/lu";

export default function TripSectionRihala({ secId, data }) {
  return (
    <section className="py-16 px-4 bg-base-100 text-base-content" id={secId}>
      <div className="container max-w-6xl mx-auto">
        <div className="mb-12 mx-auto text-center capitalize">
          <p className="text-base font-semibold text-primary">{secId}</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl" data-aos="fade-up">
            {data.title}
          </h2>
          <p className="mt-4 text-lg opacity-75" data-aos="fade-up">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[200px] sm:gap-4 space-y-4 sm:space-y-0">
          {data.photos.map((photo, idx) => (
            <div key={idx} className={`relative overflow-hidden rounded-xl group ${photo.className}`} data-aos="flip-left">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-neutral-900/80 to-transparent text-white px-4 py-3">
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
