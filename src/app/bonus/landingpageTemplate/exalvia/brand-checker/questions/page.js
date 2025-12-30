"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ExalviaDatabase from "../../database/ExalviaDatabase";

export default function BrandCheckerQuestions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  const questions = ExalviaDatabase.brandChecker.questions;
  const totalQuestions = questions.length;

  useEffect(() => {
    // Check if we're on client side
    if (typeof window === "undefined") return;

    // Check if brand name exists
    const brandName = sessionStorage.getItem("brandName");
    if (!brandName) {
      router.push("/bonus/landingpageTemplate/exalvia/brand-checker");
      return;
    }

    // Set start time if not already set
    const testStartTime = sessionStorage.getItem("brandCheckerStartTime");
    if (!testStartTime) {
      sessionStorage.setItem("brandCheckerStartTime", new Date().toISOString());
    }

    // Load existing answers if any
    const existingAnswers = sessionStorage.getItem("brandCheckerAnswers");
    if (existingAnswers) {
      const parsedAnswers = JSON.parse(existingAnswers);
      setAnswers(parsedAnswers);
      if (parsedAnswers.length > 0 && parsedAnswers.length < totalQuestions) {
        setCurrentQuestion(parsedAnswers.length);
      } else if (parsedAnswers.length >= totalQuestions) {
        // Already completed, redirect to result
        router.push("/bonus/landingpageTemplate/exalvia/brand-checker/result");
      }
    }
  }, [router, totalQuestions]);

  useEffect(() => {
    // Save answers to sessionStorage whenever they change
    if (typeof window !== "undefined" && answers.length > 0) {
      sessionStorage.setItem("brandCheckerAnswers", JSON.stringify(answers));
    }
  }, [answers]);

  const handleAnswerSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
    setIsTransitioning(true);

    const question = questions[currentQuestion];
    const selectedAnswer = question.options[optionIndex];

    // Save answer
    const newAnswer = {
      questionId: question.id,
      selectedOption: optionIndex,
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
        // All questions completed, mark test as completed and redirect to result with short URL
        sessionStorage.setItem("brandCheckerCompleted", "true");

        // Prepare minimal data for short URL
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
          if (answer.questionId === 8 && answer.selectedOption === 1) questionFlags.push("8-1");
          if (answer.questionId === 11 && answer.selectedOption === 0) questionFlags.push("11-0");
          if (answer.questionId === 11 && answer.selectedOption === 1) questionFlags.push("11-1");
          if (answer.questionId === 11 && answer.selectedOption === 2) questionFlags.push("11-2");
          if (answer.questionId === 15 && answer.selectedOption === 0) questionFlags.push("15-0");
          if (answer.questionId === 16 && answer.selectedOption === 1) questionFlags.push("16-1");
          if (answer.questionId === 16 && answer.selectedOption === 3) questionFlags.push("16-3");
        });

        // Add category-based flags
        const categoryFlags = ExalviaDatabase.getCategoryFlags(categoryScores);

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

        // Create short URL parameters with IDs - NO sessionStorage needed!
        const params = new URLSearchParams({
          b: brandName?.substring(0, 20) || "", // Limit brand name length
          sc: normalizedScore.toString(),
          rs: rawScore.toString(),
          dur: durationText, // Send calculated duration, not timestamps
          cs: JSON.stringify(categoryScores),
          rf: redFlags.join(","),
          // No more sessionStorage dependency!
        });

        router.push(`/bonus/landingpageTemplate/exalvia/brand-checker/result?${params.toString()}`);
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

  return (
    <div className="min-h-screen bg-base-100 py-8 px-4">
      <div className="max-w-2xl mx-auto h-[calc(100vh-4rem)] flex flex-col justify-between">
        {/* Progress Bar - Top */}
        <div className="mb-8" id="progressbar">
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

        {/* Question Card - Middle */}
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-base-200 rounded-bl-4xl sm:p-8 p-5 w-full" id="qustioncard">
            {isTransitioning ? (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                <p className="text-sm text-gray-500 mt-4">Memproses jawaban...</p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-bl-xl shrink-0 flex items-center justify-center font-bold text-sm mr-3">{currentQuestion + 1}</div>
                    <h2 className="text-xl font-semibold text-primary">{question.question}</h2>
                  </div>
                </div>

                {/* Answer Options */}
                <div className="space-y-3">
                  {question.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={selectedOption !== null}
                      className={`w-full text-left p-4 rounded-bl-2xl bg-base-100 border transition-all duration-200 ${
                        selectedOption === index
                          ? "border-primary bg-primary/10"
                          : selectedOption !== null
                          ? "border-gray-200 bg-gray-50 cursor-not-allowed"
                          : "border-gray-200 hover:border-primary/50 hover:bg-gray-50 cursor-pointer"
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${selectedOption === index ? "border-primary" : "border-gray-300"}`}>
                          {selectedOption === index && <div className="w-2 h-2 bg-primary rounded-full" />}
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

        {/* Brand Name Display - Bottom */}
        <div className="text-center" id="brandname">
          <p className="text-sm ">
            Mengevaluasi brand: <span className="font-medium">{typeof window !== "undefined" ? sessionStorage.getItem("brandName") : ""}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
