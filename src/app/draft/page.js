import HeroBonus from "../bonus/HeroBonus";
import DraftLandingPagePreview from "./DraftLandingPagePreview";
import { notFound } from "next/navigation";

export default async function BonusPage() {
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }

  return (
    <>
      <HeroBonus>
        <div className=" text-center py-15">
          <h1 className="text-3xl font-bold text-amber-500 mb-4">Draft template!</h1>
          <p className="text-lg text-white opacity-75">Lorem ipsum dolorestamet.</p>
        </div>
      </HeroBonus>
      <DraftLandingPagePreview />
    </>
  );
}
