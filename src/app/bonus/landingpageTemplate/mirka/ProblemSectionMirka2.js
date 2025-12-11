import React from "react";
import ImageComponent from "./ui/ImageComponent";
import BodyText from "./ui/BodyText";
import SectionWrapper from "./ui/SectionWrapper";
import Heading from "./ui/Heading";

export default function ProblemSectionMirka2({ data, secId }) {
  return (
    <section id={secId}>
      <div className=" lg:px-20 ">
        <SectionWrapper css="sm:px-20 lg:flex flex-1 gap-10">
          <div className="lg:order-3 order-1 lg:w-4/12 w-full text-base-100" id="loopData">
            <Heading textColor="no">{data.title2}</Heading>
            <hr className=" lg:my-8 my-4 opacity-0" />
            <div className="space-y-3 flex-1">
              {data.item2.map((item, index) => (
                <div className="flex gap-x-3" key={index} data-aos="fade-up">
                  <span>😭</span> <p className="opacity-75">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:order-1 order-2 lg:w-4/12 w-full lg:mt-0 mt-10">
            <ImageComponent src={data.image2} alt={data.title} />
          </div>
          <div className="lg:order-2 order-3 lg:w-4/12 w-full lg:block hidden">
            <ImageComponent src={data.image3} alt={data.title} />
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
