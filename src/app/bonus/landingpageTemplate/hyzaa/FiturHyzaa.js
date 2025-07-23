import Wrapper from "./ui/Wrapper";
import HeaderSection from "./ui/HeaderSection";
import Title from "./ui/Title";
import Bodytext from "./ui/Bodytext";

export default function FiturHyzaa({ paddingX, data }) {
  return (
    <Wrapper>
      <HeaderSection label={data.label} headline={data.headline} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">
        {data.features.map((f, idx) => (
          <div key={f.title} className="bg-base-100 card p-6 shadow-lg shadow-primary/10 transition-shadow duration-300" data-aos="fade-up">
            <div className="py-10 flex justify-center">
              <span className="mask mask-squircle p-2 bg-primary/10 w-15 h-15 text-primary" aria-hidden="true">
                {f.icon}
              </span>
            </div>
            <Title text={f.title} />
            <Bodytext text={f.desc} />
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
