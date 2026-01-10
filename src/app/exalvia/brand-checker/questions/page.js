"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import data from "../../database/ExalviaDatabase";
import ExalviaScan from "../../sections/ExalviaScan";
import ExalviaNavbar from "../../sections/ExalviaNavbar";
import ExalviaFooter from "../../sections/ExalviaFooter";
import Link from "next/link";

export default function BrandCheckerQuestions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [randomOptions, setRandomOptions] = useState([]);
  const [showScanning, setShowScanning] = useState(false);
  const router = useRouter();

  const questions = data.brandChecker.questions;
  const totalQuestions = questions.length;

  useEffect(() => {
    // Check if we're on client side
    if (typeof window === "undefined") return;

    // Check if brand name exists
    const brandName = sessionStorage.getItem("brandName");
    if (!brandName) {
      router.push("/exalvia/brand-checker");
      return;
    }

    // Set start time if not already set - use REAL current time
    let testStartTime = sessionStorage.getItem("brandCheckerStartTime");
    if (!testStartTime) {
      testStartTime = new Date().toISOString();
      sessionStorage.setItem("brandCheckerStartTime", testStartTime);
    }

    // Load existing answers if any
    const existingAnswers = sessionStorage.getItem("brandCheckerAnswers");
    if (existingAnswers) {
      try {
        const parsedAnswers = JSON.parse(existingAnswers);
        setAnswers(parsedAnswers);
        if (parsedAnswers.length > 0 && parsedAnswers.length < totalQuestions) {
          setCurrentQuestion(parsedAnswers.length);
        } else if (parsedAnswers.length >= totalQuestions) {
          // Already completed, redirect to result
          router.push("/exalvia/brand-checker/result");
        }
      } catch (error) {
        console.error("Error parsing existing answers:", error);
        // Clear corrupted data and continue
        sessionStorage.removeItem("brandCheckerAnswers");
      }
    }
  }, [router, totalQuestions]);

  useEffect(() => {
    // Save answers to sessionStorage whenever they change
    if (typeof window !== "undefined" && answers.length > 0) {
      try {
        sessionStorage.setItem("brandCheckerAnswers", JSON.stringify(answers));
      } catch (error) {
        console.error("Error saving answers to sessionStorage:", error);
      }
    }
  }, [answers]);

  useEffect(() => {
    // Generate random options for current question
    if (questions[currentQuestion]) {
      const shuffled = [...questions[currentQuestion].options].sort(() => Math.random() - 0.5);
      setRandomOptions(shuffled);
    }
  }, [currentQuestion, questions]);

  // Cleanup function to prevent memory leaks
  useEffect(() => {
    return () => {
      // Clear any pending timeouts or intervals
      setShowScanning(false);
    };
  }, []);

  const handleAnswerSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
    setIsTransitioning(true);

    const question = questions[currentQuestion];
    const selectedAnswer = randomOptions[optionIndex];

    // Find the original index in the unsorted array
    const originalIndex = question.options.findIndex((opt) => opt.text === selectedAnswer.text && opt.score === selectedAnswer.score);

    // Save answer
    const newAnswer = {
      questionId: question.id,
      selectedOption: originalIndex,
      score: selectedAnswer.score,
      questionText: question.question,
      category: question.category,
      selectedText: selectedAnswer.text,
    };

    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);

    // Auto-advance to next question after 500ms
    setTimeout(() => {
      setSelectedOption(null);
      setIsTransitioning(false);
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // All questions completed, show scanning for 5 seconds then redirect
        sessionStorage.setItem("brandCheckerCompleted", "true");
        setShowScanning(true);

        // Prepare all data for result page
        const brandName = sessionStorage.getItem("brandName");
        const testStartTime = sessionStorage.getItem("brandCheckerStartTime");
        const endTime = new Date().toISOString();

        // Calculate scores first
        const rawScore = updatedAnswers.reduce((total, answer) => total + (Number(answer?.score) || 0), 0);
        const normalizedScoreRaw = ((rawScore - 24) / (96 - 24)) * 100;
        const normalizedScore = Number.isFinite(normalizedScoreRaw) ? Math.round(Math.max(0, Math.min(100, normalizedScoreRaw))) : 0;

        // Calculate category scores with short names
        const categoryScores = {};
        const categoryMapping = {
          "Informasi Produk": "PI",
          Target: "TA",
          Harga: "HA",
          "Cara Menjual": "CM",
          Reflektif: "RE",
          "Identitas Visual": "IV",
        };

        Object.keys(categoryMapping).forEach((category) => {
          const categoryAnswers = updatedAnswers.filter((answer) => answer.category === category);
          const categoryTotal = categoryAnswers.reduce((total, answer) => total + (Number(answer?.score) || 0), 0);
          const categoryMax = categoryAnswers.length * 4;
          const categoryPercentageRaw = categoryMax > 0 ? (categoryTotal / categoryMax) * 100 : 0;
          const categoryPercentage = Number.isFinite(categoryPercentageRaw) ? Math.round(categoryPercentageRaw) : 0;
          categoryScores[categoryMapping[category]] = categoryPercentage;
        });

        // Detect red flags (question-based)
        const questionFlags = [];
        updatedAnswers.forEach((answer) => {
          if (answer.questionId === 8 && answer.selectedText === "Karena harganya murah") questionFlags.push("8-1");
          if (answer.questionId === 15 && answer.selectedText === "Langsung menawarkan produk") questionFlags.push("15-1");
          if (answer.questionId === 16 && answer.selectedText === "Menurunkan harga") questionFlags.push("16-2");
          if (answer.questionId === 16 && answer.selectedText === "Menunggu saja") questionFlags.push("16-3");
          if (answer.questionId === 22 && answer.selectedText === "Ya, banyak") questionFlags.push("22-2");
          if (answer.questionId === 23 && answer.selectedText === "Tidak ada warna khas") questionFlags.push("23-1");
          if (answer.questionId === 23 && answer.selectedText === "Belum pernah memikirkan warna brand") questionFlags.push("23-3");
        });

        // Add category-based flags
        const categoryFlags = data.getCategoryFlags(categoryScores);

        // Combine all flags
        const redFlags = [...questionFlags, ...categoryFlags];

        // Calculate duration
        let durationText = "0s";
        if (testStartTime && endTime) {
          const startTime = new Date(testStartTime);
          const endTimeDate = new Date(endTime);
          const duration = Math.floor((endTimeDate - startTime) / 1000); // in seconds
          const durationMinutes = Math.floor(duration / 60);
          const durationSeconds = duration % 60;
          durationText = durationMinutes > 0 ? `${durationMinutes}m ${durationSeconds}s` : `${durationSeconds}s`;
        }

        // Store result data in sessionStorage for later use
        const resultData = {
          brandName: brandName?.substring(0, 20) || "",
          normalizedScore,
          rawScore,
          durationText,
          categoryScores,
          redFlags,
          testStartTime: testStartTime || new Date().toISOString(),
          endTime,
          myTest: new Date().toLocaleString("en-GB", {
            day: "numeric",
            month: "short",
            year: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
        };

        sessionStorage.setItem("brandCheckerResultData", JSON.stringify(resultData));

        // Redirect after 5 seconds
        const redirectTimeout = setTimeout(() => {
          try {
            const params = new URLSearchParams({
              b: resultData.brandName,
              sc: resultData.normalizedScore.toString(),
              rs: resultData.rawScore.toString(),
              dur: resultData.durationText,
              cs: JSON.stringify(resultData.categoryScores),
              rf: resultData.redFlags.join(","),
              st: resultData.testStartTime,
              et: resultData.endTime,
              mytest: resultData.myTest,
            });

            router.push(`/exalvia/brand-checker/result?${params.toString()}`);
          } catch (error) {
            console.error("Error during redirect:", error);
            // Fallback redirect without parameters
            router.push("/exalvia/brand-checker/result");
          }
        }, 5000);

        // Cleanup timeout if component unmounts
        return () => clearTimeout(redirectTimeout);
      }
    }, 500);
  };

  const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;

  if (typeof window === "undefined" || questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p>Loading questions...</p>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const myTest = new Date().toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <>
      <ExalviaNavbar data={data.navbar} bgCustom="bg-primary" />
      <div className="min-h-screen bg-base-100 pt-32 py-8 px-4">
        <div className="max-w-2xl mx-auto h-[calc(100vh-4rem)] flex flex-col justify-between">
          {/* Progress Bar - Top */}

          {/* Question Card - Middle */}
          <div className="flex-1 flex flex-col items-center justify-center w-full">
            <div className="w-full">
              <div className="mb-4" id="progressbar">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">
                    Pertanyaan {currentQuestion + 1} dari {totalQuestions}
                  </span>
                  <span className="text-sm font-medium text-gray-600">{Math.round(progressPercentage)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full transition-all duration-500 ease-out" style={{ width: `${progressPercentage}%` }} />
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <div className="bg-base-200 rounded-4xl rounded-tr-none sm:p-8 p-5 w-full" id="qustioncard">
                {showScanning ? (
                  <div className="w-full">
                    <ExalviaScan brand={typeof window !== "undefined" ? sessionStorage.getItem("brandName") : ""} />
                  </div>
                ) : isTransitioning ? (
                  <div className="text-center py-8">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    <p className="text-sm text-gray-500 mt-4">Memproses jawaban...</p>
                  </div>
                ) : (
                  <>
                    <div className="mb-6 ">
                      <div className="flex items-start justify-between mb-4 gap-5 bg-base-300 p-4 rounded-2xl rounded-tr-none">
                        <h2 className="text-xl font-semibold text-primary">{question.question}</h2>
                        <div className="shrink-0 flex items-center font-bold text-5xl opacity-5">{(currentQuestion + 1).toString().padStart(2, "0")}</div>
                      </div>
                    </div>

                    {/* Answer Options */}
                    <div className="space-y-2">
                      {randomOptions.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswerSelect(index)}
                          disabled={selectedOption !== null}
                          className={`w-full text-left p-4 rounded-2xl rounded-tr-none bg-base-100 border transition-all duration-200 ${
                            selectedOption === index
                              ? "border-primary bg-primary/10"
                              : selectedOption !== null
                              ? "border-gray-200 bg-gray-50 cursor-not-allowed"
                              : "border-gray-200 hover:border-primary/50 hover:bg-gray-50 cursor-pointer"
                          }`}
                        >
                          <div className="flex items-start">
                            <div
                              className={`w-5 mt-0.5 aspect-square rounded-full border-2 mr-3 flex items-start shrink-0 justify-center ${
                                selectedOption === index ? "border-primary" : "border-gray-300"
                              }`}
                            >
                              {selectedOption === index && <div className="w-2 aspect-square bg-primary rounded-full" />}
                            </div>
                            <span className="text-gray-700">{option.text}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Brand Name Display - Bottom */}
          <div className="text-center text-sm ">
            <p>
              Mengevaluasi brand: <span className="font-bold capitalize ">{typeof window !== "undefined" ? sessionStorage.getItem("brandName") : ""}</span>
            </p>
            <Link href="/exalvia/brand-checker" className="underline text-info">
              Ulangi dari awal
            </Link>
          </div>
        </div>
      </div>
      <ExalviaFooter data={data.footer} secId="footer" />
    </>
  );
}
