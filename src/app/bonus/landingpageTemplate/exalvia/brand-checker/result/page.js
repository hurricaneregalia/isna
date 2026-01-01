"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ExalviaButton from "../../ui-components/ExalviaButton";
import HeroBrandChecker from "../HeroBrandChecker";
import ExalviaDatabase from "../../database/ExalviaDatabase";
import { FaRegClock, FaStar, FaRegStar, FaCircleCheck, FaRegCircleCheck, FaRegThumbsUp, FaArrowRight, FaPenClip, FaChevronDown, FaGift, FaCircleXmark, FaHandPointRight } from "react-icons/fa6";

import { TbCircleDashedNumber9 } from "react-icons/tb";
import { LuNotepadText } from "react-icons/lu";
import { MdOutlineRocketLaunch } from "react-icons/md";
import ExalviaLinkButton from "../../ui-components/ExalviaLinkButton";
import ExalviaImage from "../../ui-components/ExalviaImage";
import ExalviaCountDown from "../../ui-components/ExalviaCountDown";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { HiOutlineTrophy } from "react-icons/hi2";

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
  const [startTime, setStartTime] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
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

      console.log("Debug - Data from URL ONLY:", {
        brandName,
        rawScore,
        normalizedScore,
        categoryScores,
        redFlagsCount: redFlags.length,
        duration: durationText,
      });
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

    const startTime = testStartTime ? new Date(testStartTime) : new Date();
    setStartTime(startTime);

    // Determine classification based on lowest category score and red flags
    let classification = "";
    let description = "";
    let recommendedPackage = "";
    let condition = "";

    // Calculate category scores first if not already calculated
    if (!categoryScores || Object.keys(categoryScores).length === 0) {
      categoryScores = {};
      const categories = ["Informasi Produk", "Target", "Harga", "Cara Menjual", "Reflektif", "Identitas Visual"];
      categories.forEach((category) => {
        const categoryAnswers = answers.filter((answer) => answer.category === category);
        const categoryTotal = categoryAnswers.reduce((total, answer) => total + (Number(answer?.score) || 0), 0);
        const categoryMax = categoryAnswers.length * 4;
        const categoryPercentageRaw = categoryMax > 0 ? (categoryTotal / categoryMax) * 100 : 0;
        const categoryPercentage = Number.isFinite(categoryPercentageRaw) ? Math.round(categoryPercentageRaw) : 0;
        categoryScores[category] = categoryPercentage;
      });
    }

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

    // Log classification process
    console.log("=== CLASSIFICATION ANALYSIS ===");
    console.log("Category Scores:", categoryScores);
    console.log("Lowest Category:", lowestCategoryName, "with score:", lowestCategoryScore);
    console.log("Classification:", classification);
    console.log("Description:", description);
    console.log("Recommended Package:", recommendedPackage);
    console.log("Condition:", condition);
    console.log("===============================");

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

    // Log all available data for debugging
    console.log("=== ALL BRAND CHECKER DATA ===");
    console.log("Brand Name:", brandName);
    console.log("Raw Score:", rawScore);
    console.log("Normalized Score:", normalizedScore);
    console.log("Classification:", classification);
    console.log("Description:", description);
    console.log("Recommended Package:", recommendedPackage);
    console.log("Condition:", condition);
    console.log("Category Scores:", categoryScores);
    console.log("Red Flags:", redFlags);
    console.log("Total Questions:", totalQuestions || answers.length);
    console.log("Duration:", durationText);
    console.log("Start Time:", startTime);
    console.log("End Time:", endTime);
    console.log("===============================");

    setLoading(false);
  };

  const handleViewDetails = () => {
    // Store result for detailed view
    if (typeof window !== "undefined") {
      sessionStorage.setItem("brandCheckerResult", JSON.stringify(result));
    }
    router.push("/brand-checker/result/details");
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

  // Get rekomendasi paket dari database
  const getRecommendedPackage = (score) => {
    const packages = ExalviaDatabase.brandCheckerPackages?.recommended || [];
    return packages.find((pkg) => score >= pkg.minScore && score <= pkg.maxScore);
  };

  // Get alternative packages dari database (dari recommended packages, kecuali yang dipilih)
  const getAlternativePackages = (recommendedScore) => {
    const allRecommendedPackages = ExalviaDatabase.brandCheckerPackages?.recommended || [];
    const recommendedPkg = getRecommendedPackage(recommendedScore);

    // If perfect score, show all packages
    if (recommendedScore === 100) {
      return allRecommendedPackages;
    }

    // Return all recommended packages except the currently recommended one
    return allRecommendedPackages.filter((pkg) => pkg.name !== recommendedPkg?.name);
  };

  const getScoreColor = (score) => {
    if (score <= 25) return "text-error";
    if (score <= 50) return "text-warning";
    if (score <= 75) return "text-yellow-600";
    return "text-success";
  };

  const getScoreBgColor = (score) => {
    if (score <= 25) return "bg-error";
    if (score <= 50) return "bg-warning";
    if (score <= 75) return "bg-yellow-500";
    return "bg-success";
  };

  return (
    <>
      <HeroBrandChecker headline="Cek Brand Selesai!" secId="brand-checker-result">
        <div>
          <div className="text-center border-4 border-white/50 border-b-0 sm:p-8 p-5 text-white">
            <div className="gap-5 grid grid-cols-1 ">
              <div className=" text-center brand-info" id="rating">
                <span className="flex gap-1 items-center justify-center mb-4 text-warning text-2xl">{getStarRating(result.normalizedScore)}</span>
                <p className="text-sm flex gap-1 items-center justify-center opacity-70">--- Kualitas Brand ---</p>
                <h1 className="text-3xl md:text-4xl font-bold uppercase">{result.brandName}</h1>

                <p className="text-sm flex gap-1 items-center justify-center opacity-70" id="testTime">
                  <FaRegClock /> {myTest}
                </p>
              </div>

              <div className=" skor">
                <div className={`flex flex-col mx-auto my-10 items-center ${getScoreBgColor(result.normalizedScore || 0)} justify-center w-30 aspect-square rounded-bl-4xl`}>
                  <p className="text-lg ">SKOR</p>
                  <span className="text-6xl font-bold">{result.normalizedScore || 0}</span>
                </div>
              </div>
              <div className="deskripsi ">
                <p className="max-w-md mx-auto"> Level saat ini: </p>
                <h2 className="text-2xl font-bold mb-2 uppercase text-warning">{result.classification || ""}</h2>

                <p className="max-w-md mx-auto opacity-70">{result.description || ""}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 text-center sumary text-white  border-4 border-white/50 rounded-bl-4xl">
            <div className="py-4">
              <div className="font-bold text-warning">24</div>
              <div className="text-sm opacity-70">Soal</div>
            </div>
            <div className="border-x-4 border-white/50 py-4" id="durasiPengerjaanSoal">
              <div className="font-bold text-warning">{result.duration}</div>
              <div className="text-sm opacity-70">Durasi</div>
            </div>
            <div className="py-4">
              <div className="font-bold text-warning">{result.redFlags?.length || 0}</div>
              <div className="text-sm opacity-70">Catatan</div>
            </div>
          </div>
          <div className=" w-full justify-center flex">
            <ExalviaLinkButton text="Rekomendasi" href="#rekomendasi" icon={FaArrowRight} className="mt-10 w-fit mx-auto btn-lg animate-pulse btn-warning" />
          </div>
        </div>
      </HeroBrandChecker>
      <section className=" bg-base-100 py-15">
        <div className=" lg:w-7/12 w-full px-5 mx-auto grid grid-cols-1 gap-15">
          <div className="join join-vertical bg-base-200 rounded-bl-4xl overflow-hidden p-0 m-0">
            <div
              className={`collapse join-item border-b bg-base-200 rounded-bl-4xl sm:p-8 p-5 ${accordionOpen === "details" ? "collapse-open" : ""}`}
              style={{ "--tw-collapse-content-max-height": "none" }}
            >
              <input type="checkbox" name="my-accordion" checked={accordionOpen === "details"} onChange={() => setAccordionOpen(accordionOpen === "details" ? "" : "details")} />
              <div className="collapse-title font-semibold flex items-center justify-between">
                <span>Detail penilaian</span>
                <FaChevronDown className={`text-xl transition-all duration-500 ease-in-out ${accordionOpen === "details" ? "rotate-180" : "rotate-0"}`} />
              </div>
              <div className="collapse-content text-sm">
                <div className="text-sm">
                  <div className="space-y-3 grid sm:grid-cols-2 grid-cols-1 gap-4 gap-x-15">
                    {Object.entries(result.categoryScores).map(([category, score]) => {
                      const safeScore = Number.isFinite(Number(score)) ? Math.max(0, Math.min(100, Number(score))) : 0;
                      return (
                        <div key={category}>
                          <span className="text-sm font-medium text-gray-700">{category}</span>
                          <div className="flex items-center justify-end">
                            <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                              <div
                                className={`h-2 rounded-full transition-all duration-500 ${
                                  safeScore <= 25 ? "bg-red-500" : safeScore <= 50 ? "bg-orange-500" : safeScore <= 75 ? "bg-yellow-500" : "bg-green-500"
                                }`}
                                style={{ width: `${safeScore}%` }}
                              />
                            </div>
                            <span className="text-sm font-medium text-gray-600  text-right ">{safeScore}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`collapse join-item border-t bg-base-200 rounded-bl-4xl sm:p-8 p-5 ${accordionOpen === "notes" ? "collapse-open" : ""}`}
              style={{ "--tw-collapse-content-max-height": "none" }}
            >
              <input type="checkbox" name="my-accordion" checked={accordionOpen === "notes"} onChange={() => setAccordionOpen(accordionOpen === "notes" ? "" : "notes")} />
              <div className="collapse-title font-semibold flex items-center justify-between">
                <span>Catatan</span>
                <FaChevronDown className={`text-xl transition-all duration-500 ease-in-out ${accordionOpen === "notes" ? "rotate-180" : "rotate-0"}`} />
              </div>
              <div className="collapse-content text-sm">
                <div>
                  {result.normalizedScore === 100 ? (
                    <div className="flex items-center p-4 bg-base-100 rounded-bl-2xl">
                      <HiOutlineTrophy className="text-4xl mr-4 text-warning" />
                      <div>
                        <p className="font-semibold text-success">Brand Sempurna!</p>
                        <p className="text-sm opacity-80">Semua aspek brand berada di level tertinggi. Pertahankan konsistensi ini!</p>
                      </div>
                    </div>
                  ) : result.redFlags.length > 0 ? (
                    <div>
                      <div className="space-y-2">
                        {result.redFlags.map((flag, index) => (
                          <div key={index} className="flex items-start p-3 bg-yellow-50 rounded-bl-2xl">
                            <svg className="w-5 h-5 text-yellow-600 mt-0.5 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                              />
                            </svg>
                            <p className="text-sm text-gray-700">{flag}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center p-4 bg-green-50 rounded-bl-2xl">
                      <div className="text-2xl mr-3">✅</div>
                      <p className="text-sm text-green-700">Tidak ada catatan khusus. Brand Anda sudah baik!</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div id="rekomendasi">
            <div className="flex items-center justify-between ">
              <h3 className="text-lg font-semibold">
                Rekomendasi untuk brand <span className="capitalize">{result.brandName}</span>
              </h3>
              <MdOutlineRocketLaunch className=" text-xl" />
            </div>
            <hr className="my-4" />
            <div className=" flex items-center gap-15">
              <div className="relative w-6/12 h-auto md:block hidden">
                <ExalviaImage
                  src="/images/templateLandingPageBonus/Exalvia/sections/ipad-2.webp"
                  alt={`Rekomendasi untuk brand ${result.brandName}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="sm:w-6/12 w-full">
                {(() => {
                  const recommendedPkg = getRecommendedPackage(result.normalizedScore);

                  // Show motivational message for perfect score
                  if (result.normalizedScore === 100) {
                    return (
                      <div className="border-4 border-primary rounded-bl-4xl p-8">
                        <div className="text-center">
                          <HiOutlineTrophy className="text-6xl mb-4 text-warning mx-auto" />
                          <h3 className="text-2xl font-bold text-success mb-4">Brand Sempurna!</h3>
                          <p className="text-lg mb-6">Selamat! Brand Anda telah mencapai level tertinggi di semua aspek. Pertahankan konsistensi ini dan terus berinovasi untuk memimpin pasar.</p>
                          <div className="bg-success/10 rounded-bl-2xl p-4 mb-6">
                            <p className="font-semibold text-success">💡 Tips: Fokus pada scaling dan market expansion untuk pertumbuhan berikutnya!</p>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  if (!recommendedPkg) return null;

                  return (
                    <div className="bg-base-200 border-4 border-primary rounded-bl-4xl">
                      <div className="flex items-start justify-between gap-4 bg-primary rounded-bl-4xl p-8">
                        <div className="w-full grid grid-cols-1 gap-5">
                          <div className="rounded-lg flex justify-between items-center text-warning">
                            <p id="recommendedRating" className="flex gap-1">
                              {Array.from({ length: 5 }, (_, index) => {
                                if (index < recommendedPkg.rating) {
                                  return <FaStar key={index} className="text-warning" />;
                                } else {
                                  return <FaRegStar key={index} className="text-warning" />;
                                }
                              })}
                            </p>
                            <span className="badge badge-secondary badge-soft uppercase text-sm">recommended</span>
                          </div>
                          <div className=" text-white">
                            <h4 className=" md:text-3xl text-2xl font-bold w-6/12 mb-2">{recommendedPkg.name}</h4>
                            <div className="mt-5 flex flex-col gap-3">
                              <p className=" opacity-70 flex gap-2 items-start shrink">
                                <BsFillPatchCheckFill className="text-lg shrink-0" /> {"Cocok untuk "} {recommendedPkg.description}
                              </p>
                              <p className=" opacity-70 flex gap-2 items-start shrink">
                                <BsFillPatchCheckFill className="text-lg shrink-0" /> {"Output "} {recommendedPkg.output}
                              </p>
                            </div>
                          </div>
                          <div className="text-2xl font-bold text-warning mb-2">Rp {formatCurrency(recommendedPkg.price)}</div>
                          <ExalviaLinkButton text="Pilih Paket" href="#contact" icon={FaArrowRight} className="w-full btn-lg animate-pulse btn-warning" />
                          <div className="">
                            <ExalviaLinkButton
                              text="Konsultasi"
                              href={`https://wa.me/628123456789?text=Assalamualaikum...%0A%0Apesan saya ingin konsultasi data ini.%0A%0A${encodeURIComponent(window.location.href)}`}
                              className="w-full btn-link text-white/50"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="p-8">
                        <div>
                          <h4 className="font-semibold mb-3">Yang Anda Dapatkan:</h4>
                          <div className="space-y-3">
                            {recommendedPkg.included?.map((item, index) => (
                              <div key={index} className="flex items-center justify-between">
                                <span className="text-sm flex gap-2">
                                  0{index + 1}. {item.title}
                                </span>
                                {item.status ? <FaCircleCheck className="text-success" /> : <FaCircleXmark className="text-error" />}
                              </div>
                            ))}
                          </div>
                        </div>
                        <hr className="my-5" />
                        <div className="mt-auto space-y-2" id="recommendedTurnaround">
                          <div className="text-sm text-base-content/60">Waktu pengerjaan: {recommendedPkg.turnaround}</div>
                          <div className="w-full">
                            <div className="h-2 w-full rounded-full bg-base-300 overflow-hidden">
                              <div
                                className="h-full rounded-full bg-primary/50 transition-all duration-500"
                                style={{
                                  width: recommendedPkg.turnaround.includes("6-7")
                                    ? "100%"
                                    : recommendedPkg.turnaround.includes("2-4")
                                    ? "70%"
                                    : recommendedPkg.turnaround.includes("1-2")
                                    ? "40%"
                                    : "20%",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
          <div className="join join-vertical bg-base-200 rounded-bl-4xl overflow-hidden p-0 m-0">
            <div className={`collapse join-item  sm:p-8 p-5 bg-base-200 rounded-bl-4xl ${accordionOpen === "packages" ? "collapse-open" : ""}`} style={{ "--tw-collapse-content-max-height": "none" }}>
              <input type="checkbox" name="my-accordion" checked={accordionOpen === "packages"} onChange={() => setAccordionOpen(accordionOpen === "packages" ? "" : "packages")} />
              <div className="collapse-title font-semibold flex items-center justify-between">
                <div className="flex items-center justify-between w-full">
                  <span>Paket Lainnya</span>
                </div>
                <FaChevronDown className={`text-xl transition-all duration-500 ease-in-out ${accordionOpen === "packages" ? "rotate-180" : "rotate-0"}`} />
              </div>
              <div className="collapse-content text-sm p-0">
                <div className="grid grid-cols-1 gap-2 mt-4 p-0">
                  {getAlternativePackages(result.normalizedScore).map((pkg, index) => (
                    <div key={index} className="sm:p-8 p-5 bg-base-100 rounded-bl-4xl flex items-start w-full">
                      <div className="w-6/12 grid grid-cols-1 gap-4">
                        <div>
                          <h6 className="font-semibold">{pkg.name}</h6>
                          <div className="flex flex-col gap-2 mt-2">
                            <p className="text-sm opacity-70 flex gap-2 items-start shrink">
                              <BsFillPatchCheckFill className="text-sm shrink-0" /> {"Cocok untuk "} {pkg.description}
                            </p>
                            <p className="text-sm opacity-70 flex gap-2 items-start shrink">
                              <BsFillPatchCheckFill className="text-sm shrink-0" /> {"Output "} {pkg.output}
                            </p>
                          </div>
                        </div>
                        <div className="text-warning font-bold">Rp {formatCurrency(pkg.price)}</div>
                      </div>
                      <div className="w-6/12 flex items-center justify-end">
                        <ExalviaButton
                          text="Detail"
                          onClick={() => {
                            setSelectedPackage(pkg);
                            document.getElementById("package_modal").showModal();
                          }}
                          variant="no"
                          className="w-fit btn-sm"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* Bonus Section */}
            <div className="flex items-center justify-between ">
              <h3 className="text-lg font-semibold">BONUS</h3>
              <FaGift className=" text-xl" />
            </div>
            <hr className="my-4" />
            <div className=" flex items-center sm:gap-15 gap-5 sm:flex-row flex-col">
              <div className="relative sm:w-6/12 w-full sm:h-auto h-fit">
                <ExalviaImage src="/images/templateLandingPageBonus/Exalvia/sections/ipad-2.webp" alt="bonus" width={800} height={600} className="w-full sm:h-auto h-fit object-contain" />
              </div>
              <div className="w-full sm:w-6/12">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-4">Bonus Spesial!</h2>
                  <span className="text-lg mb-6">
                    Gratis Review Logo senilai Rp.
                    <span className=" relative overflow-hidden  px-2">
                      <span className=" font-bold">500.000</span>
                      <hr className=" border border-red-500 -rotate-6 absolute bg-amber-500  w-full top-2 right-0" />
                    </span>{" "}
                    dapatkan sebelum waktunya habis.
                  </span>

                  <div className="mb-8">
                    <ExalviaCountDown target="2026-01-25T23:59:59" />
                  </div>

                  <ExalviaLinkButton text="Dapatkan Bonus" href="#rekomendasi" className="btn-lg btn-warning animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Detail Modal */}
      <dialog id="package_modal" className="modal rounded-none">
        <div className="modal-box max-w-2xl p-0 rounded-none rounded-bl-4xl">
          {selectedPackage && (
            <div className=" grid grid-cols-1 gap-8">
              <div className="sm:p-8 p-5 bg-base-200 py-8 rounded-bl-4xl">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }, (_, index) => {
                    if (index < selectedPackage.rating) {
                      return <FaStar key={index} className="text-warning" />;
                    } else {
                      return <FaRegStar key={index} className="text-warning" />;
                    }
                  })}
                </div>
                <h3 className="font-bold text-xl">{selectedPackage.name}</h3>
                <div className="flex flex-col gap-3 sm:my-8 my-5">
                  <p className="opacity-70 flex gap-2 items-start shrink">
                    <BsFillPatchCheckFill className="text-lg shrink-0" /> {"Cocok untuk "} {selectedPackage.description}
                  </p>
                  <p className="opacity-70 flex gap-2 items-start shrink">
                    <BsFillPatchCheckFill className="text-lg shrink-0" /> {"Output "} {selectedPackage.output}
                  </p>
                </div>
                <div className="text-2xl font-bold text-warning mt-4">Rp {formatCurrency(selectedPackage.price)}</div>
              </div>

              <div className="sm:px-8 px-5">
                <div>
                  <h4 className="font-semibold mb-3">Yang Anda Dapatkan:</h4>
                  <div className="space-y-3">
                    {selectedPackage.included?.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm flex gap-2">
                          0{index + 1}. {item.title}
                        </span>
                        {item.status ? <FaCircleCheck className="text-success" /> : <FaCircleXmark className="text-error" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="sm:px-8 px-5">
                <div className="text-sm text-base-content/60 mb-2">Waktu pengerjaan: {selectedPackage.turnaround}</div>
                <div className="w-full">
                  <div className="h-2 w-full rounded-full bg-base-300 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary/50 transition-all duration-500"
                      style={{
                        width: selectedPackage.turnaround.includes("6-7") ? "100%" : selectedPackage.turnaround.includes("2-4") ? "70%" : selectedPackage.turnaround.includes("1-2") ? "40%" : "20%",
                      }}
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-3 my-8">
                  <div className="join mx-auto w-full items-center justify-center">
                    <ExalviaButton text="Tutup" onClick={() => document.getElementById("package_modal").close()} className="join-item w-6/12 btn-soft" />
                    <ExalviaLinkButton text="Pilih Paket" href="#contact" className="join-item w-6/12 btn-warning" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
