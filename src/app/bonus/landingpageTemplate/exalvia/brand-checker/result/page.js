"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ExalviaButton from "../../ui-components/ExalviaButton";
import HeroBrandChecker from "../HeroBrandChecker";
import ExalviaDatabase from "../../database/ExalviaDatabase";
import { FaArrowRight, FaRegThumbsUp } from "react-icons/fa6";
import { MdOutlineRocketLaunch } from "react-icons/md";
import ExalviaLinkButton from "../../ui-components/ExalviaLinkButton";
import ExalviaImage from "../../ui-components/ExalviaImage";
import { HiOutlineTrophy } from "react-icons/hi2";

// Import custom components
import ScoreDisplay from "./components/ScoreDisplay";
import ResultMetrics from "./components/ResultMetrics";
import AssessmentDetails from "./components/AssessmentDetails";
import AssessmentNotes from "./components/AssessmentNotes";
import PackageCard from "./components/PackageCard";
import AlternativePackages from "./components/AlternativePackages";
import BonusOffer from "./components/BonusOffer";
import PackageDetailModal from "./components/PackageDetailModal";
import { getAllFlags } from "./components/flagUtils";

// Function to format currency with dot separator
const formatCurrency = (amount) => {
  if (typeof amount === "number") {
    return amount.toLocaleString("id-ID");
  }
  // Handle string that might contain numbers
  const numericValue = amount.toString().replace(/[^\d]/g, "");
  if (numericValue) {
    return parseInt(numericValue).toLocaleString("id-ID");
  }
  return amount;
};

export default function BrandCheckerResult() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [accordionOpen, setAccordionOpen] = useState("notes"); // "details", "notes", or "packages"
  const [myTest, setMyTest] = useState("default value");
  const router = useRouter();

  // Hide DaisyUI default chevron
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .collapse-arrow input:checked ~ .collapse-title::after {
        display: none !important;
      }
      .collapse-arrow .collapse-title::after {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    calculateResults();
  }, []);

  const calculateResults = () => {
    // Check if we're on client side
    if (typeof window === "undefined") return;

    // Try to get data from short URL parameters first
    const urlParams = new URLSearchParams(window.location.search);

    let brandName, answers, testStartTime, endTime, rawScore, normalizedScore, categoryScores, redFlags, totalQuestions;

    // Check for short parameters
    if (urlParams.has("b") && urlParams.has("sc")) {
      brandName = urlParams.get("b");
      rawScore = parseInt(urlParams.get("rs"));
      normalizedScore = parseFloat(urlParams.get("sc"));
      categoryScores = urlParams.get("cs") ? JSON.parse(urlParams.get("cs")) : {};
      redFlags = []; // Initialize empty, will be populated below
      totalQuestions = urlParams.get("tq") ? parseInt(urlParams.get("tq")) : 16;
      testStartTime = urlParams.get("st") || new Date().toISOString();
      endTime = urlParams.get("et") || new Date().toISOString(); // Use current time as fallback
      setMyTest(urlParams.get("mytest") || "default value"); // Set myTest state

      // No answers needed for display - just empty array
      answers = [];

      const reverseMapping = {
        PI: "Informasi Produk",
        TA: "Target",
        HA: "Harga",
        CM: "Cara Menjual",
        RE: "Reflektif",
        IV: "Identitas Visual",
      };

      // Parse category scores from URL
      try {
        const shortCategoryScores = urlParams.get("cs") ? JSON.parse(urlParams.get("cs")) : {};
        categoryScores = {};
        Object.keys(shortCategoryScores).forEach((shortKey) => {
          if (reverseMapping[shortKey]) {
            categoryScores[reverseMapping[shortKey]] = shortCategoryScores[shortKey];
          }
        });
      } catch (e) {
        categoryScores = {};
      }

      // Decode red flags from IDs using ExalviaDatabase - ONLY if not perfect score
      if (normalizedScore < 100) {
        const redFlagIds = (urlParams.get("rf") || "").split(",").filter(Boolean);
        redFlags = [];
        redFlagIds.forEach((id) => {
          const flagText = ExalviaDatabase.getBrandCheckerFlag(id);
          if (flagText) redFlags.push(flagText);
        });
      } else {
        redFlags = []; // No red flags for perfect score
      }

      // Get duration directly from URL - no calculation needed!
      const durationText = urlParams.get("dur") || "0s";

      // No answers needed for display - just empty array
      answers = [];
      testStartTime = "";
      endTime = "";
    } else if (urlParams.has("brand") && urlParams.has("answers")) {
      // Fallback to readable format
      brandName = urlParams.get("brand");
      answers = urlParams.get("answers") ? JSON.parse(urlParams.get("answers")) : [];
      testStartTime = urlParams.get("startTime");
      endTime = urlParams.get("endTime");

      // Calculate scores
      rawScore = answers.reduce((total, answer) => total + (Number(answer?.score) || 0), 0);
      const normalizedScoreRaw = ((rawScore - 24) / (96 - 24)) * 100;
      normalizedScore = Number.isFinite(normalizedScoreRaw) ? Math.round(Math.max(0, Math.min(100, normalizedScoreRaw))) : 0;

      // Calculate category scores and red flags...
      categoryScores = {};
      redFlags = [];
      totalQuestions = answers.length;
    } else if (urlParams.has("data")) {
      // Fallback to old encoded format
      try {
        const decodedData = JSON.parse(atob(urlParams.get("data")));
        brandName = decodedData.brandName;
        answers = decodedData.answers;
        testStartTime = decodedData.startTime;
        endTime = decodedData.endTime;
        rawScore = answers.reduce((total, answer) => total + (Number(answer?.score) || 0), 0);
        const normalizedScoreRaw = ((rawScore - 24) / (96 - 24)) * 100;
        normalizedScore = Number.isFinite(normalizedScoreRaw) ? Math.round(Math.max(0, Math.min(100, normalizedScoreRaw))) : 0;
        categoryScores = {};
        redFlags = [];
        totalQuestions = answers.length;
      } catch (error) {
        console.error("Error decoding URL data:", error);
        // Fallback to sessionStorage
        brandName = sessionStorage.getItem("brandName");
        const answersData = sessionStorage.getItem("brandCheckerAnswers");
        answers = answersData ? JSON.parse(answersData) : [];
        testStartTime = sessionStorage.getItem("brandCheckerStartTime");
        endTime = new Date().toISOString(); // Use current time as fallback
        rawScore = answers.reduce((total, answer) => total + (Number(answer?.score) || 0), 0);
        const normalizedScoreRaw = ((rawScore - 24) / (96 - 24)) * 100;
        normalizedScore = Number.isFinite(normalizedScoreRaw) ? Math.round(Math.max(0, Math.min(100, normalizedScoreRaw))) : 0;
        categoryScores = {};
        redFlags = [];
        totalQuestions = answers.length;
      }
    } else {
      // Fallback to sessionStorage
      brandName = sessionStorage.getItem("brandName");
      const answersData = sessionStorage.getItem("brandCheckerAnswers");
      testStartTime = sessionStorage.getItem("brandCheckerStartTime");

      if (!brandName || !answersData) {
        router.push("/bonus/landingpageTemplate/exalvia/brand-checker");
        return;
      }

      answers = JSON.parse(answersData);
      endTime = new Date().toISOString(); // Use current time as fallback
      rawScore = answers.reduce((total, answer) => total + (Number(answer?.score) || 0), 0);
      const normalizedScoreRaw = ((rawScore - 24) / (96 - 24)) * 100;
      normalizedScore = Number.isFinite(normalizedScoreRaw) ? Math.round(Math.max(0, Math.min(100, normalizedScoreRaw))) : 0;
      categoryScores = {};
      redFlags = [];
      totalQuestions = answers.length;
    }

    // Calculate duration - use from URL if available, otherwise calculate
    let durationText = "0s";
    if (urlParams.has("dur")) {
      // Use pre-calculated duration from URL
      durationText = urlParams.get("dur") || "0s";
    } else if (testStartTime && endTime) {
      // Fallback: calculate duration
      const startTime = new Date(testStartTime);
      const endTimeDate = new Date(endTime);
      const duration = Math.floor((endTimeDate - startTime) / 1000); // in seconds
      const durationMinutes = Math.floor(duration / 60);
      const durationSeconds = duration % 60;
      durationText = durationMinutes > 0 ? `${durationMinutes}m ${durationSeconds}s` : `${durationSeconds}s`;
    }

    // Determine classification based on lowest category score and red flags
    let classification = "";
    let description = "";
    let recommendedPackage = "";
    let condition = "";

    // Find the lowest scoring category
    const categoryNameMapping = {
      PI: "Informasi Produk",
      TA: "Target",
      HA: "Harga",
      CM: "Cara Menjual",
      RE: "Reflektif",
      IV: "Identitas Visual",
    };

    const sortedCategories = Object.entries(categoryScores).sort(([, a], [, b]) => a - b);
    const lowestCategory = sortedCategories[0];
    const lowestCategoryKey = lowestCategory ? lowestCategory[0] : "PI";
    // Jika key adalah ID singkat (seperti "PI"), konversi ke nama lengkap. Jika sudah nama lengkap, gunakan itu.
    const lowestCategoryName = categoryNameMapping[lowestCategoryKey] || lowestCategoryKey || "Informasi Produk";
    const lowestCategoryScore = lowestCategory ? lowestCategory[1] : 0;

    // Classification based on lowest category and score
    if (lowestCategoryScore < 60) {
      classification = "Rokie";
      description = `Brand Anda mengalami masalah serius di aspek ${lowestCategoryName} dan yang lainnya. Ini perlu segera ditangani agar tidak membuat kondisi semakin buruk.`;
      condition = `${lowestCategoryName} membutuhkan perhatian prioritas`;
    } else if (lowestCategoryScore < 75) {
      classification = "Pro";
      description = `Brand Anda sudah memiliki fondasi yang baik, namun aspek ${lowestCategoryName} dan yang lainnya masih bisa di optimalkan untuk mencapai potensi maksimal.`;
      condition = `${lowestCategoryName} perlu ditingkatkan`;
    } else if (normalizedScore === 100) {
      classification = "Excellent";
      description = "Brand Anda mencapai skor sempuran! Semua aspek brand berada di level tertinggi. Pertahankan konsistensi dan terus berinovasi untuk memimpin pasar.";
      condition = "Brand sempurna - siap menjadi market leader";
    } else {
      classification = "Elite";
      description = "Brand Anda sudah berada di level yang baik dengan semua kategori menunjukkan nilai yang tinggi, namun masih bisa dioptimalkan.";
      condition = "Brand siap untuk scale";
    }

    // Determine recommended package based on lowest category
    const categoryPackageMapping = {
      "Informasi Produk": "Qolilan Service Pack",
      Target: "Qolilan Service Pack",
      Harga: "Mumtazan Service Pack",
      "Cara Menjual": "Mumtazan Service Pack",
      Reflektif: "Qolilan Service Pack",
      "Identitas Visual": "Kamilan Service Pack",
    };

    recommendedPackage = categoryPackageMapping[lowestCategoryName] || "Qolilan Service Pack";

    setResult({
      brandName,
      rawScore,
      normalizedScore,
      classification,
      description,
      recommendedPackage,
      condition,
      categoryScores,
      redFlags,
      totalQuestions: totalQuestions || answers.length,
      completedAt: (endTime ? new Date(endTime) : testStartTime ? new Date(testStartTime) : new Date()).toLocaleString("id-ID"),
      duration: durationText,
      startTime: testStartTime ? new Date(testStartTime) : new Date(),
      endTime: endTime,
      answers: answers,
      testStartTime: testStartTime,
    });

    setLoading(false);
  };

  const handleRestart = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("brandName");
      sessionStorage.removeItem("brandCheckerAnswers");
      sessionStorage.removeItem("brandCheckerResult");
    }
    router.push("/brand-checker");
  };

  if (typeof window === "undefined" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>Menghitung hasil...</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p>Terjadi kesalahan. Silakan coba lagi.</p>
          <ExalviaButton onClick={handleRestart} className="mt-4">
            Mulai Ulang
          </ExalviaButton>
        </div>
      </div>
    );
  }

  // Get rekomendasi paket dari database
  const getRecommendedPackage = (score) => {
    const packages = ExalviaDatabase.brandCheckerPackages?.recommended || [];
    return packages.find((pkg) => score >= pkg.minScore && score <= pkg.maxScore);
  };

  // Get alternative packages dari database
  const getAlternativePackages = (recommendedScore) => {
    const allRecommendedPackages = ExalviaDatabase.brandCheckerPackages?.recommended || [];
    const recommendedPkg = getRecommendedPackage(recommendedScore);

    if (recommendedScore === 100) return allRecommendedPackages;
    return allRecommendedPackages.filter((pkg) => pkg.name !== recommendedPkg?.name);
  };

  const getScoreBgColor = (score) => {
    if (score <= 25) return "bg-error";
    if (score <= 50) return "bg-warning";
    if (score <= 75) return "bg-yellow-500";
    return "bg-success";
  };

  const openPackageModal = (pkg) => {
    setSelectedPackage(pkg);
    document.getElementById("package_modal").showModal();
  };

  return (
    <>
      <HeroBrandChecker headline="Cek Brand Selesai!" secId="brand-checker-result">
        <div>
          <ScoreDisplay result={result} myTest={myTest} getScoreBgColor={getScoreBgColor} />
          <ResultMetrics result={result} />
          <div className=" w-full justify-center flex">
            <ExalviaLinkButton text="Rekomendasi" href="#rekomendasi" icon={FaArrowRight} className="mt-10 w-fit mx-auto btn-lg animate-pulse btn-warning" />
          </div>
        </div>
      </HeroBrandChecker>

      <section className=" bg-base-100 py-15">
        <div className=" lg:w-7/12 w-full px-5 mx-auto grid grid-cols-1 gap-15">
          <div className="join join-vertical bg-base-200 rounded-bl-4xl overflow-hidden p-0 m-0">
            <AssessmentDetails title="Detail Penilaian" result={result} isOpen={accordionOpen === "details"} onToggle={() => setAccordionOpen(accordionOpen === "details" ? "" : "details")} />
            <AssessmentNotes title="Catatan" result={result} isOpen={accordionOpen === "notes"} onToggle={() => setAccordionOpen(accordionOpen === "notes" ? "" : "notes")} />
          </div>

          <div id="rekomendasi">
            <div className="flex items-center justify-between ">
              <h3 className="text-lg font-semibold">
                Rekomendasi untuk brand <span className="capitalize">{result.brandName}</span>
              </h3>
              <MdOutlineRocketLaunch className=" text-xl" />
            </div>
            <hr className="my-4" />
            <div className=" flex sm:flex-row flex-col items-center gap-15 ">
              <div className="relative sm:w-6/12 w-full h-auto flex flex-col gap-8">
                {result.normalizedScore < 100 && (
                  <div className="bg-base-200 rounded-bl-4xl h-full sm:p-8 p-5">
                    <div className=" w-20 mb-5 aspect-square bg-primary rounded-bl-4xl mx-auto flex items-center justify-center">
                      <FaRegThumbsUp className=" text-4xl text-white" />
                    </div>
                    <p className="text-lg leading-relaxed">
                      Berdasarkan <span className="font-bold text-warning">{getAllFlags(result).length} catatan penting</span> dari analisa brand{" "}
                      <span className="capitalize font-semibold">{result.brandName}</span>, berikut solusi yang direkomendasikan untuk mendorong penjualan online yang lebih optimal.
                    </p>
                  </div>
                )}
                <ExalviaImage
                  src="/images/templateLandingPageBonus/Exalvia/sections/ipad-2.webp"
                  alt={`Rekomendasi untuk brand ${result.brandName}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain "
                  aspectRatio="aspect-4/3 sm:block hidden"
                />
              </div>
              <div className="sm:w-6/12 w-full">
                {result.normalizedScore === 100 ? (
                  <div className="border-4 border-primary rounded-bl-4xl p-8">
                    <div className="text-center">
                      <HiOutlineTrophy className="text-6xl mb-4 text-warning mx-auto" />
                      <h3 className="text-2xl font-bold text-success mb-4">Brand Sempurna!</h3>
                      <p className="text-lg mb-6">Selamat! Brand Anda telah mencapai level tertinggi di semua aspek.</p>
                      <div className="bg-success/10 rounded-bl-2xl p-4 mb-6">
                        <p className="font-semibold text-success">💡 Tips: Fokus pada scaling dan market expansion!</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <PackageCard pkg={getRecommendedPackage(result.normalizedScore)} isRecommended={true} formatCurrency={formatCurrency} />
                )}
              </div>
            </div>
          </div>

          <AlternativePackages
            packages={getAlternativePackages(result.normalizedScore)}
            isOpen={accordionOpen === "packages"}
            onToggle={() => setAccordionOpen(accordionOpen === "packages" ? "" : "packages")}
            formatCurrency={formatCurrency}
            onDetailClick={openPackageModal}
          />

          <BonusOffer />
        </div>
      </section>

      <PackageDetailModal selectedPackage={selectedPackage} formatCurrency={formatCurrency} onClose={() => document.getElementById("package_modal").close()} />
    </>
  );
}
