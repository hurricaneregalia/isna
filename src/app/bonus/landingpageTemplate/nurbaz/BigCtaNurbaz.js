import LandingPageWaLink from "../LandingPageWaLink";
import CountdownTimerNurbaz from "./CountdownTimerNurbaz";

export default function BigCtaNurbaz({ secId, data, widthSection, fontTitle, waNUmber }) {
  return (
    <section className="relative py-32 bg-[url(/images/templateLandingPageBonus/Nurbaz/images/alvaro-bernal-RgIKRYhmG2k-unsplash.jpg)] bg-cover bg-center bg-fixed">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
      </div>
      <div className="container mx-auto px-4 relative text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div data-aos="fade-zoom-in">
            <h2 className={`${fontTitle} text-4xl md:text-5xl font-bold mb-6`}>{data.cta.title}</h2>
            <p className="text-xl mb-10 opacity-75">{data.cta.subtitle}</p>
          </div>

          <div className="mb-12" data-aos="fade-up">
            <CountdownTimerNurbaz targetTime={data.offer.countdownTarget} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative" data-aos="fade-up">
            <div className="relative bg-yellow-500 rounded-full w-fit mx-auto text-yellow-500 animate-ping font-bold py-4 px-5 transition-all transform hover:scale-105 shadow-yellow-lg">
              {data.cta.mainButton}
            </div>
            <LandingPageWaLink
              whatsappNumber={waNUmber}
              whatsappText={data.cta.whatsappText}
              linkText={data.cta.mainButton}
              id="mainButton2"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ring-0 bg-yellow-500 hover:bg-yellow-600 w-fit text-black font-bold py-4 px-5 rounded-full text-lg transition-all transform hover:scale-105 shadow-yellow-lg"
            />
          </div>

          <div className="inline-block mt-20" data-aos="fade-up">
            <div className="flex items-center">
              <div className="ml-4 text-center">
                <p className="font-bold">Garansi Kepuasan 100%</p>
                <p className="text-sm text-gray-300">Uang kembali jika produk rusak dalam 30 hari</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
