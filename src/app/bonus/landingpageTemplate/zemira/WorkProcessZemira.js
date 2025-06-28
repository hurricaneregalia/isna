import React from "react";
import { HiOutlineChat, HiOutlineLightBulb, HiOutlineCube, HiOutlineHome, HiOutlineCheckCircle } from "react-icons/hi";

export default function WorkProcessZemira() {
  const steps = [
    {
      icon: <HiOutlineChat className="h-8 w-8" />,
      title: "Konsultasi Eksklusif",
      description: "Diskusi mendalam tentang kebutuhan, gaya hidup, dan preferensi keluarga Anda",
      duration: "1-2 Hari",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: <HiOutlineLightBulb className="h-8 w-8" />,
      title: "Konsep & Desain",
      description: "Penyusunan mood board, 3D rendering, dan pemilihan material premium",
      duration: "3-5 Hari",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: <HiOutlineCube className="h-8 w-8" />,
      title: "Produksi Material",
      description: "Pengadaan furnitur custom dan material eksklusif dari mitra pilihan",
      duration: "7-14 Hari",
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      icon: <HiOutlineHome className="h-8 w-8" />,
      title: "Implementasi",
      description: "Instalasi profesional oleh tim ahli dengan pengawasan ketat",
      duration: "3-7 Hari",
      color: "text-info",
      bgColor: "bg-info/10",
    },
  ];

  return (
    <section id="proses" className="py-16 md:py-24 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full mb-4">Tanpa Ribet</span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-base-content mb-6">
            Proses <span className="text-primary">Premium & Terstruktur</span> untuk Kenyamanan Anda
          </h2>
          <p className="text-lg text-base-content/80">
            Kami merancang pengalaman tanpa repot dari awal hingga akhir, memastikan setiap detail sesuai ekspektasi keluarga profesional seperti Anda
          </p>
        </div>

        {/* Timeline Proses */}
        <div className="relative">
          {/* Garis Timeline */}

          <div className="absolute left-10 top-0 bottom-0 w-1 bg-base-300/30 md:hidden"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center md:items-start text-center md:text-left ${
                  index % 2 === 0 ? "md:pt-0" : "md:pt-10"
                }`}
              >
                {/* Ikon dengan Garis Konektor */}
                <div className="relative">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${step.bgColor}`}>
                    <div className={step.color}>{step.icon}</div>
                  </div>

                  {/* Indikator Tahap */}
                  <div className="absolute -top-2 -right-2 bg-base-100 border-2 border-primary rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="font-bold text-primary">{index + 1}</span>
                  </div>
                </div>

                {/* Konten */}
                <div className="md:ml-6 flex-1">
                  <h3 className="text-xl font-semibold text-base-content mb-2">{step.title}</h3>
                  <p className="text-base-content/80 mb-3">{step.description}</p>
                  <div className="flex items-center justify-center md:justify-start">
                    <HiOutlineCheckCircle className={`${step.color} mr-2`} />
                    <span className="text-sm font-medium text-base-content/70">{step.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Garansi Kepuasan */}
        <div className="mt-20 border border-primary rounded-2xl p-8 md:p-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 mb-6">
              <HiOutlineCheckCircle className="text-primary mr-2 text-xl" />
              <span className="font-semibold opacity-75">Garansi Kepuasan</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
              Transformasi Rumah Anda dengan <span className="text-primary">Jaminan Kualitas</span>
            </h3>
            <p className=" text-lg mb-6 opacity-75">
              Kami memberikan revisi desain tanpa batas hingga Anda 100% puas. Tidak ada pembayaran penuh sebelum implementasi selesai dan disetujui.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Material Premium", "Desain Eksklusif", "Tim Profesional", "Garansi 1 Tahun"].map((item, i) => (
                <div key={i} className="bg-primary/20 py-3 px-4 rounded-lg backdrop-blur-sm">
                  <span className="font-bold text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
