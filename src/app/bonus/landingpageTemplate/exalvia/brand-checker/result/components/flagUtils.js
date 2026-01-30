import ExalviaDatabase from "../../../database/ExalviaDatabase";

export const getAllFlags = (result) => {
  if (!result) return [];

  // Mapping category key to full name for display
  const categoryNames = {
    PI: "Informasi Produk",
    TA: "Target",
    HA: "Harga",
    CM: "Cara Menjual",
    RE: "Reflektif",
    IV: "Identitas Visual",
  };

  // Generate flags based on score thresholds
  const categoryFlags = Object.entries(result.categoryScores || {})
    .map(([category, score]) => {
      // Get the short key (PI, TA, etc.) - handle both short and full names
      const shortKey = Object.keys(categoryNames).find(
        (key) => key === category || categoryNames[key] === category
      );
      
      if (!shortKey) return null;

      // Determine flag level based on score
      if (score < 50) {
        // CRITICAL: Score below 50
        return ExalviaDatabase.getBrandCheckerFlag(`${shortKey}-LOW`);
      } else if (score < 70) {
        // WARNING: Score between 50-69
        return ExalviaDatabase.getBrandCheckerFlag(`${shortKey}-MED`);
      }
      // GOOD: Score >= 70, no flag needed
      return null;
    })
    .filter(Boolean);

  const combinedFlags = [...(result.redFlags || []), ...categoryFlags];

  // Menggunakan Set untuk menghapus duplikat pesan yang sama
  return Array.from(new Set(combinedFlags));
};
