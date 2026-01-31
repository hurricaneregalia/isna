// FormSteps Component
// Container component for all form steps with step management logic
"use client";
import { useState } from "react";
import Step1_Identity from "./steps/Step1_Identity";
import Step2_Vision from "./steps/Step2_Vision";
import Step3_Audience from "./steps/Step3_Audience";
import Step4_Product from "./steps/Step4_Product";
import Step5_Visual from "./steps/Step5_Visual";
import Step6_Experience from "./steps/Step6_Experience";
import Step7_Competitor from "./steps/Step7_Competitor";
import Step8_Problems from "./steps/Step8_Problems";
import Step9_Review from "./steps/Step9_Review";
import { validateFormData, isFormValid } from "../../utils/validationUtils";

export default function FormSteps({ formData, setFormData, errors, setErrors, touched, setTouched, currentStep, setCurrentStep, onStepChange, isSubmitting, setIsSubmitting }) {
  const [stepErrors, setStepErrors] = useState({});

  // Step components mapping
  const stepComponents = {
    1: Step1_Identity,
    2: Step2_Vision,
    3: Step3_Audience,
    4: Step4_Product,
    5: Step5_Visual,
    6: Step6_Experience,
    7: Step7_Competitor,
    8: Step8_Problems,
    9: Step9_Review,
  };

  // Step information
  const steps = [
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

  // Validate current step
  const validateCurrentStep = () => {
    const stepValidation = validateFormData(formData);

    // Filter errors for current step only
    const currentStepErrors = {};

    switch (currentStep) {
      case 1:
        // Identity step validation
        ["brandName", "slogan", "role", "fullName", "email", "phone"].forEach((field) => {
          if (stepValidation[field]) {
            currentStepErrors[field] = stepValidation[field];
          }
        });
        break;

      case 2:
        // Vision step validation
        ["vision", "mission", "longTermGoal"].forEach((field) => {
          if (stepValidation[field]) {
            currentStepErrors[field] = stepValidation[field];
          }
        });
        break;

      case 3:
        // Audience step validation
        ["targetAgeMin", "targetAgeMax", "targetGender", "targetLocation", "targetOccupation", "targetIncome", "targetEducation", "targetInterests"].forEach((field) => {
          if (stepValidation[field]) {
            currentStepErrors[field] = stepValidation[field];
          }
        });
        break;

      case 4:
        // Product step validation
        ["mainProduct", "productAdvantages", "certifications"].forEach((field) => {
          if (stepValidation[field]) {
            currentStepErrors[field] = stepValidation[field];
          }
        });
        break;

      case 5:
        // Visual step validation
        ["brandColors", "typography", "visualStyle"].forEach((field) => {
          if (stepValidation[field]) {
            currentStepErrors[field] = stepValidation[field];
          }
        });
        break;

      case 6:
        // Experience step validation
        ["customerFeedback"].forEach((field) => {
          if (stepValidation[field]) {
            currentStepErrors[field] = stepValidation[field];
          }
        });
        break;

      case 7:
        // Competitor step validation
        ["competitors"].forEach((field) => {
          if (stepValidation[field]) {
            currentStepErrors[field] = stepValidation[field];
          }
        });
        break;

      case 8:
        // Problems step validation
        ["problemsSolutions"].forEach((field) => {
          if (stepValidation[field]) {
            currentStepErrors[field] = stepValidation[field];
          }
        });
        break;

      case 9:
        // Review step validation
        // Review step doesn't need specific validation as it's review-only
        break;
    }

    setStepErrors(currentStepErrors);
    setErrors((prev) => ({ ...prev, ...currentStepErrors }));

    return Object.keys(currentStepErrors).length === 0;
  };

  // Handle step navigation
  const handleStepNavigation = (direction) => {
    if (direction === "next") {
      // Validate current step before proceeding
      if (!validateCurrentStep()) {
        return false;
      }

      if (currentStep < 9) {
        setCurrentStep(currentStep + 1);
        onStepChange(currentStep + 1);
      }
    } else if (direction === "previous") {
      if (currentStep > 1) {
        setCurrentStep(currentStep - 1);
        onStepChange(currentStep - 1);
      }
    }

    return true;
  };

  // Handle direct step change
  const handleDirectStepChange = (stepId) => {
    // Allow navigation to previous steps without validation
    if (stepId < currentStep) {
      setCurrentStep(stepId);
      onStepChange(stepId);
      return true;
    }

    // For next steps, validate all intermediate steps
    if (stepId > currentStep) {
      // Validate current step first
      if (!validateCurrentStep()) {
        return false;
      }

      setCurrentStep(stepId);
      onStepChange(stepId);
      return true;
    }

    return false;
  };

  // Handle form submission
  const handleFormSubmit = async () => {
    // Validate entire form
    if (!isFormValid(formData)) {
      const allErrors = validateFormData(formData);
      setErrors(allErrors);
      return false;
    }

    setIsSubmitting(true);

    try {
      // Here you would typically send data to API
      const response = await fetch("/api/brand-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Success handling
        return true;
      } else {
        // Error handling
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get current step component
  const CurrentStepComponent = stepComponents[currentStep];

  return (
    <div className="form-steps">
      {/* Step Navigation */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">{steps[currentStep - 1]?.title}</h2>
          <span className="text-sm text-gray-500">
            Langkah {currentStep} dari {steps.length}
          </span>
        </div>

        {/* Progress Indicator */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{ width: `${(currentStep / steps.length) * 100}%` }}></div>
        </div>
      </div>

      {/* Current Step Content */}
      <div className="step-content mb-8">
        <CurrentStepComponent
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
          touched={touched}
          setTouched={setTouched}
          isSubmitting={isSubmitting}
          onPrevious={() => handleStepNavigation("previous")}
          onNext={() => handleStepNavigation("next")}
          onSubmit={handleFormSubmit}
          onStepChange={handleDirectStepChange}
          steps={steps}
        />
      </div>

      {/* Step Navigation Buttons */}
      <div className="step-navigation flex justify-between items-center">
        <button onClick={() => handleStepNavigation("previous")} disabled={currentStep === 1 || isSubmitting} className="btn btn-outline btn-primary">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Previous
        </button>

        {currentStep < 9 ? (
          <button onClick={() => handleStepNavigation("next")} disabled={isSubmitting} className="btn btn-primary">
            Next
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ) : (
          <button onClick={handleFormSubmit} disabled={isSubmitting || !isFormValid(formData)} className="btn btn-success">
            {isSubmitting ? (
              <>
                <div className="loading loading-spinner loading-sm mr-2"></div>
                Submitting...
              </>
            ) : (
              <>
                Submit Form
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </>
            )}
          </button>
        )}
      </div>

      {/* Step Error Summary */}
      {Object.keys(stepErrors).length > 0 && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <h4 className="font-medium text-red-800 mb-2">Mohon perbaiki error berikut:</h4>
          <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
            {Object.entries(stepErrors).map(([field, error]) => (
              <li key={field}>
                <strong>{field}:</strong> {error}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
