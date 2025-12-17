// src/app/bonus/lpComponentGlobal/BenefitsSection.js
export default function BenefitsSection({
  id,
  title = "Kenapa Memilih Kami?",
  features = [],
  columns = 2,
  iconSize = "text-4xl",
  variant = "default", // 'default' or 'card'
  idColor,
}) {
  const gridCols = columns === 1 ? "grid-cols-1" : columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-2";

  // Variant styles
  const variants = {
    default: {
      feature: "bg-transparent",
      padding: "p-0",
      hover: "hover:translate-y-0",
    },
    card: {
      feature: "bg-base-200 rounded-xl shadow-md",
      padding: "p-6",
      hover: "hover:-translate-y-2 hover:shadow-lg",
    },
  };
  const textIdFx = idColor ? "text-slate-500" : "text-amber-300";

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-base-100 dark:bg-gray-900" id={id}>
      <div className="max-w-7xl mx-auto">
        {/* Header with decorative elements */}
        <div className="text-center mb-12 md:mb-16 relative">
          <p className={`font-semibold capitalize ${textIdFx}`}>{id.replace(/-/g, " ")}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 capitalize">{title}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Solusi unggulan kami dirancang untuk membantu bisnis Anda tumbuh lebih cepat
          </p>
        </div>

        {/* Features Grid */}
        <div className={`grid gap-6 sm:gap-8 ${gridCols}`}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center ${variants[variant].padding} ${variants[variant].feature} transition-all duration-300 ${variants[variant].hover} group`}
            >
              {/* Icon Container with gradient background */}
              <div className={`${iconSize} mb-4 p-3 bg-linear-to-br from-primary to-secondary rounded-full text-white`}>{feature.icon}</div>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{feature.description}</p>

              {/* Optional Learn More link */}
              {feature.link && (
                <a href={feature.link} className="mt-auto text-primary font-medium flex items-center justify-center gap-2 hover:gap-3 transition-all">
                  Pelajari lebih lanjut
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
