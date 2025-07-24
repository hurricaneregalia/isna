export default function HowtoNurbaz({ secId, data, widthSection, fontTitle }) {
  return (
    <section className="py-20 bg-base-200 text-base-content transition-colors duration-300">
      <div className={`container mx-auto px-4 ${widthSection}`}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`${fontTitle} text-4xl font-bold mb-6`}>{data.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {data.steps.map((step, index) => (
            <div key={index} className="relative" data-aos="fade-up">
              {/* Icon bubble absolute: tetap diposisikan terhadap elemen ini */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center text-white z-10">{step.icon}</div>

              {/* Kontainer utama: jangan pakai `relative` di sini */}
              <div className="bg-base-100 text-base-content p-8 pt-16 rounded-xl shadow-md h-full flex flex-col border border-base-300">
                <div className="text-3xl font-bold text-base-content opacity-10 mb-2 absolute top-8 right-8 select-none">0{index + 1}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-base-content/70 flex-grow">{step.description}</p>

                {index < data.steps.length - 1 && (
                  <div className="hidden md:block absolute top-24 -right-8">
                    <svg className="w-16 h-auto text-base-content/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
