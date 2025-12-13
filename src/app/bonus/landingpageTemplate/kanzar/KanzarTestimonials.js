import React from "react";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function KanzarTestimonials({ secId = "testimonials", data }) {
  const { title, subtitle, reviews, ornament } = data.testimonials;
  const patternUrl = "https://cdn-icons-png.flaticon.com/512/14456/14456745.png";

  return (
    <section id={secId} className="py-24 bg-slate-900 relative overflow-hidden text-white">
      {/* Background Pattern Layer with 50% Opacity */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: `url('${patternUrl}'), url('${patternUrl}')`,
          backgroundPosition: "0 0, 80px 80px",
          backgroundSize: "160px 160px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="absolute top-0 right-10 origin-top swing z-1">
        <Image src={ornament} alt="ornament" width={50} height={262.033} className="w-[25px] lg:w-[50px] h-auto" />
      </div>
      <div className="absolute top-0 left-10 origin-top swing z-1">
        <Image src={ornament} alt="ornament" width={50} height={262.033} className="w-[25px] lg:w-[50px] h-auto" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent"></div>

      <div className="container mx-auto px-6 relative">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-sm">{title}</h2>
          <p className="text-slate-100/80 max-w-2xl mx-auto text-lg font-light">{subtitle}</p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full flex justify-center items-center gap-1">
            <div className="w-1 h-1 bg-slate-900 rounded-full"></div>
            <div className="w-1 h-1 bg-slate-900 rounded-full"></div>
            <div className="w-1 h-1 bg-slate-900 rounded-full"></div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={review.id}
              className="bg-slate-950/60 p-8 rounded-tr-3xl rounded-bl-3xl border border-slate-800/50 hover:border-primary/50 transition-all duration-300 flex flex-col h-full group hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div className="mb-6 flex justify-between items-start">
                <Quote className="w-10 h-10 text-warning/50 opacity-60" />
              </div>

              <p className="text-slate-100/90 italic mb-8 leading-relaxed grow font-serif">"{review.quote}"</p>

              <div className="flex items-center gap-4 mt-auto border-t border-slate-800/50 pt-6">
                <Image src={review.avatar} alt={review.name} width={120} height={120} className="w-12 h-12 rounded-full border-2 border-yellow-500 object-cover shrink-0" />
                <div>
                  <h4 className="font-serif font-bold text-white tracking-wide">{review.name}</h4>
                  <span className="text-xs text-white/80 uppercase tracking-widest">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
