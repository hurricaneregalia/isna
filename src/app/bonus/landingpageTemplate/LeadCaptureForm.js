"use client";
import React, { useState } from "react";
import { FaUserTie, FaPhoneAlt, FaBuilding, FaChevronDown, FaTimes } from "react-icons/fa";
import { GiScrollQuill } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";

const LeadCaptureForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    needs: "corporate",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setCurrentStep(3); // Success step
  };

  const needsOptions = [
    { value: "corporate", label: "Hukum Perusahaan" },
    { value: "contract", label: "Review Kontrak" },
    { value: "dispute", label: "Penyelesaian Sengketa" },
    { value: "inheritance", label: "Masalah Warisan" },
    { value: "other", label: "Lainnya" },
  ];

  const openForm = () => {
    setIsVisible(true);
    setCurrentStep(1);
    setFormData({
      name: "",
      phone: "",
      company: "",
      needs: "corporate",
    });
  };

  if (!isVisible) {
    return (
      <div className="text-center mt-12 mb-8">
        <button onClick={openForm} className="btn btn-primary px-8 py-3 text-lg font-medium" aria-label="Buka formulir konsultasi">
          <GiScrollQuill className="mr-2" />
          Konsultasi Hukum Gratis
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-6 relative">
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setIsVisible(false)}
              className="btn btn-ghost btn-circle btn-sm text-white hover:bg-white/10"
              aria-label="Tutup formulir"
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <GiScrollQuill className="text-3xl text-yellow-300" />
            <div>
              <h3 className="text-xl font-bold">Konsultasi Hukum Eksklusif</h3>
              <p className="text-blue-100 text-sm">Dapatkan solusi tepat dalam 24 jam</p>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-between mt-6 relative">
            <div className="absolute top-3 left-0 right-0 h-1 bg-blue-700 -z-10">
              <div
                className={`h-full bg-yellow-400 transition-all duration-500 ${currentStep === 1 ? "w-1/3" : currentStep === 2 ? "w-2/3" : "w-full"}`}
              ></div>
            </div>
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep >= step ? "bg-yellow-400 text-blue-800" : "bg-blue-700 text-white"
                  }`}
                >
                  {step}
                </div>
                <span className="text-xs mt-1 text-blue-100">{step === 1 ? "Data" : step === 2 ? "Verifikasi" : "Selesai"}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -30, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
              >
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setCurrentStep(2);
                  }}
                >
                  <div className="space-y-4">
                    <div className="form-control">
                      <label className="label pl-0">
                        <span className="label-text font-medium">Nama Lengkap</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FaUserTie className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          className="input input-bordered w-full pl-10"
                          placeholder="Nama Anda"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-control">
                      <label className="label pl-0">
                        <span className="label-text font-medium">Nomor WhatsApp</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FaPhoneAlt className="text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          className="input input-bordered w-full pl-10"
                          placeholder="0812-3456-7890"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-control">
                      <label className="label pl-0">
                        <span className="label-text font-medium">Jenis Permasalahan</span>
                      </label>
                      <div className="relative">
                        <select
                          className="select select-bordered w-full appearance-none"
                          value={formData.needs}
                          onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                          required
                        >
                          {needsOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <FaChevronDown className="text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button type="submit" className="btn btn-primary w-full">
                      Lanjutkan
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -30, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
              >
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="form-control">
                      <label className="label pl-0">
                        <span className="label-text font-medium">Perusahaan (Opsional)</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FaBuilding className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          className="input input-bordered w-full pl-10"
                          placeholder="Nama Perusahaan"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <h4 className="font-medium text-blue-800 mb-2">Data yang telah Anda isi:</h4>
                      <div className="space-y-2 text-sm">
                        <p>
                          <span className="text-gray-500">Nama:</span> {formData.name}
                        </p>
                        <p>
                          <span className="text-gray-500">Telepon:</span> {formData.phone}
                        </p>
                        <p>
                          <span className="text-gray-500">Kebutuhan:</span> {needsOptions.find((o) => o.value === formData.needs)?.label}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-3">
                    <button type="button" onClick={() => setCurrentStep(1)} className="btn btn-ghost flex-1">
                      Kembali
                    </button>
                    <button type="submit" className="btn btn-primary flex-1" disabled={isSubmitting}>
                      {isSubmitting ? <span className="loading loading-spinner"></span> : "Kirim Permohonan"}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 20 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Permohonan Terkirim!</h3>
                <p className="text-gray-600 mb-6">Tim konsultan kami akan menghubungi Anda dalam waktu 1x24 jam melalui WhatsApp.</p>
                <button onClick={() => setIsVisible(false)} className="btn btn-primary w-full">
                  Tutup
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default LeadCaptureForm;
