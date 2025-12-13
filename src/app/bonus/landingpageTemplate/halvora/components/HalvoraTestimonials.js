import React from "react";
import HalvoraTitle from "./ui/HalvoraTitle";
import HalvoraSubHeadline from "./ui/HalvoraSubHeadline";
import { FaQuoteRight } from "react-icons/fa";

export default function HalvoraTestimonials({ data }) {
  const { title, subtitle, items } = data.testimonials;

  return (
    <section id="testimonials" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <HalvoraTitle text={title} />
          <HalvoraSubHeadline text={subtitle} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {items.map((review) => (
                <div key={review.id} className="bg-white p-10 rounded-3xl relative mt-12 shadow-sm hover:shadow-xl transition-shadow border border-stone-100 hover:border-emerald-100">
                    {/* Floating Avatar */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                        <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-md ring-2 ring-emerald-50">
                            <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="pt-8 text-center space-y-6">
                        <FaQuoteRight className="mx-auto text-emerald-200 text-4xl" />
                        <p className="italic text-stone-600 font-light leading-loose text-lg">"{review.quote}"</p>
                        <div>
                            <h4 className="font-bold text-lg text-emerald-950 font-serif">{review.name}</h4>
                            <span className="text-xs text-emerald-600 uppercase tracking-widest font-bold">{review.role}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
