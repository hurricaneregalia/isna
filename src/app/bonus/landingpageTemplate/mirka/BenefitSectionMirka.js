import React from "react";
import SectionWrapper from "./ui/SectionWrapper";
import ImageComponent from "./ui/ImageComponent";
import Heading from "./ui/Heading";

export default function BenefitSectionMirka({ data, secId }) {
  return (
    <section className="sm:px-5 sm:pb-5 px-3 pb-3" id={secId}>
      <div className="bg-transparent lg:px-20 py-32">
        <SectionWrapper css="sm:px-20 gap-20 space-y-10">
          {/* Judul */}
          <div className="lg:w-6/12 w-full capitalize mx-auto text-center">
            <Heading>{data.title}</Heading>
            <hr className="lg:my-8 my-4 opacity-0" />
          </div>

          {/* Carousel Scrollable */}
          <div className="w-full overflow-x-auto pb-5">
            <div className="carousel carousel-center space-x-4 w-max">
              {data.item.map((item, index) => (
                <div id="wrapper" key={index} className="group carousel-item relative w-64 h-95 overflow-hidden shrink-0 cursor-pointer" data-aos="flip-left">
                  <ImageComponent src={item.image} alt={item.title} aos="false" css="object-cover w-full h-full  transition-all duration-300 ease-in-out group-hover:scale-110" />

                  <div
                    id="bottom"
                    className="absolute w-full h-full bg-gradient-to-t from-slate-900 to-slate-900/80 font-bold text-slate-200 text-sm p-4 py-6 transition-all duration-500 ease-in-out group-hover:opacity-0"
                  >
                    <div id="info" className="h-full flex flex-col justify-between ">
                      <p className="text-3xl transition-all duration-500 ease-in-out group-hover:-translate-y-10 text-warning">0{index + 1}</p>
                      <p className="mt-auto transition-all duration-500 ease-in-out group-hover:translate-y-10">{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
