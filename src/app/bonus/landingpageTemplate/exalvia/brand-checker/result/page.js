"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ExalviaButton from "../../ui-components/ExalviaButton";
import HeroBrandChecker from "../HeroBrandChecker";
import ExalviaDatabase from "../../database/ExalviaDatabase";
import { FaRegClock, FaStar, FaRegStar, FaCircleCheck, FaRegCircleCheck, FaRegThumbsUp, FaArrowRight, FaPenClip, FaChevronDown } from "react-icons/fa6";
import { TbCircleDashedNumber9 } from "react-icons/tb";
import { LuNotepadText } from "react-icons/lu";
import { MdOutlineRocketLaunch } from "react-icons/md";
import ExalviaLinkButton from "../../ui-components/ExalviaLinkButton";
import ExalviaImage from "../../ui-components/ExalviaImage";

export default function BrandCheckerResult() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [startTime, setStartTime] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState("notes"); // "details", "notes", or "packages"
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

    const brandName = sessionStorage.getItem("brandName");
    const answersData = sessionStorage.getItem("brandCheckerAnswers");
    const testStartTime = sessionStorage.getItem("brandCheckerStartTime");

    if (!brandName || !answersData) {
      router.push("/bonus/landingpageTemplate/exalvia/brand-checker");
      return;
    }

    const answers = JSON.parse(answersData);

    // Calculate duration - only if test was completed
    const testCompleted = sessionStorage.getItem("brandCheckerCompleted");
    let durationText = "0s";
    let endTime = null;

    if (testCompleted === "true" && testStartTime) {
      endTime = new Date();
      const startTime = new Date(testStartTime);
      const duration = Math.floor((endTime - startTime) / 1000); // in seconds
      const durationMinutes = Math.floor(duration / 60);
      const durationSeconds = duration % 60;
      durationText = durationMinutes > 0 ? `${durationMinutes}m ${durationSeconds}s` : `${durationSeconds}s`;
    }

    const startTime = testStartTime ? new Date(testStartTime) : new Date();
    setStartTime(startTime);

    // Calculate raw score
    const rawScore = answers.reduce((total, answer) => total + (Number(answer?.score) || 0), 0);

    // Debug: Log answers and scores
    console.log("Debug - Answers:", answers);
    console.log("Debug - Raw Score:", rawScore);
    console.log("Debug - Answers length:", answers.length);

    // Normalize score to 0-100 scale
    const normalizedScoreRaw = ((rawScore - 17) / (68 - 17)) * 100;
    const normalizedScore = Number.isFinite(normalizedScoreRaw) ? Math.round(Math.max(0, Math.min(100, normalizedScoreRaw))) : 0;

    console.log("Debug - Normalized Score Raw:", normalizedScoreRaw);
    console.log("Debug - Normalized Score:", normalizedScore);

    // Determine classification
    let classification = "";
    let description = "";

    if (normalizedScore <= 25) {
      classification = "Positioning Kacau";
      description = "Pesan brand tidak fokus, sulit dipahami, dan berisiko membingungkan pasar.";
    } else if (normalizedScore <= 50) {
      classification = "Positioning Lemah";
      description = "Arah brand mulai terlihat, tetapi masih tidak konsisten dan sulit dijual secara stabil.";
    } else if (normalizedScore <= 75) {
      classification = "Positioning Cukup Kuat";
      description = "Brand memiliki arah yang jelas, namun masih perlu perbaikan di beberapa area.";
    } else {
      classification = "Positioning Tajam & Siap Scale";
      description = "Brand memiliki positioning yang solid dan siap bersaing di pasar.";
    }

    // Calculate category scores
    const categoryScores = {};
    const categories = ["Product Info", "Target", "Harga", "Cara Menjual", "Reflektif", "Identitas Visual"];

    categories.forEach((category) => {
      const categoryAnswers = answers.filter((answer) => answer.category === category);
      const categoryTotal = categoryAnswers.reduce((total, answer) => total + (Number(answer?.score) || 0), 0);
      const categoryMax = categoryAnswers.length * 4;
      const categoryPercentageRaw = categoryMax > 0 ? (categoryTotal / categoryMax) * 100 : 0;
      const categoryPercentage = Number.isFinite(categoryPercentageRaw) ? Math.round(categoryPercentageRaw) : 0;
      categoryScores[category] = categoryPercentage;
    });

    // Detect red flags
    const redFlags = [];
    answers.forEach((answer) => {
      if (answer.questionId === 8 && answer.selectedOption === 1) {
        redFlags.push("Tidak ada pertanyaan dari pembeli dengan penjualan minimal - perlu evaluasi cara komunikasi");
      }
      if (answer.questionId === 11 && (answer.selectedOption === 0 || answer.selectedOption === 1 || answer.selectedOption === 2)) {
        redFlags.push("Masalah penjualan spesifik teridentifikasi - perlu strategi yang terukur");
      }
      if (answer.questionId === 15 && answer.selectedOption === 0) {
        redFlags.push("Terlalu banyak variasi logo - perlu konsistensi visual");
      }
      if (answer.questionId === 16 && (answer.selectedOption === 1 || answer.selectedOption === 3)) {
        redFlags.push("Tidak ada warna khas brand - perlu identitas visual yang kuat");
      }
    });

    setResult({
      brandName,
      rawScore,
      normalizedScore,
      classification,
      description,
      categoryScores,
      redFlags,
      totalQuestions: answers.length,
      completedAt: (endTime || new Date()).toLocaleString("id-ID"),
      duration: durationText,
      startTime: startTime,
    });

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
    const starCount = Math.ceil(score / 25); // Convert 0-100 to 1-4 stars
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
    return new Date(date).toLocaleString("id-ID", options);
  };

  // Get rekomendasi paket dari database
  const getRecommendedPackage = (score) => {
    const packages = ExalviaDatabase.brandCheckerPackages?.recommended || [];
    return packages.find((pkg) => score >= pkg.minScore && score <= pkg.maxScore);
  };

  // Get alternative packages dari database
  const getAlternativePackages = (recommendedScore) => {
    const packages = ExalviaDatabase.brandCheckerPackages?.alternatives || [];
    return packages.filter(
      (pkg) => Math.abs(pkg.score - recommendedScore) > 25 // Show packages not too close to recommended
    );
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
          <div className="text-center border-4 border-white/50 border-b-0 p-5 text-white">
            <div className="gap-5 grid grid-cols-1 ">
              <div className=" text-center brand-info" id="rating">
                <span className="flex gap-1 items-center justify-center mb-4 text-warning text-2xl">{getStarRating(result.normalizedScore)}</span>
                <p className="text-sm flex gap-1 items-center justify-center opacity-70">--- Kualitas Brand ---</p>
                <h1 className="text-3xl md:text-4xl font-bold uppercase">{result.brandName}</h1>

                <p className="text-sm flex gap-1 items-center justify-center opacity-70" id="testTime">
                  <FaRegClock /> {formatDateTime(result.startTime)}
                </p>
              </div>

              <div className=" skor">
                <div className={`flex flex-col mx-auto my-10 items-center ${getScoreBgColor(result.normalizedScore || 0)} justify-center w-30 aspect-square rounded-bl-4xl`}>
                  <p className="text-lg ">SKOR</p>
                  <span className="text-6xl font-bold">{result.normalizedScore || 0}</span>
                </div>
              </div>
              <div className="deskripsi">
                <h2 className="text-2xl font-bold mb-2">{result.classification || ""}</h2>

                <p className="max-w-md mx-auto opacity-70">{result.description || ""}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 text-center sumary text-white  border-4 border-white/50 rounded-bl-4xl">
            <div className="py-4">
              <div className="font-bold text-warning">{result.totalQuestions || 0}</div>
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
            <ExalviaLinkButton text="Rekomendasi" href="#rekomendasi" icon={FaArrowRight} variant="primary" className="mt-10 w-fit mx-auto btn-lg animate-pulse" />
          </div>
        </div>
      </HeroBrandChecker>
      <section className=" bg-base-100 py-15">
        <div className=" lg:w-7/12 w-full px-5 mx-auto grid grid-cols-1 gap-15">
          <div className="join join-vertical bg-base-200 rounded-bl-4xl overflow-hidden p-0 m-0">
            <div
              className={`collapse join-item border-b bg-base-200 rounded-bl-4xl m-0 p-0 ${accordionOpen === "details" ? "collapse-open" : ""}`}
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
            <div className={`collapse join-item border-t bg-base-200 rounded-bl-4xl ${accordionOpen === "notes" ? "collapse-open" : ""}`} style={{ "--tw-collapse-content-max-height": "none" }}>
              <input type="checkbox" name="my-accordion" checked={accordionOpen === "notes"} onChange={() => setAccordionOpen(accordionOpen === "notes" ? "" : "notes")} />
              <div className="collapse-title font-semibold flex items-center justify-between">
                <span>Catatan</span>
                <FaChevronDown className={`text-xl transition-all duration-500 ease-in-out ${accordionOpen === "notes" ? "rotate-180" : "rotate-0"}`} />
              </div>
              <div className="collapse-content text-sm">
                <div>
                  {result.redFlags.length > 0 && (
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
                            <h4 className=" md:text-3xl text-2xl font-bold  mb-2">{recommendedPkg.name}</h4>
                            <p className=" opacity-70">{recommendedPkg.description}</p>
                          </div>
                          <div className="text-2xl font-bold text-warning mb-2">{recommendedPkg.price}</div>
                          <ExalviaLinkButton text="Pilih Paket" href="#contact" icon={FaArrowRight} variant="primary" className="w-full btn-lg animate-pulse" />
                        </div>
                      </div>

                      <div className="p-8">
                        <ul className="space-y-2">
                          {recommendedPkg.features?.map((feature, index) => (
                            <li key={index} className="flex items-center justify-between">
                              <span>
                                0{index + 1}. {feature}
                              </span>
                              <FaCircleCheck className="text-success" />
                            </li>
                          ))}
                        </ul>

                        <hr className="my-5" />
                        <div className="mt-auto space-y-2" id="recommendedTurnaround">
                          <div className="text-sm text-base-content/60">Waktu pengerjaan: {recommendedPkg.turnaround}</div>
                          <div className="w-full">
                            <div className="h-2 w-full rounded-full bg-base-300 overflow-hidden">
                              <div
                                className="h-full rounded-full bg-primary/50 transition-all duration-500"
                                style={{
                                  width: recommendedPkg.turnaround.includes("2-3")
                                    ? "80%"
                                    : recommendedPkg.turnaround.includes("3-5")
                                    ? "60%"
                                    : recommendedPkg.turnaround.includes("5-7")
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
            <div className={`collapse join-item  bg-base-200 rounded-bl-4xl ${accordionOpen === "packages" ? "collapse-open" : ""}`} style={{ "--tw-collapse-content-max-height": "none" }}>
              <input type="checkbox" name="my-accordion" checked={accordionOpen === "packages"} onChange={() => setAccordionOpen(accordionOpen === "packages" ? "" : "packages")} />
              <div className="collapse-title font-semibold flex items-center justify-between">
                <div className="flex items-center justify-between w-full">
                  <span>Paket Lainnya</span>
                </div>
                <FaChevronDown className={`text-xl transition-all duration-500 ease-in-out ${accordionOpen === "packages" ? "rotate-180" : "rotate-0"}`} />
              </div>
              <div className="collapse-content text-sm">
                <div className="grid md:grid-cols-2 gap-8">
                  {getAlternativePackages(result.normalizedScore).map((pkg, index) => (
                    <div key={index} className="sm:p-8 p-5 border-4 border-base-content/20 rounded-bl-4xl grid grid-cols-1 gap-5">
                      <div>
                        <h6 className="font-semibold">{pkg.name}</h6>
                        <p>{pkg.description}</p>
                      </div>
                      <div className="text-warning font-bold">{pkg.price}</div>
                      <div className="space-y-1">
                        {pkg.features?.slice(0, 2).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs">
                            <FaRegCircleCheck className="mr-2 " />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <ExalviaLinkButton text="Pilih" href="#contact" variant="no" className="w-full " />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
