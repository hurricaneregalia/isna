"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ExalviaButton from "../../ui-components/ExalviaButton";
import HeroBrandChecker from "../HeroBrandChecker";
import { FaRegClock, FaStar, FaCircleCheck, FaRegCircleCheck, FaRegThumbsUp, FaArrowRight, FaPenClip } from "react-icons/fa6";
import { TbCircleDashedNumber9 } from "react-icons/tb";
import { LuNotepadText } from "react-icons/lu";
import { MdOutlineRocketLaunch } from "react-icons/md";
import ExalviaLinkButton from "../../ui-components/ExalviaLinkButton";

export default function BrandCheckerResult() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    calculateResults();
  }, []);

  const calculateResults = () => {
    const brandName = sessionStorage.getItem("brandName");
    const answersData = sessionStorage.getItem("brandCheckerAnswers");

    if (!brandName || !answersData) {
      router.push("/brand-checker");
      return;
    }

    const answers = JSON.parse(answersData);

    // Calculate raw score
    const rawScore = answers.reduce((total, answer) => total + answer.score, 0);

    // Normalize score to 0-100 scale
    const normalizedScore = Math.round(((rawScore - 17) / (68 - 17)) * 100);

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
      const categoryTotal = categoryAnswers.reduce((total, answer) => total + answer.score, 0);
      const categoryMax = categoryAnswers.length * 4;
      const categoryPercentage = Math.round((categoryTotal / categoryMax) * 100);
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
      completedAt: new Date().toLocaleString("id-ID"),
    });

    setLoading(false);
  };

  const handleViewDetails = () => {
    // Store result for detailed view
    sessionStorage.setItem("brandCheckerResult", JSON.stringify(result));
    router.push("/brand-checker/result/details");
  };

  const handleRestart = () => {
    sessionStorage.removeItem("brandName");
    sessionStorage.removeItem("brandCheckerAnswers");
    sessionStorage.removeItem("brandCheckerResult");
    router.push("/brand-checker");
  };

  if (loading) {
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
              <div className=" text-center brand-info">
                <span className="flex gap-1 items-center justify-center mb-4 text-warning text-2xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <p className="text-sm flex gap-1 items-center justify-center opacity-70">--- Kualitas Brand ---</p>
                <h1 className="text-3xl md:text-4xl font-bold uppercase">{result.brandName}</h1>

                <p className="text-sm flex gap-1 items-center justify-center opacity-70">
                  <FaRegClock /> {result.completedAt}
                </p>
              </div>

              <div className=" skor">
                <div className={`flex flex-col mx-auto my-10 items-center ${getScoreBgColor(result.normalizedScore)} justify-center w-30 aspect-square rounded-bl-4xl`}>
                  <p className="text-lg ">SKOR</p>
                  <span className="text-6xl font-bold">{result.normalizedScore}</span>
                </div>
              </div>
              <div className="deskripsi">
                <h2 className="text-2xl font-bold mb-2">{result.classification}</h2>

                <p className="max-w-md mx-auto opacity-70">{result.description}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 text-center sumary text-white  border-4 border-white/50 rounded-bl-4xl">
            <div className="p-4">
              <div className="text-2xl font-bold text-warning">{result.totalQuestions}</div>
              <div className="text-sm opacity-70">Pertanyaan</div>
            </div>
            <div className="border-x-4 border-white/50 p-4">
              <div className="text-2xl font-bold text-warning">{result.rawScore}</div>
              <div className="text-sm opacity-70">Durasi</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-warning">{result.redFlags.length}</div>
              <div className="text-sm opacity-70">Catatan</div>
            </div>
          </div>
          <div className=" w-full justify-center flex">
            <ExalviaLinkButton text="Rekomendasi" href="#rekomendasi" icon={FaArrowRight} variant="primary" className="mt-10 w-fit mx-auto btn-lg animate-pulse" />
          </div>
        </div>
      </HeroBrandChecker>
      <section className=" bg-base-100 py-24">
        <div className=" sm:w-7/12 w-full px-5 mx-auto grid grid-cols-1 gap-15">
          <div>
            <div className=" flex justify-between items-center">
              <h3 className="text-lg font-semibold">Detail penilaian</h3>
              <FaPenClip className=" text-xl" />
            </div>
            <hr className="my-4" />
            <div className="space-y-3 grid sm:grid-cols-2 grid-cols-1 gap-4 gap-x-15">
              {Object.entries(result.categoryScores).map(([category, score]) => (
                <div key={category}>
                  <span className="text-sm font-medium text-gray-700">{category}</span>
                  <div className="flex items-center justify-end">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${score <= 25 ? "bg-red-500" : score <= 50 ? "bg-orange-500" : score <= 75 ? "bg-yellow-500" : "bg-green-500"}`}
                        style={{ width: `${score}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-600  text-right ">{score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            {result.redFlags.length > 0 && (
              <div className="mb-8">
                <div className=" flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Catatan</h3>
                  <LuNotepadText className=" text-xl" />
                </div>
                <hr className="my-4" />
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
          <div id="rekomendasi">
            <div className=" flex justify-between items-center">
              <h3 className="text-lg font-semibold">Rekomendasi</h3>
              <MdOutlineRocketLaunch className=" text-xl" />
            </div>
            <hr className="my-4" />
          </div>
        </div>
      </section>
    </>
  );
}
