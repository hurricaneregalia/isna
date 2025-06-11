// src/app/bonus/page.js
import { redirect } from "next/navigation";
import fs from "fs/promises";
import path from "path";
import LandingPage from "./LandingPage";
import HeroPackageSingle from "../services/package/[slug]/heroPackageSIngle";
import HeroBonus from "./HeroBonus";

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
      <HeroBonus>
        <div className=" text-center">
          <h1 className="text-3xl font-bold text-amber-500 mb-4">🎉 Claim Bonus!</h1>
          <p className="text-lg text-white opacity-75 mb-6">Pilih satu yang cocok dengan bisnis Anda.</p>
        </div>
      </HeroBonus>
      <LandingPage />
    </>
  );
}
