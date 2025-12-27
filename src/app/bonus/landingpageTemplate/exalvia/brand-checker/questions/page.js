"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import data from "../../database/ExalviaDatabase";

export default function BrandCheckerQuestions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const router = useRouter();

  const questions = data.brandChecker.questions;
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
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // All questions completed, mark test as completed and redirect to result
        sessionStorage.setItem("brandCheckerCompleted", "true");
        router.push("/bonus/landingpageTemplate/exalvia/brand-checker/result");
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
    <div className="min-h-screen bg-linear-to-br from-primary/10 to-secondary/10 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Pertanyaan {currentQuestion + 1} dari {totalQuestions}
            </span>
            <span className="text-sm font-medium text-gray-600">{Math.round(progressPercentage)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-primary h-2 rounded-full transition-all duration-500 ease-out" style={{ width: `${progressPercentage}%` }} />
          </div>
          <div className="mt-2">
            <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">{question.category}</span>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">{currentQuestion + 1}</div>
              <h2 className="text-xl font-semibold text-gray-800">{question.question}</h2>
            </div>
          </div>

          {/* Answer Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={selectedOption !== null}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
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

          {selectedOption !== null && (
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">Lanjut ke pertanyaan berikutnya...</p>
            </div>
          )}
        </div>

        {/* Brand Name Display */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Mengevaluasi brand: <span className="font-medium">{typeof window !== "undefined" ? sessionStorage.getItem("brandName") : ""}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
