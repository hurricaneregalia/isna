"use client";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Heading from "./ui/Heading";
import { useState } from "react";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

const bgCoosen = "bg-slate-800";
const txtCoosen = "text-slate-200";

export default function TestimonialSectionImageMirka({ data, secId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = data.item.map((item) => ({
    src: item.images,
    alt: item.name,
    width: 1200,
    height: 800,
    title: item.name,
    description: item.profession,
  }));

  return (
    <section id={secId}>
      <div className={`${bgCoosen} ${txtCoosen} p-5 py-32 texce`}>
        <div className="lg:w-6/12 w-full capitalize mx-auto text-center">
          <Heading>{data.title}</Heading>
          <hr className="lg:my-8 my-4 opacity-0" />
        </div>

        {/* Carousel Scrollable: Thumbnails */}
        <div className="w-full overflow-x-auto">
          <div className="carousel carousel-center space-x-4 w-max pb-10">
            {data.item.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className="group carousel-item relative w-64 h-96 shrink-0 transition-all"
                onClick={() => {
                  setCurrentIndex(index);
                  setIsOpen(true);
                }}
              >
                <div className="relative flex flex-col h-full overflow-hidden w-full">
                  <Image id="testimoniThumbnail" src={item.images} alt={item.name} fill sizes="(max-width: 768px) 100vw, 700px" className="object-cover absolute inset-0 z-0 cursor-pointer" />
                  {item.images}
                  <div className={`relative mt-auto ${bgCoosen} p-4 rounded-tl-4xl`}>
                    <div className="flex gap-3">
                      <div className="mb-4">
                        <Image
                          src={item.photo}
                          alt={item.name}
                          width={40}
                          height={40}
                          className="rounded-full border-2 mx-auto border-white shadow-md group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className={`${txtCoosen} text-start`}>
                        <h3 className="font-semibold ">{item.name}</h3>
                        <p className="text-sm opacity-75 ">{item.profession}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <Lightbox open={isOpen} close={() => setIsOpen(false)} slides={slides} index={currentIndex} plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Zoom]} />
    </section>
  );
}
