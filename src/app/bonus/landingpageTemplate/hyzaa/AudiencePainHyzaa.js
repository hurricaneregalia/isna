import Wrapper from "./ui/Wrapper";
import HeaderSection from "./ui/HeaderSection";
import Title from "./ui/Title";
import Bodytext from "./ui/Bodytext";
import Image from "next/image";
import { FaMountainSun } from "react-icons/fa6";

export default function AudiencePainHyzaa({ paddingX, data }) {
  const { pegunungan, rider, pains } = data;

  return (
    <Wrapper cardTop="y">
      <HeaderSection label={data.label} headline={data.headline} />
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 mt-12">
        {/* Render pegunungan langsung, bukan array */}
        <div className="sm:text-start text-center flex flex-col h-full">
          <div className="card relative w-full aspect-square overflow-hidden shadow-lg shadow-primary/10" data-aos="flip-left">
            <Image src={pegunungan.imageUrl} alt={pegunungan.title} fill sizes="(max-width: 768px) 100vw, 700px" className="object-cover" />
          </div>
          <div className="mt-5">
            <div className="flex gap-2 sm:justify-start justify-center">
              <FaMountainSun className="mt-1" />
              <Title text={pegunungan.title} />
            </div>
            <Bodytext text={pegunungan.description} />
          </div>
        </div>

        {/* Render rider langsung */}
        <div className="sm:h-auto w-full h-120 sm:py-0 py-10">
          <div className="relative sm:w-auto w-full h-full">
            <Image src={rider.imageUrl} alt={rider.title} fill sizes="(max-width: 768px) 100vw, 700px" className="object-contain object-bottom" />
          </div>
        </div>

        {/* pains tetap pakai loop karena array */}
        <div className="space-y-5 lg:col-span-1 sm:col-span-2 lg:mt-0 sm:mt-10 mt-5">
          {pains.map((item, idx) => (
            <div key={idx} className="bg-base-100 card overflow-hidden shadow-lg shadow-primary/10 px-5 py-3" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="flex gap-5 items-center">
                <div className="text-4xl text-error">{item.icon}</div>
                <div className="text-start">
                  <Title text={item.title} />
                  <Bodytext text={item.description} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
