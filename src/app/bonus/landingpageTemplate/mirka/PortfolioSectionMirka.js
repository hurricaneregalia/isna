"use client";

import { useState, Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import SectionWrapper from "./ui/SectionWrapper";
import Heading from "./ui/Heading";

export default function PortfolioSectionMirka({ data, secId }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="sm:px-5 sm:pb-5 px-3 pb-3" id={secId}>
      <div className="bg-transparent lg:px-20 pb-32">
        <SectionWrapper css="sm:px-20 gap-20 space-y-10">
          {/* Judul */}
          <div className="lg:w-6/12 w-full capitalize mx-auto text-center">
            <Heading>{data.title}</Heading>
            <hr className="lg:my-8 my-4 opacity-0" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[200px] sm:gap-4 space-y-4 sm:space-y-0">
            {data.item.map((photo) => (
              <div key={photo.id} className={`relative overflow-hidden group cursor-pointer ${photo.className ?? ""}`} onClick={() => setSelectedImage(photo.imageUrl)} data-aos="fade-up">
                <Image
                  src={photo.imageUrl}
                  alt={photo.artistName}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900 to-transparent text-slate-200 text-sm p-4 pt-20  transition-opacity duration-300 group-hover:opacity-0">
                  By <span className="font-bold">{photo.artistName}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Transition wrapper for modal */}
          <Transition appear show={!!selectedImage} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 z-50 flex items-center justify-center" onClose={() => setSelectedImage(null)}>
              {/* Overlay */}
              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                <div className="fixed inset-0 bg-black bg-opacity-70" />
              </Transition.Child>

              {/* Modal Panel */}
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95 translate-y-4"
                enterTo="opacity-100 scale-100 translate-y-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100 translate-y-0"
                leaveTo="opacity-0 scale-95 translate-y-4"
              >
                <Dialog.Panel className="relative max-w-5xl w-full p-4 z-50">
                  <button onClick={() => setSelectedImage(null)} className="btn btn-sm btn-circle absolute top-4 right-4 bg-white">
                    ✕
                  </button>
                  {selectedImage && <Image src={selectedImage} alt="Preview" width={1600} height={1200} className="w-full h-auto shadow-lg" />}
                </Dialog.Panel>
              </Transition.Child>
            </Dialog>
          </Transition>
        </SectionWrapper>
      </div>
    </section>
  );
}
