import { BiComment, BiHeart, BiPaperPlane } from "react-icons/bi";
import SectionWrapper from "./ui/SectionWrapper";
import ButtonWarning from "./ui/ButtonWarning";

export default function HeroSectionMirka({ data, secId }) {
  return (
    <section className=" sm:px-5 sm:pt-5 px-3 pt-3" id={secId}>
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${data.image})` }}>
        <div className=" bg-gradient-to-t from-slate-900 to-transparent w-full min-h-screen flex flex-col justify-center items-center">
          <SectionWrapper css="sm:px-20">
            <div className="w-full flex flex-col md:flex-row items-start justify-center">
              <div className="lg:w-4/12 sm:w-6/12 text-white">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{data.heading}</h1>
              </div>
              <div className="flex-1 sm:w-auto w-full">
                <div className="flex sm:justify-end justify-start w-full">
                  <div className="border border-base-300 p-3 lg:w-2/12 sm:w-5/12 w-6/12 flex justify-between text-xl text-white">
                    <BiHeart /> <BiComment /> <BiPaperPlane />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <hr className=" sm:my-16 my-40 opacity-0" />
              <ButtonWarning>Gabung</ButtonWarning>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
