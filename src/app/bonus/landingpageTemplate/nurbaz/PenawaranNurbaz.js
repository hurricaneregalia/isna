import { FiCheck, FiGift } from "react-icons/fi";
import LandingPageWaLink from "../LandingPageWaLink";

export default function PenawaranNurbaz({ secId, data, fontTitle, widthSection, waNumber }) {
  return (
    <section className="py-20 bg-linear-to-br from-gray-900 to-black text-white">
      <div className={`container mx-auto px-4 ${widthSection}`}>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block opacity-75 px-4 py-1 rounded-full text-sm font-bold mb-6">{data.offer.badge}</span>
          <h2 className={`${fontTitle} text-4xl font-bold mb-6 `}>{data.offer.title}</h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <div className="relative">
              <div className="text-8xl font-bold text-yellow-500 relative" data-aos="fade-zoom-in">
                {data.offer.discount}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl opacity-10 font-bold">OFF</div>
              </div>
            </div>

            <div className="text-left">
              <div className="flex items-start mb-4">
                <FiGift className="text-yellow-500 mr-3" size={24} />
                <h3 className="text-xl font-bold">Bonus Spesial</h3>
              </div>
              <ul className="space-y-2">
                {data.offer.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheck className="text-yellow-500 mt-1 mr-2 shrink-0" />
                    <span className=" opacity-75">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <LandingPageWaLink
            whatsappNumber={waNumber}
            whatsappText={data.cta.whatsappText}
            linkText={data.cta.mainButton}
            id="mainButton"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-12 rounded-full text-lg transition-all transform hover:scale-105 shadow-yellow-lg"
            dataAos="fade-up"
          />
        </div>
      </div>
    </section>
  );
}
