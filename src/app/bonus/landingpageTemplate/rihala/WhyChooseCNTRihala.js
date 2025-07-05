import Image from "next/image";
import { FaExclamationTriangle, FaHandsHelping, FaMapMarkedAlt } from "react-icons/fa";

export default function ProblemSectionRihala({ secId }) {
  const dataProblem = {
    title: "Pernah Punya Niat Naik Gunung Tapi Batal?",
    subtitle: "Kami tahu persis ketakutan dan keraguanmu. Itulah kenapa kami menciptakan pengalaman pendakian & camping yang aman, menyenangkan, dan cocok banget buat pemula.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    painPoints: [
      {
        icon: <FaExclamationTriangle className="text-error text-2xl" />,
        title: "Takut nyasar.",
        text: "Tenang, kamu akan ditemani guide berpengalaman di tiap langkah. Jalur sudah kami survey, kamu tinggal nikmati perjalanan.",
      },
      {
        icon: <FaHandsHelping className="text-primary text-2xl" />,
        title: "Tidak punya perlengkapan.",
        text: "Kami sediakan semua kebutuhan: tenda, matras, sleeping bag, bahkan jas hujan. Cukup bawa semangatmu.",
      },
      {
        icon: <FaMapMarkedAlt className="text-accent text-2xl" />,
        title: "Belum punya pengalaman.",
        text: "Itu justru alasan terbaik ikut Campala. Semua dirancang untuk pemula: tempo santai, itinerary fleksibel, dan tim yang supportif.",
      },
    ],
  };

  return (
    <div className="relative isolate overflow-hidden bg-base-100 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0" id={secId}>
      {/* Background SVG */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg aria-hidden="true" className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-base-300">
          <defs>
            <pattern x="50%" y={-1} id="grid-pattern" width={200} height={200} patternUnits="userSpaceOnUse">
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-base-200">
            <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth={0} />
          </svg>
          <rect fill="url(#grid-pattern)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>

      {/* Grid Content */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-5 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
        {/* Image - sticky di kiri untuk desktop, urutan setelah heading di mobile */}
        <div className="order-2 lg:order-1 lg:sticky lg:top-4 -mt-12 -ml-12 p-12 lg:p-0">
          <Image alt={dataProblem.title} src={dataProblem.image} width={1000} height={800} className="w-full max-w-none rounded-xl bg-neutral shadow-xl ring-1 ring-base-300 sm:w-228" />
        </div>

        {/* Heading dan Pain Points di kanan desktop, urutan pertama dan ketiga di mobile */}
        <div className="order-1 lg:order-2 lg:px-8">
          {/* Heading */}
          <div className="mb-8">
            <p className="text-base font-semibold text-primary capitalize">{secId}</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-base-content sm:text-5xl">{dataProblem.title}</h2>
          </div>

          {/* Subtitle dan Pain Points */}
          <div className="max-w-xl text-base text-base-content lg:max-w-lg">
            <p>{dataProblem.subtitle}</p>
            <ul role="list" className="mt-8 space-y-8 text-base-content/80">
              {dataProblem.painPoints.map((item, index) => (
                <li className="flex gap-x-3" key={index}>
                  <span className="mt-1">{item.icon}</span>
                  <span>
                    <strong className="font-semibold text-base-content">{item.title}</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
