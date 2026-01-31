// FormProgress Component
// Displays progress bar and current step information

export default function FormProgress({ currentStep, totalSteps }) {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">Progress</span>
        <span className="text-sm text-gray-500">
          {currentStep} dari {totalSteps}
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-primary h-2 rounded-full transition-all duration-300 ease-out" style={{ width: `${progressPercentage}%` }}></div>
      </div>

      <div className="mt-2 text-center">
        <span className="text-xs text-gray-500">{Math.round(progressPercentage)}% Complete</span>
      </div>
    </div>
  );
}
