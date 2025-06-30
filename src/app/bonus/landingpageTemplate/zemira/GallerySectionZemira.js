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

// Data gambar portfolio
const portfolioImages = [
  {
    src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-1571460.jpg",
    title: "Ruang Keluarga Mewah",
    subtitle: "Untuk Keluarga Dokter",
  },
  {
    src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-1457842.jpg",
    title: "Kamar Master Elegan",
    subtitle: "Untuk Eksekutif",
  },
  {
    src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-1643383.jpg",
    title: "Home Office Profesional",
    subtitle: "Untuk Pengacara",
  },
  {
    src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-280232.jpg",
    title: "Dapur Modern",
    subtitle: "Untuk Pebisnis",
  },
  {
    src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-1866149.jpg",
    title: "Ruang Makan Minimalis",
    subtitle: "Untuk Keluarga Muda",
  },
  {
    src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-271743.jpg",
    title: "Kamar Tidur Nyaman",
    subtitle: "Untuk Pasangan Baru",
  },
  {
    src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-2082090.jpg",
    title: "Ruang Kerja Modern",
    subtitle: "Untuk Freelancer",
  },
  {
    src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-374703.jpg",
    title: "Lobi Hotel Elegan",
    subtitle: "Untuk Pengusaha",
  },
];

export default function GallerySectionZemira() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = portfolioImages.map((item) => ({
    src: item.src,
    alt: `${item.title} – ${item.subtitle}`,
    width: 1200,
    height: 800,
  }));

  return (
    <div className="bg-base-200">
      <div className="w-full">
        <div className="gallery grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-7 gap-2">
          {portfolioImages.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setCurrentIndex(index);
                setIsOpen(true);
              }}
              className="relative group overflow-hidden rounded-xl transition-all duration-500 ease-in-out hover:-translate-y-2"
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
    </div>
  );
}
