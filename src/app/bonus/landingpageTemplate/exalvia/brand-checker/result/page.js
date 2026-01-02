"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import HeroBrandChecker from "../HeroBrandChecker";
import ExalviaDatabase from "../../database/ExalviaDatabase";
import { MdOutlineRocketLaunch } from "react-icons/md";

// Import components
import ResultHeader from "../components/ResultHeader";
import ResultDetails from "../components/ResultDetails";
import PackageRecommendation from "../components/PackageRecommendation";
import PackageModal from "../components/PackageModal";
import BonusSection from "../components/BonusSection";
import AlternativePackages from "../components/AlternativePackages";

export default function BrandCheckerResult() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [accordionOpen, setAccordionOpen] = useState("notes"); // "details", "notes", or "packages"
  const [myTest, setMyTest] = useState("default value"); // Add state for myTest
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
    const sortedCategories = Object.entries(categoryScores).sort(([, a], [, b]) => a - b);
    const lowestCategory = sortedCategories[0];
    const lowestCategoryName = lowestCategory[0];
    const lowestCategoryScore = lowestCategory[1];

    // Classification based on lowest category and score
    if (lowestCategoryScore < 60) {
      // Critical issues in specific category
      classification = "Rokie";
      description = `Brand Anda mengalami masalah serius di aspek ${lowestCategoryName} dan yang lainnya. Ini perlu segera ditangani agar tidak membuat kondisi semakin buruk.`;
      condition = `${lowestCategoryName} membutuhkan perhatian prioritas`;
    } else if (lowestCategoryScore < 75) {
      // Moderate issues
      classification = "Pro";
      description = `Brand Anda sudah memiliki fondasi yang baik, namun aspek ${lowestCategoryName} dan yang lainnya masih bisa di optimalkan untuk mencapai potensi maksimal.`;
      condition = `${lowestCategoryName} perlu ditingkatkan`;
    } else if (lowestCategoryScore === 100) {
      // Perfect score
      classification = "Excellent";
      description = "Brand Anda mencapai skor sempuran! Semua aspek brand berada di level tertinggi. Pertahankan konsistensi dan terus berinovasi untuk memimpin pasar.";
      condition = "Brand sempurna - siap menjadi market leader";
    } else {
      // Good overall but can be better
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

    // Red flags already processed from URL parameters above
    // No additional detection needed

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
      totalQuestions: totalQuestions || answers.length, // Use URL parameter first, fallback to answers.length
      completedAt: (endTime ? new Date(endTime) : testStartTime ? new Date(testStartTime) : new Date()).toLocaleString("id-ID"),
      duration: durationText,
      startTime: testStartTime ? new Date(testStartTime) : new Date(),
      endTime: endTime,
      answers: answers, // Include all answers
      testStartTime: testStartTime, // Include start time
      allData: {
        // Include all raw data
        brandName,
        answers,
        startTime: testStartTime,
        endTime: endTime,
        completedAt: (endTime ? new Date(endTime) : testStartTime ? new Date(testStartTime) : new Date()).toLocaleString("id-ID"),
        duration: durationText,
        rawScore,
        normalizedScore,
        classification,
        description,
        recommendedPackage,
        condition,
        categoryScores,
        redFlags,
        totalQuestions: totalQuestions || answers.length,
      },
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

  // Helper functions untuk rating bintang
  const getStarRating = (score) => {
    let starCount;
    if (score === 100) {
      starCount = 5; // Only 100 gets 5 stars
    } else if (score >= 81) {
      starCount = 4; // 81-99 gets 4 stars
    } else if (score >= 61) {
      starCount = 3; // 61-80 gets 3 stars
    } else if (score >= 41) {
      starCount = 2; // 41-60 gets 2 stars
    } else if (score >= 1) {
      starCount = 1; // 1-40 gets 1 star
    } else {
      starCount = 0; // 0 gets 0 stars
    }

    return Array.from({ length: 5 }, (_, index) => {
      if (index < starCount) {
        return <FaStar key={index} className="text-warning" />;
      } else {
        return <FaRegStar key={index} className="text-warning" />;
      }
    });
  };

  // Format waktu Indonesia
  const formatDateTime = (date) => {
    const options = {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    // Handle both string and Date object
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return dateObj.toLocaleString("id-ID", options);
  };

  return (
    <>
      <HeroBrandChecker headline="Cek Brand Selesai!" secId="brand-checker-result">
        <ResultHeader result={result} myTest={myTest} />
      </HeroBrandChecker>

      <section className="bg-base-100 py-15">
        <div className="lg:w-7/12 w-full px-5 mx-auto grid grid-cols-1 gap-15">
          <ResultDetails result={result} accordionOpen={accordionOpen} setAccordionOpen={setAccordionOpen} />

          <div id="rekomendasi">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                Rekomendasi untuk brand <span className="capitalize">{result.brandName}</span>
              </h3>
              <MdOutlineRocketLaunch className="text-xl" />
            </div>
            <hr className="my-4" />
            <PackageRecommendation result={result} />
          </div>

          <AlternativePackages result={result} accordionOpen={accordionOpen} setAccordionOpen={setAccordionOpen} setSelectedPackage={setSelectedPackage} />

          <BonusSection />
        </div>
      </section>

      <PackageModal selectedPackage={selectedPackage} />
    </>
  );
}
