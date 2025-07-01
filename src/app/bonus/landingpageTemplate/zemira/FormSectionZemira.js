"use client";
import React, { useState } from "react";
import { HiOutlineGift } from "react-icons/hi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function FormSectionZemira({ offerContent, waNumber, secId }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // ✅ Modal loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, propertyType, message } = formData;

    if (!name || !email || !phone || !propertyType) {
      alert("Mohon lengkapi semua data terlebih dahulu.");
      return;
    }

    setIsLoading(true); // ✅ Tampilkan modal loading

    const waMessage = `
    Sayang ingin daftar:

🧑 Nama: ${name}
📧 Email: ${email}
📱 No. WhatsApp: ${phone}
🏠 Jenis Properti: ${propertyType}
📝 Pesan Tambahan: ${message || "-"}
`.trim();

    const encodedMessage = encodeURIComponent(waMessage);
    const waUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`;

    setTimeout(() => {
      window.location.href = waUrl;
      // ✅ Jangan lakukan apa-apa lagi setelah ini
    }, 3000); // Modal tampil selama 3 detik dulu, bisa kamu ubah jadi 1000 kalau ingin lebih cepat
  };

  return (
    <div className="relative">
      {/* ✅ Modal Loading */}
      {isLoading && (
        <div className="fixed inset-0 bg-base-200 bg-opacity-90 z-50 flex items-center justify-center">
          <div className="text-center">
            <AiOutlineLoading3Quarters className="h-12 w-12 text-primary animate-spin mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-base-content">Mengirim data...</h3>
            <p className="text-sm text-base-content opacity-75 mt-2">Harap tunggu sebentar</p>
          </div>
        </div>
      )}

      {/* Form Section */}
      <div className="w-full bg-base-100 rounded-2xl p-8 shadow-xl" data-aos="fade-up" id={secId}>
        {isSubmitted ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <HiOutlineGift className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-playfair font-bold opacity-75 mb-4">{offerContent.successTitle}</h3>
            <p className="text-lg opacity-75 mb-6">{offerContent.successMessage}</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-primary mb-2">{offerContent.formTitle}</h3>
            <p className="opacity-75 mb-8">{offerContent.formDescription}</p>

            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-base-content font-medium mb-2">
                    Nama Lengkap <span className="text-error text-xl">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Anindita Putri"
                    className="w-full input input-lg bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-base-content font-medium mb-2">
                      Email <span className="text-error text-xl">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="anda@perusahaan.com"
                      className="w-full input input-lg bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-base-content font-medium mb-2">
                      Nomor WhatsApp <span className="text-error text-xl">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="6281234567890"
                      className="w-full input input-lg bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="propertyType" className="block text-base-content font-medium mb-2">
                    Jenis Properti <span className="text-error text-xl">*</span>
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    required
                    className="select select-lg w-full bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                    placeholder="Deskripsi singkat kebutuhan Anda"
                    className="w-full textarea textarea-lg bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  ></textarea>
                </div>

                <div className="pt-4 text-center">
                  <button type="submit" className="w-fit btn btn-primary btn-lg px-10 mx-auto font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    {offerContent.submitButton}
                  </button>
                </div>

                <div className="text-center text-sm opacity-75">
                  <p>{offerContent.legalNote}</p>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
