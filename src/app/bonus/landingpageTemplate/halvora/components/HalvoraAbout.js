import React from "react";
import HalvoraTitle from "./ui/HalvoraTitle";
import HalvoraSubHeadline from "./ui/HalvoraSubHeadline";
import HalvoraBodyText from "./ui/HalvoraBodyText";
import HalvoraImage from "./ui/HalvoraImage";
import { MdCheckCircle } from "react-icons/md";
import Image from "next/image";

export default function HalvoraAbout({ data, secId }) {
  const { title, heading, description, image, features, ornament, ornament2 } = data.about;

  return (
    <section id={secId} className="py-24 bg-base-300 relative">
      <div className="absolute aspect-9/16 rounded-full z-1">
        <div className="absolute inset-0 bg-base-200 rounded-full blur-xl"></div>
        <HalvoraImage overflow="overflow-visible" src={ornament} alt="Decorative Flower" className="relative  w-full h-full object-cover opacity-20" />
      </div>
      <div className="absolute aspect-9/16 rounded-full right-0 z-1">
        <div className="absolute inset-0 bg-base-200 rounded-full blur-xl"></div>
        <HalvoraImage overflow="overflow-visible" src={ornament} alt="Decorative Flower" className="relative w-full h-full object-cover opacity-20 transform scale-x-[-1]" />
      </div>
      <div className="container mx-auto px-6 lg:w-8/12 w-full relative z-2">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute top-0 right-10 origin-top swing z-2">
              <Image src={ornament2} alt="ornament" width={0} height={0} sizes="100vw" className="w-[25px] lg:w-[50px] h-auto" style={{ height: "auto" }} />
            </div>
            <div className="absolute top-4 left-4 w-full h-full border-2 border-primary card overflow-hidden transform translate-x-4 translate-y-4" />
            <HalvoraImage src={image} alt="About Halvora" className="aspect-4/5 shadow-2xl card relative" />
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-2">
              <HalvoraTitle text={title} />
              <HalvoraSubHeadline text={heading} className="text-4xl text-base-content" />
            </div>

            <div className="space-y-6">
              {description.map((desc, idx) => (
                <HalvoraBodyText className="text-base-content/80" key={idx} text={desc} />
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {features.map((feature) => (
                <div key={feature.id} className=" card shadow-sm overflow-hidden border border-primary/20 hover:shadow-md transition-shadow group">
                  <div className="flex items-center gap-3 p-4 bg-base-100">
                    <MdCheckCircle className="text-primary text-2xl shrink-0 group-hover:text-base-content transition-colors" />
                    <span className="font-medium text-base-content/80">{feature.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
