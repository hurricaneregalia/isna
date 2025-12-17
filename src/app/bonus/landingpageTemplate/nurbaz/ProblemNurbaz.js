import Image from "next/image";
import { FiCheck } from "react-icons/fi";

export default function ProblemNurbaz({ secId, data, widthSection, fontTitle }) {
  return (
    <section className="py-20 bg-base-100 text-base-content" id="tampilanBiasa">
      <div className={`container mx-auto px-4 ${widthSection}`}>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Gambar dan testimoni */}
          <div className="lg:w-1/2 relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl" data-aos="flip-left">
              <Image
                src={data.problem.imageUrl}
                alt="Business meeting setting"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition duration-500"
                width={900}
                height={900}
              />
            </div>
            <div className="bg-base-200 absolute -bottom-6 -right-6 text-base-content p-6 rounded-xl shadow-lg max-w-xs border border-base-300" data-aos="fade-left">
              <div className="flex items-center">
                <div className=" rounded-xl w-16 h-16 overflow-hidden">
                  <Image
                    src={data.testimoni.reviews[0].image}
                    alt={data.testimoni.reviews[0].name}
                    width={60}
                    height={60}
                    className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-dashed border-primary p-1"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-bold">{data.testimoni.reviews[0].name}</p>
                  <p className="text-sm opacity-75">{data.testimoni.reviews[0].location}</p>
                </div>
              </div>
              <p className="mt-3 italic opacity-75">{data.testimoni.reviews[0].quote}</p>
            </div>
          </div>

          {/* Teks dan poin-poin masalah */}
          <div className="lg:w-1/2">
            <h2 className={`text-4xl font-bold mb-8 ${fontTitle}`} data-aos="fade-up">
              {data.problem.title}
            </h2>
            <div className="space-y-6">
              {data.problem.points.map((point, index) => (
                <div key={index} className="flex items-start" data-aos="fade-up">
                  <div className="shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center">
                      <FiCheck />
                    </div>
                  </div>
                  <p className="ml-2 text-lg opacity-75">{point}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 rounded-xl border border-neutral" data-aos="fade-up">
              <p className="font-medium">
                <span className="text-warning font-bold">Faktanya:</span> 78% eksekutif menganggap jam tangan sebagai indikator keseriusan profesional
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
