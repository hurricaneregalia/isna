import { FaRegClock, FaPalette, FaHome } from "react-icons/fa";
import Image from "next/image";

const painPointsData = {
  items: [
    {
      icon: <FaRegClock className="w-6 h-6 md:w-8 md:h-8" />,
      text: "Sibuk dengan pekerjaan tapi ingin merubah interior rumah.",
    },
    {
      icon: <FaHome className="w-6 h-6 md:w-8 md:h-8" />,
      text: "Tidak punya waktu membuat desain interior yang diinginkan.",
    },
    {
      icon: <FaPalette className="w-6 h-6 md:w-8 md:h-8" />,
      text: "Kesulitan memadukan warna dan material untuk setiap ruangan.",
    },
  ],
  beforeAfter: {
    before: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    after: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
  },
};

export function PainPointsSectionZemira() {
  return (
    <section className="py-16 md:py-24 bg-base-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Pain Points List */}
          <div className="lg:w-1/2 space-y-8 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              <span className="text-primary">Masalah</span> Yang Sering Dihadapi Klien Kami
            </h2>

            <div className="space-y-6">
              {painPointsData.items.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 hover:bg-neutral/5 rounded-lg transition-all duration-300 cursor-default">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg flex-shrink-0">{item.icon}</div>
                  <p className="text-lg md:text-xl mt-1.5 opacity-75">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-base-200 p-6 rounded-xl border-l-4 border-primary transition-all hover:shadow-sm">
              <p className="italic opacity-75">
                "Kami memahami kesibukan Anda. Tim profesional kami akan mengurus semuanya mulai dari konsep hingga eksekusi."
              </p>
            </div>
          </div>

          {/* Before/After Image */}
          <div className="lg:w-1/2 relative order-1 lg:order-2">
            <div className="relative h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <Image
                src={painPointsData.beforeAfter.before}
                alt="Ruangan sebelum renovasi"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center"></div>
            </div>

            <div className="relative h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-xl mt-8 hover:shadow-2xl transition-shadow duration-300">
              <Image
                src={painPointsData.beforeAfter.after}
                alt="Ruangan setelah renovasi"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
