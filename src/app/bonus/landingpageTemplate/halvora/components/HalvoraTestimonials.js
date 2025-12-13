import React from "react";
import HalvoraTitle from "./ui/HalvoraTitle";
import HalvoraSubHeadline from "./ui/HalvoraSubHeadline";
import { FaQuoteRight } from "react-icons/fa";

export default function HalvoraTestimonials({ data }) {
  const { title, subtitle, items } = data.testimonials;

  return (
    <section id="testimonials" className="py-20 bg-base-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <HalvoraTitle text={title} />
          <HalvoraSubHeadline text={subtitle} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((review) => (
                <div key={review.id} className="bg-base-200/50 p-8 rounded-2xl relative mt-8">
                    {/* Floating Avatar */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                        <div className="w-16 h-16 rounded-full border-4 border-base-100 overflow-hidden shadow-lg">
                            <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="pt-10 text-center space-y-4">
                        <FaQuoteRight className="mx-auto text-primary/20 text-4xl" />
                        <p className="italic text-base-content/80 text-lg">"{review.quote}"</p>
                        <div>
                            <h4 className="font-bold text-lg">{review.name}</h4>
                            <span className="text-sm text-primary uppercase tracking-wider font-semibold">{review.role}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
