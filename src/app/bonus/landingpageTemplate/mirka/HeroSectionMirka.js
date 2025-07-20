import { BiComment, BiHeart, BiPaperPlane } from "react-icons/bi";
import SectionWrapper from "./ui/SectionWrapper";
import HeaderSectionMirka from "./HeaderSectionMirka";
import LinkButton from "./ui/LinkButton";

export default function HeroSectionMirka({ data, secId, siteName }) {
  return (
    <section id={secId}>
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${data.image})` }}>
        <HeaderSectionMirka siteName={siteName} bgColor="  bg-primary/20" textColor="text-base-300" widthNavbar="max-w-7xl mx-auto sm:px-18 px-6 " btnThemeBorder="border-base-100" />
        <div className=" bg-gradient-to-t from-primary  to-primary/20  w-full min-h-screen flex flex-col justify-start sm:justify-center sm:items-center items-start">
          <SectionWrapper css="sm:px-20">
            <div className="w-full p-4 sm:mt-0 mt-15">
              {/* Wrapper untuk title dan iconSet */}
              <div className="flex flex-col md:flex-row md:space-x-4 mb-6 text-base-300">
                <h1 id="title" className="text-4xl md:text-5xl font-extrabold mb-4 md:mb-0 lg:w-6/12 sm:w-8/12 w-full">
                  {data.heading}
                </h1>
                <div id="iconSet" className=" items-end  lg:w-6/12 sm:w-4/12 w-full">
                  <div className=" p-3 text-2xl card border border-base-300 sm:float-right sm:w-10/12 lg:w-3/12 w-8/12">
                    <span className="flex justify-between">
                      <BiHeart /> <BiComment /> <BiPaperPlane />
                    </span>
                  </div>
                </div>
              </div>
              <hr className="my-10 opacity-0" />
              <div id="heroButton">
                <LinkButton linkType="secondary" href="#daftar">
                  Gabung
                </LinkButton>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
