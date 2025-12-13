import React from "react";
import HalvoraTitle from "./ui/HalvoraTitle";
import HalvoraSubHeadline from "./ui/HalvoraSubHeadline";
import HalvoraBodyText from "./ui/HalvoraBodyText";
import HalvoraImage from "./ui/HalvoraImage";
import { MdCheckCircle } from "react-icons/md";

export default function HalvoraAbout({ data }) {
  const { title, heading, description, image, features } = data.about;

  return (
    <section id="about" className="py-20 bg-base-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2">
             <HalvoraImage 
                src={image} 
                alt="About Halvora" 
                className="aspect-[4/5] shadow-2xl rounded-2xl border-4 border-base-200"
             />
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 space-y-6">
            <HalvoraTitle text={title} />
            <HalvoraSubHeadline text={heading} className="text-3xl md:text-4xl" />
            
            <div className="space-y-4">
                {description.map((desc, idx) => (
                    <HalvoraBodyText key={idx} text={desc} />
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {features.map((feature) => (
                    <div key={feature.id} className="flex items-center gap-3 p-3 bg-base-200/50 rounded-lg">
                        <MdCheckCircle className="text-primary text-2xl flex-shrink-0" />
                        <span className="font-semibold text-base-content/90">{feature.text}</span>
                    </div>
                ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
