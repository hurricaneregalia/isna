// src/app/bonus/page.js
import { redirect } from "next/navigation";
import fs from "fs/promises";
import path from "path";
import LandingPage from "./LandingPage";

export default async function BonusPage() {
  // Baca data promo dari file JSON
  const getPromo = async () => {
    try {
      const filePath = path.join(process.cwd(), "src/app/api/datajs/promo/data.json");
      const file = await fs.readFile(filePath, "utf-8");
      const data = JSON.parse(file);
      return data?.[0] || null;
    } catch (error) {
      console.error("❌ Gagal membaca promo:", error.message);
      return null;
    }
  };

  const promo = await getPromo();

  if (!promo) {
    redirect("/redirected?reason=inactive");
  }

  if (!promo.isActive) {
    redirect("/redirected?reason=inactive");
  }

  if (new Date(promo.endDate) < new Date()) {
    redirect("/redirected?reason=expired");
  }

  return (
    <>
      <div className="flex items-center justify-center p-10">
        <div className="bg-white rounded-lg shadow-lg p-10 max-w-xl w-full">
          <h1 className="text-3xl font-bold text-amber-500 mb-4">🎉 Claim Bonus!</h1>
          <p className="text-lg text-gray-700 mb-6">Pilih salah satu landing page yang kamu sukai.</p>
          <p className="text-gray-500">
            Nama promo: <strong>{promo.name}</strong>.
          </p>
          <p className="text-gray-500">
            Deskripsi promo: <strong>{promo.description}</strong>.
          </p>
        </div>
      </div>
      <LandingPage />
    </>
  );
}
