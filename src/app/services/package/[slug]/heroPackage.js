"use client";
import ImageComponent from "@/app/component/global/imageComponent";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function HeroPackage({ img, imageAlt, listItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      src: img,
      alt: imageAlt,
      width: 3840,
      height: 2560,
      srcSet: [
        { src: img, width: 320, height: 213 },
        { src: img, width: 640, height: 427 },
        { src: img, width: 1200, height: 800 },
        { src: img, width: 2048, height: 1365 },
        { src: img, width: 3840, height: 2560 },
      ],
    },
    ...listItem.map((item) => ({
      src: item.img,
      alt: item.title,
      width: 1200,
      height: 800,
    })),
  ];

  return (
    <div className="lg:p-20 sm:p-10 p-5 bg-gray-900 rounded-bl-3xl ">
      <div className="rounded-bl-2xl overflow-hidden grid md:grid-cols-2 grid-cols-1 md:gap-3 gap-1 lg:w-2/3 mx-auto w-full">
        <button
          id="bigImage"
          type="button"
          onClick={() => {
            setCurrentIndex(0);
            setIsOpen(true);
          }}
        >
          <ImageComponent imageUrl={img} imageAlt={imageAlt} width="100%" priority={true} rounded-sm="noround" cssStyle="object-cover h-full w-auto" />
        </button>

        <div className="galler grid md:grid-cols-2 grid-cols-4 md:gap-3 gap-1">
          {listItem.map((item, index) => (
            <button
              id={`smallImage${item.id}`}
              key={index}
              type="button"
              onClick={() => {
                setCurrentIndex(index + 1); // +1 karena img utama di index 0
                setIsOpen(true);
              }}
            >
              <ImageComponent
                imageUrl={item.img}
                imageAlt={item.title}
                width="100%"
                priority={true}
                rounded="noround"
                cssStyle="object-cover h-full w-auto"
              />
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={slides}
        index={currentIndex}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
}
