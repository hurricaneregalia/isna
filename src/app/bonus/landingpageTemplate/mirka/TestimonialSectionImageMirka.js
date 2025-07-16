"use client";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Heading from "./ui/Heading";

const bgCoosen = "bg-slate-800";
const txtCoosen = "text-slate-200";

export default function TestimonialSectionImageMirka({ data, secId }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="sm:px-5 px-3" id={secId}>
      <div className={`${bgCoosen} ${txtCoosen} p-5 py-32`}>
        <Heading>{data.title}</Heading>

        {/* Carousel Scrollable: Thumbnails */}
        <div className="w-full overflow-x-auto">
          <div className="carousel carousel-center space-x-4 w-max pb-10">
            {data.items.map((item) => (
              <div key={item.id} className="group carousel-item relative w-64 h-96 shrink-0 transition-all">
                <div className="relative flex flex-col h-full overflow-hidden w-full">
                  <Image
                    id="testimoniThumbnail"
                    src={item.photo}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="object-cover absolute inset-0 z-0 cursor-pointer"
                    onClick={() => setSelectedImage(item.photo)}
                  />

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
                      <div className={`${txtCoosen}`}>
                        <h3 className="font-semibold ">{item.name}</h3>
                        <p className="text-sm opacity-75 ">{item.profession}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Transition appear show={!!selectedImage} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-50 flex items-center justify-center" onClose={() => setSelectedImage(null)}>
          {/* Overlay */}
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>

          {/* Modal Panel */}
          <div className="relative max-w-5xl w-full max-h-screen p-4 z-50 overflow-hidden">
            {/* Close button (no animation) */}
            {selectedImage && (
              <button onClick={() => setSelectedImage(null)} className="btn btn-sm btn-circle absolute top-4 right-4 bg-white z-50">
                ✕
              </button>
            )}

            {/* Animated content only */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95 translate-y-4"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 translate-y-4"
            >
              <Dialog.Panel className="w-full h-full flex items-center justify-center">
                {selectedImage && <Image src={selectedImage} alt="Preview" width={1600} height={1200} className="max-h-[90vh] w-auto object-contain shadow-lg" />}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
}
