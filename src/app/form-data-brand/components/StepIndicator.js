// StepIndicator Component
// Manages and displays multi-step form's progress and navigation
"use client";
import { useState } from "react";

export default function StepIndicator({ currentStep, totalSteps, onStepChange, steps = [], isSubmitting = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Default steps if not provided
  const defaultSteps = [
    { id: 1, title: "Identitas", icon: "👤", description: "Informasi brand dasar" },
    { id: 2, title: "Visi & Misi", icon: "🎯", description: "Tujuan brand" },
    { id: 3, title: "Target Audiens", icon: "👥", description: "Siapa target Anda" },
    { id: 4, title: "Produk", icon: "📦", description: "Produk & layanan" },
    { id: 5, title: "Visual", icon: "🎨", description: "Identitas visual" },
    { id: 6, title: "Pengalaman", icon: "💬", description: "Customer experience" },
    { id: 7, title: "Kompetitor", icon: "⚔️", description: "Analisis kompetitor" },
    { id: 8, title: "Masalah", icon: "🔍", description: "Problems & solutions" },
    { id: 9, title: "Review", icon: "✅", description: "Review & submit" },
  ];

  const stepList = steps.length > 0 ? steps : defaultSteps;

  const handleStepClick = (stepId) => {
    if (isSubmitting) return;

    // Only allow navigation to previous steps or next step
    if (stepId <= currentStep + 1) {
      onStepChange(stepId);
      setMobileMenuOpen(false);
    }
  };

  const getStepStatus = (stepId) => {
    if (stepId < currentStep) return "completed";
    if (stepId === currentStep) return "active";
    return "pending";
  };

  const getStepClasses = (stepId) => {
    const status = getStepStatus(stepId);
    const baseClasses = "flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium transition-all duration-200";

    switch (status) {
      case "completed":
        return `${baseClasses} bg-primary text-white cursor-pointer hover:bg-primary-focus`;
      case "active":
        return `${baseClasses} bg-primary text-white ring-4 ring-primary ring-opacity-20`;
      default:
        return `${baseClasses} bg-gray-200 text-gray-500 cursor-not-allowed`;
    }
  };

  const getConnectorClasses = (stepId) => {
    const status = getStepStatus(stepId);
    const baseClasses = "flex-1 h-1 transition-all duration-200";

    return status === "completed" ? `${baseClasses} bg-primary` : `${baseClasses} bg-gray-200`;
  };

  // Desktop View
  const DesktopView = () => (
    <div className="hidden lg:block">
      <div className="flex items-center justify-between mb-8">
        {stepList.map((step, index) => (
          <div key={step.id} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <button onClick={() => handleStepClick(step.id)} disabled={step.id > currentStep + 1 || isSubmitting} className={getStepClasses(step.id)} title={step.description}>
                {step.icon}
              </button>
              <span className="text-xs mt-2 text-center font-medium">{step.title}</span>
            </div>

            {index < stepList.length - 1 && <div className={getConnectorClasses(step.id)}></div>}
          </div>
        ))}
      </div>
    </div>
  );

  // Mobile View
  const MobileView = () => (
    <div className="lg:hidden">
      {/* Mobile Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className={getStepClasses(currentStep)}>{stepList[currentStep - 1]?.icon}</div>
          <div>
            <h3 className="font-medium text-sm">
              Langkah {currentStep} dari {totalSteps}
            </h3>
            <p className="text-xs text-gray-600">{stepList[currentStep - 1]?.title}</p>
          </div>
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="btn btn-ghost btn-sm" disabled={isSubmitting}>
          {mobileMenuOpen ? "Tutup" : "Lihat Semua"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-base-200 rounded-lg p-4 mb-4">
          <div className="space-y-2">
            {stepList.map((step) => {
              const status = getStepStatus(step.id);
              return (
                <button
                  key={step.id}
                  onClick={() => handleStepClick(step.id)}
                  disabled={step.id > currentStep + 1 || isSubmitting}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    status === "active" ? "bg-primary text-white" : status === "completed" ? "bg-success text-white hover:bg-success-focus" : "bg-gray-100 text-gray-600 cursor-not-allowed"
                  }`}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white bg-opacity-20 text-sm">{step.icon}</div>
                  <div className="text-left">
                    <div className="font-medium text-sm">{step.title}</div>
                    <div className="text-xs opacity-80">{step.description}</div>
                  </div>
                  {status === "completed" && (
                    <div className="ml-auto">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="step-indicator">
      <DesktopView />
      <MobileView />
    </div>
  );
}
