import Image from "next/image";
import { FaExclamationTriangle, FaHandsHelping, FaMapMarkedAlt } from "react-icons/fa";

export default function ProblemSectionRihala({ secId }) {
  const dataProblem = {
    title: "Pernah Punya Niat Naik Gunung Tapi Batal?",
    subtitle: "Kami tahu persis ketakutan dan keraguanmu. Itulah kenapa kami menciptakan panduan pendakian ini. Masalah yang biasa ditemui:",
    image: "https://images.unsplash.com/photo-1495558685573-aba7573d9c01?q=80&w=2296&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    painPoints: [
      {
        icon: <FaExclamationTriangle className="text-error text-2xl" />,
        title: "Takut nyasar.",
        text: "Tenang, kamu akan ditemani guide berpengalaman di tiap jalur.",
      },
      {
        icon: <FaExclamationTriangle className="text-error text-2xl" />,
        title: "Tidak punya perlengkapan.",
        text: "Kami sediakan semua kebutuhan, kamu cukup bawa semangatmu.",
      },
      {
        icon: <FaExclamationTriangle className="text-error text-2xl" />,
        title: "Belum punya pengalaman.",
        text: "Semua dirancang dengan panduan yang mudah diikuti siapa pun.",
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
        {/* Heading */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold text-primary capitalize">{secId}</p>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-base-content sm:text-5xl" data-aos="fade-up">
                {dataProblem.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden" data-aos="fade-left">
          <Image alt={dataProblem.title} src={dataProblem.image} width={1000} height={800} className="w-3xl max-w-none rounded-xl bg-neutral shadow-xl ring-1 ring-base-300 sm:w-228" />
        </div>

        {/* Pain Points */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base text-base-content lg:max-w-lg">
              <p className="opacity-75" data-aos="fade-up">
                {dataProblem.subtitle}
              </p>
              <ul role="list" className="mt-8 space-y-8 ">
                {dataProblem.painPoints.map((item, index) => (
                  <li className="flex gap-x-3" key={index} data-aos="fade-up">
                    <span className="mt-1">{item.icon}</span>
                    <span className="opacity-75">
                      <strong className="font-semibold text-base-content">{item.title}</strong> {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
