import SectionWrapper from "./ui/SectionWrapper";
import LinkButtonWarning from "./ui/LinkButtonWarning";
import Heading from "./ui/Heading";

export default function CallToActionSectionMirka({ siteName, data, secId }) {
  return (
    <section id={secId}>
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${data.imageUrl})`, backgroundAttachment: "fixed" }}>
        <div className="relative bg-gradient-to-b from-slate-900 to-slate-900/80 w-full min-h-screen flex flex-col justify-center items-center">
          <SectionWrapper css="sm:px-20">
            <div className="w-full flex flex-col md:flex-row items-start justify-center">
              <div className="w-full lg:w-6/12 sm:w-10/12 text-white text-center">
                <Heading>{data.title}</Heading>
                <p className=" text-white mt-10 opacity-75">{data.subtitle}</p>
                <hr className=" sm:my-8 my-10 opacity-0" />
                <LinkButtonWarning href="#daftar">Gabung</LinkButtonWarning>
              </div>
            </div>
          </SectionWrapper>
          <footer className="border-t bg-transparent text-white absolute bottom-0 py-3 w-11/12 opacity-30 text-center">{siteName}</footer>
        </div>
      </div>
    </section>
  );
}
