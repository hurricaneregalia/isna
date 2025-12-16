import React from "react";
import HalvoraTitle from "./ui/HalvoraTitle";
import HalvoraSubHeadline from "./ui/HalvoraSubHeadline";
import HalvoraBodyText from "./ui/HalvoraBodyText";
import HalvoraImage from "./ui/HalvoraImage";
import { MdCheckCircle } from "react-icons/md";

export default function HalvoraAbout({ data, secId }) {
  const { title, heading, description, image, features } = data.about;

  return (
    <section id={secId} className="py-24 bg-[#FFF0F0]">
      <div className="container mx-auto px-6 lg:w-8/12 w-full">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative">
             <div className="absolute top-4 left-4 w-full h-full border-2 border-[#D48F8F] rounded-2xl transform translate-x-4 translate-y-4"></div>
             <HalvoraImage 
                src={image} 
                alt="About Halvora" 
                className="aspect-[4/5] shadow-2xl rounded-2xl relative"
             />
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-2">
                <HalvoraTitle text={title} />
                <HalvoraSubHeadline text={heading} className="text-4xl text-[#6B4423]" />
            </div>
            
            <div className="space-y-6">
                {description.map((desc, idx) => (
                    <HalvoraBodyText key={idx} text={desc} />
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                {features.map((feature) => (
                    <div key={feature.id} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-[#D48F8F]/20 hover:shadow-md transition-shadow group">
                        <MdCheckCircle className="text-[#D48F8F] text-2xl flex-shrink-0 group-hover:text-[#6B4423] transition-colors" />
                        <span className="font-medium text-[#8B5E3C]">{feature.text}</span>
                    </div>
                ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
