import Wrapper from "./ui/Wrapper";
import HeaderSection from "./ui/HeaderSection";
import Title from "./ui/Title";
import Bodytext from "./ui/Bodytext";

export default function AudiencePainHyzaaAlternate({ paddingX, data }) {
  return (
    <section className={paddingX} id="fitur-hyzaa">
      <Wrapper>
        <HeaderSection label={data.label} headline={data.headline} />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">
          {data.pains.map((f, idx) => (
            <div key={idx} className="bg-base-100 card p-5 shadow-lg shadow-primary/10 hover:shadow-lg transition-shadow duration-300" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="py-10 flex justify-center">
                <span className=" mask mask-squircle p-2 bg-primary/10 w-15 h-15 text-primary">
                  <div className="mx-auto text-center w-full h-full flex justify-center items-center text-3xl" data-aos="flip-left" data-aos-delay={idx * 100}>
                    {f.icon}
                  </div>
                </span>
              </div>
              <Title text={f.title} />
              <Bodytext text={f.description} />
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
