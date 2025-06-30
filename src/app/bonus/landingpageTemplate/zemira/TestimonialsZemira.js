"use client";
import React, { useState } from "react";
import Image from "next/image";
// Tambahan import icon media sosial
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { HiStar, HiChevronLeft, HiChevronRight, HiOutlineOfficeBuilding, HiOutlineBriefcase } from "react-icons/hi";
import { FaAmazon, FaApple, FaFacebook, FaGoogle, FaSpotify, FaWindows, FaWordpress } from "react-icons/fa6";

export default function TestimonialsZemira() {
  const testimonials = [
    {
      name: "dr. Anindita Putri, Sp.KJ",
      profession: "Psikiater",
      company: "RS Premier Bintaro",
      quote: "Sebagai dokter yang sibuk, saya tidak punya waktu untuk desain rumah. Tim ini memahami kebutuhan keluarga saya dan menciptakan ruang penyembuhan di rumah yang sempurna.",
      rating: 5,
      photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Bambang Sutrisno, S.H., M.H.",
      profession: "Pengacara",
      company: "Sutrisno & Partners Law Firm",
      quote: "Rumah saya sekarang menjadi tempat favorit untuk menjamu klien penting. Desainnya elegan namun tetap hangat untuk keluarga.",
      rating: 5,
      photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Dian Sastrowardoyo",
      profession: "CEO",
      company: "Surya Teknologi Group",
      quote: "Investasi terbaik untuk keluarga saya. Setiap sudut rumah bercerita tentang kepribadian kami. Tim profesional yang sangat memahami selera high-end.",
      rating: 5,
      photo: "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Prof. Dr. H. Ahmad Fauzi, M.Eng",
      profession: "Dosen & Konsultan",
      company: "Universitas Indonesia",
      quote: "Desain home office saya sekarang menjadi ruang produktivitas sekaligus inspirasi. Material premium yang digunakan benar-benar terasa kualitasnya.",
      rating: 5,
      photo: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  // Render rating stars
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => <HiStar key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-current" : "text-base-content/20"}`} />);
  };

  return (
    <section id="testimonial" className="py-16 md:py-24 bg-base-200">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="w-fit px-4 bg-primary/10 text-primary btn cursor-text shadow-none border-none mb-3" data-aos="fade-up">
            Apa Kata Klien
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-base-content mb-6" data-aos="fade-up">
            Kepercayaan dari <span className="text-primary">Profesional Terkemuka</span>
          </h2>
          <p className="text-lg opacity-75" data-aos="fade-up">
            Mereka yang telah mempercayakan desain rumah impian pada tim ahli kami
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-8 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 bg-primary/20 rounded-full p-3 shadow-lg hover:bg-primary hover:text-base-100 transition-all"
            aria-label="Previous testimonial"
          >
            <HiChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-8 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 bg-primary/20 rounded-full p-3 shadow-lg hover:bg-primary hover:text-base-100 transition-all"
            aria-label="Next testimonial"
          >
            <HiChevronRight className="h-6 w-6" />
          </button>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main Testimonial */}
            <div className="bg-base-100 rounded-2xl p-8 shadow-xl border border-base-300/30" data-aos="fade-up">
              <div className="flex items-start mb-6">
                <div className="relative mr-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/10">
                    <Image src={testimonials[currentIndex].photo} alt={testimonials[currentIndex].name} width={80} height={80} className="object-cover" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-primary text-base-100 rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="font-bold">{testimonials[currentIndex].rating}.0</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-base-content">{testimonials[currentIndex].name}</h3>
                  <div className="flex items-center mt-1 mb-2 text-xs">
                    <HiOutlineBriefcase className="text-primary mr-2" />
                    <span className="opacity-75 ">{testimonials[currentIndex].profession}</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <HiOutlineOfficeBuilding className="text-primary mr-2" />
                    <span className="text-base-content/70">{testimonials[currentIndex].company}</span>
                  </div>
                </div>
              </div>

              <div className="pl-2 border-l-4 border-primary/50">
                <p className="text-lg italic opacity-75 mb-6">"{testimonials[currentIndex].quote}"</p>
                <div className="flex">{renderStars(testimonials[currentIndex].rating)}</div>
              </div>
            </div>

            {/* Secondary Testimonials */}
            <div className="grid grid-cols-1 gap-6" data-aos="fade-up">
              {testimonials
                .filter((_, i) => i !== currentIndex)
                .slice(0, 2)
                .map((testimonial, index) => (
                  <div key={index} className="bg-base-100 rounded-2xl p-6 shadow-lg border border-base-300/20 hover:border-primary/30 transition-all">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-primary/10">
                        <Image src={testimonial.photo} alt={testimonial.name} width={56} height={56} className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base-content">{testimonial.name}</h4>
                        <div className="flex mt-1">{renderStars(testimonial.rating)}</div>
                      </div>
                    </div>
                    <p className="opacity-75 line-clamp-3">"{testimonial.quote}"</p>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Trust Badges Section */}
        <div className="mt-20 bg-base-100 rounded-2xl p-6 md:p-8 shadow-lg" data-aos="fade-up">
          <h3 className="text-center text-2xl md:text-3xl font-playfair font-bold text-base-content mb-10">Klien Kami yang Luar Biasa</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <FaGoogle className="w-8 h-8" />, label: "Google" },
              { icon: <FaWindows className="w-8 h-8" />, label: "Microsoft" },
              { icon: <FaWordpress className="w-8 h-8" />, label: "WordPress" },
              { icon: <FaYoutube className="w-8 h-8" />, label: "YouTube" },
              { icon: <FaApple className="w-8 h-8" />, label: "Apple" },
              { icon: <FaAmazon className="w-8 h-8" />, label: "Amazon" },
              { icon: <FaFacebook className="w-8 h-8" />, label: "Facebook" },
              { icon: <FaSpotify className="w-8 h-8" />, label: "Spotify" },
            ].map((media, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-4 transition-all duration-300 hover:scale-105 hover:bg-primary/10 bg-base-200 rounded-xl group">
                <div className="bg-base-200 w-20 h-20 rounded-full flex items-center justify-center mb-3 transition-colors group-hover:bg-primary group-hover:text-primary-content">{media.icon}</div>
                <span className="text-sm font-medium text-base-content/80 transition-colors group-hover:text-base-content">{media.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
