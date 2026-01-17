"use client";
import React, { useState } from "react";
import ExalviaNavbar from "../exalvia/sections/ExalviaNavbar";
import ExalviaFooter from "../exalvia/sections/ExalviaFooter";
import data from "../exalvia/database/ExalviaDatabase";
import HeaderFooterClient from "../component/global/HeaderFooterClient";
import HeroBrandChecker from "../exalvia/brand-checker/HeroBrandChecker";
import ExalviaButton from "../exalvia/ui-components/ExalviaButton";
import ExalviaFormInput from "../exalvia/ui-components/ExalviaFormInput";
import AgePicker from "../exalvia/ui-components/AgePicker";
import {
  IoSendOutline,
  IoRocketOutline,
  IoSparklesOutline,
  IoBusinessOutline,
  IoPeopleOutline,
  IoChatboxEllipsesOutline,
  IoLocationOutline,
  IoTimeOutline,
  IoHelpCircleOutline,
  IoAppsOutline,
  IoGlobeOutline,
  IoShareSocialOutline,
  IoFlagOutline,
  IoDocumentTextOutline,
  IoArrowForward,
  IoArrowBack,
  IoLogoInstagram,
  IoLogoTiktok,
  IoLogoFacebook,
  IoLogoYoutube,
  IoLogoTwitter,
  IoDiamondOutline,
  IoColorPaletteOutline,
  IoChatbubblesOutline,
  IoAlertCircleOutline,
  IoLogoWhatsapp,
  IoCalendarOutline,
  IoCubeOutline,
  IoEyeOutline,
  IoCheckmarkCircle,
  IoWarning,
} from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { TbLocationShare } from "react-icons/tb";
import { RiSwordLine } from "react-icons/ri";
import { PiIdentificationCard } from "react-icons/pi";
import { LuSwords } from "react-icons/lu";
import { ArrowRight, ArrowLeft } from "lucide-react";

const GOOGLE_SCRIPT = process.env.WEB_APP_SPREADSHEET;

const StepIndicator = ({ steps, currentStep, totalSteps, onStepClick }) => (
  <div className="mb-12 w-full max-w-4xl mx-auto px-4">
    {/* Desktop View: Full Sequence */}
    <div className="hidden md:flex items-center justify-between w-full relative">
      {steps.map((step, index) => {
        const stepNum = index + 1;
        const isActive = currentStep === stepNum;
        const isCompleted = currentStep > stepNum;

        return (
          <React.Fragment key={index}>
            <div onClick={() => onStepClick(stepNum)} className="flex flex-col items-center gap-3 relative transition-all duration-500 cursor-pointer group">
              <div
                className={`w-12 h-12 rounded-full rounded-tr-none flex items-center justify-center border-2 transition-all duration-500  ${
                  isActive
                    ? "border-primary bg-primary text-primary-content scale-110 "
                    : isCompleted
                    ? "border-success bg-success text-base-100"
                    : "border-base-300 bg-base-200 text-base-content/30 group-hover:border-primary/50"
                }`}
              >
                {React.cloneElement(step.icon, { className: "text-xl" })}
              </div>
              <span
                className={`text-[10px] uppercase font-black tracking-widest transition-all duration-300 ${
                  isActive ? "opacity-100 text-primary translate-y-0" : "opacity-30 translate-y-1 group-hover:opacity-60"
                }`}
              >
                {step.title}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 h-[2px] mx-1 bg-base-300 relative -mt-8">
                <div className="absolute inset-0 bg-linear-to-r from-primary to-primary transition-all duration-1000 ease-in-out" style={{ width: isCompleted ? "100%" : "0%" }} />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>

    {/* Mobile View: Focus View & Progress Summary */}
    <div className="md:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="flex items-center justify-between px-1">
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">Langkah Terkini</span>
          <h4 className="text-lg font-black uppercase tracking-tight flex items-center gap-2 italic">
            <span className="text-primary">{currentStep.toString().padStart(2, "0")}</span>
            <span className="opacity-20">/</span>
            <span className="opacity-40">{totalSteps}</span>
          </h4>
        </div>
        <div className="bg-primary/10 px-4 py-2 rounded-xl border border-primary/20">
          <span className="text-xs font-bold text-primary">{Math.round((currentStep / totalSteps) * 100)}% Selesai</span>
        </div>
      </div>

      <div className="relative overflow-hidden bg-base-200 p-4 rounded-2xl border border-base-300 flex items-center gap-5 ">
        <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
        <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary text-primary-content flex items-center justify-center text-2xl  animate-in zoom-in-75 duration-300">
          {steps[currentStep - 1].icon}
        </div>
        <div className="flex flex-col py-1">
          <span className="text-[10px] uppercase font-bold opacity-40 mb-1 tracking-widest leading-none">Sedang Mengisi:</span>
          <h3 className="text-md font-black uppercase tracking-wider text-base-content leading-tight">{steps[currentStep - 1].title}</h3>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="w-full h-1.5 bg-base-200 rounded-full overflow-hidden border border-base-300">
          <div className="h-full bg-primary transition-all duration-1000 ease-out " style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }} />
        </div>
        {/* Clickable Mobile Step Dots */}
        <div className="flex justify-between px-1">
          {steps.map((_, index) => {
            const stepNum = index + 1;
            return (
              <button
                key={index}
                onClick={() => onStepClick(stepNum)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentStep === stepNum ? "bg-primary w-4" : currentStep > stepNum ? "bg-success" : "bg-base-300"}`}
                aria-label={`Go to step ${stepNum}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

const FormSection = ({ title, icon, children, description }) => (
  <div className="flex flex-col gap-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
    <div className="flex flex-col items-center text-center gap-4">
      <div className="w-20 aspect-square rounded-full rounded-tr-none flex items-center justify-center bg-primary text-base-100 transition-transform duration-500 hover:scale-105">
        {React.cloneElement(icon, { className: "text-3xl" })}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-2xl font-bold text-primary uppercase">{title}</h3>
        {description && <p className="text-sm opacity-50 max-w-md mx-auto leading-relaxed">{description}</p>}
      </div>
    </div>
    <div className="flex flex-col gap-8">{children}</div>
  </div>
);

export default function FormDataBrandPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 9;

  const [formData, setFormData] = useState({
    // Step 1: Identitas & Bisnis Dasar
    fullName: "",
    role: "",
    contactEmail: "",
    whatsappNumber: "",
    brandName: "",
    businessCategory: "f&b",
    yearEstablished: "",
    brandOrigin: "",
    businessScale: "",
    website: "",
    socialMedia: [{ platform: "instagram", username: "" }],

    // Step 2: Visi, Misi & Tujuan
    brandVision: [""],
    brandMission: [""],
    shortTermGoal: [""],
    longTermGoal: [""],

    // Step 3: Detail Audiens
    targetDescription: "",
    targetAgeMin: "",
    targetAgeMax: "",
    targetGender: "",
    targetMaritalStatus: "",
    targetReligion: "all",
    targetEthnicity: "all",
    targetEducation: "all",
    targetLanguage: "",
    targetLocation: "",
    targetEconomy: "",
    targetBackground: "",
    targetLifestyle: "",
    targetProblem: "",

    // Step 4: Detail Produk
    businessType: "",
    productStatus: "",
    productName: "",
    productVariants: "",
    productDescription: "",
    productCertifications: [{ name: "", description: "" }],
    productPriceRange: "",
    priceStrategy: "",
    priceReasoning: "",
    productWarranty: "",
    usp: "",

    // Step 5: Identitas Visual
    hasLogo: "",
    logoMeaning: "",
    primaryColor: "",
    primaryFont: "",
    visualStyle: [],
    visualConsistency: "",

    // Step 6: Customer Experience & Touchpoints
    mainTouchpoints: "",
    positiveFeedback: [""],
    negativeFeedback: [""],

    // Step 7: Analisis Kompetitor
    competitors: [{ name: "", products: "", strengths: "", weaknesses: "" }],
    marketOpportunity: "",

    // Step 8: Masalah Brand
    commonProblems: [],
    otherProblem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSocialMediaChange = (index, field, value) => {
    const newSocialMedia = [...formData.socialMedia];
    newSocialMedia[index][field] = value;
    setFormData((prev) => ({ ...prev, socialMedia: newSocialMedia }));
  };

  const addSocialMedia = () => {
    const allPlatforms = ["instagram", "tiktok", "facebook", "youtube", "twitter"];
    const usedPlatforms = formData.socialMedia.map((sm) => sm.platform);
    const nextPlatform = allPlatforms.find((p) => !usedPlatforms.includes(p)) || "others";

    setFormData((prev) => ({
      ...prev,
      socialMedia: [...prev.socialMedia, { platform: nextPlatform, username: "" }],
    }));
  };

  const removeSocialMedia = (index) => {
    if (formData.socialMedia.length > 1) {
      const newSocialMedia = formData.socialMedia.filter((_, i) => i !== index);
      setFormData((prev) => ({ ...prev, socialMedia: newSocialMedia }));
    }
  };

  const handleCompetitorChange = (index, field, value) => {
    const newCompetitors = [...formData.competitors];
    newCompetitors[index][field] = value;
    setFormData((prev) => ({ ...prev, competitors: newCompetitors }));
  };

  const addCompetitor = () => {
    setFormData((prev) => ({
      ...prev,
      competitors: [...prev.competitors, { name: "", products: "", strengths: "", weaknesses: "" }],
    }));
  };

  const removeCompetitor = (index) => {
    if (formData.competitors.length > 1) {
      const newCompetitors = formData.competitors.filter((_, i) => i !== index);
      setFormData((prev) => ({ ...prev, competitors: newCompetitors }));
    }
  };

  const handleCertificationChange = (index, field, value) => {
    const newCerts = [...formData.productCertifications];
    newCerts[index][field] = value;
    setFormData((prev) => ({ ...prev, productCertifications: newCerts }));
  };

  const addCertification = () => {
    setFormData((prev) => ({
      ...prev,
      productCertifications: [...prev.productCertifications, { name: "", description: "" }],
    }));
  };

  const removeCertification = (index) => {
    const newCerts = formData.productCertifications.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, productCertifications: newCerts }));
  };

  const handleFeedbackChange = (type, index, value) => {
    const field = type === "positive" ? "positiveFeedback" : "negativeFeedback";
    const newFeedback = [...formData[field]];
    newFeedback[index] = value;
    setFormData((prev) => ({ ...prev, [field]: newFeedback }));
  };

  const addFeedback = (type) => {
    const field = type === "positive" ? "positiveFeedback" : "negativeFeedback";
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  const removeFeedback = (type, index) => {
    const field = type === "positive" ? "positiveFeedback" : "negativeFeedback";
    if (formData[field].length > 1) {
      const newFeedback = formData[field].filter((_, i) => i !== index);
      setFormData((prev) => ({ ...prev, [field]: newFeedback }));
    }
  };

  const handleVisionMissionChange = (field, index, value) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData((prev) => ({ ...prev, [field]: newArray }));
  };

  const addVisionMissionItem = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  const removeVisionMissionItem = (field, index) => {
    if (formData[field].length > 1) {
      const newArray = formData[field].filter((_, i) => i !== index);
      setFormData((prev) => ({ ...prev, [field]: newArray }));
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setCurrentStep(currentStep - 1);
    }
  };

  // State untuk Modal Kustom
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: "success", // 'success' | 'error' | 'confirm'
    title: "",
    message: "",
    onConfirm: null, // Callback khusus untuk konfirmasi
  });

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
    // Jika sukses, bisa redirect atau reset form di sini jika diinginkan
    if (modalState.type === "success") {
      // window.location.href = "/thank-you"; // Opsional
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ganti window.confirm dengan Modal Konfirmasi
    setModalState({
      isOpen: true,
      type: "confirm",
      title: "Konfirmasi Pengiriman",
      message: "Apakah Anda yakin data yang diisi sudah benar dan siap untuk dikirim?",
      onConfirm: async () => {
        setModalState((prev) => ({ ...prev, isOpen: false })); // Tutup modal konfirmasi
        processSubmission(); // Lanjut ke proses kirim
      },
    });
  };

  // Fungsi terpisah untuk proses pengiriman sesungguhnya
  const processSubmission = async () => {
    setIsSubmitting(true);

    try {
      // Ambil URL dari Environment Variable
      const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

      // Validasi: Cek jika URL tidak ada di .env
      if (!SCRIPT_URL) {
        setModalState({
          isOpen: true,
          type: "error",
          title: "Konfigurasi Hilang",
          message: "URL Google Apps Script belum ditemukan di .env (NEXT_PUBLIC_GOOGLE_SCRIPT_URL)!",
        });
        setIsSubmitting(false);
        return;
      }

      // Gunakan text/plain untuk menghindari Preflight CORS
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      // Sukses
      setModalState({
        isOpen: true,
        type: "success",
        title: "Pengiriman Berhasil!",
        message: "Data brand Anda telah berhasil dikirim ke sistem kami. Tim kami akan segera menganalisanya.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setModalState({
        isOpen: true,
        type: "error",
        title: "Gagal Mengirim",
        message: "Terjadi kesalahan saat mengirim data. Silakan periksa koneksi internet Anda atau coba lagi nanti.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { title: "Identitas", icon: <PiIdentificationCard /> },
    { title: "Visi", icon: <IoRocketOutline /> },
    { title: "Audiens", icon: <IoPeopleOutline /> },
    { title: "Produk", icon: <IoCubeOutline /> },
    { title: "Visual", icon: <IoColorPaletteOutline /> },
    { title: "Testimoni", icon: <IoChatbubblesOutline /> },
    { title: "Pesaing", icon: <LuSwords /> },
    { title: "Masalah", icon: <IoAlertCircleOutline /> },
    { title: "Review", icon: <IoEyeOutline /> },
  ];

  return (
    <div className="bg-base-100 min-h-screen flex flex-col font-montserrat overflow-hidden relative">
      <ExalviaNavbar data={data.navbar} bgCustom="bg-transparent" />

      {/* --- MODAL COMPONENT --- */}
      {modalState.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-base-100 rounded-3xl p-8 max-w-sm w-full shadow-2xl scale-100 animate-in zoom-in-95 duration-200 flex flex-col items-center text-center gap-4">
            {/* Icon */}
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-2 ${
                modalState.type === "success" ? "bg-success/10 text-success" : modalState.type === "error" ? "bg-error/10 text-error" : "bg-warning/10 text-warning"
              }`}
            >
              {modalState.type === "success" ? <IoCheckmarkCircle /> : modalState.type === "error" ? <IoWarning /> : <IoAlertCircleOutline />}
            </div>

            {/* Content */}
            <h3 className="text-xl font-black">{modalState.title}</h3>
            <p className="text-sm opacity-60 leading-relaxed">{modalState.message}</p>

            {/* Actions */}
            <div className="flex gap-3 w-full mt-4">
              {modalState.type === "confirm" ? (
                <>
                  <button onClick={closeModal} className="btn btn-ghost flex-1 rounded-xl">
                    Batal
                  </button>
                  <button onClick={modalState.onConfirm} className="btn btn-primary flex-1 rounded-xl text-white shadow-lg shadow-primary/30">
                    Ya, Kirim
                  </button>
                </>
              ) : (
                <button onClick={closeModal} className="btn btn-primary w-full rounded-xl text-white shadow-lg shadow-primary/30">
                  Mengerti
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <HeroBrandChecker headline="Lengkapi Data Brand" secId="form-hero" backgroundImage={data.pagesResult.heroImage}>
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center gap-4 py-10">
          <IoSparklesOutline className="text-6xl text-warning animate-pulse" />
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">Data Brand</h1>
          <p className="text-white/60 max-w-lg">Lengkapi data di bawah ini untuk membantu kami merumuskan pesan penjualan yang tepat untuk brand Anda.</p>
        </div>
      </HeroBrandChecker>

      <main className="flex-1 py-10 md:py-20 px-4 md:px-5 bg-base-100">
        <div className="max-w-3xl mx-auto">
          <StepIndicator
            steps={steps}
            currentStep={currentStep}
            totalSteps={totalSteps}
            onStepClick={(step) => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setCurrentStep(step);
            }}
          />

          <form onSubmit={handleSubmit} className="border-2 border-base-300 rounded-4xl rounded-tr-none p-6 md:p-16 flex flex-col gap-10 bg-base-100  min-h-[450px]">
            {/* GROUP 1: Identitas & Bisnis Dasar */}
            {currentStep === 1 && (
              <FormSection title="1. Identitas" icon={steps[0].icon} description="Berikan informasi dasar mengenai diri Anda dan brand Anda.">
                <ExalviaFormInput label="Nama Lengkap" name="fullName" placeholder="Masukkan nama lengkap Anda" value={formData.fullName} onChange={handleChange} required />
                <ExalviaFormInput
                  label="Peran"
                  type="select"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  options={[
                    { label: "Owner", value: "owner" },
                    { label: "Brand Manager", value: "brand_manager" },
                    { label: "Marketing", value: "marketing" },
                    { label: "Lainnya", value: "others" },
                  ]}
                  required
                />
                <ExalviaFormInput label="Email Kontak" name="contactEmail" type="email" placeholder="nama@email.com" value={formData.contactEmail} onChange={handleChange} required />
                <ExalviaFormInput
                  label="Nomor WhatsApp"
                  name="whatsappNumber"
                  type="tel"
                  placeholder="Contoh: 081234567890"
                  value={formData.whatsappNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setFormData((prev) => ({ ...prev, whatsappNumber: value }));
                  }}
                  required
                />
                <ExalviaFormInput label="Nama Brand" name="brandName" placeholder="Nama brand Anda" value={formData.brandName} onChange={handleChange} required />

                <ExalviaFormInput
                  label="Tahun Berdiri"
                  name="yearEstablished"
                  type="date"
                  icon={<IoCalendarOutline />}
                  placeholder="Pilih tahun berdiri"
                  value={formData.yearEstablished}
                  onChange={handleChange}
                  max={new Date().toISOString().split("T")[0]}
                  required
                />
                <ExalviaFormInput
                  label="Kota / Tempat Didirikan"
                  name="brandOrigin"
                  placeholder="Contoh: Bandung, Jakarta, atau Yogyakarta"
                  value={formData.brandOrigin}
                  onChange={handleChange}
                  required
                />
                <ExalviaFormInput
                  label="Skala Bisnis"
                  type="radio"
                  name="businessScale"
                  value={formData.businessScale}
                  onChange={handleChange}
                  options={[
                    { label: "Lokal", value: "lokal" },
                    { label: "Nasional", value: "nasional" },
                    { label: "Internasional", value: "internasional" },
                  ]}
                  required
                />
                <ExalviaFormInput
                  label="Industri / Kategori Bisnis"
                  type="select"
                  name="businessCategory"
                  value={formData.businessCategory}
                  onChange={handleChange}
                  options={[
                    { label: "Food & Beverage", value: "f&b" },
                    { label: "Fashion & Apparel", value: "fashion" },
                    { label: "Kecantikan & Perawatan", value: "beauty" },
                    { label: "Kesehatan & Farmasi", value: "health" },
                    { label: "Teknologi & Gadget", value: "tech" },
                    { label: "Jasa & Layanan", value: "services" },
                    { label: "Edukasi & Pendidikan", value: "education" },
                    { label: "Properti & Real Estate", value: "property" },
                    { label: "Otomotif", value: "automotive" },
                    { label: "Lain-lain", value: "other" },
                  ]}
                  required
                />
                <ExalviaFormInput label="Website (Opsional)" name="website" placeholder="https://www.brandanda.com" value={formData.website} onChange={handleChange} />
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold opacity-50">Media Sosial (Opsional)</label>
                  <div className="flex flex-col gap-4">
                    {formData.socialMedia.map((sm, index) => {
                      const icons = {
                        instagram: <IoLogoInstagram className="text-pink-500" />,
                        tiktok: <IoLogoTiktok className="text-base-content" />,
                        facebook: <IoLogoFacebook className="text-blue-600" />,
                        youtube: <IoLogoYoutube className="text-red-600" />,
                        twitter: <IoLogoTwitter className="text-sky-400" />,
                        others: <IoShareSocialOutline />,
                      };

                      const allSocialOptions = [
                        { label: "Instagram", value: "instagram" },
                        { label: "TikTok", value: "tiktok" },
                        { label: "Facebook", value: "facebook" },
                        { label: "YouTube", value: "youtube" },
                        { label: "Twitter / X", value: "twitter" },
                        { label: "Lainnya", value: "others" },
                      ];

                      // Filter pilihan agar yang sudah dipilih tidak muncul lagi (kecuali 'others')
                      const selectedPlatforms = formData.socialMedia.map((item) => item.platform);
                      const filteredOptions = allSocialOptions.filter((opt) => opt.value === sm.platform || opt.value === "others" || !selectedPlatforms.includes(opt.value));

                      return (
                        <div key={index} className="flex flex-col md:flex-row gap-3 items-end md:items-center animate-in fade-in slide-in-from-left-4">
                          <div className="w-full md:w-1/3">
                            <ExalviaFormInput
                              type="select"
                              icon={icons[sm.platform] || icons.others}
                              value={sm.platform}
                              onChange={(e) => handleSocialMediaChange(index, "platform", e.target.value)}
                              options={filteredOptions}
                            />
                          </div>
                          <div className="w-full flex-1 flex flex-row gap-3 items-center">
                            <div className="flex-1">
                              <ExalviaFormInput placeholder="Username / URL" value={sm.username} onChange={(e) => handleSocialMediaChange(index, "username", e.target.value)} />
                            </div>
                            {formData.socialMedia.length > 1 && (
                              <button type="button" onClick={() => removeSocialMedia(index)} className="btn btn-error btn-square btn-lg h-14 rounded-xl text-white shrink-0">
                                ×
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <button type="button" onClick={addSocialMedia} className="mt-4 btn btn-outline btn-primary btn-md rounded-xl w-full md:w-fit gap-2">
                    <span>+</span> Sosial Media
                  </button>
                </div>
              </FormSection>
            )}

            {/* GROUP 2: Visi, Misi & Tujuan Brand */}
            {currentStep === 2 && (
              <FormSection title="2. Visi & Misi" icon={steps[1].icon} description="Tujuan: menangkap arah dan niat strategis brand.">
                {/* VISI BRAND */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold opacity-50">Visi Brand</label>
                  <div className="flex flex-col gap-4">
                    {formData.brandVision.map((vision, index) => (
                      <div key={index} className="flex gap-3 animate-in fade-in slide-in-from-left-4">
                        <div className="flex-1">
                          <ExalviaFormInput
                            placeholder="Contoh: Membuat remaja Indonesia lebih percaya diri mengekspresikan diri"
                            value={vision}
                            onChange={(e) => handleVisionMissionChange("brandVision", index, e.target.value)}
                            required
                          />
                        </div>
                        {formData.brandVision.length > 1 && (
                          <button type="button" onClick={() => removeVisionMissionItem("brandVision", index)} className="btn btn-error btn-square h-14 w-14 rounded-xl text-white">
                            ×
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  <button type="button" onClick={() => addVisionMissionItem("brandVision")} className="mt-4 btn btn-outline btn-primary btn-sm rounded-xl w-fit gap-2">
                    <span>+</span> Tambah Visi
                  </button>
                </div>

                {/* MISI BRAND */}
                <div className="flex flex-col gap-2 pt-4 border-t border-base-300 border-dashed">
                  <label className="text-sm font-bold opacity-50">Misi Brand (upaya mewujudkan visi)</label>
                  <div className="flex flex-col gap-4">
                    {formData.brandMission.map((mission, index) => (
                      <div key={index} className="flex gap-3 animate-in fade-in slide-in-from-left-4">
                        <div className="flex-1">
                          <ExalviaFormInput
                            placeholder="Contoh: Menyediakan fashion streetwear yang terjangkau dan berkualitas"
                            value={mission}
                            onChange={(e) => handleVisionMissionChange("brandMission", index, e.target.value)}
                            required
                          />
                        </div>
                        {formData.brandMission.length > 1 && (
                          <button type="button" onClick={() => removeVisionMissionItem("brandMission", index)} className="btn btn-error btn-square h-14 w-14 rounded-xl text-white">
                            ×
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  <button type="button" onClick={() => addVisionMissionItem("brandMission")} className="mt-4 btn btn-outline btn-primary btn-sm rounded-xl w-fit gap-2">
                    <span>+</span> Tambah Misi
                  </button>
                </div>

                {/* TUJUAN JANGKA PENDEK */}
                <div className="flex flex-col gap-2 pt-4 border-t border-base-300 border-dashed">
                  <label className="text-sm font-bold opacity-50">Tujuan Jangka Pendek (6-12 Bulan)</label>
                  <div className="flex flex-col gap-4">
                    {formData.shortTermGoal.map((goal, index) => (
                      <div key={index} className="flex gap-3 animate-in fade-in slide-in-from-left-4">
                        <div className="flex-1">
                          <ExalviaFormInput
                            placeholder="Contoh: Mencapai 10.000 followers di Instagram dalam 6 bulan"
                            value={goal}
                            onChange={(e) => handleVisionMissionChange("shortTermGoal", index, e.target.value)}
                            required
                          />
                        </div>
                        {formData.shortTermGoal.length > 1 && (
                          <button type="button" onClick={() => removeVisionMissionItem("shortTermGoal", index)} className="btn btn-error btn-square h-14 w-14 rounded-xl text-white">
                            ×
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  <button type="button" onClick={() => addVisionMissionItem("shortTermGoal")} className="mt-4 btn btn-outline btn-primary btn-sm rounded-xl w-fit gap-2">
                    <span>+</span> Tambah Tujuan
                  </button>
                </div>

                {/* TUJUAN JANGKA PANJANG */}
                <div className="flex flex-col gap-2 pt-4 border-t border-base-300 border-dashed">
                  <label className="text-sm font-bold opacity-50">Tujuan Jangka Panjang (3-5 Tahun)</label>
                  <div className="flex flex-col gap-4">
                    {formData.longTermGoal.map((goal, index) => (
                      <div key={index} className="flex gap-3 animate-in fade-in slide-in-from-left-4">
                        <div className="flex-1">
                          <ExalviaFormInput
                            placeholder="Contoh: Menjadi brand streetwear pilihan utama remaja se-Indonesia"
                            value={goal}
                            onChange={(e) => handleVisionMissionChange("longTermGoal", index, e.target.value)}
                            required
                          />
                        </div>
                        {formData.longTermGoal.length > 1 && (
                          <button type="button" onClick={() => removeVisionMissionItem("longTermGoal", index)} className="btn btn-error btn-square h-14 w-14 rounded-xl text-white">
                            ×
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  <button type="button" onClick={() => addVisionMissionItem("longTermGoal")} className="mt-4 btn btn-outline btn-primary btn-sm rounded-xl w-fit gap-2">
                    <span>+</span> Tambah Tujuan
                  </button>
                </div>
              </FormSection>
            )}

            {/* GROUP 3: Target Audiens */}
            {currentStep === 3 && (
              <FormSection title="3. Target Audiens" icon={steps[2].icon} description="Tujuan: memahami siapa yang disasar brand.">
                {/* --- DEMOGRAFI --- */}
                <div className="col-span-full border-b border-base-300 pb-2">
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary">A. Demografi</h4>
                </div>
                <AgePicker
                  minAge={parseInt(formData.targetAgeMin) || 18}
                  maxAge={parseInt(formData.targetAgeMax) || 18}
                  onChange={(min, max) => {
                    setFormData((prev) => ({
                      ...prev,
                      targetAgeMin: min.toString(),
                      targetAgeMax: max.toString(),
                    }));
                  }}
                  required
                />
                <ExalviaFormInput
                  label="Gender Audiens"
                  type="radio"
                  name="targetGender"
                  value={formData.targetGender}
                  onChange={handleChange}
                  options={[
                    { label: "Laki-laki", value: "male" },
                    { label: "Perempuan", value: "female" },
                    { label: "Semua", value: "all" },
                  ]}
                  required
                />
                <ExalviaFormInput
                  label="Status Pernikahan Audiens"
                  type="radio"
                  name="targetMaritalStatus"
                  value={formData.targetMaritalStatus}
                  onChange={handleChange}
                  options={[
                    { label: "Belum Menikah", value: "single" },
                    { label: "Menikah", value: "married" },
                    { label: "Single parent", value: "single_parent" },
                    { label: "Semua", value: "all" },
                  ]}
                  required
                />
                <ExalviaFormInput
                  label="Agama Audiens"
                  type="select"
                  name="targetReligion"
                  placeholder="Pilih Agama"
                  value={formData.targetReligion}
                  onChange={handleChange}
                  options={[
                    { label: "Semua Agama", value: "all" },
                    { label: "Islam", value: "islam" },
                    { label: "Kristen", value: "kristen" },
                    { label: "Katolik", value: "katolik" },
                    { label: "Hindu", value: "hindu" },
                    { label: "Budha", value: "budha" },
                    { label: "Konghucu", value: "khonghucu" },
                    { label: "Lainnya", value: "other" },
                  ]}
                  required
                />
                <ExalviaFormInput
                  label="Ras / Suku Audiens"
                  type="select"
                  name="targetEthnicity"
                  placeholder="Pilih Suku"
                  value={formData.targetEthnicity}
                  onChange={handleChange}
                  options={[
                    { label: "Semua Suku", value: "all" },
                    { label: "Jawa", value: "jawa" },
                    { label: "Sunda", value: "sunda" },
                    { label: "Batak", value: "batak" },
                    { label: "Madura", value: "madura" },
                    { label: "Betawi", value: "betawi" },
                    { label: "Minangkabau", value: "minangkabau" },
                    { label: "Bugis", value: "bugis" },
                    { label: "Melayu", value: "melayu" },
                    { label: "Banten", value: "banten" },
                    { label: "Banjar", value: "banjar" },
                    { label: "Lainnya", value: "other" },
                  ]}
                  required
                />
                <ExalviaFormInput
                  label="Pendidikan Terakhir Audiens"
                  type="select"
                  name="targetEducation"
                  placeholder="Pilih Pendidikan"
                  value={formData.targetEducation}
                  onChange={handleChange}
                  options={[
                    { label: "Semua Pendidikan", value: "all" },
                    { label: "SD", value: "sd" },
                    { label: "SMP", value: "smp" },
                    { label: "SMA", value: "sma" },
                    { label: "SMK", value: "smk" },
                    { label: "Diploma", value: "diploma" },
                    { label: "Sarjana (S1)", value: "bachelor" },
                    { label: "Pascasarjana", value: "postgraduate" },
                  ]}
                  required
                />
                <ExalviaFormInput
                  label="Profesi Audiens"
                  name="targetBackground"
                  placeholder="Contoh: Karyawan swasta, Pengusaha, atau Mahasiswa"
                  value={formData.targetBackground}
                  onChange={handleChange}
                  required
                />
                <ExalviaFormInput
                  label="Tingkat Ekonomi Audiens"
                  type="radio"
                  name="targetEconomy"
                  value={formData.targetEconomy}
                  onChange={handleChange}
                  options={[
                    { label: "Bawah", value: "low" },
                    { label: "Menengah", value: "middle" },
                    { label: "Atas", value: "high" },
                  ]}
                  required
                />

                {/* --- GEOGRAFI --- */}
                <div className="col-span-full border-b border-base-300 pb-2 mt-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary">B. Geografi</h4>
                </div>
                <ExalviaFormInput
                  label="Lokasi Geografis Audiens"
                  name="targetLocation"
                  placeholder="Contoh: Perkotaan besar (Jabodetabek) atau Seluruh Indonesia"
                  value={formData.targetLocation}
                  onChange={handleChange}
                  required
                />
                <ExalviaFormInput
                  label="Bahasa Utama Audiens"
                  type="radio"
                  name="targetLanguage"
                  value={formData.targetLanguage}
                  onChange={handleChange}
                  options={[
                    { label: "Bahasa Indonesia", value: "indonesia" },
                    { label: "Bahasa Daerah", value: "daerah" },
                    { label: "Bahasa Inggris", value: "english" },
                    { label: "Lainnya", value: "other" },
                  ]}
                  required
                />

                {/* --- PSIKOGRAFI --- */}
                <div className="col-span-full border-b border-base-300 pb-2 mt-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary">C. Psikografi</h4>
                </div>
                <div className="col-span-full">
                  <ExalviaFormInput
                    label="Target Utama (Deskripsi Singkat)"
                    type="textarea"
                    name="targetDescription"
                    placeholder="Contoh: Remaja Gen Z yang aktif di media sosial dan suka mengikuti tren fashion"
                    value={formData.targetDescription}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-span-full">
                  <ExalviaFormInput
                    label="Minat & Gaya Hidup Audiens"
                    type="textarea"
                    name="targetLifestyle"
                    placeholder="Apa hobi mereka? Apa yang mereka sukai? (Contoh: Nongkrong di kafe, main game, konten kreator)"
                    value={formData.targetLifestyle}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-span-full">
                  <ExalviaFormInput
                    label="Masalah / Kebutuhan Audiens"
                    type="textarea"
                    name="targetProblem"
                    placeholder="Kesulitan apa yang sedang mereka hadapi? (Contoh: Sulit menemukan outfit keren dengan budget terbatas)"
                    value={formData.targetProblem}
                    onChange={handleChange}
                    required
                  />
                </div>
              </FormSection>
            )}

            {/* GROUP 4: Detail Produk */}
            {currentStep === 4 && (
              <FormSection title="4. Detail Produk" icon={steps[3].icon} description="Berikan informasi tentang produk atau layanan yang Anda tawarkan.">
                <ExalviaFormInput
                  label="Apa Yang Anda Jual?"
                  type="radio"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  options={[
                    { label: "Produk", value: "produk" },
                    { label: "Jasa", value: "jasa" },
                    { label: "Produk & Jasa", value: "keduanya" },
                    { label: "Lain-lain", value: "lainnya" },
                  ]}
                  required
                />
                <ExalviaFormInput
                  label="Status Produk"
                  type="radio"
                  name="productStatus"
                  value={formData.productStatus}
                  onChange={handleChange}
                  options={[
                    { label: "Sudah Rilis", value: "launched" },
                    { label: "Belum Rilis", value: "pre_launch" },
                    { label: "Masih Konsep", value: "concept" },
                  ]}
                  required
                />
                <ExalviaFormInput
                  label="Nama Produk/Jasa Utama"
                  name="productName"
                  placeholder="Contoh: Kopi Susu Gula Aren atau Jasa Desain Interior"
                  value={formData.productName}
                  onChange={handleChange}
                  required
                />
                <ExalviaFormInput
                  label="Jumlah Produk / Varian"
                  type="radio"
                  name="productVariants"
                  value={formData.productVariants}
                  onChange={handleChange}
                  options={[
                    { label: "1 varian", value: "1" },
                    { label: "3 varian", value: "3" },
                    { label: "5 varian", value: "5" },
                    { label: "Lebih dari 5", value: ">5" },
                  ]}
                  required
                />
                <ExalviaFormInput
                  label="Deskripsi & Fungsi Utama"
                  type="textarea"
                  name="productDescription"
                  placeholder="Jelaskan secara singkat apa fungsi produk Anda dan masalah apa yang diselesaikannya."
                  value={formData.productDescription}
                  onChange={handleChange}
                  required
                />
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold opacity-50">Sertifikasi / Penghargaan (Jika ada)</label>
                  <div className="flex flex-col gap-4">
                    {formData.productCertifications.map((cert, index) => (
                      <div key={index} className="flex flex-col gap-4 p-6 bg-base-200/50 rounded-2xl border border-base-300 relative animate-in fade-in slide-in-from-left-4">
                        {formData.productCertifications.length > 0 && (
                          <button type="button" onClick={() => removeCertification(index)} className="absolute top-4 right-4 btn btn-error btn-cirle btn-sm text-white">
                            ×
                          </button>
                        )}
                        <ExalviaFormInput
                          label={`Nama Sertifikat / Penghargaan #${index + 1}`}
                          placeholder="Contoh: Sertifikat Halal MUI atau BPOM"
                          value={cert.name}
                          onChange={(e) => handleCertificationChange(index, "name", e.target.value)}
                        />
                        <ExalviaFormInput
                          label="Deskripsi Singkat"
                          type="textarea"
                          placeholder="Berikan penjelasan singkat mengenai sertifikasi ini..."
                          className="min-h-[80px]"
                          value={cert.description}
                          onChange={(e) => handleCertificationChange(index, "description", e.target.value)}
                        />
                      </div>
                    ))}
                  </div>
                  <button type="button" onClick={addCertification} className="mt-4 btn btn-outline btn-primary btn-sm rounded-xl w-fit gap-2">
                    <span>+</span> Tambah Sertifikat
                  </button>
                </div>

                <ExalviaFormInput
                  label="Kisaran Harga (Price Range)"
                  type="select"
                  name="productPriceRange"
                  value={formData.productPriceRange}
                  onChange={handleChange}
                  placeholder="Pilih"
                  options={[
                    { label: "Di bawah Rp 50rb", value: "under_50k" },
                    { label: "Rp 50rb - 100rb", value: "50k_100k" },
                    { label: "Rp 100rb - 200rb", value: "100k_200k" },
                    { label: "Rp 200rb - 500rb", value: "200k_500k" },
                    { label: "Rp 500rb - 1jt", value: "500k_1m" },
                    { label: "Rp 1jt - 5jt", value: "1m_5m" },
                    { label: "Rp 5jt - 10jt", value: "5m_10m" },
                    { label: "Rp 10jt - 25jt", value: "10m_25m" },
                    { label: "Rp 25jt - 50jt", value: "25m_50m" },
                    { label: "Di atas Rp 50jt", value: "above_50m" },
                  ]}
                  required
                />
                <ExalviaFormInput
                  label="Strategi Harga"
                  type="radio"
                  name="priceStrategy"
                  value={formData.priceStrategy}
                  onChange={handleChange}
                  options={[
                    { label: "Premium", value: "premium" },
                    { label: "Kompetitif", value: "competitive" },
                    { label: "Ekonomis", value: "economical" },
                  ]}
                  required
                />
                <ExalviaFormInput
                  label="Alasan Penetapan Harga"
                  type="textarea"
                  name="priceReasoning"
                  placeholder="Mengapa Anda menetapkan harga tersebut? (Contoh: Bahan baku impor, proses manual, dsb)"
                  value={formData.priceReasoning}
                  onChange={handleChange}
                  required
                />
                <ExalviaFormInput
                  label="Garansi / Layanan Purna Jual"
                  type="textarea"
                  name="productWarranty"
                  placeholder="Contoh: Garansi 1 tahun, Gratis konsultasi, atau Layanan retur 7 hari"
                  value={formData.productWarranty}
                  onChange={handleChange}
                  required
                />
                <ExalviaFormInput
                  label="Unique Selling Proposition (USP)"
                  type="textarea"
                  name="usp"
                  placeholder="Apa satu hal yang paling membedakan Anda dari semua pesaing?"
                  value={formData.usp}
                  onChange={handleChange}
                  required
                />
              </FormSection>
            )}

            {/* GROUP 5: Identitas Visual */}
            {currentStep === 5 && (
              <FormSection title="5. Identitas Visual" icon={steps[4].icon} description="Tujuan: mengevaluasi konsistensi visual.">
                <ExalviaFormInput
                  label="Apakah Brand Sudah Memiliki Logo?"
                  type="radio"
                  name="hasLogo"
                  value={formData.hasLogo}
                  onChange={handleChange}
                  options={[
                    { label: "Sudah", value: "yes" },
                    { label: "Belum", value: "no" },
                  ]}
                  required
                />
                <ExalviaFormInput
                  label="Makna Logo (Opsional)"
                  type="textarea"
                  name="logoMeaning"
                  placeholder="Ceritakan filosofi atau makna di balik logo brand Anda saat ini..."
                  value={formData.logoMeaning}
                  onChange={handleChange}
                />
                <ExalviaFormInput label="Warna Utama Brand" type="color" name="primaryColor" value={formData.primaryColor} onChange={handleChange} required />
                <ExalviaFormInput label="Font Utama" name="primaryFont" placeholder="Contoh: Montserrat, Roboto, atau Playfair Display" value={formData.primaryFont} onChange={handleChange} required />
                <ExalviaFormInput
                  gridCols="sm:grid-cols-4 grid-cols-2"
                  itemAlign="items-center"
                  checkboxClass="checkbox-xs"
                  label="Gaya Visual Brand"
                  type="checkbox"
                  name="visualStyle"
                  value={formData.visualStyle}
                  onChange={handleChange}
                  options={[
                    { label: "Minimalis", value: "minimalist" },
                    { label: "Bold", value: "bold" },
                    { label: "Playful", value: "playful" },
                    { label: "Serius", value: "serious" },
                    { label: "Tradisional", value: "traditional" },
                    { label: "Modern", value: "modern" },
                    { label: "Retro", value: "retro" },
                    { label: "Profesional", value: "professional" },
                    { label: "Feminin", value: "feminine" },
                    { label: "Maskulin", value: "masculine" },
                    { label: "Colorful", value: "colorful" },
                    { label: "Ekonimis", value: "economic" },
                    { label: "Premium", value: "premium" },
                  ]}
                  required
                />
                <ExalviaFormInput
                  label="Konsistensi visual yang di gunakna saat ini"
                  type="radio"
                  name="visualConsistency"
                  value={formData.visualConsistency}
                  onChange={handleChange}
                  options={[
                    { label: "Baik", value: "good" },
                    { label: "Sedang", value: "neutral" },
                    { label: "Buruk", value: "bad" },
                    { label: "Tidak Tahu", value: "unknown" },
                  ]}
                  required
                />
              </FormSection>
            )}

            {/* GROUP 6: Customer Experience & Touchpoints */}
            {currentStep === 6 && (
              <FormSection title="6. Customer Experience" icon={steps[5].icon} description="Tujuan: melihat interaksi dan feedback dari konsumen.">
                <ExalviaFormInput
                  label="Titik interaksi paling banyak"
                  type="textarea"
                  name="mainTouchpoints"
                  placeholder="Contoh: Media sosial, Website, Toko fisik, Whatsapp CS, dsb."
                  value={formData.mainTouchpoints}
                  onChange={handleChange}
                  required
                />

                {/* POSITIVE FEEDBACK */}
                <div className="flex flex-col gap-2 pt-4 border-t border-base-300 border-dashed">
                  <label className="text-sm font-bold opacity-50">Feedback Positif / Kepuasan Konsumen</label>
                  <div className="flex flex-col gap-4">
                    {formData.positiveFeedback.map((feedback, index) => (
                      <div key={index} className="flex gap-3 animate-in fade-in slide-in-from-left-4">
                        <div className="flex-1">
                          <ExalviaFormInput
                            placeholder="Contoh: Pengiriman sangat cepat dan packing aman"
                            value={feedback}
                            onChange={(e) => handleFeedbackChange("positive", index, e.target.value)}
                            required
                          />
                        </div>
                        {formData.positiveFeedback.length > 1 && (
                          <button type="button" onClick={() => removeFeedback("positive", index)} className="btn btn-error btn-square h-14 w-14 rounded-xl text-white">
                            ×
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  <button type="button" onClick={() => addFeedback("positive")} className="mt-4 btn btn-outline btn-primary btn-sm rounded-xl w-fit gap-2">
                    <span>+</span> Tambah Feedback
                  </button>
                </div>

                {/* NEGATIVE FEEDBACK */}
                <div className="flex flex-col gap-2 pt-4 border-t border-base-300 border-dashed">
                  <label className="text-sm font-bold opacity-50 text-error/70">Feedback Negatif / Keluhan Konsumen</label>
                  <div className="flex flex-col gap-4">
                    {formData.negativeFeedback.map((feedback, index) => (
                      <div key={index} className="flex gap-3 animate-in fade-in slide-in-from-left-4">
                        <div className="flex-1">
                          <ExalviaFormInput
                            placeholder="Contoh: Ukuran sizenya ternyata kekecilan dari standar"
                            value={feedback}
                            onChange={(e) => handleFeedbackChange("negative", index, e.target.value)}
                            required
                          />
                        </div>
                        {formData.negativeFeedback.length > 1 && (
                          <button type="button" onClick={() => removeFeedback("negative", index)} className="btn btn-error btn-square h-14 w-14 rounded-xl text-white">
                            ×
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  <button type="button" onClick={() => addFeedback("negative")} className="mt-4 btn btn-outline btn-error btn-sm rounded-xl w-fit gap-2">
                    <span>+</span> Tambah Feedback
                  </button>
                </div>
              </FormSection>
            )}

            {/* GROUP 7: Analisis Persaingan */}
            {currentStep === 7 && (
              <FormSection title="7. Analisis Persaingan" icon={steps[6].icon} description="Kompetitor: tujuan mengetahui karakteristik kompetitor.">
                <div className="flex flex-col gap-10">
                  {formData.competitors.map((competitor, index) => (
                    <div key={index} className="flex flex-col gap-6 p-6 md:p-8 bg-base-200/50 rounded-3xl border border-base-300 relative animate-in fade-in slide-in-from-bottom-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase tracking-widest opacity-40">Pesaing Ke-{index + 1}</span>
                        {formData.competitors.length > 1 && (
                          <button type="button" onClick={() => removeCompetitor(index)} className="btn btn-error btn-sm rounded-xl px-4">
                            Hapus
                          </button>
                        )}
                      </div>

                      <ExalviaFormInput
                        label="Nama Kompetitor"
                        placeholder="Contoh: Brand X"
                        value={competitor.name}
                        onChange={(e) => handleCompetitorChange(index, "name", e.target.value)}
                        required
                      />

                      <ExalviaFormInput
                        label="Produk / Jasa yang Dijual"
                        placeholder="Apa saja produk atau layanan utama yang mereka tawarkan?"
                        value={competitor.products}
                        onChange={(e) => handleCompetitorChange(index, "products", e.target.value)}
                        required
                      />

                      <ExalviaFormInput
                        label="Kelebihan Kompetitor"
                        type="textarea"
                        placeholder="Apa saja keunggulan mereka?"
                        value={competitor.strengths}
                        onChange={(e) => handleCompetitorChange(index, "strengths", e.target.value)}
                        required
                      />

                      <ExalviaFormInput
                        label="Kelemahan Kompetitor"
                        type="textarea"
                        placeholder="Apa saja celah atau kelemahan mereka?"
                        value={competitor.weaknesses}
                        onChange={(e) => handleCompetitorChange(index, "weaknesses", e.target.value)}
                        required
                      />
                    </div>
                  ))}

                  <button type="button" onClick={addCompetitor} className="btn btn-outline btn-primary btn-md rounded-xl w-full md:w-fit gap-2">
                    <span>+</span> Tambah Pesaing
                  </button>

                  <div className="mt-4 pt-10 border-t border-base-300 border-dashed">
                    <ExalviaFormInput
                      label="Peluang Brand Anda"
                      type="textarea"
                      name="marketOpportunity"
                      placeholder="Apa saja peluang brand Anda dibandingkan dengan kompetitor?"
                      value={formData.marketOpportunity}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </FormSection>
            )}

            {/* GROUP 8: Masalah Brand */}
            {currentStep === 8 && (
              <FormSection title="8. Masalah Brand" icon={steps[7].icon} description="Pilih beberapa masalah yang paling relevan dengan kondisi brand Anda saat ini.">
                <ExalviaFormInput
                  label="Masalah Umum yang Dihadapi"
                  type="checkbox"
                  name="commonProblems"
                  value={formData.commonProblems}
                  onChange={handleChange}
                  options={[
                    { label: "Brand belum dikenal luas (Low Awareness)", value: "low_awareness" },
                    { label: "Pesan brand sulit dimengerti atau tidak sampai", value: "comm_gap" },
                    { label: "Kurangnya tingkat kepercayaan konsumen", value: "trust_issues" },
                    { label: "Sering terjebak dalam perang harga (Price War)", value: "price_war" },
                    { label: "Sulit bersaing dengan kompetitor di kategori yang sama", value: "competition" },
                    { label: "Identitas visual kurang profesional atau tidak konsisten", value: "visual_inconsistency" },
                    { label: "Pertumbuhan penjualan stagnan atau sulit naik level", value: "sales_stagnant" },
                    { label: "Kesulitan menjangkau audiens yang tepat", value: "targeting_problem" },
                    { label: "Pengalaman konsumen di touchpoint kurang memuaskan", value: "cx_poor" },
                  ]}
                  required
                />
                <ExalviaFormInput
                  label="Masalah Lainnya (Opsional)"
                  type="textarea"
                  name="otherProblem"
                  placeholder="Ceritakan kendala spesifik lainnya jika tidak ada dalam daftar di atas..."
                  value={formData.otherProblem}
                  onChange={handleChange}
                />
              </FormSection>
            )}

            {/* GROUP 9: Review & Konfirmasi */}
            {currentStep === 9 && (
              <FormSection title="9. Review Data" icon={steps[8].icon} description="Silakan periksa kembali data yang telah Anda isi sebelum mengirimkannya.">
                <div className="flex flex-col gap-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Ringkasan Identitas */}
                    <div className="p-6 bg-base-200/50 rounded-3xl border border-base-300">
                      <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-4">Identitas & Bisnis</h4>
                      <div className="space-y-4">
                        <div>
                          <p className="text-[10px] opacity-40 font-bold uppercase">Owner</p>
                          <p className="font-bold">
                            {formData.fullName} ({formData.role})
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] opacity-40 font-bold uppercase">Brand</p>
                          <p className="font-bold">
                            {formData.brandName} - {formData.brandOrigin}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] opacity-40 font-bold uppercase">Kontak</p>
                          <p className="font-bold">
                            {formData.whatsappNumber} / {formData.contactEmail}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Ringkasan Audiens */}
                    <div className="p-6 bg-base-200/50 rounded-3xl border border-base-300">
                      <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-4">Target Audiens</h4>
                      <div className="space-y-4">
                        <div>
                          <p className="text-[10px] opacity-40 font-bold uppercase">Profil</p>
                          <p className="font-bold">
                            {formData.targetAgeMin && formData.targetAgeMax ? `${formData.targetAgeMin} - ${formData.targetAgeMax} tahun` : "-"}, {formData.targetGender}, {formData.targetLocation}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] opacity-40 font-bold uppercase">Deskripsi</p>
                          <p className="text-sm line-clamp-2 italic">"{formData.targetDescription}"</p>
                        </div>
                      </div>
                    </div>

                    {/* Ringkasan Produk */}
                    <div className="p-6 bg-base-200/50 rounded-3xl border border-base-300 md:col-span-2">
                      <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-4">Detail Produk & Harga</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-[10px] opacity-40 font-bold uppercase">Produk Utama</p>
                          <p className="font-bold">
                            {formData.productName} ({formData.productStatus})
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] opacity-40 font-bold uppercase">Kisaran Harga</p>
                          <p className="font-bold">
                            {formData.productPriceRange} ({formData.priceStrategy})
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Ringkasan Feedback */}
                    <div className="p-6 bg-base-200/50 rounded-3xl border border-base-300 md:col-span-2">
                      <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-4">Feedback Konsumen</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-[10px] opacity-40 font-bold uppercase mb-2">Feedback Positif</p>
                          <ul className="list-disc list-inside text-sm space-y-1 opacity-70">{formData.positiveFeedback.map((f, i) => f && <li key={i}>{f}</li>)}</ul>
                        </div>
                        <div>
                          <p className="text-[10px] opacity-40 font-bold uppercase mb-2 text-error/70">Feedback Negatif</p>
                          <ul className="list-disc list-inside text-sm space-y-1 opacity-70">{formData.negativeFeedback.map((f, i) => f && <li key={i}>{f}</li>)}</ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 bg-primary/5 rounded-4xl border-2 border-primary/20 flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-3xl">
                      <IoSparklesOutline />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold uppercase">Semua Data Sudah Benar?</h4>
                      <p className="text-sm opacity-60">Dengan menekan tombol kirim, Anda menyetujui bahwa data ini akan digunakan untuk merumuskan strategi brand Anda.</p>
                    </div>
                  </div>

                  {/* DEBUG DATA */}
                  <div className="w-full">
                    <details className="collapse bg-base-200">
                      <summary className="collapse-title text-sm font-medium opacity-50">Show Raw Data JSON (Debug)</summary>
                      <div className="collapse-content">
                        <pre className="text-xs overflow-x-auto p-4 bg-black text-green-400 rounded-lg">{JSON.stringify(formData, null, 2)}</pre>
                      </div>
                    </details>
                  </div>
                </div>
              </FormSection>
            )}
            <div className="pt-10 border-t border-base-300 border-dashed mt-auto flex flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`btn btn-ghost btn-md md:btn-lg rounded-full gap-2 md:gap-3 font-bold uppercase text-[10px] md:text-xs transition-all duration-300 ${
                  currentStep === 1 ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <ArrowLeft className="w-5 h-5" /> Kembali
              </button>

              <div className="flex items-center">
                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn btn-primary btn-md md:btn-lg rounded-full px-6 md:px-10 gap-2 md:gap-3 font-bold uppercase text-[10px] md:text-xs animate-in zoom-in-95 duration-500"
                  >
                    Lanjutkan <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <div>
                    <ExalviaButton
                      text={isSubmitting ? "Mengirim..." : "Kirim Data"}
                      type="submit"
                      disabled={isSubmitting}
                      icon={isSubmitting ? null : ArrowRight}
                      iconPosition="right"
                      className="btn-warning btn-md md:btn-lg w-full md:w-fit uppercase text-[10px] md:text-xs font-bold"
                    />
                  </div>
                )}
              </div>
            </div>
          </form>
          <div className="mt-8 flex flex-col items-center gap-1 opacity-40">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em]">Progress</span>
            <div className="w-32 h-1 bg-base-300 rounded-full overflow-hidden">
              <div className="h-full bg-primary transition-all duration-700" style={{ width: `${(currentStep / totalSteps) * 100}%` }} />
            </div>
            <p className="text-[10px] uppercase font-bold mt-1">
              Langkah {currentStep} dari {totalSteps}
            </p>
          </div>
        </div>
      </main>

      <ExalviaFooter data={data.footer} secId="footer" />
      <HeaderFooterClient />
    </div>
  );
}
