"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HiStar, HiChevronLeft, HiChevronRight, HiOutlineOfficeBuilding, HiOutlineBriefcase } from "react-icons/hi";

export default function TestimonialsZemira({ secId, data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = data.testimonials || [];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const renderStars = (rating) => [...Array(5)].map((_, i) => <HiStar key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-current" : "text-base-content/20"}`} />);

  return (
    <section id={secId} className="py-16 md:py-24 bg-base-200">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="w-fit px-4 py-2 bg-primary/10 text-primary text-xs card mx-auto mb-3 capitalize" data-aos="fade-up">
            {secId.replace(/-/g, " ")}
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-base-content mb-6" data-aos="fade-up">
            {data.meta.title}
            <span className="text-primary"> {data.meta.highlight}</span>
          </h2>
          <p className="text-lg opacity-75" data-aos="fade-up">
            {data.meta.subtitle}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigasi */}
          <button
            onClick={prevTestimonial}
            className="absolute left-8 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 bg-primary/20 rounded-full p-3 shadow-lg hover:bg-primary text-primary hover:text-white/70 transition-all"
            aria-label="Previous testimonial"
          >
            <HiChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-8 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 bg-primary/20 rounded-full p-3 shadow-lg hover:bg-primary text-primary hover:text-white/70 transition-all"
            aria-label="Next testimonial"
          >
            <HiChevronRight className="h-6 w-6" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimoni utama */}
            {testimonials.length > 0 && (
              <div className="bg-base-100 card p-8 shadow-xl border border-base-300/30" data-aos="fade-up">
                {(() => {
                  const testimonial = testimonials[currentIndex];
                  return (
                    <>
                      <div className="flex items-start mb-6">
                        <div className="relative mr-6">
                          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/10">
                            <Image src={testimonial.photo || "/images/default-avatar.png"} alt={testimonial.name || "Foto testimoni"} width={80} height={80} className="object-cover" />
                          </div>
                          <div className="absolute -bottom-2 -right-2 bg-primary text-base-100 card w-10 h-10 flex items-center justify-center">
                            <span className="font-bold">{testimonial.rating}.0</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-base-content">{testimonial.name}</h3>
                          <div className="flex items-center mt-1 mb-2 text-xs">
                            <HiOutlineBriefcase className="text-primary mr-2" />
                            <span className="opacity-75">{testimonial.profession}</span>
                          </div>
                          <div className="flex items-center text-xs">
                            <HiOutlineOfficeBuilding className="text-primary mr-2" />
                            <span className="text-base-content/70">{testimonial.company}</span>
                          </div>
                        </div>
                      </div>
                      <div className="pl-2 border-l-4 border-primary/50">
                        <p className="text-lg italic opacity-75 mb-6">{testimonial.quote}</p>
                        <div className="flex">{renderStars(testimonial.rating)}</div>
                      </div>
                    </>
                  );
                })()}
              </div>
            )}

            {/* Testimoni tambahan */}
            <div className="grid grid-cols-1 gap-6" data-aos="fade-up">
              {testimonials
                .filter((_, i) => i !== currentIndex)
                .slice(0, 2)
                .map((testimonial, i) => (
                  <div key={i} className="bg-base-100 card p-6 shadow-lg border border-base-300/20 hover:border-primary/30 transition-all">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-primary/10">
                        <Image src={testimonial.photo || "/images/default-avatar.png"} alt={testimonial.name || "Foto testimoni"} width={56} height={56} className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base-content">{testimonial.name}</h4>
                        <div className="flex mt-1">{renderStars(testimonial.rating)}</div>
                      </div>
                    </div>
                    <p className="opacity-75 line-clamp-3">{testimonial.quote}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Logo Kepercayaan */}
        {data.trustLogos && data.trustLogos.length > 0 && (
          <div className="mt-20 bg-base-100 card p-6 md:p-8 shadow-lg" data-aos="fade-up">
            <h3 className="text-center text-2xl md:text-3xl font-playfair font-bold text-base-content mb-10">{data.meta.trustTitle}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
              {data.trustLogos.map((media, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-4 hover:scale-105 transition-all duration-300 hover:bg-primary/10 bg-base-200 card group">
                  <div className="bg-base-200 w-20 h-20 card flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-content transition-colors">{media.icon}</div>
                  <span className="text-sm font-medium text-base-content/80 group-hover:text-base-content">{media.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
