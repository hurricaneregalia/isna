import React from "react";
import ImageComponent from "./ui/ImageComponent";
import BodyText from "./ui/BodyText";
import SectionWrapper from "./ui/SectionWrapper";
import Heading from "./ui/Heading";

export default function ProblemSectionMirka({ data, secId }) {
  return (
    <section id={secId}>
      <div className=" bg-primary  lg:px-20 ">
        <SectionWrapper css="sm:px-20 lg:flex flex-1 gap-10">
          <div className="lg:w-4/12 w-full text-base-100">
            <Heading textColor="no">{data.title}</Heading>
            <hr className=" lg:my-8 my-4 opacity-0" />
            <BodyText>{data.description}</BodyText>
          </div>
          <div className="lg:w-8/12 w-full mt-10">
            <ImageComponent src={data.image} alt={data.title} />
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
