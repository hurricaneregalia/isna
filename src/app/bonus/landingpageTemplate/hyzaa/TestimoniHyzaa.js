import Image from "next/image";
import Wrapper from "./ui/Wrapper";
import HeaderSection from "./ui/HeaderSection";
import { FaBiking } from "react-icons/fa";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

export default function TestimoniHyzaa({ data }) {
  return (
    <Wrapper bg="bg-base-200">
      <HeaderSection label={data.label} headline={data.headline} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {data.items.map((item, idx) => (
          <div key={item.id || item.name || idx} className="bg-base-100 card shadow-lg p-5 h-full flex flex-col" data-aos="fade-up">
            <div className="flex items-start gap-4 h-full">
              <div className="w-16 h-16 relative flex-shrink-0 overflow-hidden rounded-full">
                <Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, 700px" className="object-cover" priority={idx < 2} />
              </div>
              <div className="flex-1 flex flex-col text-base-content text-left gap-3 h-full">
                <div className="text-sm text-primary card bg-primary/10 w-fit font-medium px-2 py-1">
                  <div className="flex items-center gap-1">
                    <FaBiking aria-hidden="true" /> {item.variant}
                  </div>
                </div>
                <p className="text-sm italic opacity-75">{item.quote}</p>
                <div className={`wrapperInfo-${idx} gap-3 mt-auto space-y-2`}>
                  <div className={`author-${idx}`}>
                    <p className="font-bold text-base">{item.name}</p>
                    <p className="text-sm opacity-75">{item.role}</p>
                  </div>
                  <div className={`quoteIcon-${idx} flex text-4xl gap-3 opacity-10`}>
                    <FaQuoteLeft aria-hidden="true" /> <FaQuoteRight aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
