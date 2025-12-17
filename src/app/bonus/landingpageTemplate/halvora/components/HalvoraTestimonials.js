import React from "react";
import HalvoraTitle from "./ui/HalvoraTitle";
import HalvoraSubHeadline from "./ui/HalvoraSubHeadline";
import { FaQuoteRight } from "react-icons/fa";
import HalvoraImage from "./ui/HalvoraImage";

export default function HalvoraTestimonials({ data, secId }) {
  const { title, subtitle, items } = data.testimonials;

  return (
    <section id={secId} className="py-24 bg-base-300">
      <div className="container mx-auto px-6 lg:w-8/12 w-full mb-10">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <HalvoraTitle text={title} />
          <HalvoraSubHeadline className="text-base-content/80" text={subtitle} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-10 gap-15">
          {items.map((review) => (
            <div key={review.id} className="bg-base-100 p-10 card relative mt-12 shadow-sm hover:shadow-xl transition-shadow border border-base-300 hover:border-primary/30 flex flex-col h-full">
              {/* Floating Avatar */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-20 rounded-full border-4 border-base-100 overflow-hidden shadow-md ring-2 ring-primary/20">
                  <HalvoraImage src={review.image} alt={review.name} className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="pt-8 text-center space-y-5 flex-1 flex flex-col">
                <FaQuoteRight className="mx-auto text-primary/40 text-4xl" />
                <p className="italic text-base-content/70 font-light leading-loose text-lg">{review.quote}</p>
                <div className="mt-auto">
                  <h4 className="font-bold text-lg text-base-content font-serif">{review.name}</h4>
                  <span className="text-xs text-primary uppercase tracking-widest font-bold">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
