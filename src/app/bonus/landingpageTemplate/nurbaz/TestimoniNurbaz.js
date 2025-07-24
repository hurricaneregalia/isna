import Image from "next/image";
import { FaStar } from "react-icons/fa6";

export default function TestimoniNurbaz({ secId, data, fontTitle, widthSection }) {
  return (
    <section id="testimoni" className="py-20 bg-base-200">
      <div className={`container mx-auto px-4 ${widthSection}`}>
        <h2 className={`${fontTitle} text-4xl font-bold mb-6 text-center text-base-content`}>Testimoni</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {data.reviews.map((item, index) => (
            <div key={index} className="bg-base-100 px-5 py-10 flex flex-col items-center text-base-content rounded-xl shadow-md h-full border border-base-300" data-aos="fade-up">
              <Image src={item.image} width={50} height={50} alt={item.name} className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-dashed border-primary p-1" />
              <p className="text-sm font-semibold text-center">{item.name}</p>
              <p className="text-xs text-center italic mt-1 opacity-75">{item.quote}</p>
              <div className="flex text-warning gap-1 my-5">
                {[...Array(item.rating)].map((_, starIndex) => (
                  <FaStar key={starIndex} className="w-4 h-4" />
                ))}
              </div>
              {item.badge && <span className="mt-2 text-xs border border-neutral text-neutral px-2 py-1 rounded-full">{item.badge}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
