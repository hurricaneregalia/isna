import ExalviaDatabase from "../../../database/ExalviaDatabase";

export const getAllFlags = (result) => {
  if (!result) return [];

  const categoryToKey = {
    PI: "PI-LOW",
    TA: "TA-LOW",
    HA: "HA-LOW",
    CM: "CM-LOW",
    RE: "RE-LOW",
    IV: "IV-LOW",
  };

  const lowCategories = Object.entries(result.categoryScores || {})
    .filter(([_, score]) => score < 50)
    .map(([category, _]) => {
      const dbKey = categoryToKey[category];
      return dbKey ? ExalviaDatabase.getBrandCheckerFlag(dbKey) : null;
    })
    .filter(Boolean);

  const combinedFlags = [...(result.redFlags || []), ...lowCategories];

  // Menggunakan Set untuk menghapus duplikat pesan yang sama
  return Array.from(new Set(combinedFlags));
};
