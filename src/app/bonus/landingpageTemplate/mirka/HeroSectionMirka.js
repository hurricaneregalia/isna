import { BiComment, BiHeart, BiPaperPlane } from "react-icons/bi";
import SectionWrapper from "./ui/SectionWrapper";
import ButtonWarning from "./ui/ButtonWarning";
import HeaderSectionMirka from "./HeaderSectionMirka";

export default function HeroSectionMirka({ data, secId, siteName }) {
  return (
    <section id={secId}>
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${data.image})` }}>
        <HeaderSectionMirka siteName={siteName} bgColor="sm:bg-transparent bg-slate-900/50" textColor="text-white/75" widthNavbar="max-w-7xl mx-auto sm:px-18 px-2" />
        <div className=" bg-gradient-to-t from-slate-900 sm:to-transparent to-slate-900/50  w-full min-h-screen flex flex-col justify-center items-center">
          <SectionWrapper css="sm:px-20">
            <div className="w-full flex flex-col md:flex-row items-start justify-center">
              <div className="lg:w-4/12 sm:w-6/12 text-white">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{data.heading}</h1>
              </div>
              <div className="flex-1 sm:w-auto w-full">
                <div className="flex sm:justify-end justify-start w-full">
                  <div className="card border border-white p-3 lg:w-2/12 sm:w-5/12 w-6/12 text-xl text-white">
                    <div className="flex justify-between w-full">
                      <BiHeart /> <BiComment /> <BiPaperPlane />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <hr className=" sm:my-16 my-15 opacity-0" />
              <ButtonWarning>Gabung</ButtonWarning>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
