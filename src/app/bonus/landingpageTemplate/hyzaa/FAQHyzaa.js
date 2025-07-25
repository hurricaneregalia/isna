import Wrapper from "./ui/Wrapper";
import HeaderSection from "./ui/HeaderSection";

export default function FAQHyzaa({ data }) {
  return (
    <Wrapper cardBottom="y">
      <HeaderSection label={data.label} headline={data.headline} />
      <div className="mt-10 space-y-3 lg:w-8/12 w-full mx-auto">
        {data.items.map((item, idx) => (
          <div key={idx} className="collapse collapse-arrow shadow-lg shadow-primary/10 bg-base-100 text-start" data-aos="fade-up">
            <input type="radio" name="faq-accordion" defaultChecked={idx === 0} aria-labelledby={`faq-title-${idx}`} />
            <div id={`faq-title-${idx}`} className="collapse-title font-semibold text-base-content">
              {item.question}
            </div>
            <div className="collapse-content text-sm text-base-content/75">{item.answer}</div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
