import SectionWrapper from "./ui/SectionWrapper";
import Heading from "./ui/Heading";
import LinkButton from "./ui/LinkButton";

export default function CallToActionSectionMirka({ siteName, data, secId }) {
  return (
    <section id={secId}>
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${data.imageUrl})`, backgroundAttachment: "fixed" }}>
        <div className="relative bg-gradient-to-b from-base-100 via-base-100/80 to-base-100/80 w-full min-h-screen flex flex-col justify-center items-center">
          <SectionWrapper css="sm:px-20">
            <div className="w-full flex flex-col md:flex-row items-start justify-center">
              <div className="w-full lg:w-6/12 sm:w-10/12 text-base-content text-center">
                <Heading textColor="text-primary">{data.title}</Heading>
                <p className=" text-base-content mt-10 opacity-75">{data.subtitle}</p>
                <hr className=" sm:my-8 my-10 opacity-0" />
                <LinkButton href="#daftar">Gabung</LinkButton>
              </div>
            </div>
          </SectionWrapper>
          <footer className="border-t bg-transparent text-base-content absolute bottom-0 py-3 w-11/12 opacity-30 text-center">{siteName}</footer>
        </div>
      </div>
    </section>
  );
}
