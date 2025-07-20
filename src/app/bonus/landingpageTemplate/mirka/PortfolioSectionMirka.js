"use client";

import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import SectionWrapper from "./ui/SectionWrapper";
import Heading from "./ui/Heading";
import { useState } from "react";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

export default function PortfolioSectionMirka({ data, secId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = data.item.map((item) => ({
    src: item.imageUrl,
    alt: item.artistName,
    width: 1200,
    height: 800,
    title: `by ${item.artistName}`,
  }));

  return (
    <section className="patternBg" id={secId}>
      <div className="bg-transparent lg:px-20">
        <SectionWrapper css="sm:px-20 gap-20 space-y-10">
          {/* Judul */}
          <div className="lg:w-6/12 w-full capitalize mx-auto text-center">
            <Heading>{data.title}</Heading>
            <hr className="lg:my-8 my-4 opacity-0" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[200px] sm:gap-2 space-y-2 sm:space-y-0">
            {data.item.map((photo, index) => (
              <button
                key={photo.id}
                className={`relative overflow-hidden card group border-8 border-slate-100 shadow-lg cursor-pointer ${photo.className ?? ""}`}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsOpen(true);
                }}
                type="button"
                data-aos="fade-up"
              >
                <Image
                  src={photo.imageUrl}
                  alt={photo.artistName}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110 group-active:scale-105 group-active:brightness-110"
                />
                <div className="text-start absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary to-transparent text-base-100 text-sm p-4 pt-20 transition-opacity duration-300 group-hover:opacity-0 group-active:opacity-0">
                  By <span className="font-bold opacity-75">{photo.artistName}</span>
                </div>
              </button>
            ))}
          </div>

          <Lightbox open={isOpen} close={() => setIsOpen(false)} slides={slides} index={currentIndex} plugins={[Fullscreen, Captions, Slideshow, Thumbnails, Zoom]} />
        </SectionWrapper>
      </div>
    </section>
  );
}
