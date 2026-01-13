"use client";
import React, { useState } from "react";
import ExalviaNavbar from "../exalvia/sections/ExalviaNavbar";
import ExalviaFooter from "../exalvia/sections/ExalviaFooter";
import data from "../exalvia/database/ExalviaDatabase";
import HeaderFooterClient from "../component/global/HeaderFooterClient";
import HeroBrandChecker from "../exalvia/brand-checker/HeroBrandChecker";
import ExalviaButton from "../exalvia/ui-components/ExalviaButton";
import ExalviaFormInput from "../exalvia/ui-components/ExalviaFormInput";
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
} from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { TbLocationShare } from "react-icons/tb";
import { RiSwordLine } from "react-icons/ri";
import { PiIdentificationCard } from "react-icons/pi";
import { LuSwords } from "react-icons/lu";
import { ArrowRight, ArrowLeft } from "lucide-react";

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
    brandVision: "",
    brandMission: "",
    shortTermGoal: "",
    longTermGoal: "",

    // Step 3: Detail Produk
    productStatus: "",
    productName: "",
    productVariants: "",
    productDescription: "",
    productFeatures: "",
    productCertifications: [{ name: "", description: "" }],
    productPriceRange: "",
    priceStrategy: "",
    priceReasoning: "",
    productUniqueBenefits: "",
    productWarranty: "",
    businessType: "", // Pindah dari Step 1
    targetDescription: "",
    targetAge: "",
    targetGender: "",
    targetMaritalStatus: "",
    targetReligion: "",
    targetEthnicity: "",
    targetEducation: "",
    targetLanguage: "",
    targetLocation: "",
    targetEconomy: "",
    targetBackground: "",
    targetLifestyle: "",
    targetProblem: "",

    // Step 4: Analisis Kompetitor
    competitors: [{ name: "", products: "", strengths: "", weaknesses: "" }],
    marketOpportunity: "",

    // Step 5: Value Proposition & Keunikan
    brandValues: "",
    usp: "",
    consumerBenefits: "",
    whyChooseUs: "",

    // Step 6: Identitas Visual
    hasLogo: "",
    logoMeaning: "",
    primaryColor: "",
    primaryFont: "",
    visualStyle: "",
    visualConsistency: "",

    // Step 7: Customer Experience & Touchpoints
    mainTouchpoints: "",
    expectedExperience: "",
    frequentComplaints: "",

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
    setFormData((prev) => ({
      ...prev,
      socialMedia: [...prev.socialMedia, { platform: "instagram", username: "" }],
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Terima kasih! Data rumusan brand Anda telah kami terima.");
  };

  const steps = [
    { title: "Identitas", icon: <PiIdentificationCard /> },
    { title: "Visi", icon: <IoRocketOutline /> },
    { title: "Produk", icon: <IoCubeOutline /> },
    { title: "Audiens", icon: <IoPeopleOutline /> },
    { title: "Pesaing", icon: <LuSwords /> },
    { title: "Keunikan", icon: <IoDiamondOutline /> },
    { title: "Visual", icon: <IoColorPaletteOutline /> },
    { title: "Testimoni", icon: <IoChatbubblesOutline /> },
    { title: "Masalah", icon: <IoAlertCircleOutline /> },
  ];

  return (
    <div className="bg-base-100 min-h-screen flex flex-col font-montserrat overflow-hidden">
      <ExalviaNavbar data={data.navbar} bgCustom="bg-transparent" />

      <HeroBrandChecker headline="Lengkapi Data Brand" secId="form-hero" backgroundImage={data.pagesResult.heroImage}>
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center gap-4 py-10">
          <IoSparklesOutline className="text-6xl text-warning animate-pulse" />
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">Rumusan Strategis</h1>
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
                <div className="flex flex-col gap-4">
                  <label className="text-sm font-bold uppercase opacity-50">Media Sosial (Opsional)</label>
                  {formData.socialMedia.map((sm, index) => {
                    const icons = {
                      instagram: <IoLogoInstagram className="text-pink-500" />,
                      tiktok: <IoLogoTiktok className="text-base-content" />,
                      facebook: <IoLogoFacebook className="text-blue-600" />,
                      youtube: <IoLogoYoutube className="text-red-600" />,
                      twitter: <IoLogoTwitter className="text-sky-400" />,
                      others: <IoShareSocialOutline />,
                    };

                    return (
                      <div key={index} className="flex flex-col md:flex-row gap-3 items-end md:items-center animate-in fade-in slide-in-from-left-4">
                        <div className="w-full md:w-1/3">
                          <ExalviaFormInput
                            type="select"
                            icon={icons[sm.platform] || icons.others}
                            value={sm.platform}
                            onChange={(e) => handleSocialMediaChange(index, "platform", e.target.value)}
                            options={[
                              { label: "Instagram", value: "instagram" },
                              { label: "TikTok", value: "tiktok" },
                              { label: "Facebook", value: "facebook" },
                              { label: "YouTube", value: "youtube" },
                              { label: "Twitter / X", value: "twitter" },
                              { label: "Lainnya", value: "others" },
                            ]}
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
                  <button type="button" onClick={addSocialMedia} className="btn btn-outline btn-primary btn-md rounded-xl w-full md:w-fit gap-2">
                    <span>+</span> Sosial Media
                  </button>
                </div>
              </FormSection>
            )}

            {/* GROUP 2: Visi, Misi & Tujuan Brand */}
            {currentStep === 2 && (
              <FormSection title="2. Visi & Misi" icon={steps[1].icon} description="Tujuan: menangkap arah dan niat strategis brand.">
                <ExalviaFormInput
                  label="Visi Brand (jika ada)"
                  type="textarea"
                  name="brandVision"
                  placeholder="Apa impian besar yang ingin dicapai brand Anda di masa depan?"
                  value={formData.brandVision}
                  onChange={handleChange}
                  required
                />
                <ExalviaFormInput
                  label="Misi Brand (jika ada)"
                  type="textarea"
                  name="brandMission"
                  placeholder="Apa yang brand Anda lakukan setiap hari untuk mencapai visi tersebut?"
                  value={formData.brandMission}
                  onChange={handleChange}
                  required
                />
                <ExalviaFormInput
                  label="Tujuan Jangka Pendek (jika ada)"
                  type="textarea"
                  name="shortTermGoal"
                  placeholder="Target yang ingin dicapai dalam 6-12 bulan ke depan"
                  value={formData.shortTermGoal}
                  onChange={handleChange}
                  required
                />
                <ExalviaFormInput
                  label="Tujuan Jangka Panjang (jika ada)"
                  type="textarea"
                  name="longTermGoal"
                  placeholder="Target besar dalam 3-5 tahun ke depan"
                  value={formData.longTermGoal}
                  onChange={handleChange}
                  required
                />
              </FormSection>
            )}

            {/* GROUP 3: Detail Produk */}
            {currentStep === 3 && (
              <FormSection title="3. Detail Produk" icon={steps[2].icon} description="Berikan informasi tentang produk atau layanan yang Anda tawarkan.">
                <ExalviaFormInput
                  label="Apa Yang Anda Jual?"
                  type="radio"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  options={[
                    { label: "Produk Fisik", value: "produk" },
                    { label: "Jasa / Layanan", value: "jasa" },
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
                    { label: "Pre-Launch", value: "pre_launch" },
                    { label: "Konsep", value: "concept" },
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
                  name="productVariants"
                  placeholder="Contoh: 5 varian rasa atau 3 paket layanan"
                  value={formData.productVariants}
                  onChange={handleChange}
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
                <ExalviaFormInput
                  label="Fitur / Spesifikasi Unggulan"
                  type="textarea"
                  name="productFeatures"
                  placeholder="Sebutkan 3-5 fitur atau kelebihan teknis produk Anda."
                  value={formData.productFeatures}
                  onChange={handleChange}
                  required
                />
                <div className="flex flex-col gap-6">
                  <label className="text-sm font-bold uppercase opacity-50">Sertifikasi / Penghargaan (Jika ada)</label>
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
                  <button type="button" onClick={addCertification} className="btn btn-outline btn-primary btn-sm rounded-xl w-fit gap-2">
                    <span>+</span> Tambah Sertifikat
                  </button>
                </div>

                <ExalviaFormInput
                  label="Kisaran Harga (Price Range)"
                  type="select"
                  name="productPriceRange"
                  value={formData.productPriceRange}
                  onChange={handleChange}
                  placeholder="Pilih Kisaran Harga"
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
                  label="Manfaat Utama bagi Pengguna"
                  type="textarea"
                  name="productUniqueBenefits"
                  placeholder="Apa manfaat emosional atau fungsional yang paling dirasakan konsumen?"
                  value={formData.productUniqueBenefits}
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
              </FormSection>
            )}

            {/* GROUP 4: Target Audiens */}
            {currentStep === 4 && (
              <FormSection title="4. Target Audiens" icon={steps[3].icon} description="Tujuan: memahami siapa yang disasar brand.">
                {/* --- DEMOGRAFI --- */}
                <div className="col-span-full border-b border-base-300 pb-2">
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary">A. Demografi</h4>
                </div>
                <ExalviaFormInput label="Usia" name="targetAge" placeholder="Contoh: 25 - 40 tahun" value={formData.targetAge} onChange={handleChange} required />
                <ExalviaFormInput
                  label="Jenis Kelamin"
                  type="radio"
                  name="targetGender"
                  value={formData.targetGender}
                  onChange={handleChange}
                  options={[
                    { label: "Laki-laki", value: "male" },
                    { label: "Perempuan", value: "female" },
                    { label: "Keduanya", value: "both" },
                  ]}
                  required
                />
                <ExalviaFormInput
                  label="Status Pernikahan"
                  type="radio"
                  name="targetMaritalStatus"
                  value={formData.targetMaritalStatus}
                  onChange={handleChange}
                  options={[
                    { label: "Belum Menikah", value: "single" },
                    { label: "Menikah", value: "married" },
                    { label: "Single parent", value: "single_parent" },
                  ]}
                  required
                />
                <ExalviaFormInput
                  label="Agama"
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
                  label="Ras / Suku"
                  type="select"
                  name="targetEthnicity"
                  placeholder="Pilih Suku"
                  value={formData.targetEthnicity}
                  onChange={handleChange}
                  options={[
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
                  label="Pendidikan Terakhir"
                  type="select"
                  name="targetEducation"
                  placeholder="Pilih Pendidikan"
                  value={formData.targetEducation}
                  onChange={handleChange}
                  options={[
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
                  label="Profesi"
                  name="targetBackground"
                  placeholder="Contoh: Karyawan swasta, Pengusaha, atau Mahasiswa"
                  value={formData.targetBackground}
                  onChange={handleChange}
                  required
                />
                <ExalviaFormInput
                  label="Tingkat Ekonomi"
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
                  label="Lokasi Geografis"
                  name="targetLocation"
                  placeholder="Contoh: Perkotaan besar (Jabodetabek) atau Seluruh Indonesia"
                  value={formData.targetLocation}
                  onChange={handleChange}
                  required
                />
                <ExalviaFormInput
                  label="Bahasa Utama"
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
                    placeholder="Contoh: Ibu rumah tangga milenial yang peduli kesehatan keluarga"
                    value={formData.targetDescription}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-span-full">
                  <ExalviaFormInput
                    label="Minat & Gaya Hidup"
                    type="textarea"
                    name="targetLifestyle"
                    placeholder="Apa hobi mereka? Apa yang mereka sukai? (Contoh: Suka traveling, peduli lingkungan)"
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
                    placeholder="Kesulitan apa yang sedang mereka hadapi saat ini?"
                    value={formData.targetProblem}
                    onChange={handleChange}
                    required
                  />
                </div>
              </FormSection>
            )}

            {/* GROUP 5: Analisis Persaingan */}
            {currentStep === 5 && (
              <FormSection title="5. Analisis Persaingan" icon={steps[4].icon} description="Kompetitor: tujuan mengetahui karakteristik kompetitor.">
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
                        placeholder="Apa saja 3 keunggulan utama mereka?"
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
                    <span>+</span> Tambah Pesaing Baru
                  </button>

                  <div className="mt-4 pt-10 border-t border-base-300 border-dashed">
                    <ExalviaFormInput
                      label="Peluang Utama di Pasar"
                      type="textarea"
                      name="marketOpportunity"
                      placeholder="Berdasarkan analisis di atas, apa peluang besar yang bisa diambil oleh brand Anda?"
                      value={formData.marketOpportunity}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </FormSection>
            )}
            {/* GROUP 6: Value Proposition & Keunikan Brand */}
            {currentStep === 6 && (
              <FormSection title="6. Value Proposition & Keunikan" icon={steps[5].icon} description="Tujuan: mengetahui pembeda brand.">
                <ExalviaFormInput
                  label="Nilai Utama Brand (Brand Values)"
                  type="textarea"
                  name="brandValues"
                  placeholder="Contoh: Kejujuran, Inovasi, Keberlanjutan..."
                  value={formData.brandValues}
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
                <ExalviaFormInput
                  label="Manfaat Utama bagi Konsumen"
                  type="textarea"
                  name="consumerBenefits"
                  placeholder="Apa keuntungan nyata yang didapat konsumen setelah membeli produk Anda?"
                  value={formData.consumerBenefits}
                  onChange={handleChange}
                  required
                />
                <ExalviaFormInput
                  label="Alasan Konsumen Harus Memilih Brand Ini"
                  type="textarea"
                  name="whyChooseUs"
                  placeholder="Mengapa mereka harus percaya pada Anda dibandingkan yang lain?"
                  value={formData.whyChooseUs}
                  onChange={handleChange}
                  required
                />
              </FormSection>
            )}

            {/* GROUP 7: Identitas Visual */}
            {currentStep === 7 && (
              <FormSection title="7. Identitas Visual" icon={steps[6].icon} description="Tujuan: mengevaluasi konsistensi visual.">
                <ExalviaFormInput
                  label="Apakah Brand Sudah Memiliki Logo?"
                  type="radio"
                  name="hasLogo"
                  value={formData.hasLogo}
                  onChange={handleChange}
                  options={[
                    { label: "Ya", value: "yes" },
                    { label: "Tidak", value: "no" },
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
                <ExalviaFormInput label="Warna Utama Brand" name="primaryColor" placeholder="Contoh: Biru Navy (#000080) dan Putih" value={formData.primaryColor} onChange={handleChange} required />
                <ExalviaFormInput label="Font Utama" name="primaryFont" placeholder="Contoh: Montserrat, Roboto, atau Playfair Display" value={formData.primaryFont} onChange={handleChange} required />
                <ExalviaFormInput label="Gaya Visual" name="visualStyle" placeholder="Contoh: Minimalis, Bold, Modern, vintage, dsb." value={formData.visualStyle} onChange={handleChange} required />
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
                  ]}
                  required
                />
              </FormSection>
            )}
            {/* GROUP 8: Customer Experience & Touchpoints */}
            {currentStep === 8 && (
              <FormSection title="8. Customer Experience" icon={steps[7].icon} description="Tujuan: melihat interaksi brand dengan konsumen.">
                <ExalviaFormInput
                  label="Titik interaksi paling banyak"
                  type="textarea"
                  name="mainTouchpoints"
                  placeholder="Contoh: Media sosial, Website, Toko fisik, Whatsapp CS, dsb."
                  value={formData.mainTouchpoints}
                  onChange={handleChange}
                  required
                />
                <ExalviaFormInput
                  label="Pengalaman Konsumen yang Diharapkan"
                  type="textarea"
                  name="expectedExperience"
                  placeholder="Bagaimana perasaan atau kesan yang ingin Anda berikan kepada konsumen setelah berinteraksi dengan brand?"
                  value={formData.expectedExperience}
                  onChange={handleChange}
                  required
                />
                <ExalviaFormInput
                  label="Keluhan yang Sering Muncul"
                  type="textarea"
                  name="frequentComplaints"
                  placeholder="Apa saja kendala atau komplain yang biasanya disampaikan oleh konsumen saat ini?"
                  value={formData.frequentComplaints}
                  onChange={handleChange}
                  required
                />
              </FormSection>
            )}

            {/* GROUP 9: Masalah Brand */}
            {currentStep === 9 && (
              <FormSection title="9. Masalah Brand" icon={steps[8].icon} description="Pilih beberapa masalah yang paling relevan dengan kondisi brand Anda saat ini.">
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
                      text="Kirim Data"
                      type="submit"
                      icon={ArrowRight}
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
