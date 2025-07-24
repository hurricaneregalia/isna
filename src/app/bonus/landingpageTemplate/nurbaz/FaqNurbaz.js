export default function FaqNurbaz({ secId, data }) {
  return (
    <section className="py-20 bg-base-100 text-base-content transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <div className="join join-vertical">
          {data.faq.items.map((item, index) => {
            const questionId = `faq-question-${index}`;
            return (
              <div className="collapse collapse-arrow join-item border bg-base-100 border-base-300" key={index} data-aos="fade-up">
                <input type="radio" name="faq-accordion" defaultChecked={index === 0} aria-labelledby={questionId} />
                <div className="collapse-title font-semibold" id={questionId}>
                  {item.question}
                </div>
                <div className="collapse-content text-sm opacity-75">{item.answer}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
