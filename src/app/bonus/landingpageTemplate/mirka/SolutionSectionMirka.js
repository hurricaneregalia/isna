import React from "react";
import ImageComponent from "./ui/ImageComponent";
import BodyText from "./ui/BodyText";
import SectionWrapper from "./ui/SectionWrapper";
import Heading from "./ui/Heading";

export default function SolutionSectionMirka({ data, secId }) {
  return (
    <section id={secId}>
      <div className=" bg-slate-900  lg:px-20 sm:pb-32 pb-5 ">
        <SectionWrapper css="sm:px-20 lg:flex flex-1 gap-20 space-y-10">
          <div className="lg:w-4/12 w-full text-white">
            <Heading>{data.title}</Heading>
            <hr className=" lg:my-8 my-4 opacity-0" />
            <BodyText>{data.description}</BodyText>
          </div>
          <div className="lg:w-8/12 w-full ">
            <ImageComponent src={data.image} alt={data.title} />
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
