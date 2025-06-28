"use client";
import React, { useState } from "react";
import { HiOutlineGift, HiOutlineClock, HiOutlineShieldCheck } from "react-icons/hi";

export default function SpecialOfferZemira() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasi pengiriman form
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form setelah 5 detik
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        propertyType: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="penawaran" className="py-16 md:py-24 bg-gradient-to-br from-base-200 to-base-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Konten Penawaran */}
          <div className="lg:w-1/2">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-base-100 relative overflow-hidden">
              {/* Dekorasi */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-base-100/20"></div>
              <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-base-100/20"></div>

              <div className="relative z-10">
                <span className="inline-flex items-center px-4 py-1 bg-base-100 text-primary rounded-full mb-6">
                  <HiOutlineGift className="mr-2" />
                  Penawaran Spesial
                </span>

                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                  Konsultasi Gratis + <span className="text-base-100">Diskon 15%</span> Paket Lengkap
                </h2>

                <p className="text-lg mb-8">
                  Khusus untuk 20 pendaftar pertama bulan ini. Dapatkan penawaran eksklusif untuk transformasi rumah impian Anda!
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <HiOutlineGift className="h-6 w-6 mr-3 text-base-100" />
                    <span>Konsultasi Gratis dengan Desainer Elite</span>
                  </div>
                  <div className="flex items-center">
                    <HiOutlineClock className="h-6 w-6 mr-3 text-base-100" />
                    <span>Diskon 15% Paket Desain Lengkap</span>
                  </div>
                  <div className="flex items-center">
                    <HiOutlineShieldCheck className="h-6 w-6 mr-3 text-base-100" />
                    <span>Free 3D Rendering + Swatch Material Eksklusif</span>
                  </div>
                </div>

                <div className="bg-base-100/20 p-4 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-base-100 text-primary w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl">20</div>
                    </div>
                    <p className="text-base-100">
                      <span className="font-bold">Kuota Terbatas!</span> Hanya tersisa 8 slot dari 20 kuota penawaran spesial
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Badge Privasi */}
            <div className="mt-8 flex items-center justify-center lg:justify-start">
              <div className="bg-base-100 p-4 rounded-xl shadow-lg flex items-center">
                <HiOutlineShieldCheck className="h-8 w-8 text-primary mr-3" />
                <div>
                  <p className="font-semibold text-base-content">Privasi Terjamin</p>
                  <p className="text-sm text-base-content/70">Data Anda aman dan hanya digunakan untuk layanan premium</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Lead Generation */}
          <div className="lg:w-1/2 bg-base-100 rounded-2xl p-8 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <HiOutlineGift className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-base-content mb-4">Terima Kasih Atas Minat Anda!</h3>
                <p className="text-lg text-base-content/80 mb-6">
                  Penawaran spesial telah dikirim ke email Anda. Tim konsultan kami akan menghubungi Anda dalam 1x24 jam.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="btn btn-primary">
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl md:text-3xl font-playfair font-bold text-base-content mb-2">Dapatkan Penawaran Eksklusif</h3>
                <p className="text-base-content/80 mb-8">Isi formulir berikut untuk mengklaim penawaran spesial dan konsultasi gratis</p>

                <form onSubmit={handleSubmit}>
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-base-content font-medium mb-2">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Contoh: Dr. Anindita Putri"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-base-content font-medium mb-2">
                          Email Profesional
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="anda@perusahaan.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-base-content font-medium mb-2">
                          Nomor WhatsApp
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="0812-3456-7890"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="propertyType" className="block text-base-content font-medium mb-2">
                        Jenis Properti
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Pilih jenis properti</option>
                        <option value="rumah">Rumah Tinggal</option>
                        <option value="apartemen">Apartemen</option>
                        <option value="kantor">Rumah + Kantor</option>
                        <option value="villa">Villa</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-base-content font-medium mb-2">
                        Pesan Tambahan (Opsional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Deskripsi singkat kebutuhan Anda"
                      ></textarea>
                    </div>

                    <div className="pt-4 text-center">
                      <button
                        type="submit"
                        className="w-fit btn btn-primary btn-lg rounded-xl px-10 mx-auto font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                      >
                        Kirim
                      </button>
                    </div>

                    <div className="text-center text-sm text-base-content/70">
                      <p>Dengan mengisi formulir, Anda menyetujui kebijakan privasi kami</p>
                    </div>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
