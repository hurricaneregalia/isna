import { FaStar, FaRegStar } from "react-icons/fa6";
import ExalviaDatabase from "../../database/ExalviaDatabase";

// Function to format currency with dot separator
export const formatCurrency = (amount) => {
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

// Get star rating based on score
export const getStarRating = (score) => {
  const fullStars = Math.floor(score / 20);
  const hasHalfStar = score % 20 >= 10;

  return Array.from({ length: 5 }, (_, index) => {
    if (index < fullStars) {
      return <FaStar key={index} className="text-warning" />;
    } else if (index === fullStars && hasHalfStar) {
      return <FaStar key={index} className="text-warning opacity-50" />;
    } else {
      return <FaRegStar key={index} className="text-warning" />;
    }
  });
};

// Get score color based on score value
export const getScoreColor = (score) => {
  if (score <= 25) return "text-error";
  if (score <= 50) return "text-warning";
  if (score <= 75) return "text-yellow-600";
  return "text-success";
};

// Get score background color based on score value
export const getScoreBgColor = (score) => {
  if (score <= 25) return "bg-error";
  if (score <= 50) return "bg-warning";
  if (score <= 75) return "bg-yellow-500";
  return "bg-success";
};

// Get recommended package based on score
export const getRecommendedPackage = (score) => {
  const packages = ExalviaDatabase.brandChecker.recommended;

  if (score >= 80) return packages.find((pkg) => pkg.name === "Kamilan Service Pack");
  if (score >= 60) return packages.find((pkg) => pkg.name === "Mumtazan Service Pack");
  if (score >= 40) return packages.find((pkg) => pkg.name === "Qolilan Service Pack");
  return packages.find((pkg) => pkg.name === "Qolilan Service Pack");
};

// Get alternative packages (excluding recommended)
export const getAlternativePackages = (score) => {
  const packages = ExalviaDatabase.brandChecker.recommended;
  const recommendedPkg = getRecommendedPackage(score);

  return packages.filter((pkg) => pkg.name !== recommendedPkg?.name);
};

// Get category progress bar color
export const getCategoryProgressColor = (score) => {
  const safeScore = Number.isFinite(Number(score)) ? Math.max(0, Math.min(100, Number(score))) : 0;
  if (safeScore <= 25) return "bg-red-500";
  if (safeScore <= 50) return "bg-orange-500";
  if (safeScore <= 75) return "bg-yellow-500";
  return "bg-green-500";
};

// Get turnaround progress width
export const getTurnaroundProgress = (turnaround) => {
  if (turnaround.includes("6-7")) return "100%";
  if (turnaround.includes("2-4")) return "70%";
  if (turnaround.includes("1-2")) return "40%";
  return "20%";
};
