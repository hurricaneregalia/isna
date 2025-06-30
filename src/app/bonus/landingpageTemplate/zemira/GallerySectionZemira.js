"use client";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import ImageComponent from "@/app/component/global/imageComponent";

export default function GallerySectionZemira({ secId, data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = data.map((item) => ({
    src: item.src,
    alt: `${item.title} – ${item.subtitle}`,
    width: 1200,
    height: 800,
  }));

  return (
    <>
      <div className="w-full" id={secId}>
        <div className="gallery grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-7 gap-2">
          {data.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setCurrentIndex(index);
                setIsOpen(true);
              }}
              className="relative group overflow-hidden card transition-all duration-500 ease-in-out hover:-translate-y-2"
              data-aos="fade-up"
            >
              <ImageComponent
                rounded="none"
                imageUrl={item.src}
                imageAlt={`${item.title} – ${item.subtitle}`}
                width="100%"
                priority={false}
                cssStyle="cursor-pointer object-cover h-full w-auto transform transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay saat hover */}
              <div className="absolute inset-0 bg-neutral/75 cursor-pointer flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-4 text-center">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="opacity-75 anipu">{item.subtitle}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Lightbox open={isOpen} close={() => setIsOpen(false)} slides={slides} index={currentIndex} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} />
    </>
  );
}
