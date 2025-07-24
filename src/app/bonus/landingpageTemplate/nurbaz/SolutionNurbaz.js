import Image from "next/image";

export default function SolutionNurbaz({ secId, data, widthSection, fontTitle }) {
  return (
    <section className="py-20 bg-base-200 text-base-content">
      <div className={`container mx-auto px-4 ${widthSection}`}>
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-zoom-in">
          <h2 className={`text-4xl font-bold mb-4 ${fontTitle}`}>{data.title}</h2>
          <p className="text-lg opacity-75">Desain minimalis dengan presisi tinggi untuk pria yang menghargai detail</p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {data.features.map((feature, index) => (
            <div key={index} className="bg-base-100 text-base-content p-8 rounded-xl transition-all hover:shadow-lg hover:border-yellow-400/20 border border-base-300" data-aos="fade-left">
              <div className="mb-5 text-yellow-400">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="opacity-75">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.gallery.map((img, index) => (
            <div key={index} className="relative aspect-square rounded-2xl overflow-hidden shadow-lg transform transition duration-500 hover:-translate-y-2" data-aos="flip-left">
              <Image
                src={img}
                alt={`Premium watch detail ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
