"use client";
import { FaUserTie, FaShieldAlt, FaCalendarCheck } from "react-icons/fa";
import { FiAward, FiTrendingUp, FiHeart, FiArrowRight } from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";

const solutionsData = {
  features: [
    {
      icon: <FaUserTie className="w-10 h-10" />,
      title: "Desain Custom oleh Arsitek Berpengalaman",
      description: "Tim arsitek kami telah menyelesaikan 300+ proyek premium dengan portofolio di 5 kota besar",
    },
    {
      icon: <FaShieldAlt className="w-10 h-10" />,
      title: "Material Premium dengan Harga Terbaik",
      description: "Akses ke material eksklusif melalui jaringan supplier kami dengan garansi kualitas 2 tahun",
    },
    {
      icon: <FaCalendarCheck className="w-10 h-10" />,
      title: "Proyek Selesai Tepat Waktu",
      description: "Sistem manajemen proyek terintegrasi menjamin penyelesaian sesuai jadwal dengan kontrak jelas",
    },
  ],
  testimonials: [
    {
      name: "Dr. Ahmad Wijaya, Sp.JP",
      role: "Dokter Spesialis Jantung",
      quote: "Saya sangat sibuk dengan praktik, tapi tim ini membuat rumah saya jadi seperti magazine dalam 4 minggu!",
      avatar: "https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg",
    },
    {
      name: "Budi Santoso, S.H., M.H.",
      role: "Pengacara Senior",
      quote: "Desainnya sangat mencerminkan karakter profesional saya, semua tamu selalu terkagum-kagum",
      avatar: "https://images.pexels.com/photos/3760373/pexels-photo-3760373.jpeg",
    },
    {
      name: "Dian Paramita",
      role: "CEO Perusahaan Farmasi",
      quote: "Mereka mengerti kebutuhan keluarga besar saya dan membuat ruangan yang fungsional sekaligus elegan",
      avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
    },
  ],
};

export function SolutionShowcaseZemira() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === solutionsData.testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? solutionsData.testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-primary">Langkah Mewujudkan</span>
            <br />
            Ruang Impian yang Nyaman
          </h2>
          <p className="text-xl opacity-75">Solusi transformasi rumah anda menjadi lebih indah dan lebih nyaman.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-base-200 to-base-100 p-8 border border-base-300">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-yellow-500/10 rounded-full transition-all duration-500 group-hover:scale-150"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6 text-yellow-500">
                <FiAward size={32} />
              </div>
              <h3 className="text-2xl font-bold">Desain Eksklusif</h3>
              <div className="relative h-30 w-full rounded-xl my-5 overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"
                  alt="Ruangan sebelum renovasi"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-150"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center"></div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span className=" opacity-75">Konsep unik yang tidak dimiliki orang lain</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span className=" opacity-75">Material premium kelas high-end</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span className=" opacity-75">Sentuhan personal dari desainer profesional</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-base-200 to-base-100 p-8 border border-base-300">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full transition-all duration-500 group-hover:scale-150"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 text-blue-500">
                <FiTrendingUp size={32} />
              </div>

              <h3 className="text-2xl font-bold">Efisiensi Ruang</h3>
              <div className="relative h-30 w-full rounded-xl my-5 overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"
                  alt="Ruangan sebelum renovasi"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-150"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center"></div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span className="opacity-75">Zona kerja yang ergonomis dan sehat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span className="opacity-75">Sistem penyimpanan cerdas tanpa clutter</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span className="opacity-75">Alur kerja yang lebih lancar dan efisien</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-base-200 to-base-100 p-8 border border-base-300">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-green-500/10 rounded-full transition-all duration-500 group-hover:scale-150"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-green-500">
                <FiHeart size={32} />
              </div>
              <h3 className="text-2xl font-bold">Kenyamanan Total</h3>
              <div className="relative h-30 w-full rounded-xl my-5 overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"
                  alt="Ruangan sebelum renovasi"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-150"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center"></div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="opacity-75">Pencahayaan yang meningkatkan mood</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="opacity-75">Akustik yang sempurna untuk fokus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="opacity-75">Furniture premium yang mendukung postur ideal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-75">
            "Rumah dan kantor bukan sekadar tempat, tapi <span className="font-bold text-primary">ekstensi kepribadian</span> dan <span className="font-bold text-primary">katalis kesuksesan</span>{" "}
            Anda"
          </p>
          <button className="btn btn-primary btn-lg group">Lihat Paket</button>
        </div>
      </div>
    </section>
  );
}
