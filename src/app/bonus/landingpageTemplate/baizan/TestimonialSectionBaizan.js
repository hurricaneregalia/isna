import React from "react";
import Image from "next/image";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function TestimonialSectionBaizan({ widthSection, secId, data }) {
  const widthSectionFx = widthSection ? widthSection : "max-w-6xl";
  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<FaStar key={i} className={i < count ? "text-warning" : "text-gray-300"} />);
    }
    return <div className="flex space-x-1 mt-2 justify-center">{stars}</div>;
  };

  return (
    <section id={secId} className="testimonial bg-base-100 text-base-content">
      <div className={`${widthSectionFx} mx-auto px-5 py-20`}>
        <h2 className="text-3xl md:text-4xl font-semibold text-center">{data.title}</h2>
        <p className="text-center text-base-content/80 mt-4 mb-10 max-w-xl mx-auto">{data.description}</p>

        <div className="testimonialWrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-25">
          {data.items.map((person, index) => (
            <div
              key={index}
              className="testimonialItem relative bg-base-200 sm:w-full w-10/12 mx-auto rounded-lg shadow hover:shadow-lg transition-shadow duration-300 text-center pt-16 mt-15 sm:mt-0"
              data-aos="fade-up"
            >
              {/* Floating Avatar */}
              <div id="avatarWrapper" className="absolute -top-15 left-1/2 transform -translate-x-1/2 bg-transparent border border-primary border-dashed p-2 rounded-full" data-aos="flip-left">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <Image src={person.image} alt={person.name} width={96} height={96} className="object-cover w-full h-full" />
                </div>
              </div>

              {/* Card Content */}
              <div id="testimonialCard" className="px-5 pb-5 pt-2">
                {renderStars(person.rating)}
                <h3 className="name font-semibold text-lg mt-2 text-primary">{person.name}</h3>
                <div className="text-xl mt-2 flex justify-center opacity-25 gap-2">
                  <FaQuoteLeft /> <FaQuoteRight />
                </div>
                <p className="testimonialText mt-2 text-sm text-base-content/80 italic">"{person.testimonial}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
