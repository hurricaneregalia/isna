import Image from "next/image";
import Wrapper from "./ui/Wrapper";
import HeaderSection from "./ui/HeaderSection";
import { FaBiking } from "react-icons/fa";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

export default function TestimoniHyzaa({ paddingX, data }) {
  return (
    <section className={`bg-base-300/20  px-5 py-32 ${paddingX}`} id="testimoni-hyzaa">
      <Wrapper>
        <HeaderSection label={data.label} headline={data.headline} />

        <div className="grid grid-cols-1 sm:grid-cols-2  gap-5">
          {data.items.map((item, idx) => (
            <div key={idx} className="bg-base-100 card shadow-lg p-5 h-full flex flex-col" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="flex items-start gap-4 h-full">
                {/* Foto kiri */}
                <div className="w-16 h-16 relative flex-shrink-0 overflow-hidden rounded-full">
                  <Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, 700px" className="object-cover" />
                </div>

                {/* Konten kanan */}
                <div className="flex-1 flex flex-col text-base-content text-left gap-3 h-full">
                  <div className="text-sm text-primary card bg-primary/10 w-fit font-medium px-2 py-1">
                    <div className="flex items-center gap-1">
                      <FaBiking /> {item.variant}
                    </div>
                  </div>

                  <p className="text-sm italic opacity-75">{item.quote}</p>

                  <div id="wrapperInfo" className="gap-3 mt-auto space-y-2">
                    <div id="author">
                      <p className="font-bold text-base">{item.name}</p>
                      <p className="text-sm opacity-75">{item.role}</p>
                    </div>
                    <div id="quoteIcon" className="flex text-4xl gap-3 opacity-10">
                      <FaQuoteLeft /> <FaQuoteRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
