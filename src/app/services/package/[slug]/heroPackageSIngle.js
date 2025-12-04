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

export default function HeroPackageSingle({ img, imageAlt, listItem, children }) {
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
  ];

  return (
    <div className="sm:p-15 p-5 bg-slate-900 sm:rounded-bl-4xl rounded-bl-3xl patternKalmaanaDark">
      <div className="lg:rounded-bl-3xl rounded-bl-xl grid grid-cols-1 lg:w-8/12 mx-auto w-full overflow-hidden">
        <button
          id="bigImage"
          type="button"
          className=" w-full"
          onClick={() => {
            setCurrentIndex(0);
            setIsOpen(true);
          }}
        >
          <ImageComponent imageUrl={img} imageAlt={imageAlt} width="100%" priority={true} rounded="noround" cssStyle="cursor-pointer object-cover w-full h-auto " />
        </button>
        <div>{children}</div>
      </div>

      <Lightbox open={isOpen} close={() => setIsOpen(false)} slides={slides} index={currentIndex} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} />
    </div>
  );
}
